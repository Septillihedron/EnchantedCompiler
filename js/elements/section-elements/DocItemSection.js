import { compileProperty } from "../../compiler.js"
import { docs } from "../../schema.js"
import { EnumInput } from "../value-elements/EnumInput.js"
import { entry, Entry } from "./Entry.js"
import { LazyLoadedSection } from "./LazyLoadedSection.js"


export class DocItemSection extends LazyLoadedSection {

	/**
	 * @param {keyof import("../../schema.js").Schema} category
	 * @param {() => Entry[]} [extraEntries = ()=>[]]
	 */
	constructor(category, extraEntries = () => []) {
		super(() => [])
		this.extraEntriesGenerator = extraEntries
		this.category = category
		this.typeKey = (category === "skills") ? "skill" : "type"
		const typeInput = EnumInput.createDescripted(this.createDescriptedTypes(docs[category]))
		this.typeEntry = entry(this.typeKey, typeInput)
		this.generator = () => {
			console.log(this.extraEntriesGenerator)
			return [this.typeEntry, ...this.extraEntriesGenerator()]
		}
		this.unfocus()

		typeInput.addChangedListener(this.updateProperties.bind(this))
	}

	/**
	 * @returns {{name: string, description: string}[]}
	 */
	createDescriptedTypes(category) {
		return Object.entries(category)
			.filter(([_, type]) => type.available)
			.map(([name, type]) => ({
				name,
				description: type.description
			}))
	}

	updateProperties(newValue) {
		/** @type {import("../../schema.js").DocItem | undefined} */
		const newDocItem = docs[this.category][newValue]
		if (newDocItem === undefined) return

		this.compileDocItem(newDocItem)
	}

	/**
	 * @param {unknown} val
	 */
	setValue(val) {
		if (val && typeof val === "object") {
			const type = val[this.typeKey]
			if (type) this.updateProperties(type)
		}
		super.setValue(val)
	}


	/**
	 * @private
	 * @param {import("../../schema.js").DocItem} docItem
	*/
	compileDocItem(docItem) {
		this.clearChildren()
		this.addChild(this.typeEntry)
		const modes = docItem.supportedModes
		if (modes != undefined) {
			const defaultMode = this.getDefaultMode(modes, docItem.requireMode)
			this.addChild(entry("mode", EnumInput.create(modes, defaultMode)))
		}
		if (docItem.properties !== undefined) {
			Object.entries(docItem.properties)
				.forEach(([name, property]) => {
					this.addChild(entry(name, compileProperty(property)))
				})
		}
		this.extraEntriesGenerator().forEach(entry => this.addChild(entry))
		this.focus()
	}

	/**
	 * @private
	 * @param {import("../../schema.js").Mode[]} modes
	 * @param {boolean} requireMode
	 */
	getDefaultMode(modes, requireMode) {
		if (requireMode && modes.length >= 2) return modes[1]
		else return "ALL"
	}

}
