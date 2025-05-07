import { YamlElement } from "./yaml-element.js"


/**
 * @template {YamlElement} T
 * @param {(parent: YamlElement) => T} unconstructedElement
 * @param {((t: T) => void)[]} functions
 * @returns {(parent: YamlElement) => T}
 */
export function applyFunctionToConstructor(unconstructedElement, ...functions) {
    return parent => {
        const element = unconstructedElement(parent)
        functions.forEach(f => f(element))
        return element
    }
}

/**
 * @template T
 * @this {YamlElement}
 * @param {(parent: YamlElement) => T} unconstructed
 * @returns {() => T}
 */
export function construct(unconstructed) {
    const constructed = unconstructed(this)
    return () => constructed
}
