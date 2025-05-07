import { createContainerElement, createElement } from "../createHtmlElement.js"
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

		this.addButton = createElement(this, "button")
		this.addButton.innerText = "+"
		this.addButton.onclick = () => {
			const element = addfn(this)
			this.addChild(element)
		}

		this.children.unshift(new FocusableWrapper(this.addButton))
	}

	toHTML() {
		const container = createContainerElement(this)
		container.appendChild(this.addButton)
		container.appendChild(this.container)
		return container
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

	isInline() { return false }

	/**
	 * @param {YamlElement<unknown>} element
	 */
	addChild(element) {
		const li = createElement(this, "li")
		this.container.appendChild(li)

		li.appendChild(li)
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
