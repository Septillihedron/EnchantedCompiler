
import { compileProperty } from "../compiler.js"
import { docs } from "../schema.js"
import { incorrectTypeSetError } from "./incorrect-type-set-error.js"
import { EnumInput, constText } from "./value-elements.js"
import { FocusableWrapper, YamlElement } from "./yaml-element.js"

/**
 * @param {string} s
 * @returns {string}
 */
function indent(s) {
    return s
        .split("\r\n")
        .map(l => "  " + l)
        .join("\r\n")
}

/**
 * @implements {YamlElement<object>}
 */
export class Section extends YamlElement {
    /**
     * @param {Entry[] | (() => Entry[])} values
     */
    constructor(values) {
        super()
        /** @type {Entry[]} */
        this.values = []
        this.container = document.createElement("div")
        this.container.classList.add("section")
        if (Array.isArray(values)) {
            values.forEach(this.addChild.bind(this))
            return
        }
        this.unfocus()

        this.generator = values
        this.makeGenerateButton()
    }

    makeGenerateButton() {
        this.button = document.createElement("button")
        this.button.innerText = "+"

        const generateEntries = () => {
            if (!this.generator || !this.button) {
                console.trace("generator is undefined")
                return
            }
            this.clearChildren()
            this.generator().forEach(this.addChild.bind(this))
            this.focus()
            this.focusNext()
            this.button.innerText = "x"
        }
        const removeEntries = () => {
            this.clearChildren()
            if (this.button) this.button.innerText = "+"
        }

        const buttonFunctions = [
            generateEntries.bind(this), 
            removeEntries.bind(this),
        ]
        let currentFunctionIndex = 0
        this.button.addEventListener("click", () => {
            buttonFunctions[currentFunctionIndex]()
            currentFunctionIndex = 1-currentFunctionIndex
        })

        this.children.unshift(new FocusableWrapper(this.button))
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        if (this.button) parent.appendChild(this.button)
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.values
            .map(entry => "\r\n" + indent(entry.toYaml()))
            .join("")
    }

    getValue() {
        return Object.fromEntries(this.values.map(entry => entry.getValue()))
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (typeof val !== "object") {
            incorrectTypeSetError(val)
            return
        }
        Object.entries(val)
            .forEach(([key, val]) => {
                let entry = this.findEntryByKey(key)
                if (!entry && this.button) {
					this.button.click()
					entry = this.findEntryByKey(key)
				}
                entry?.value.setValue(val)
            })
        this.unfocus()
    }
	
	findEntryByKey(key) {
		return this.values.find(entry => entry.key.getValue() === key)
	}

    /**
     * @param {Entry} element
     */
    addChild(element) {
        const lastElement = this.values[this.values.length-1]
        if (lastElement != undefined) {
            if (!(lastElement.value instanceof Section || lastElement.value instanceof ArraySection)) {
                this.container.appendChild(document.createElement("br"))
            }
        }
        element.parent = this
        this.values.push(element)
        this.children.push(element)
        element.toHTML(this.container)
        
        this.children[this.focusIndex]?.unfocus()
        element.focus()
        this.focusIndex = this.children.length-1
    }

    clearChildren() {
        this.values = []
        this.children = []
        if (this.button !== undefined) {
            this.children.unshift(new FocusableWrapper(this.button))
        }
        this.container.replaceChildren()
    }
}
/**
 * @param {Entry[]} values
 */
export function section(values) {
    return new Section(values)
}

/**
 * @implements {YamlElement<unknown[]>}
 */
export class ArraySection extends YamlElement {
    /**
     * @param {(() => YamlElement<unknown>)} addfn
     */
    constructor(addfn) {
        super()
        /** @type {YamlElement<unknown>[]} */
        this.values = []
        this.container = document.createElement("ul")
        this.container.classList.add("array")

        this.addButton = document.createElement("button")
        this.addButton.innerText = "+"
        this.addButton.onclick = () => {
            const element = addfn()
            this.addChild(element)
        }

        this.children.unshift(new FocusableWrapper(this.addButton))
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.addButton)
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.values
            .map(item => "\r\n- " + indent(item.toYaml()).trimStart())
            .join("")
    }

    getValue() {
        return this.values.map(item => item.getValue())
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (!Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
        for (let i=this.values.length; i<val.length; i++) {
            this.addButton.click()
        }
        val.forEach((val, index) => {
            this.values[index].setValue(val)
        })
        this.unfocus()
    }

    /**
     * @param {YamlElement<unknown>} element
     */
    addChild(element) {
        element.parent = this
        this.values.push(element)
        this.children.push(element)
        const li = document.createElement("li")
        this.container.appendChild(li)
        element.toHTML(li)

        this.children[this.focusIndex]?.unfocus()
        element.focus()
        this.focusIndex = this.children.length-1
    }

    clearChildren() {
        this.values = []
        this.children = [new FocusableWrapper(this.addButton)]
        this.container.replaceChildren()
    }
}

export class PropertiesMap extends Section {
    /**
     * @param {(name: string | number) => Entry} addfn 
     */
    constructor(addfn) {
        super([])
        this.addfn = addfn
        this.addButton = document.createElement("button")
        this.addButton.innerText = "+"
        this.addButton.onclick = () => {
            const element = addfn(this.values.length)
            this.addChild(element)
        }
        this.children.unshift(new FocusableWrapper(this.addButton))
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (!val) return
        if (typeof val !== "object") return

        Object.entries(val)
            .forEach(([key, val]) => {
                let entry = this.values.find(entry => entry.key.getValue() === key)
                if (!entry) {
                    entry = this.addfn(key)
                    this.addChild(entry)
                }
                entry?.setValue([key, val])
            })
        this.unfocus()
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.addButton)
        super.toHTML(parent)
    }

    clearChildren() {
        super.clearChildren()
        this.children.unshift(new FocusableWrapper(this.addButton))
    }
}

