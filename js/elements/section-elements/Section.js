import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement, FocusableWrapper } from "../yaml-element.js"
import { indent } from "./indent.js"
import { Entry } from "./Entry.js"
import { createContainerElement, createElement } from "../createHtmlElement.js"

/**
 * @implements {YamlElement<[string, unknown][]>}
 */
export class Section extends YamlElement {	
	/**
	 * @param {YamlElement} parent 
	 * @param {((parent: YamlElement) => Entry)[]} values
	 */
	constructor(parent, values) {
		super(parent)
		/** @type {Entry[]} */
		this.values = []
		this.container = createElement(this, "ul")
		this.container.classList.add("section")
		values.forEach(this.addChild.bind(this))
	}

	/** @returns {Node} */
	toHTML() {
		return this.container
	}

	toYaml() {
		return this.values
			.map(entry => "\r\n" + indent(entry.toYaml()))
			.join("")
	}

	getValue() {
		return /** @type {[string, unknown][]} */ (this.values.map(entry => entry.getValue()))
	}

	/**
	 * @param {unknown} value
	 */
	setValue(value) {
		if (value == null) return
		if (!Array.isArray(value)) return
		value.forEach(([key, val]) => {
			let entry = this.findEntryByKey(key)
			entry?.value.setValue(val)
		})
	}

	isInline() {
		return false
	}

	findEntryByKey(key) {
		return this.values.find(entry => entry.key.getValue() === key)
	}

	/**
	 * @param {Entry} child
	 */
	removeChild(child) {
		const elementIndex = this.children.findIndex(entry => child == entry)
		this.children.splice(elementIndex, 1)
		this.values.splice(elementIndex-1, 1)
		this.container.removeChild(child.container)
		if (this.focusIndex >= elementIndex) {
			this.focusIndex--
		}
		if (this.focusIndex != -1) this.children[this.focusIndex].focus()
	}

	/**
	 * @param {(parent: YamlElement) => Entry} element
	 * @param {number} [index=null] 
	 */
	addChild(element, index=null) {
		if (index == null) index = this.values.length
		
		const constructedElement = element(this)

		const elementHTML = constructedElement.toHTML()

		if (index == this.values.length) {
			this.container.appendChild(elementHTML)
		} else {
			this.container.children[index].insertAdjacentElement("beforebegin", elementHTML)
		}
		this.values.splice(index, 0, constructedElement)
		this.children.splice(index+1, 0, constructedElement)

		return constructedElement
	}

	clearChildren() {
		this.values = []
		this.children = []
		this.container.replaceChildren()
	}
}

/**
 * @param {((parent: YamlElement) => Entry)[]} values
 */
export function section(values) {
	return parent => new Section(parent, values)
}

