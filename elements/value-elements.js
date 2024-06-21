

const errorLevels = Object.freeze({
    none: 0,
    info: 1,
    warn: 2,
    error: 3,
})

/**
 * @typedef {typeof errorLevels[keyof typeof errorLevels]} ErrorLevel
 */

/**
 * @typedef {object} SchemaError
 * @property {string} message
 * @property {ErrorLevel} level
 */

/**
 * @implements {YamlElement<string>}
 */
class Input {

    /**
     * @type {((val: string, errors: SchemaError[]) => void)[]}
     */
    validators

    /**
     * @param {string | undefined | null} def
     */
    constructor(def) {
        this.input = document.createElement("input")
        if (def != undefined) this.input.value = def
        this.validators = []
        this.addChangedListener(() => this.validate())
    }

    validate() {
        const value = this.input.value
        const errors = []
        this.validators.forEach(validator => validator(value, errors))
        errors.sort((a, b) => a.level - b.level)
        const maxLevel = errors[0]?.level ?? errorLevels.none
        this.setValidity(maxLevel)
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.input)
    }

    toYaml() {
        return this.input.value
    }

    getValue() {
        return this.input.value
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        // if (typeof val !== "string") {
            // incorrectTypeSetError(val)
            // return
        // }
        this.input.value = val.toString()
        this.validate()
    }

    focus() {
        this.input.focus()
        return true
    }

    /**
     * @param {ErrorLevel} errorLevel
     */
    setValidity(errorLevel) {
        const classList = this.input.classList
        classList.remove("warn")
        classList.remove("error")

        if (errorLevel == errorLevels.error) {
            classList.add("error")
            return
        }
        if (errorLevel == errorLevels.warn) {
            classList.add("warn")
            return
        }
       
    }
    
    /**
     * @param {(value: string) => void} listener
     */
    addChangedListener(listener) {
        this.input.addEventListener("input", (e) => {
            listener(this.input.value)
        })
    }

    /**
     * @param {(val: string, errors: SchemaError[]) => void} validator
     */
    addValidator(validator) {
        this.validators.push(validator)
    }

}
/**
 * @param {string | undefined} def
 */
function input(def) {
    return new Input(def)
}

const intRegex = /^[\+\-]?(([0-9]+)|(0b[01]+)|(0o[0-7]+)|(0x[0-9a-fA-F]+))$/
/**
 * @param {number} def
 */
function intInput(def) {
    const elem = input(def.toString())
    elem.addValidator((val, errors) => {
        if (!intRegex.test(val)) {
            errors.push({
                level: errorLevels.error,
                message: "Invalid integer"
            })
        }
    })
    elem.validate()
    return elem
}

const floatRegex = /^([\+\-]?((\d+(\.\d+)?)|(\.inf)))$/
/**
 * @param {number | string} def
 */
function numInput(def) {
    const elem = input(def.toString())
    elem.addValidator((val, errors) => {
        if (!floatRegex.test(val)) {
            errors.push({
                level: errorLevels.error,
                message: "Invalid number"
            })
        }
    })
    elem.validate()
    return elem
}

class EnumInput extends Input {

    /**
     * @param {string[]} enumList 
     * @param {string | undefined | null} def 
     */
    constructor(enumList, def=undefined) {
        super(def)
        this.enumList = enumList
		this.enumList.sort()
        
        this.autocompleteMenu = document.createElement("menu")
        this.autocompleteMenu.classList.add("autocomplete-menu")
        this.autocompleteMenu.classList.add("active")

        this.input.addEventListener("input", () => {
            this.createValueListMenu()
        })
        
        this.createValueListMenu()
    }

    createValueListMenu() {
        this.autocompleteMenu.replaceChildren()
        const sorted = this.sortValueList()
        sorted.forEach(value => {
            const option = this.createMenuChoice(value)
            this.autocompleteMenu.appendChild(option)
        })
    }

    /**
     * @param {string} value
     * @returns {HTMLLIElement}
     */
    createMenuChoice(value) {
        const button = document.createElement("button")
        button.classList.add("autocomplete-choice")
        button.innerText = value
        button.addEventListener("click", () => {
            this.input.value = value
            this.createValueListMenu()
        })
        const li = document.createElement("li")
        li.appendChild(button)
        return li
    }

    sortValueList() {
        const input = this.getValue().trim()
        if (input === "" || this.enumList.includes(input)) {
            return this.enumList
        }
        return this.enumList
            .map(value => ({ value, score: this.calculateScore(input, value) }))
			.filter(x => x.score !== 0)
            .sort((a, b) => b.score - a.score)
            .map(x => x.value)
    }

    /**
     * @param {string} input
     * @param {string} value
     * @returns {number}
     */
	calculateScore(input, value) {
		let index = 0
		let score = 0
		for (let i=0; i<value.length; i++) {
			const isSameChar = value.charAt(i).toLowerCase() === input.charAt(index).toLowerCase()
			if (isSameChar) {
				index++
				score += 1000000 - i
				if (index > input.length-1) {
					break
				}
			}
		}
		return score
	}
	
	/**
     * @param {unknown} val
     */
    setValue(val) {
        super.setValue(val)
		this.createValueListMenu()
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
		const container = document.createElement('div')
		container.classList.add("enum-value-container")

        super.toHTML(container)
        container.appendChild(this.autocompleteMenu)
		
		parent.appendChild(container)
    }

}

/**
 * @implements {YamlElement<{ min: number, max: number }>}
 */
class RangeInput {

    constructor() {
        this.min = numInput("-.inf")
        this.dash = constText(" - ")
        this.max = numInput(".inf")
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        this.min.toHTML(parent)
        this.dash.toHTML(parent)
        this.max.toHTML(parent)
    }

    toYaml() {
        return this.min.toYaml() + " - " + this.max.toYaml()
    }

    getValue() {
        return {
            min: Number.parseFloat(this.min.getValue()), 
            max: Number.parseFloat(this.max.getValue())
        }
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == undefined) return
        if (Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
        
    }

    focus() {
        return this.min.focus()
    }
}

/**
 * @implements {YamlElement<string>}
 */
class ConstText {
    /**
     * @param {string} text
     */
    constructor(text) {
        this.text = text
        this.textElement = document.createTextNode(text)
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.textElement)
    }

    getValue() {
        return this.text
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        incorrectTypeSetError(val)
    }

    toYaml() {
        return this.text
    }

    focus() {
        return false
    }
}
/**
 * @param {string} text
 */
function constText(text) {
    return new ConstText(text)
}

/**
 * @deprecated
 */
function incomplete() {
    return constText("# not done yet")
}
