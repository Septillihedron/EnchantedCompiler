import { UndoEvent } from "./UndoEvent.js"

/**
 * @type {{stack: UndoEvent[], stackPointer: number}}
 */
const undoState = {
    stack: [],
    stackPointer: -1
}

/**
 * @param {UndoEvent} undoEvent
 */
export function addUndo(undoEvent) {
    if (undoState.stackPointer != undoState.stack.length-1) {
        truncateStack(undoState.stack, undoState.stackPointer+1)
    }
    undoState.stack.push(undoEvent)
    undoState.stackPointer++
}

/**
 * @param {any[]} stack
 * @param {number} [newLength]
 */
function truncateStack(stack, newLength) {
    stack.length = newLength
}

function undo() {
    if (undoState.stackPointer == -1) return
    undoState.stack[undoState.stackPointer].undo()
    undoState.stackPointer--
}

function redo() {
    if (undoState.stackPointer+1 >= undoState.stack.length) return
    undoState.stack[undoState.stackPointer+1].redo()
    undoState.stackPointer++
}


document.addEventListener("keydown", event => {
    if (event.ctrlKey && event.key == "z") {
        event.preventDefault()
        undo()
    }
    if (event.ctrlKey && event.key == "y") {
        event.preventDefault()
        redo()
    }
    if (event.ctrlKey && event.shiftKey && event.key == "Z") {
        event.preventDefault()
        redo()
    }
}, { capture: true })

globalThis.undoState = undoState
globalThis.undo = undo
globalThis.redo = redo
