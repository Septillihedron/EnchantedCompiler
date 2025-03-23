
export * from './value-elements/BooleanInput.js'
export * from './value-elements/ConstText.js'
export * from './value-elements/EnumInput.js'
export * from './value-elements/Input.js'
export * from './value-elements/RangeInput.js'

export const errorLevels = Object.freeze({
    none: 0,
    info: 1,
    warn: 2,
    error: 3,
})

/**
 * @typedef {typeof errorLevels[keyof typeof errorLevels]} ErrorLevel
 */

/**
 * @typedef {object} SchemaError
 * @property {string} message
 * @property {ErrorLevel} level
 */
