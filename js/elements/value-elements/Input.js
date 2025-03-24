import { YamlElement } from "../yaml-element.js"
import { errorLevels } from "../value-elements.js"


export const intRegex = /^[\+\-]?(([0-9]+)|(0b[01]+)|(0o[0-7]+)|(0x[0-9a-fA-F]+))$/
export const floatRegex = /^([\+\-]?((\d+(\.\d+)?)|(\.inf)))$/

/**
 * @implements {YamlElement<string>}
 */

export class Input extends YamlElement {

    /**
     * @type {((val: string, errors: import("../value-elements.js").SchemaError[]) => void)[]}
     */
    validators

    /**
     * @param {string | undefined | null} def
     */
    constructor(def) {
        super()
        this.input = document.createElement("span")
        this.input.contentEditable = 'true'
        if (def != undefined) this.input.innerText = def
        this.input.addEventListener("focus", () => {
            this.parent?.setFocus(this)
            this.focus()
        })
        this.validators = []
        this.addChangedListener(() => this.validate())
    }

    validate() {
        const value = this.input.innerText
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
        return this.input.innerText
    }

    getValue() {
        return this.input.innerText
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
        this.input.innerText = val.toString()
        this.validate()
    }

    focus() {
        this.input.focus()
        return true
    }

    /**
     * @param {import("../value-elements.js").ErrorLevel} errorLevel
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
            listener(this.input.innerText)
        })
    }

    /**
     * @param {(val: string, errors: import("../value-elements.js").SchemaError[]) => void} validator
     */
    addValidator(validator) {
        this.validators.push(validator)
    }

}
/**
 * @param {string | undefined} def
 */

export function input(def) {
    return new Input(def)
}
/**
 * @param {number} def
 */
export function intInput(def) {
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
/**
 * @param {number | string} def
 */
export function numInput(def) {
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

