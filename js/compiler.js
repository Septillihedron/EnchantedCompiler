import { arraySection, ArraySection, booleanInput, BooleanInput, constText, DocItemSection, Entry, entry, EnumInput, incomplete, input, intInput, LazyLoadedSection, MultiType, numInput, PropertiesMap, RangeInput, Section, stringKeyEntry, YamlElement } from "./elements.js"
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
			if (property.enum) {
				return EnumInput.create(property.enum, property.default ?? "")
			}
			return input(property.default ?? "text")
		case "number": 
			return numInput(property.default ?? 0)
		case "integer":
			return intInput(property.default ?? 0)
		case "boolean":
			return booleanInput(property.default ?? false)
		case "range":
			return parent => new RangeInput(parent)
		case "array":
			{
				let value;
				if (typeof property.items === "object") {
					value = compileProperty(property.items)
				} else if (property.items in docs.types) {
					value = compileTypeString(/** @type {import("./schema.js").NormalPropertyTypes} */ (property.items))
				} else {
					value = compileProperty(/** @type {any} */ ({ type: property.items }))
				}
				return arraySection(parent => {
					value = value(parent)
					if (value instanceof LazyLoadedSection) value.load()
					return value
				})
			}
		case "record":
			const value = parent => {
				const value = compileTypeString(property.recordItem)(parent)
				if (value instanceof LazyLoadedSection) {
					value.load()
				}
				return value
			}
			return parent => new PropertiesMap(parent, key => {
				return entry(input(property.recordItem+key), value)
			})
		case "object":
			if ("properties" in property) {
				const entries = []
				for (const [name, prop] of Object.entries(property.properties)) {
					const value = parent => {
						const value = compileProperty(prop)(parent)
						value.setValue(prop.default)
						return value
					}
					if (prop.required && value instanceof LazyLoadedSection) {
						value.load()
					}
					entries.push(stringKeyEntry(name, value, prop.description))
				}
				return parent => new LazyLoadedSection(parent, entries)
			}
			if ("propertiesMap" in property) {
				const propertiesMap = property.propertiesMap
				const key = compileProperty(propertiesMap.key)
				const value = parent => {
					const value = compileProperty(propertiesMap.value)(parent)
					value.setValue(propertiesMap.value.default)
					if (value instanceof LazyLoadedSection) {
						value.load()
					}
					return value
				}
				return parent => new PropertiesMap(parent, () => entry(key, value, propertiesMap.value.description))
			}
			return constText("# not done yet")
		default:
			return compileTypeString(property.type)
	}
}

/**
 * @param {specialType} typeName
 * @returns {(parent: YamlElement) =>YamlElement<DocItemSection>}
 */
export function compileSpecialType(typeName) {
	switch (typeName) {
		case "trigger": 
			return parent => new DocItemSection(parent, "triggers")
		case "condition":
			return parent => new DocItemSection(parent, "conditions", [
				stringKeyEntry("else", compileTypeString("EffectList"), "Effects to run if this condition is false")
			])
		case "effect": 
			return parent => new DocItemSection(parent, "effects")
		case "particleShape":
			return parent => new DocItemSection(parent, "particleShapes")
		case "EntityData": 
			return parent => new DocItemSection(parent, "entityData", createEntityDataExtras())
		case "damagemodifier":
			return parent => new DocItemSection(parent, "damagemodifiers")
		case "reward":
			return parent => new DocItemSection(parent, "rewards")
		case "distribution":
			return parent => new DocItemSection(parent, "distributions")
		case "skill": 
			return parent => new DocItemSection(parent, "skills")
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

