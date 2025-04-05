import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { constText } from "../value-elements/ConstText.js"
import { YamlElement } from "../yaml-element.js"

/**
 * @implements {YamlElement<[unknown, unknown]>}
 */

export class Entry extends YamlElement {
	/**
	 * @param {YamlElement<unknown>} key
	 * @param {YamlElement<unknown>} value
	 * @param {string | null} [description=null]
	 */
	constructor(key, value, description=null) {
		super()
		this.children = [key, value]
		key.parent = this
		value.parent = this

		this.key = key
		this.value = value

		this.container = document.createElement("li")
		this.container.classList.add("entry-container")
		if (description !== null) this.container.title = description
		this.key.toHTML(this.container)
		constText(": ").toHTML(this.container)
		this.value.toHTML(this.container)
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.container)
	}

	toYaml() {
		return this.key.toYaml() + ": " + this.value.toYaml()
	}

	getValue() {
		return /** @type {[unknown, unknown]} */ ([this.key.getValue(), this.value.getValue()])
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
		this.key.setValue(val[0])
		this.value.setValue(val[1])
	}
}
/**
 * @param {YamlElement<unknown> | string} key
 * @param {YamlElement<unknown>} value
 * @param {string | null} [description=null] 
 */
export function entry(key, value, description=null) {
	if (typeof key === "string") key = constText(key)
	return new Entry(key, value, description)
}

