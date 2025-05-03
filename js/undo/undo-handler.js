import { UndoEvent } from "./UndoEvent.js"

/**
 * @type {UndoEvent[]}
 */
const undoStack = []
let undoStackPointer = -1

/**
 * @param {UndoEvent} undoEvent
 */
export function addUndo(undoEvent) {
    if (undoStackPointer != undoStack.length-1) {
        truncateStack(undoStack, undoStackPointer+1)
    }
    undoStack.push(undoEvent)
    undoStackPointer++
}

/**
 * @param {any[]} stack
 * @param {number} [newLength]
 */
function truncateStack(stack, newLength) {
    stack.length = newLength
}

function undo() {
    if (undoStackPointer == -1) return
    undoStack[undoStackPointer].undo()
    undoStackPointer--
}

function redo() {
    if (undoStackPointer+1 >= undoStack.length) return
    undoStack[undoStackPointer+1].redo()
    undoStackPointer++
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

globalThis.undoStack = undoStack
