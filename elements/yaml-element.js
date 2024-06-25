
/**
 * @abstract
 * @template {any} T
 */
export class YamlElement {

    /**
     * @param {HTMLElement} parent
     * @returns {void}
     */
    toHTML(parent) {
        throw Error("Not implemented")
    }

    /**
     * @returns {string}
     */
    toYaml() {
        throw Error("Not implemented")
    }

    /**
     * @returns {T}
     */
    getValue() {
        throw Error("Not implemented")
    }

    /**
     * @param {unknown} value
     */
    setValue(value) {
        throw Error("Not implemented")
    }

    /**
     * @returns {boolean} if the focus is successful
     */
    focus() {
        throw Error("Not implemented")
    }
}
