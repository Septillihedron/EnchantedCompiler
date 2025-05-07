
export class Focusable {}

/**
 * @abstract
 * @template {any} T
 * @type {import("./yaml-element").YamlElement<T>}
 */
export class YamlElement extends Focusable {

	parent
	/**
	 * @type {import("./yaml-element").Focusable[]}
	 */
	children = []
	focusIndex = -1

	/**
	 * @param {YamlElement<?>} parent
	 */
	constructor(parent) {
		super()
		this.parent = parent
	}

	focus(focusLast = false) {
		if (this.children.length === 0) return false
		this.children[this.focusIndex]?.unfocus()
		if (focusLast) {
			this.focusIndex = this.children.length
			return this.focusPrevious()
		} else {
			this.focusIndex = -1
			return this.focusNext()
		}
	}
	unfocus() {
		this.children[this.focusIndex]?.unfocus()
		this.focusIndex = -1
	}

	focusNext() {
		if (this.focusIndex != -1 && this.focusIndex < this.children.length) {
			const focusedChild = this.children[this.focusIndex]
			if (focusedChild.focusNext()) return true
			focusedChild.unfocus()
		}
		for (let i = this.focusIndex + 1; i < this.children.length; i++) {
			if (this.children[i].focus(false)) {
				this.focusIndex = i
				return true
			}
		}
		return false
	}

	focusPrevious() {
		if (this.focusIndex != -1 && this.focusIndex < this.children.length) {
			const focusedChild = this.children[this.focusIndex]
			if (focusedChild.focusPrevious()) return true
			focusedChild.unfocus()
		}
		for (let i = this.focusIndex - 1; i >= 0; i--) {
			if (this.children[i].focus(true)) {
				this.focusIndex = i
				return true
			}
		}
		return false
	}

	setFocus(element) {
		if (this.focusIndex === -1) {
			this.parent?.setFocus(this)
		} else {
			this.children[this.focusIndex]?.unfocus()
		}
		this.focusIndex = this.children.indexOf(element)
		return true
	}
}

/**
 * @type {import("./yaml-element").FocusableWrapper}
 */
export class FocusableWrapper extends Focusable {
	/**
	 * @param {{focus: () => void}} target
	 */
	constructor(target) {
		super()
		this.target = target
	}

	focus() {
		this.target.focus()
		return true
	}
	unfocus() {}

	focusNext() {
		return false
	}
	focusPrevious() {
		return false
	}
	setFocus(_element) {
		return false
	}


}
