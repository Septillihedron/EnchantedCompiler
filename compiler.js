import { ArraySection, DocItemSection, MultiType, PropertiesMap, Section, entry } from "./elements/section-elements.js"
import { EnumInput, RangeInput, constText, input, intInput, numInput } from "./elements/value-elements.js"
import { YamlElement } from "./elements/yaml-element.js"
import { docs } from "./schema.js"


const booleanEnum = ["true", "false"]

/**
 * @param {import("./schema").NakedProperty} property 
 * @returns {YamlElement<unknown>}
 */
export function compileProperty(property) {
    if (typeof property.type != "string") {
        return new MultiType(property)
    }
    switch(property.type) {
        case "string":
            if (property.enum) {
                return new EnumInput(property.enum, property.default ?? "")
            }
            return input(property.default ?? "text")
        case "number": 
            return numInput(property.default ?? 0)
        case "integer":
            return intInput(property.default ?? 0)
        case "boolean":
            return new EnumInput(booleanEnum, property.default?.toString() ?? "")
        case "range":
            return new RangeInput()
        case "array":
            return new ArraySection(() => {
                if (typeof property.items === "object") return compileProperty(property.items)
                if (docs.categories.types.includes(property.items)) {
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
        case "trigger": 
            return new DocItemSection("triggers", [
                entry("conditions", compileTypeString("ConditionList"))
            ])
        case "condition":
            return new DocItemSection("conditions", [
                entry("else", compileTypeString("EffectList"))
            ])
        case "effect": 
            return new DocItemSection("effects")
        default:
            return compileTypeString(property.type)
    }
}

/**
 * @param {import("./schema.js").NormalPropertyTypes} typeName
 */
export function compileTypeString(typeName) {
    if (typeName in docs.types) {
        let type = docs.types[typeName]
        if (type.internal) {
            return compileProperty({ type: typeName })
        }
        return compileProperty(type)
    }
    console.log("Not done: " + typeName)
    return constText("# not done yet")
}

