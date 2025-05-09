import { compileProperty } from "../../compiler.js"
import { addUndo, UndoEvent } from "../../undo.js"
import { createElement } from "../createHtmlElement.js"
import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { FocusableWrapper, YamlElement } from "../yaml-element.js"

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

	/**
	 * @param {YamlElement} parent 
	 */
	constructor(parent, multiType) {
		super(parent)
		const { type: types, ...typeData } = multiType
		this.possibleTypes = types
			.map(type => {
				const compiled = compileProperty({ ...typeData, type })(this)
				return { name: type, type: compiled }
			})
		this.container = createElement(this, "div")
		this.setType(this.possibleTypes[0].name)

		this.changeTypeButton = createElement(this, "button")
		this.changeTypeButton.innerText = "*"
		this.changeTypeButton.addEventListener("click", (e) => {
			// temporary
			const currIndex = this.possibleTypes.findIndex(x => x === this.selectedType)
			const nextIndex = (currIndex + 1) % this.possibleTypes.length
			const nextType = this.possibleTypes[nextIndex].name
			addUndo(new MultiType_ChangeTypeUndoEvent(this, this.selectedType.name, nextType))
			this.setType(nextType)
		})
		this.children = [new FocusableWrapper(this.changeTypeButton), this.selectedType.type]
	}

	/**
	 * @param {string} typeName
	 */
	setType(typeName) {
		const type = this.possibleTypes.find(type => type.name === typeName)
		if (!type) {
			console.trace("Invalid type:", typeName)
			return
		}
		this.selectedType = type
		this.container.replaceChildren(this.selectedType.type.toHTML())
		this.children[1] = this.selectedType.type
	}

	toHTML() {
		const container = createElement(this, "div")
		container.classList.add("multitype-container")
		container.appendChild(this.changeTypeButton)
		container.appendChild(this.container)
		return container
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

	isInline() {
		return this.possibleTypes.every(type => type.type.isInline())
	}
}

export class MultiType_ChangeTypeUndoEvent extends UndoEvent {

	/**
	 * @param {MultiType} emitter
	 * @param {string} from
	 * @param {string} to
	 */
	constructor(emitter, from, to) {
		super()
		this.emitter = emitter
		this.from = from
		this.to = to
	}

	redo() {
		this.emitter.setType(this.to)
	}
	undo() {
		this.emitter.setType(this.from)
	}

}
