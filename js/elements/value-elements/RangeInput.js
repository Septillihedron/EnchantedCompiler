import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement } from "../yaml-element.js"
import { numInput } from "./Input.js"
import { constText } from "./ConstText.js"

/**
 * @implements {YamlElement<{ min: number, max: number }>}
 */
export class RangeInput extends YamlElement {

	/**
	 * @param {YamlElement<any>} parent
	 */
	constructor(parent) {
		super(parent)
		this.min = numInput("-.inf")(this)
		this.dash = constText(" - ")(this)
		this.max = numInput(".inf")(this)

		this.children = [this.min, this.max]
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		this.min.toHTML(parent)
		this.dash.toHTML(parent)
		this.max.toHTML(parent)
	}

	toYaml() {
		return this.min.toYaml() + " - " + this.max.toYaml()
	}

	getValue() {
		return {
			min: Number.parseFloat(this.min.getValue()),
			max: Number.parseFloat(this.max.getValue())
		}
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		if (val == undefined) return
		if (Array.isArray(val)) {
			incorrectTypeSetError(val)
			return
		}
	}
}

export function rangeInput() {
	return parent => new RangeInput(parent)
}
