import { addUndo } from "../../undo/undo-handler.js"
import { UndoEvent } from "../../undo/UndoEvent.js"
import { createElement } from "../createHtmlElement.js"
import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement, FocusableWrapper } from "../yaml-element.js"
import { indent } from "./indent.js"

/**
 * @implements {YamlElement<unknown[]>}
 */

export class ArraySection extends YamlElement {
	/**
	 * @param {YamlElement<any>} parent
	 * @param {(parent: YamlElement) => YamlElement<unknown>} addfn
	 */
	constructor(parent, addfn) {
		super(parent)
		/** @type {YamlElement<unknown>[]} */
		this.values = []
		this.container = createElement(this, "ul")
		this.container.classList.add("array")
		this.addfn = addfn

		this.addButton = createElement(this, "button")
		this.addButton.innerText = "+"
		this.addButton.onclick = () => {
			addUndo(new ArrayAddUndoEvent(this))
			this.addNewValue()
			if (this.focusIndex != -1) {
				this.focus(true)
			}
		}

		this.children.unshift(new FocusableWrapper(this.addButton))
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		parent.appendChild(this.addButton)
		parent.appendChild(this.container)
	}

	toYaml() {
		return this.values
			.map(item => "\r\n- " + indent(item.toYaml()).trimStart())
			.join("")
	}

	getValue() {
		return this.values.map(item => item.getValue())
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
		for (let i = this.values.length; i < val.length; i++) {
			this.addButton.click()
		}
		val.forEach((val, index) => {
			this.values[index].setValue(val)
		})
		this.unfocus()
	}

	addNewValue() {
		const element = this.addfn(this)
		this.addChild(element)
	}

	/**
	 * @param {YamlElement<unknown>} element
	 * @param {number} [index=null] 
	 */
	addChild(element, index=null) {
		if (index == null) index = this.values.length
		const li = createElement(this, "li")

		element.toHTML(li)
		if (index == this.values.length) {
			this.container.appendChild(li)
		} else {
			this.container.children[index].insertAdjacentElement("beforebegin", li)
		}
		this.values.splice(index, 0, element)
		this.children.splice(index+1, 0, element)

		const removeButton = this.makeRemoveButton(element)
		li.append(removeButton)
	}

	/**
	 * @param {YamlElement<unknown>} element
	 */
	makeRemoveButton(element) {
		const removeButton = createElement(this, "button")
		removeButton.innerText = "x"
		removeButton.addEventListener("click", () => {
			this.removeChild(element)
		})
		return removeButton
	}

	/**
	 * @param {YamlElement<unknown>} element
	 * @param {boolean} [fromUndo=false] 
	 */
	removeChild(element, fromUndo = false) {
		const elementIndex = this.values.findIndex(child => child == element)
		if (elementIndex == -1) return
		this.children.splice(elementIndex + 1, 1)
		const removed = this.values.splice(elementIndex, 1)[0]
		this.container.children[elementIndex].remove()
		if (this.focusIndex-1 >= elementIndex) {
			this.focusIndex--
			if (this.focusIndex != -1) this.children[this.focusIndex].focus()
		}
		if (!fromUndo) addUndo(new ArrayRemoveUndoEvent(this, removed, elementIndex))
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

	clearChildren() {
		this.values = []
		this.children = [new FocusableWrapper(this.addButton)]
		this.container.replaceChildren()
	}
}

/**
 * @param {(parent: YamlElement) => YamlElement<unknown>} addfn
 */
export function arraySection(addfn) {
	return parent => new ArraySection(parent, addfn)
}

class ArrayAddUndoEvent extends UndoEvent {
	
	/**
	 * @param {ArraySection} emitter
	 */
	constructor(emitter) {
		super()
		this.emitter = emitter
	}

	undo() {
		this.emitter.removeLastChild()
	}

	redo() {
		this.emitter.addNewValue()
	}

}

class ArrayRemoveUndoEvent extends UndoEvent {
	/**
	 * @param {ArraySection} emitter
	 * @param {YamlElement} removed
	 * @param {number} index
	 */
	constructor(emitter, removed, index) {
		super()
		this.emitter = emitter
		this.removed = removed
		this.index = index
	}

	undo() {
		this.emitter.addChild(this.removed, this.index)
	}

	redo() {
		this.emitter.removeChild(this.removed)
	}
}
