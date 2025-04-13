import { YamlElement } from "../yaml-element.js"
import { createElement } from "../createHtmlElement.js"

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

	/**
	 * @type {((val: string) => InputError)[]}
	 */
	validators

	/**
	 * @param {YamlElement<?>} parent 
	 * @param {string | undefined | null} def
	 */
	constructor(parent, def) {
		super(parent)
		this.input = createElement(this, "span")
		this.input.contentEditable = 'true'
		if (def != undefined) this.input.innerText = def
		this.input.addEventListener("focus", () => {
			this.parent?.setFocus(this)
			this.focus()
		})
		this.validators = []
		this.addChangedListener(() => this.validate())
	}

	validate() {
		const value = this.input.innerText
		const errors = this.validators.map(validator => validator(value))
		errors.sort((a, b) => a.level - b.level)
		const maxLevel = errors[0]?.level ?? errorLevels.none
		this.setValidity(maxLevel)
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.input)
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

	focus() {
		this.input.focus()
		return true
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
			return
		}
		if (errorLevel == errorLevels.warn) {
			classList.add("warn")
			return
		}

	}

	/**
	 * @param {(value: string) => void} listener
	 */
	addChangedListener(listener) {
		this.input.addEventListener("input", (e) => {
			listener(this.input.innerText)
		})
	}

	/**
	 * @param {(val: string) => InputError} validator
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