export class DocItemSection extends Section {

    /**
     * @param {keyof import("../schema").Schema} category 
     * @param {Entry[]} [extraEntries=[]] 
     */
    constructor(category, extraEntries=[]) {
        super([])
        this.extraEntries = extraEntries
        this.category = category
        this.typeKey = (category === "skills")? "skill" : "type";
        const typeInput = EnumInput.createDescripted(this.createDescriptedTypes(docs[category]))
        this.typeEntry = entry(this.typeKey, typeInput)
        this.addChild(this.typeEntry)
        this.unfocus()

        typeInput.addChangedListener(this.updateProperties.bind(this))
    }

    /**
     * @returns {{name: string, description: string}[]}
     */
    createDescriptedTypes(category) {
        return Object.entries(category)
            .map(([name, type]) => ({
                name, 
                description: type.description
            }))
    }

    updateProperties(newValue) {
        /** @type {import("../schema").DocItem | undefined} */
        const newDocItem = docs[this.category][newValue]
        if (newDocItem === undefined) return

        this.compileDocItem(newDocItem)
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val && typeof val === "object") {
            const type = val[this.typeKey]
            if (type) this.updateProperties(type)
        }
        super.setValue(val)
    }


    /**
     * @private
     * @param {import("../schema").DocItem} docItem
    */
    compileDocItem(docItem) {
        this.clearChildren()
        this.addChild(this.typeEntry)
        const modes = docItem.supportedModes
        if (modes != undefined) {
            const defaultMode = this.getDefaultMode(modes, docItem.requireMode)
            this.addChild(entry("mode", EnumInput.create(modes, defaultMode)))
        }
        if (docItem.properties !== undefined) {
            Object.entries(docItem.properties)
                .forEach(([name, property]) => {
                    this.addChild(entry(name, compileProperty(property)))
                })
        }
        this.extraEntries.forEach(entry => this.addChild(entry))
        this.focus()
    }

    /**
     * @private
     * @param {import("../schema").Mode[]} modes
     * @param {boolean} requireMode
     */
    getDefaultMode(modes, requireMode) {
        if (requireMode && modes.length >= 2) return modes[1]
        else return "ALL"
    }

}

/**
 * @implements {YamlElement<[unknown, unknown]>}
 */
export class Entry extends YamlElement {
    /**
     * @param {YamlElement<unknown>} key
     * @param {YamlElement<unknown>} value 
     */
    constructor(key, value) {
        super()
        this.children = [key, value]
        key.parent = this
        value.parent = this

        this.key = key
        this.colon = constText(": ")
        this.value = value
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        this.key.toHTML(parent)
        this.colon.toHTML(parent)
        this.value.toHTML(parent)
    }

    toYaml() {
        return this.key.toYaml() + ": " + this.value.toYaml()
    }

    getValue() {
        return /** @type {[unknown, unknown]} */ ([this.key.getValue(), this.value.getValue()])
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (!Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
        this.key.setValue(val[0])
        this.value.setValue(val[1])
    }
}
/**
 * @param {YamlElement<unknown> | string} key
 * @param {YamlElement<unknown>} value
 */
export function entry(key, value) {
    if (typeof key === "string") key = constText(key)
    return new Entry(key, value)
}

/**
 * @typedef {import("../schema").PropertyTypes} PropertyTypes
 */
/**
 * @typedef {import("../schema").NakedProperty} NakedProperty
 */

/**
 * @implements {YamlElement<[string, unknown]>}
 */
export class MultiType extends YamlElement {

    /**
     * @type {{name: PropertyTypes, type: YamlElement<unknown>}[]}
     */
    possibleTypes
    /**
     * @type {{name: PropertyTypes, type: YamlElement<unknown>}}
     */
    selectedType

    constructor(multiType) {
        super()
        const {type: types, ...typeData} = multiType
        this.possibleTypes = types
            .map(type => {
                const compiled = compileProperty({...typeData, type})
                return {name: type, type: compiled}
            })
        this.possibleTypes.forEach(child => child.type.parent = this)
        this.container = document.createElement("div")
        this.setType(this.possibleTypes[0].name)

        this.changeTypeButton = document.createElement("button")
        this.changeTypeButton.innerText = "*"
        this.changeTypeButton.addEventListener("click", (e) => {
            // temporary
            const currIndex = this.possibleTypes.findIndex(x => x === this.selectedType)
            const nextIndex = (currIndex + 1) % this.possibleTypes.length
            this.setType(this.possibleTypes[nextIndex].name)
        })
        this.children = [this.changeTypeButton, this.selectedType.type]
    }

    setType(typeName) {
        const type = this.possibleTypes.find(type => type.name === typeName)
        if (!type) {
            console.trace("Invalid type:", typeName)
            return
        }
        this.selectedType = type
        this.container.replaceChildren()
        this.selectedType.type.toHTML(this.container)
        this.children[1] = this.selectedType.type
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.changeTypeButton)
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.selectedType.type.toYaml()
    }

    getValue() {
        return /** @type {[PropertyTypes, unknown]} */ ([this.selectedType.name, this.selectedType.type.getValue()])
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (!Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
        this.setType(val[0])
        this.selectedType.type.setValue(val[1])
    }
}
