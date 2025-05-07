import { createElement } from "../createHtmlElement.js"
import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { ConstText, constText } from "../value-elements/ConstText.js"
import { YamlElement } from "../yaml-element.js"

/**
 * @implements {YamlElement<[unknown, unknown]>}
 * @template {YamlElement<unknown>} K
 * @template {YamlElement<unknown>} V
 */
export class Entry extends YamlElement {

	/**
	 * @type {K}
	 */
	key
	/**
	 * @type {V}
	 */
	value

	/**
	 * @param {YamlElement} parent 
	 * @param {(parent: YamlElement) => K} key
	 * @param {(parent: YamlElement) => V} value
	 * @param {string | null} [description=null]
	 */
	constructor(parent, key, value, description=null) {
		super(parent)

		this.key = key(this)
		this.colon = constText(": ")(this)
		this.value = value(this)

		this.children = [this.key, this.value]

		this.container = createElement(this, "li")
		this.container.classList.add("entry-container")
		if (description !== null) this.container.title = description
		this.container.appendChild(this.key.toHTML())
		this.container.appendChild(this.colon.toHTML())
		this.container.appendChild(this.value.toHTML())
	}

	/**
	 * @param {HTMLElement} button
	 */
	addRemoveButton(button) {
		button.classList.add("entry-remove-button")
		if (this.value.isInline()) {
			this.container.appendChild(button)
		} else {
			this.colon.textElement.replaceWith(this.colon.textElement, button)
		}
	}

	toHTML() {
		return this.container
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

	isInline() { return this.key.isInline() && this.value.isInline() }

}

/**
 * @template {YamlElement<unknown>} K
 * @template {YamlElement<unknown>} V
 * @param {(parent: YamlElement) => K} key
 * @param {(parent: YamlElement) => V} value
 * @param {string | null} [description=null] 
 * @returns {(parent: YamlElement) => Entry<K, V>}
 */
export function entry(key, value, description=null) {
	return parent => new Entry(parent, key, value, description)
}

/**
 * @template {YamlElement<unknown>} V
 * @param {string} key
 * @param {(parent: YamlElement) => V} value
 * @param {string | null} [description=null] 
 * @returns {(parent: YamlElement) => Entry<ConstText, V>}
 */
export function stringKeyEntry(key, value, description=null) {
	return entry(constText(key), value, description)
}

