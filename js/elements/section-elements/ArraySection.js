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
	 */
	addChild(element) {
		const li = createElement(this, "li")
		this.container.appendChild(li)

		element.toHTML(li)
		this.values.push(element)
		this.children.push(element)

		const removeButton = createElement(this, "button")
		removeButton.innerText = "x"
		removeButton.addEventListener("click", () => {
			const elementIndex = this.children.findIndex(child => child == element)
			this.children.splice(elementIndex, 1)
			this.values.splice(elementIndex-1, 1)
			this.container.removeChild(li)
			if (this.focusIndex >= elementIndex) {
				this.focusIndex--
			}
			if (this.focusIndex != -1) this.children[this.focusIndex].focus()
		})
		li.append(removeButton)

		this.children[this.focusIndex]?.unfocus()
		element.focus()
		this.focusIndex = this.children.length - 1
	}

	removeLastChild() {
		this.children.pop()
		this.values.pop()
		this.container.lastChild.remove()
		if (this.focusIndex > this.children.length) {
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
	constructor(emitter, ) {
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
