import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { FocusableWrapper } from "../yaml-element.js"
import { Entry } from "./Entry.js"
import { Section } from "./Section.js"


export class LazyLoadedSection extends Section {
    

    /**
     * @param {() => Entry[]} generator
     */
    constructor(generator) {
        super([])
        this.generator = generator
        this.button = this.makeGenerateButton()
    }

    makeGenerateButton() {
        const button = document.createElement("button")
        button.innerText = "+"

        const generateEntries = () => {
            this.clearChildren()
            this.generator().forEach(this.addChild.bind(this))
            this.focus()
            this.focusNext()
            button.innerText = "x"
        }
        const removeEntries = () => {
            this.clearChildren()
            button.innerText = "+"
        }

        const buttonFunctions = [
            generateEntries.bind(this),
            removeEntries.bind(this),
        ]
        let currentFunctionIndex = 0
        button.addEventListener("click", () => {
            buttonFunctions[currentFunctionIndex]()
            currentFunctionIndex = 1 - currentFunctionIndex
        })

        this.children.unshift(new FocusableWrapper(button))

        return button
    }

    /**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		if (this.button) parent.appendChild(this.button)
		super.toHTML(parent)
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
                if (!entry) {
                    this.button.click()
                    entry = this.findEntryByKey(key)
                }
                entry?.value.setValue(val)
            })
        this.unfocus()
    }

}
