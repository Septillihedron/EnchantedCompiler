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
	 * @param {Entry[]} values
	 */
	constructor(values) {
		super()
		/** @type {Entry[]} */
		this.values = []
		this.container = document.createElement("ul")
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
		this.container.replaceChildren()
	}
}
/**
 * @param {Entry[]} values
 */

export function section(values) {
	return new Section(values)
}

