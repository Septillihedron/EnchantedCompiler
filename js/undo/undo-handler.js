import { UndoEvent } from "./UndoEvent.js"
import { UndoState } from "./UndoState.js"

const undoState = new UndoState()

/**
 * @param {UndoEvent} undoEvent
 */
export function addUndo(undoEvent) {
    if (undoState.undoOrRedoInProcess) {
        throw new Error("Cannot add an undo while undoing")
    }
    undoState.truncate()
    undoState.add(undoEvent)
}

/**
 * Replaces the last undo if predicate returns true, otherwise, adds it to the back
 * @param {UndoEvent} undoEvent
 * @param {(prevEvent: UndoEvent) => boolean} predicate
 */
export function replaceUndoIf(undoEvent, predicate) {
    if (undoState.undoOrRedoInProcess) {
        throw new Error("Cannot add an undo while undoing")
    }
    undoState.truncate()
    if (predicate(undoState.getLast())) {
        undoState.pop()
    }
    undoState.add(undoEvent)
}

function undo() {
    if (undoState.stackPointer == -1) return
    undoState.undoOrRedoInProcess = true
    undoState.pop().undo()
    undoState.undoOrRedoInProcess = false
}

function redo() {
    if (undoState.stackPointer+1 >= undoState.stack.length) return
    undoState.undoOrRedoInProcess = true
    undoState.stack[undoState.stackPointer+1].redo()
    undoState.stackPointer++
    undoState.undoOrRedoInProcess = false
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
