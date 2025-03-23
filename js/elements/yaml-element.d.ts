
export abstract class YamlElement<T> implements Focusable {

    parent?: YamlElement<?>
    children: Focusable<unknown>[]
    focusIndex: number

    constructor(parent?: YamlElement<?>)

    abstract toHTML(parent: HTMLElement): void
    abstract toYaml(): string

    abstract getValue(): T
    abstract setValue(value: unknown): void

    /**
     * @returns {boolean} if the focus is successful
     */
    focus(last: boolean = false): boolean
    unfocus(): void
    /**
     * @returns {boolean} if the focus is successful
     */
    focusNext(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    focusPrevious(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    setFocus(element: YamlElement<?>): boolean
}

export interface Focusable {
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract focus(last: boolean): boolean
    abstract unfocus(): void
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract focusNext(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract focusPrevious(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract setFocus(element: YamlElement<?>): boolean
}

export class FocusableWrapper implements Focusable {
    constructor(target: { focus: () => void })

    /**
     * @returns {boolean} if the focus is successful
     */
    focus(): boolean
    unfocus(): void

    /**
     * @returns {boolean} if the focus is successful
     */
    focusNext(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    focusPrevious(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    setFocus(element: YamlElement<?>): boolean
}
