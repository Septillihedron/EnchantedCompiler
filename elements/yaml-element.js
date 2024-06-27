
/**
 * @abstract
 * @template {any} T
 * @type {import("./yaml-element").YamlElement<T>}
 */
export class YamlElement {

    parent
    /**
     * @type {import("./yaml-element").YamlElement<?>[]}
     */
    children = []
    focusIndex = -1

    constructor() {}

    toHTML(parent) {
        throw new Error("Not implemented")
    }
    toYaml() {
        throw new Error("Not implemented")
        return "Not implemented"
    }

    getValue() {
        throw new Error("Not implemented")
    }
    setValue(value) {
        throw new Error("Not implemented")
    }

    focus() {
        if (this.children.length === 0) return false
        this.children[this.focusIndex]?.unfocus()
        this.focusIndex = -1
        return this.focusNext()
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
            if (this.children[i].focus()) {
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
        for (let i = this.focusIndex - 1; i >= 0; i++) {
            if (this.children[i].focus()) {
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
            this.children[this.focusIndex].unfocus()
        }
        this.focusIndex = this.children.indexOf(element)
        return true
    }
}

/**
 * @type {import("./yaml-element").FocusableWrapper}
 */
export class FocusableWrapper {
    /**
     * @param {{focus: () => void}} target
     */
    constructor(target) {
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
    setFocus(element) {
        return false
    }


}
