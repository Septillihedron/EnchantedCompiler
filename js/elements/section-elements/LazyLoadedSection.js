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
		this.generateButton = this.makeGenerateButton()
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
		this.generateButton.innerText = "x"
	}

	removeEntries() {
		this.clearChildren()
		this.generateButton.innerText = "+"
	}

	load() {
		if (!this.generated) {
			this.generateEntries()
		}
		this.generateButton.classList.add("hidden")
		this.children.shift()
		// compensates for the shift
		this.focusIndex--
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		if (this.generateButton) parent.appendChild(this.generateButton)
		super.toHTML(parent)
	}

	getValue() {
		if (!this.generated) return null
		return super.getValue()
	}

	/**
	 * @param {unknown} value
	 */
	setValue(value) {
		if (value == null) return
		if (!Array.isArray(value)) return
		if (!this.generated) this.generateButton.click()
		super.setValue(value)
	}

	clearChildren() {
		super.clearChildren()
		this.children.unshift(new FocusableWrapper(this.generateButton))
	}

}

/**
 * @param {() => ((parent: YamlElement<any>) => Entry<any, any>)[]} generator
 */
export function lazyLoadedSection(generator) {
	return parent => new LazyLoadedSection(parent, generator)
}

/**
 * @template {YamlElement} T
 * @param {(parent: YamlElement) => T} maybeLazyLoadedSecction
 * @returns {(parent: YamlElement) => T}
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
