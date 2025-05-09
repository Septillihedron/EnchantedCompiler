import { addUndo, UndoEvent } from "../../undo.js"
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

		this.input.addEventListener("click", () => addUndo(new BooleanUndoEvent(this)))
	}

	toHTML() {
		return this.input
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

	isInline() { return true }

	focus() {
		this.input.focus()
		return true
	}

}

export class BooleanUndoEvent extends UndoEvent {

	/**
	 * @param {BooleanInput} emitter
	 */
	constructor(emitter) {
		super()
		this.emitter = emitter
	}
	
	undo() {
		this.emitter.input.checked = !this.emitter.input.checked
	}
	redo() {
		this.emitter.input.checked = !this.emitter.input.checked
	}

}

/**
 * @param {boolean} def
 */
export function booleanInput(def) {
	return parent => new BooleanInput(parent, def)
}
