import { ArraySection, BooleanInput, constText, DocItemSection, Entry, entry, EnumInput, incomplete, input, intInput, MultiType, numInput, PropertiesMap, RangeInput, Section, YamlElement } from "./elements.js"
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
 * @returns {YamlElement<unknown>}
 */
export function compileProperty(property) {
	if (typeof property.type != "string") {
		return new MultiType(property)
	}
	if (isSpecialType(property.type)) {
		return compileSpecialType(property.type)
	}
	switch(property.type) {
		case "string":
			if (property.enum) {
				return EnumInput.create(property.enum, property.default ?? "")
			}
			return input(property.default ?? "text")
		case "number": 
			return numInput(property.default ?? 0)
		case "integer":
			return intInput(property.default ?? 0)
		case "boolean":
			return new BooleanInput(property.default ?? false)
		case "range":
			return new RangeInput()
		case "array":
			return new ArraySection(() => {
				if (typeof property.items === "object") return compileProperty(property.items)
				if (property.items in docs.types) {
					return compileTypeString(/** @type {import("./schema.js").NormalPropertyTypes} */ (property.items))
				}
				return compileProperty(/** @type {any} */ ({ type: property.items }))
			})
		case "record":
			return new PropertiesMap(() => entry(input(property.recordItem+"0"), compileTypeString(property.recordItem)))
		case "object":
			if ("properties" in property) {
				return new Section(() => {
					const entries = []
					for (const [name, prop] of Object.entries(property.properties)) {
						const value = compileProperty(prop)
						value.setValue(prop.default)
						entries.push(entry(name, value))
					}
					return entries
				})
			}
			if ("propertiesMap" in property) {
				const propertiesMap = property.propertiesMap
				return new PropertiesMap(() => {
					const key = compileProperty(propertiesMap.key)
					const value = compileProperty(propertiesMap.value)
					value.setValue(propertiesMap.value.default)
					return entry(key, value)
				})
			}
			return constText("# not done yet")
		default:
			return compileTypeString(property.type)
	}
}

/**
 * @param {specialType} typeName
 * @returns {YamlElement<DocItemSection>}
 */
export function compileSpecialType(typeName) {
	switch (typeName) {
		case "trigger": 
			return new DocItemSection("triggers")
		case "condition":
			return new DocItemSection("conditions", [
				entry("else", compileTypeString("EffectList"))
			])
		case "effect": 
			return new DocItemSection("effects")
		case "particleShape":
			return new DocItemSection("particleShapes")
		case "EntityData": 
			const entityDataExtras = createEntityDataExtras()
			return new DocItemSection("entityData", entityDataExtras)
		case "damagemodifier":
			return new DocItemSection("damagemodifiers")
		case "reward":
			return new DocItemSection("rewards")
		case "distribution":
			return new DocItemSection("distributions")
		case "skill": 
			return new DocItemSection("skills")
	}
}

/**
 * @returns {Entry[]}
 */
function createEntityDataExtras() {
	const entityData = 
		/** @type {{properties: Record<string, import("./schema.js").Property>}} */
		(docs.types.EntityData)
	
	const properties = Object.entries(entityData.properties)
	
	return [];properties
		.filter(([name, _]) => name !== "type")
		.map(([name, property]) => entry(name, compileProperty(property)))
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

