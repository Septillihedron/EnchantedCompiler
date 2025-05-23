import { compileProperty } from "../../compiler.js"
import { docs } from "../../schema.js"
import { replaceUndoIf, UndoEvent } from "../../undo.js"
import { construct } from "../constructor-operators.js"
import { InputUndoEvent } from "../value-elements.js"
import { EnumInput } from "../value-elements/EnumInput.js"
import { YamlElement } from "../yaml-element.js"
import { Entry, stringKeyEntry } from "./Entry.js"
import { LazyLoadedSection } from "./LazyLoadedSection.js"


export class DocItemSection extends LazyLoadedSection {

	/**
	 * @param {keyof import("../../schema.js").Schema} category
	 * @param {() => ((parent: YamlElement) => Entry)[]} [extraEntries=()=>[]]
	 * @param {YamlElement} parent
	 */
	constructor(parent, category, extraEntries = () => []) {
		super(parent, () => [])
		this.category = category
		this.typeKey = (category === "skills") ? "skill" : "type"
		const typeInput = EnumInput.createDescripted(this.createDescriptedTypes(docs[category]))
		this.typeEntry = stringKeyEntry(this.typeKey, typeInput, "The type")(this)
		this.generator = () => {
			this.extraEntries = extraEntries().map(construct.bind(this))
			return [() => this.typeEntry, ...this.extraEntries]
		}

		this.typeEntry.value.addChangedListener((newValue, prevValue) => {
			this.createUndo(prevValue, newValue)
			this.updateProperties(newValue)
		})
	}

	/**
	 * @param {string} prevValue
	 * @param {string} newValue
	 */
	createUndo(prevValue, newValue) {
		const undoEvent = new DocItemSection_ChangeUndoEvent(this, prevValue, this.values, newValue)
		replaceUndoIf(undoEvent, (lastUndo) => {
			if (!(lastUndo instanceof InputUndoEvent)) return false
			if (lastUndo.emitter == this.typeEntry.value) return true
			return false
		})
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
		if (val == null) return
		if (!Array.isArray(val)) return
		const typeEntry = val.find(([key, _]) => key == this.typeKey)
		if (typeEntry) {
			const type = typeEntry[1]
			if (type) {
				this.generateEntries()
				this.updateProperties(type)
			}
		}
		super.setValue(val)
	}


	/**
	 * @private
	 * @param {import("../../schema.js").DocItem} docItem
	*/
	compileDocItem(docItem) {
		this.clearChildren()
		this.addChild(() => this.typeEntry)
		const modes = docItem.supportedModes
		if (modes != undefined) {
			const defaultMode = this.getDefaultMode(modes, docItem.requireMode)
			const entry = stringKeyEntry("mode", EnumInput.create(modes, defaultMode), "The mode of operation")
			this.addChild(entry)
		}
		if (docItem.properties !== undefined) {
			Object.entries(docItem.properties)
				.forEach(([name, property]) => {
					const entry = stringKeyEntry(name, compileProperty(property), property.description)
					this.addChild(entry)
				})
		}
		this.extraEntries.forEach(entry => this.addChild(entry))
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

/**
 * @param {keyof import("../../schema.js").Schema} category
 * @param {() => ((parent: YamlElement) => Entry)[]} [extraEntries=() => []]
 */
export function docItemSection(category, extraEntries = () => []) {
	return parent => new DocItemSection(parent, category, extraEntries)
}

export class DocItemSection_ChangeUndoEvent extends UndoEvent {

	/**
	 * @param {DocItemSection} emitter
	 * @param {string} prevType
	 * @param {Entry[]} removed
	 * @param {string} nextType
	 */
	constructor(emitter, prevType, removed, nextType) {
		super()
		this.emitter = emitter
		this.prevType = prevType
		this.removed = removed
		this.nextType = nextType
	}

	redo() {
		this.emitter.typeEntry.value.changeValue(this.nextType, false)
		this.emitter.updateProperties(this.nextType)
	}
	undo() {
		this.emitter.typeEntry.value.changeValue(this.prevType, false)
		this.emitter.clearChildren()
		this.removed.forEach(child => this.emitter.addChild(() => child))
	}

}
