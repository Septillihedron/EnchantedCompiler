import { arraySection, ArraySection, booleanInput, BooleanInput, constText, docItemSection, DocItemSection, Entry, entry, EnumInput, incomplete, input, intInput, LazyLoadedSection, loadIfLazyLoadedSection, MultiType, numInput, propertiesMap, PropertiesMap, rangeInput, RangeInput, Section, stringKeyEntry, YamlElement } from "./elements.js"
import { docs } from "./schema.js"

const specialTypes = /** @type {const} */ ([
	"trigger", 
	"condition", 
	"effect", 
	"particleShape", 
	"skill", 
	"damagemodifier", 
	"reward", 
	"distribution", 
	"EntityData", 
])

/**
 * @typedef {specialTypes[number]} specialType
 */

/**
 * @param {string} type
 * @returns {type is specialType}
 */
function isSpecialType(type) {
	// @ts-ignore
	return specialTypes.includes(type)
}

/**
 * @param {import("./schema").NakedProperty} property 
 * @returns {(parent: YamlElement) => YamlElement<unknown>}
 */
export function compileProperty(property) {
	if (typeof property.type != "string") {
		return (parent) => new MultiType(parent, property)
	}
	if (isSpecialType(property.type)) {
		return compileSpecialType(property.type)
	}
	switch(property.type) {
		case "string":
			if (property.enum) return EnumInput.create(property.enum, property.default ?? "")
			return input(property.default ?? "text")
		case "number": return numInput(property.default ?? 0)
		case "integer": return intInput(property.default ?? 0)
		case "boolean": return booleanInput(property.default ?? false)
		case "range": return rangeInput()
		case "array": return compileArrayType(property)
		case "record": return compileRecordType(property)
		case "object":
			if ("properties" in property) return compileNormalObject(property)
			if ("propertiesMap" in property) return compilePropertiesMap(property)
			return constText("# not done yet")
		default:
			return compileTypeString(property.type)
	}
}

/**
 * @param {import("./schema.js").RecordProperty} property 
 */
function compileRecordType(property) {
	const value = loadIfLazyLoadedSection(compileTypeString(property.recordItem))
	return propertiesMap(key => {
		return entry(input(property.recordItem + key), value)
	})
}

/**
 * @param {import("./schema.js").NormalObjectProperty} property 
 */
function compileNormalObject(property) {
	const entries = []
	for (const [name, prop] of Object.entries(property.properties)) {
		let value = compileProperty(prop)
		if (prop.required) value = loadIfLazyLoadedSection(value)
		entries.push(stringKeyEntry(name, value, prop.description))
	}
	return parent => new LazyLoadedSection(parent, entries)
}

/**
 * @param {import("./schema.js").MapObjectProperty} property 
 */
function compilePropertiesMap(property) {
	const key = compileProperty(property.propertiesMap.key)
	const value = loadIfLazyLoadedSection(compileProperty(property.propertiesMap.value))
	return propertiesMap(_ => entry(key, value, property.propertiesMap.value.description))
}

/**
 * @param {import("./schema.js").ArrayProperty} property 
 */
function compileArrayType(property) {
	/**
	 * @type {(parent: YamlElement) => YamlElement}
	 */
	let value
	if (typeof property.items === "object") {
		value = compileProperty(property.items)
	} else if (property.items in docs.types) {
		value = compileTypeString(/** @type {import("./schema.js").NormalPropertyTypes} */(property.items))
	} else {
		value = compileProperty(/** @type {any} */({ type: property.items }))
	}
	value = loadIfLazyLoadedSection(value)
	return arraySection(value)
}

/**
 * @param {specialType} typeName
 * @returns {(parent: YamlElement) => YamlElement<DocItemSection>}
 */
export function compileSpecialType(typeName) {
	switch (typeName) {
		case "trigger": 
			return docItemSection("triggers")
		case "condition":
			return docItemSection("conditions", [
				stringKeyEntry("else", compileTypeString("EffectList"), "Effects to run if this condition is false")
			])
		case "effect": 
			return docItemSection("effects")
		case "particleShape":
			return docItemSection("particleShapes")
		case "EntityData": 
			// wrapped in function to avoid infiniely calling createEntityDataExtras
			return parent => docItemSection("entityData", createEntityDataExtras())(parent)
		case "damagemodifier":
			return docItemSection("damagemodifiers")
		case "reward":
			return docItemSection("rewards")
		case "distribution":
			return docItemSection("distributions")
		case "skill": 
			return docItemSection("skills")
	}
}

/**
 * @returns {((parent: YamlElement) => Entry)[]}
 */
function createEntityDataExtras() {
	const entityData = 
		/** @type {{properties: Record<string, import("./schema.js").Property>}} */
		(docs.types.EntityData)
	
	const properties = Object.entries(entityData.properties)
	
	return properties
		.filter(([name, _]) => name !== "type")
		.map(([name, property]) => stringKeyEntry(name, compileProperty(property), property.description))
}

/**
 * @param {import("./schema.js").NormalPropertyTypes} typeName
 */
export function compileTypeString(typeName) {
	if (isSpecialType(typeName)) {
		return compileSpecialType(typeName)
	}
	if (typeName in docs.types) {
		let type = docs.types[typeName]
		return compileProperty(type)
	}
	console.log("Not done: " + typeName)
	return constText("# not done yet " + typeName)
}

