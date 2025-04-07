import { createElement } from "../createHtmlElement.js"
import { Input } from "./Input.js"

/**
 * @typedef {{name: string, description?: string}} EnumValue
 */
export class EnumInput extends Input {

	/**
	 * @private
	 * @param {EnumValue[]} enumList
	 * @param {string | undefined | null} def
	 */
	constructor(parent, enumList, def = undefined) {
		super(parent, def)
		this.enumList = enumList
		this.enumList.sort((a, b) => a.name.localeCompare(b.name))

		this.autocompleteMenu = createElement(this, "menu")
		this.autocompleteMenu.classList.add("autocomplete-menu")

		this.descriptionWindow = createElement(this, "div")
		this.descriptionWindow.classList.add("autocomplete-description")

		this.autocompleteWindow = createElement(this, 'div')
		this.autocompleteWindow.classList.add("autocomplete")
		this.autocompleteWindow.appendChild(this.autocompleteMenu)
		this.autocompleteWindow.appendChild(this.descriptionWindow)

		this.input.addEventListener("input", () => {
			this.createValueListMenu()
		})
	}

	/**
	 * @param {string[]} enumNameList
	 * @param {string | undefined | null} def
	 */
	static create(enumNameList, def = undefined) {
		const enumList = enumNameList.map(name => ({
			name,
			description: undefined
		}))
		return parent => new EnumInput(parent, enumList, def)
	}

	/**
	 * @param {EnumValue[]} enumList
	 * @param {string | undefined | null} def
	 */
	static createDescripted(enumList, def = undefined) {
		return parent => new EnumInput(parent, enumList, def)
	}

	createValueListMenu() {
		this.autocompleteMenu.replaceChildren()
		const sorted = this.sortValueList()
		sorted.forEach(value => {
			const option = this.createMenuChoice(value)
			this.autocompleteMenu.appendChild(option)
		})
	}

	/**
	 * @param {EnumValue} value
	 * @returns {HTMLLIElement}
	 */
	createMenuChoice(value) {
		const button = createElement(this, "button")
		button.classList.add("autocomplete-choice")
		button.innerText = value.name
		button.addEventListener("click", () => {
			this.input.innerText = value.name
			this.input.dispatchEvent(new InputEvent("input", { data: value.name }))
			this.parent?.parent?.focusNext()
			this.createValueListMenu()
		})
		if (value.description) {
			const description = value.description
			button.addEventListener("mouseenter", () => {
				const title = createElement(this, 'title')
				title.innerText = value.name
				// TODO: add markdown support
				const descriptionElement = createElement(this, 'div')
				descriptionElement.innerText = description
				this.descriptionWindow.replaceChildren(title, descriptionElement)
			})
		}
		const li = createElement(this, "li")
		li.appendChild(button)
		return li
	}

	sortValueList() {
		const input = this.getValue().trim()
		if (input === "" || this.enumList.map(value => value.name).includes(input)) {
			return this.enumList
		}
		return this.enumList
			.map(value => {
				let score = this.calculateScore(input, value.name)
				if (value.description) {
					score += 0.75 * this.calculateScore(input, value.description)
				}
				return { value, score: score }
			})
			.filter(x => x.score !== 0)
			.sort((a, b) => b.score - a.score)
			.map(x => x.value)
	}

	/**
	 * @param {string} input
	 * @param {string} value
	 * @returns {number}
	 */
	calculateScore(input, value) {
		let index = 0
		let score = 0
		for (let i = 0; i < value.length; i++) {
			const isSameChar = value.charAt(i).toLowerCase() === input.charAt(index).toLowerCase()
			if (isSameChar) {
				index++
				score += 1000000 - i
				if (index > input.length - 1) {
					break
				}
			}
		}
		return score
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		super.setValue(val)
		this.createValueListMenu()
	}

	/**
	 * @param {HTMLElement} parent
	 */
	toHTML(parent) {
		const container = createElement(this, 'div')
		container.classList.add("enum-value-container")

		super.toHTML(container)

		container.appendChild(this.autocompleteWindow)

		parent.appendChild(container)
	}

	focus() {
		super.focus()
		this.autocompleteWindow.classList.add("active")
		this.createValueListMenu()
		return true
	}
	unfocus() {
		this.autocompleteWindow.classList.remove("active")
		this.autocompleteMenu.replaceChildren()
	}

}
