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
		this.key.toHTML(this.container)
		this.colon.toHTML(this.container)
		this.value.toHTML(this.container)
	}

	/**
	 * @param {HTMLElement} button
	 */
	addRemoveButton(button) {
		this.colon.textElement.replaceWith(this.colon.textElement, button)
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

