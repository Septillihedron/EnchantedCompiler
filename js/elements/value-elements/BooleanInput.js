import { createElement } from "../createHtmlElement.js"
import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement } from "../yaml-element.js"

/**
 * @implements {YamlElement<boolean>}
 */
export class BooleanInput extends YamlElement {

	/**
	 * @param {boolean} def
	 */
	constructor(parent, def) {
		super(parent)
		this.input = createElement(this, "input")
		this.input.type = "checkbox"
		this.input.defaultChecked = def
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.input)
	}

	toYaml() {
		return this.input.checked ? "true" : "false"
	}

	getValue() {
		return this.input.checked
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		if (val == null) return
		if (typeof val !== "boolean") {
			incorrectTypeSetError(val)
			return
		}
		this.input.checked = val
	}

	focus() {
		this.input.focus()
		return true
	}

}

/**
 * @param {boolean} def
 */
export function booleanInput(def) {
	return parent => new BooleanInput(parent, def)
}
