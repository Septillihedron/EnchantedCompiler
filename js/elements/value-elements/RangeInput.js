import { incorrectTypeSetError } from "../incorrect-type-set-error.js"
import { YamlElement } from "../yaml-element.js"
import { numInput } from "./Input.js"
import { constText } from "./ConstText.js"

/**
 * @implements {YamlElement<{ min: number, max: number }>}
 */
export class RangeInput extends YamlElement {

    constructor() {
        super()
        this.min = numInput("-.inf")
        this.dash = constText(" - ")
        this.max = numInput(".inf")

        this.min.parent = this
        this.max.parent = this
        this.children = [this.min, this.max]
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        this.min.toHTML(parent)
        this.dash.toHTML(parent)
        this.max.toHTML(parent)
    }

    toYaml() {
        return this.min.toYaml() + " - " + this.max.toYaml()
    }

    getValue() {
        return {
            min: Number.parseFloat(this.min.getValue()),
            max: Number.parseFloat(this.max.getValue())
        }
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == undefined) return
        if (Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
    }
}
