
const DEBUG = true

/**
 * @template {keyof HTMLElementTagNameMap} K
 * @param {any} source
 * @param {K} tagName
 * @returns {HTMLElementTagNameMap[K]}
 */
export function createElement(source, tagName) {
    const element = document.createElement(tagName)
    if (DEBUG) {
        // @ts-ignore
        element.source = source
    }
    return element
}

/**
 * @param {any} source
 * @returns {HTMLDivElement}
 */
export function createContainerElement(source) {
    const element = createElement(source, "div")
    element.style.display = "inline"
    return element
}
