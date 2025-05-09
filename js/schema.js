
// @ts-ignore
import JSON5 from "https://cdn.jsdelivr.net/npm/json5@2/+esm"

// @ts-ignore
export const docs = await loadSchema()

/**
 * @typedef {import("./schema").Schema} Schema
 */

async function loadSchema() {
	return await fetch("./js/properties.json")
		.then(res => res.text())
		.then(text => JSON5.parse(text))
		.then(transform)
}

/**
 * @param {Schema} docs
 * @returns {Schema}
 */
function transform(docs) {

	delete docs['$schema']
	
	/**
	 * @param {Schema} docs
	 */
	function combineModes(docs) {
		const modeCombinations = Array(32).fill(undefined)
		/** @type {Record<import("./schema").Mode, number>} */
		const modesMapping = {
			ALL: 0,
			SELF: 1,
			OTHER: 2,
			LOCATION: 3,
			ITEM: 4
		}
		/** @type {import("./schema").DocItem[]} */
		const itemsWithModes = Object.values(docs)
			.flatMap(category => Object.values(category))
	
		itemsWithModes.forEach(docItem => {
			if (!docItem.available) return
			const modes = docItem.supportedModes
			if (modes === undefined) return
			const modeIndex = getModesIndex(modes)
			if (modeCombinations[modeIndex] === undefined) {
				modeCombinations[modeIndex] = modes
			} else {
				docItem.supportedModes = modeCombinations[modeIndex]
			}
		})
	
		return
	
		/**
		 * @param {import("./schema").Mode[]} modes
		 */
		function getModesIndex(modes) {
			let x = 0
			for (let i=0; i<modes.length; i++) {
				x |= 1 << modesMapping[modes[i]]
			}
			return x
		}
	}

	// TODO handle extends and the other things the preprocessor does

	Object.values(docs)
		.flatMap(Object.values)
		.forEach(docItem => docItem.available ??= true)
	
	combineModes(docs)
	return docs
}
