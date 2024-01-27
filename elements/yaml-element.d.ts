
export type YamlElement = {
    toHTML(parent: HTMLElement): void
    toYaml(): string
    /**
     * @returns {boolean} if the focus is successful
     */
    focus(): boolean
}
