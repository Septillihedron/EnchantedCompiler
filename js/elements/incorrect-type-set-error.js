

/**
 * @param {any} val
 */
export function incorrectTypeSetError(val) {
    console.trace(`incorrect value type set: ${val}`, `type: ${typeof val}`)
}
