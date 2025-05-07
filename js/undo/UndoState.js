import { UndoEvent } from "./UndoEvent.js"

export class UndoState {
    /**
     * @type {UndoEvent[]}
     */
    stack = []
    stackPointer = -1

    undoOrRedoInProcess = false

    pop() {
        const value = this.getPointed()
        this.stackPointer--
        return value
    }

    getPointed() {
        return this.stack[this.stackPointer]
    }

    getLast() {
        return this.stack.at(-1)
    }

    /**
     * @param {UndoEvent} undoEvent
     */
    add(undoEvent) {
        this.truncate()
        this.stack.push(undoEvent)
        this.stackPointer++
    }

    truncate() {
        if (this.stackPointer != this.stack.length-1) {
            truncateStack(this.stack, this.stackPointer+1)
        }
    }
}

/**
 * @param {any[]} stack
 * @param {number} [newLength]
 */
function truncateStack(stack, newLength) {
    stack.length = newLength
}