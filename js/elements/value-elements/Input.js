import { YamlElement } from "../yaml-element.js"
import { createElement } from "../createHtmlElement.js"
import { UndoEvent } from "../../undo/UndoEvent.js"
import { addUndo } from "../../undo/undo-handler.js"

export const errorLevels = Object.freeze({
	none: 0,
	info: 1,
	warn: 2,
	error: 3,
})

/**
 * @typedef {typeof errorLevels[keyof typeof errorLevels]} ErrorLevel
 */

/**
 * @typedef {object} InputError
 * @property {string} message
 * @property {ErrorLevel} level
 */


export const intRegex = /^[\+\-]?(([0-9]+)|(0b[01]+)|(0o[0-7]+)|(0x[0-9a-fA-F]+))$/
export const floatRegex = /^([\+\-]?((\d+(\.\d+)?)|(\.inf)))$/

/**
 * @implements {YamlElement<string>}
 */

export class Input extends YamlElement {

	previousValue

	/**
	 * @type {((val: string) => InputError?)[]}
	 */
	validators

	/**
	 * @type {((value: string, previousValue: string) => void)[]}
	 */
	valueChangedListeners = []

	/**
	 * @param {YamlElement<?>} parent 
	 * @param {string | undefined | null} def
	 */
	constructor(parent, def) {
		super(parent)
		this.input = createElement(this, "span")
		this.input.contentEditable = 'true'
		if (def != undefined) {
			this.input.innerText = def
			this.previousValue = def
		}
		this.input.addEventListener("focus", () => {
			this.parent.setFocus(this)
			this.focus()
		})
		this.input.addEventListener("beforeinput", event => {
			this.previousValue = this.getValue()
		})
		this.input.addEventListener("input", event => {
			addUndo(new InputUndoEvent(this, this.previousValue, this.getValue()))
		})
		this.validators = []
		this.addChangedListener(() => this.validate())
	}

	validate() {
		const value = this.input.innerText
		const errors = this.validators.map(validator => validator(value)).filter(error => error)
		errors.sort((a, b) => a.level - b.level)
		const maxLevel = errors[0]?.level ?? errorLevels.none
		this.setValidity(maxLevel)
	}

	toHTML() {
		return this.input
	}

	toYaml() {
		return this.input.innerText
	}

	getValue() {
		return this.input.innerText
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		if (val == null) return
		// if (typeof val !== "string") {
		// incorrectTypeSetError(val)
		// return
		// }
		this.input.innerText = val.toString()
		this.validate()
	}

	isInline() { return true }

	focus() {
		this.input.focus()
		this.focusIndex = 1
		return true
	}

	unfocus() {
		this.focusIndex = -1
	}

	/**
	 * @param {ErrorLevel} errorLevel
	 */
	setValidity(errorLevel) {
		const classList = this.input.classList
		classList.remove("warn")
		classList.remove("error")

		if (errorLevel == errorLevels.error) {
			classList.add("error")
		} else if (errorLevel == errorLevels.warn) {
			classList.add("warn")
		}
	}

	/**
	 * @param {(value: string, prevValue: string) => void} listener
	 */
	addChangedListener(listener) {
		this.valueChangedListeners.push(listener)
		this.input.addEventListener("input", (e) => {
			listener(this.input.innerText, this.previousValue)
		})
	}

	/**
	 * @param {string} newValue
	 */
	changeValue(newValue, makeEvents=true) {
		this.previousValue = this.getValue()
		this.input.innerText = newValue
		if (makeEvents) this.valueChangedListeners.forEach(listener => listener(newValue, this.previousValue))
	}

	/**
	 * @param {(val: string) => InputError?} validator
	 */
	addValidator(validator) {
		this.validators.push(validator)
		this.validate()
	}

}
/**
 * @param {string | undefined} def
 */

export function input(def) {
	return (parent) => new Input(parent, def)
}
/**
 * @param {number} def
 */
export function intInput(def) {
	return parent => {
		const elem = input(def.toString())(parent)
		elem.addValidator(val => {
			if (!intRegex.test(val)) {
				return {
					level: errorLevels.error,
					message: "Invalid integer"
				}
			}
		})
		return elem
	}
}
/**
 * @param {number | string} def
 */
export function numInput(def) {
	return parent => {
		const elem = input(def.toString())(parent)
		elem.addValidator(val => {
			if (!floatRegex.test(val)) {
				return {
					level: errorLevels.error,
					message: "Invalid number"
				}
			}
		})
		return elem
	}
}

class InputUndoEvent extends UndoEvent {
	
	/**
	 * @param {Input} emitter
	 * @param {string} prev
	 * @param {string} current
	 */
	constructor(emitter, prev, current) {
		super()
		this.emitter = emitter
		this.prev = prev
		this.current = current
	}

	undo() {
		this.emitter.changeValue(this.prev)
	}

	redo() {
		this.emitter.changeValue(this.current)
	}

}

