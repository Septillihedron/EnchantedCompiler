
import yaml from 'https://cdn.jsdelivr.net/npm/yaml@2.3.4/+esm'
import { addUndo, UndoEvent } from '../undo.js'

export async function pasteYaml() {
    const file = await navigator.clipboard.readText()
    const parsed = parseToSchemaFormat(yaml.parse(file))
    const prevValue = root.getValue()
    root.setValue(parsed)
    addUndo(new PasteYamlUndoEvent(prevValue, parsed))
}

function parseToSchemaFormat(obj) {
    if (obj == null) return
    if (Array.isArray(obj)) {
        return obj.map(parseToSchemaFormat)
    }
    if (typeof obj == "object") {
        return Object.entries(obj)
            .map(([key, val]) => ([key, parseToSchemaFormat(val)]))
    }
    return obj
}

export class PasteYamlUndoEvent extends UndoEvent {

    /**
     * @param {any} prev
     * @param {any} newYaml
     */
    constructor(prev, newYaml) {
        super()
        this.prev = prev
        this.new = newYaml
    }

    redo() {
        root.setValue(this.new)
    }
    undo() {
        root.setValue(this.prev)
    }

}
