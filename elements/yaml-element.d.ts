
export type YamlElement<T> = {
    toHTML(parent: HTMLElement): void
    toYaml(): string
    getValue(): T
    setValue(val: unknown): void

    /**
     * @returns {boolean} if the focus is successful
     */
    focus(): boolean
}
