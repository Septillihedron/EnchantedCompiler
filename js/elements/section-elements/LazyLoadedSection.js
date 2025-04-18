import { createElement } from "../createHtmlElement.js"
import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { FocusableWrapper, YamlElement } from "../yaml-element.js"
import { Entry } from "./Entry.js"
import { Section } from "./Section.js"


export class LazyLoadedSection extends Section {
	

	/**
	 * @param {YamlElement} parent
	 * @param {() => ((parent: YamlElement) => Entry)[]} generator
	 */
	constructor(parent, generator) {
		super(parent, [])
		this.generator = generator
		this.generated = false
		this.button = this.makeGenerateButton()
	}

	makeGenerateButton() {
		const button = createElement(this, "button")
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
		// compensates for the shift
		this.focusIndex--
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

/**
 * @param {() => ((parent: YamlElement<any>) => Entry<any, any>)[]} generator
 */
export function lazyLoadedSection(generator) {
	return parent => new LazyLoadedSection(parent, generator)
}

/**
 * @param {(parent: YamlElement) => YamlElement<unknown>} maybeLazyLoadedSecction
 */
export function loadIfLazyLoadedSection(maybeLazyLoadedSecction) {
	return parent => {
		const value = maybeLazyLoadedSecction(parent)
		if (value instanceof LazyLoadedSection) {
			value.load()
		}
		return value
	}
}
