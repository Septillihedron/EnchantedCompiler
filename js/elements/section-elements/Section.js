import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement, FocusableWrapper } from "../yaml-element.js"
import { indent } from "./indent.js"
import { Entry } from "./Entry.js"
import { createElement } from "../createHtmlElement.js"

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

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.container)
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

	findEntryByKey(key) {
		return this.values.find(entry => entry.key.getValue() === key)
	}

	/**
	 * @param {(parent: YamlElement) => Entry} element
	 */
	addChild(element) {
		const constructedElement = element(this)
		this.values.push(constructedElement)
		this.children.push(constructedElement)
		constructedElement.toHTML(this.container)
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

