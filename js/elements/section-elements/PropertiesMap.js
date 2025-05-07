import { addUndo } from "../../undo/undo-handler.js"
import { UndoEvent } from "../../undo/UndoEvent.js"
import { applyFunctionToConstructor as applyFunctionsToConstructor } from "../constructor-operators.js"
import { createContainerElement, createElement } from "../createHtmlElement.js"
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
			this.addNewEntry()
		}
		this.children.unshift(new FocusableWrapper(this.addButton))
	}

	addNewEntry() {
		const element = this.addfn(this.values.length)
		this.addChild(element)
	}

	/**
	 * @param {unknown} value
	 */
	setValue(value) {
		if (!value) return
		if (!Array.isArray(value)) return
		value.forEach(([key, val]) => {
			const entry = this.addfn(key)(this)
			this.addChild(() => entry)
			entry.setValue([key, val])
		})
		this.unfocus()
	}

	/**
	 * @param {(parent: YamlElement) => Entry<Input, ?>} element 
	 * @param {number} [index=null] 
	 */
	addChild(element, index=null) {
		super.addChild(applyFunctionsToConstructor(element, 
			this.addRemoveButtonToEntry.bind(this), 
			this.addNoSameKeyValidator.bind(this)
		), index)
	}

	/**
	 * @param {Entry} entry
	 */
	addRemoveButtonToEntry(entry) {
		const removeButton = createElement(this, "button")
		removeButton.innerText = "x"
		const elementIndex = this.values.length
		removeButton.addEventListener("click", () => {
			this.removeChild(entry)
			addUndo(new PropertiesMap_RemoveUndoEvent(this, entry, elementIndex))
		})
		entry.addRemoveButton(removeButton)
	}

	removeLastChild() {
		this.children.pop()
		this.values.pop()
		this.container.lastChild.remove()
		if (this.focusIndex >= this.children.length) {
			this.focusIndex--
		}
		if (this.focusIndex != -1) this.children[this.focusIndex].focus()
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

	toHTML() {
		const container = createContainerElement(this)
		container.appendChild(this.addButton)
		container.appendChild(super.toHTML())
		return container
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

class PropertiesMap_AddUndoEvent extends UndoEvent {
	
	/**
	 * @param {PropertiesMap} emitter
	 */
	constructor(emitter) {
		super()
		this.emitter = emitter
	}

	undo() {
		this.emitter.removeLastChild()
	}

	redo() {
		this.emitter.addNewEntry()
	}

}

class PropertiesMap_RemoveUndoEvent extends UndoEvent {
	/**
	 * @param {PropertiesMap} emitter
	 * @param {Entry} removed
	 * @param {number} index
	 */
	constructor(emitter, removed, index) {
		super()
		this.emitter = emitter
		this.removed = removed
		this.index = index
	}

	undo() {
		this.emitter.addChild(() => this.removed, this.index)
	}

	redo() {
		this.emitter.removeChild(this.removed)
	}
}
