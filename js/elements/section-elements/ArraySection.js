import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement, FocusableWrapper } from "../yaml-element.js"
import { indent } from "./indent.js"

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
        for (let i = this.values.length; i < val.length; i++) {
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
        this.focusIndex = this.children.length - 1
    }

    clearChildren() {
        this.values = []
        this.children = [new FocusableWrapper(this.addButton)]
        this.container.replaceChildren()
    }
}
