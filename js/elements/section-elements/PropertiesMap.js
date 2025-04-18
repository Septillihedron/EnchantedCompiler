import { createElement } from "../createHtmlElement.js"
import { FocusableWrapper, YamlElement } from "../yaml-element.js"
import { Entry } from "./Entry.js"
import { Section } from "./Section.js"


export class PropertiesMap extends Section {
	/**
	 * @param {(name: string | number) => (parent: YamlElement) => Entry} addfn
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
	 * @param {(parent: YamlElement) => Entry} element 
	 */
	addChild(element) {
		super.addChild(parent => {
			const entry = element(parent)
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
			entry.addRemoveButton(removeButton)
			return entry
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
