import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement } from "../yaml-element.js"

/**
 * @implements {YamlElement<string>}
 */
export class ConstText extends YamlElement {
	/**
	 * @param {string} text
	 */
	constructor(parent, text) {
		super(parent)
		this.text = text
		this.textElement = document.createTextNode(text)
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.textElement)
	}

	getValue() {
		return this.text
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		incorrectTypeSetError(val)
	}

	toYaml() {
		return this.text
	}
}

/**
 * @param {string} text
 */
export function constText(text) {
	return parent => new ConstText(parent, text)
}

/**
 * @deprecated
 */
export function incomplete() {
	return constText("# not done yet")
}

