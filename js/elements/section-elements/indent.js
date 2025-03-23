/**
 * @param {string} s
 * @returns {string}
 */

export function indent(s) {
    return s
        .split("\r\n")
        .map(l => "  " + l)
        .join("\r\n")
}
