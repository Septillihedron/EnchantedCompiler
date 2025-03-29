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
		this.generated = false
		this.button = this.makeGenerateButton()
	}

	makeGenerateButton() {
		const button = document.createElement("button")
		button.innerText = "+"

		button.addEventListener("click", () => {
			if (!this.generated) this.generateEntries()
			else this.removeEntries()
			this.generated = !this.generated
		})

		this.children.unshift(new FocusableWrapper(button))

		return button
	}

	generateEntries() {
		this.clearChildren()
		this.generator().forEach(this.addChild.bind(this))
		this.focus()
		this.focusNext()
		this.button.innerText = "x"
	}

	removeEntries() {
		this.clearChildren()
		this.button.innerText = "+"
	}

	load() {
		if (!this.generated) {
			this.generateEntries()
		}
		this.button.classList.add("hidden")
		this.children.shift()
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
