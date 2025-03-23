import { FocusableWrapper } from "../yaml-element.js"
import { Entry } from "./Entry.js"
import { Section } from "./Section.js"


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
