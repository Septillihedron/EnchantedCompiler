
Object.entries(docs).forEach(([category, items]) => {
	const availableDocItemNames = Object.entries(items)
		.filter(([_, value]) => value.available)
		.map(([name, _]) => name)
	docs.categories[category] = availableDocItemNames
})

/**
 * @param {import("./docs").Schema} docs
 */
function combineModes(docs) {
	const modeCombinations = Array(32).fill(undefined)
	/** @type {Record<import("./docs").Mode, number>} */
	const modesMapping = {
		ALL: 0,
		SELF: 1,
		OTHER: 2,
		LOCATION: 3,
		ITEM: 4
	}
	/** @type {import("./docs").DocItem[]} */
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
	 * @param {import("./docs").Mode[]} modes
	 */
	function getModesIndex(modes) {
		let x = 0
		for (let i=0; i<modes.length; i++) {
			x |= 1 << modesMapping[modes[i]]
		}
		return x
	}
}

combineModes(docs)


