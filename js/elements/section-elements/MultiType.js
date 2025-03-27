import { compileProperty } from "../../compiler.js"
import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement } from "../yaml-element.js"

/**
 * @typedef {import("../../schema.js").PropertyTypes} PropertyTypes
 */
/**
 * @typedef {import("../../schema.js").NakedProperty} NakedProperty
 */
/**
 * @implements {YamlElement<[string, unknown]>}
 */

export class MultiType extends YamlElement {

	/**
	 * @type {{name: PropertyTypes, type: YamlElement<unknown>}[]}
	 */
	possibleTypes
	/**
	 * @type {{name: PropertyTypes, type: YamlElement<unknown>}}
	 */
	selectedType

	constructor(multiType) {
		super()
		const { type: types, ...typeData } = multiType
		this.possibleTypes = types
			.map(type => {
				const compiled = compileProperty({ ...typeData, type })
				return { name: type, type: compiled }
			})
		this.possibleTypes.forEach(child => child.type.parent = this)
		this.container = document.createElement("div")
		this.setType(this.possibleTypes[0].name)

		this.changeTypeButton = document.createElement("button")
		this.changeTypeButton.innerText = "*"
		this.changeTypeButton.addEventListener("click", (e) => {
			// temporary
			const currIndex = this.possibleTypes.findIndex(x => x === this.selectedType)
			const nextIndex = (currIndex + 1) % this.possibleTypes.length
			this.setType(this.possibleTypes[nextIndex].name)
		})
		this.children = [this.changeTypeButton, this.selectedType.type]
	}

	setType(typeName) {
		const type = this.possibleTypes.find(type => type.name === typeName)
		if (!type) {
			console.trace("Invalid type:", typeName)
			return
		}
		this.selectedType = type
		this.container.replaceChildren()
		this.selectedType.type.toHTML(this.container)
		this.children[1] = this.selectedType.type
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.changeTypeButton)
		parent.appendChild(this.container)
	}

	toYaml() {
		return this.selectedType.type.toYaml()
	}

	getValue() {
		return /** @type {[PropertyTypes, unknown]} */ ([this.selectedType.name, this.selectedType.type.getValue()])
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
		this.setType(val[0])
		this.selectedType.type.setValue(val[1])
	}
}
