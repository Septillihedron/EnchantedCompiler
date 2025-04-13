import { applyFunctionToConstructor as applyFunctionsToConstructor } from "../constructor-operators.js"
import { createElement } from "../createHtmlElement.js"
import { errorLevels, Input } from "../value-elements.js"
import { FocusableWrapper, YamlElement } from "../yaml-element.js"
import { Entry } from "./Entry.js"
import { Section } from "./Section.js"

const SAME_KEY_ERROR = "Duplicate object keys"


export class PropertiesMap extends Section {
	/**
	 * @param {(name: string | number) => (parent: YamlElement) => Entry<Input, ?>} addfn
	 */
	constructor(parent, addfn) {
		super(parent, [])
		this.addfn = addfn
		this.addButton = createElement(this, "button")
		this.addButton.innerText = "+"
		this.addButton.onclick = () => {
			const element = addfn(this.values.length)
			this.addChild(element)
		}
		this.children.unshift(new FocusableWrapper(this.addButton))
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		if (!val) return
		if (typeof val !== "object") return

		Object.entries(val)
			.forEach(([key, val]) => {
				let entry = this.values.find(entry => entry.key.getValue() === key)
				if (!entry) {
					entry = this.addfn(key)(this)
					this.addChild(() => entry)
				}
				entry?.setValue([key, val])
			})
		this.unfocus()
	}

	/**
	 * @param {(parent: YamlElement) => Entry<Input, ?>} element 
	 */
	addChild(element) {
		super.addChild(applyFunctionsToConstructor(element, 
			this.addRemoveButtonToEntry.bind(this), 
			this.addNoSameKeyValidator.bind(this)
		))
	}

	/**
	 * @param {Entry} entry
	 */
	addRemoveButtonToEntry(entry) {
		const removeButton = createElement(this, "button")
		removeButton.innerText = "x"
		removeButton.addEventListener("click", () => {
			const elementIndex = this.children.findIndex(child => entry == child)
			this.children.splice(elementIndex, 1)
			this.values.splice(elementIndex-1, 1)
			this.container.removeChild(entry.container)
			if (this.focusIndex >= elementIndex) {
				this.focusIndex--
			}
			if (this.focusIndex != -1) this.children[this.focusIndex].focus()
		})
	}

	/**
	 * @param {Entry<Input, ?>} thisEntry
	 */
	addNoSameKeyValidator(thisEntry) {
		const input = thisEntry.key
		input.addValidator(thisValue => {
			const shouldError = this.values.some(entry => {
				if (entry == thisEntry) return false
				if (entry.key.getValue() == thisValue) return true
			})
			if (shouldError) {
				return {
					level: errorLevels.error,
					message: SAME_KEY_ERROR
				}
			}
		})
		input.addChangedListener(() => {
			this.values.forEach(entry => entry.key.validate())
		})
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.addButton)
		super.toHTML(parent)
	}

	clearChildren() {
		super.clearChildren()
		this.children.unshift(new FocusableWrapper(this.addButton))
	}
}

/**
 * @param {(name: string | number) => (parent: YamlElement<any>) => Entry<any, any>} addfn
 */
export function propertiesMap(addfn) {
	return parent => new PropertiesMap(parent, addfn)
}
