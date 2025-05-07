import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement } from "../yaml-element.js"
import { numInput } from "./Input.js"
import { constText } from "./ConstText.js"
import { createContainerElement, createElement } from "../createHtmlElement.js"

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

	toHTML() {
		const container = createContainerElement(this)
		container.appendChild(this.min.toHTML())
		container.appendChild(this.dash.toHTML())
		container.appendChild(this.max.toHTML())
		return container
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

	isInline() { return true }
}

export function rangeInput() {
	return parent => new RangeInput(parent)
}
