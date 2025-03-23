import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement, FocusableWrapper } from "../yaml-element.js"
import { indent } from "./indent.js"
import { ArraySection } from "./ArraySection.js"
import { Entry } from "./Entry.js"

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
            currentFunctionIndex = 1 - currentFunctionIndex
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
        const lastElement = this.values[this.values.length - 1]
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
        this.focusIndex = this.children.length - 1
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

