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
	 */
	constructor(key, value) {
		super()
		this.children = [key, value]
		key.parent = this
		value.parent = this

		this.key = key
		this.colon = constText(": ")
		this.value = value
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		this.key.toHTML(parent)
		this.colon.toHTML(parent)
		this.value.toHTML(parent)
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
 */

export function entry(key, value) {
	if (typeof key === "string") key = constText(key)
	return new Entry(key, value)
}

