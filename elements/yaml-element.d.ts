
export abstract class YamlElement<T> implements Focusable {

    children: Focusable<unknown>[]
    focusIndex: number

    constructor(children: Focusable[])

    abstract toHTML(parent: HTMLElement): void
    abstract toYaml(): string

    abstract getValue(): T
    abstract setValue(value: unknown): void

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
}

export interface Focusable {
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract focus(): boolean
    abstract unfocus(): void
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract focusNext(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    abstract focusPrevious(): boolean
}

export class FocusableWrapper implements Focusable {
    constructor(target: {focus: () => void})

    /**
     * @returns {boolean} if the focus is successful
     */
    focus(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    focusNext(): boolean
    /**
     * @returns {boolean} if the focus is successful
     */
    focusPrevious(): boolean
}
