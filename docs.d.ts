
export { Schema, DocItem, Type, Property, Mode, PropertyTypes };

type StringRecord<T> = Record<string, T>

type Schema = {
	triggers: StringRecord<DocItem>
	conditions: StringRecord<DocItem>
	effects: StringRecord<DocItem>
	
	skills: StringRecord<DocItem>
	
	damagemodifiers: StringRecord<DocItem>
	rewards: StringRecord<DocItem>
	
	distributions: StringRecord<DocItem>
	
	types: StringRecord<Type>

    categories: Record<Exclude<keyof Schema, "categories">, string[]>
}

type Descriptable = {
	description: string
}

type PropertyMap = StringRecord<Property>

type Plugins = "Superheroes" | "EnchantedBosses" | "EnchantedCombat"
type Mode = "SELF" | "OTHER" | "LOCATION" | "ITEM" | "ALL"
type DocItem = Descriptable & {
	properties?: PropertyMap
	available: boolean
	requireMode: boolean
    supportedModes?: Mode[]
	exclusiveTo?: Plugins
}

type PropertyTypes = PropertyStringTypes | "array" | "record" | "object" | "string" | "number" | "integer" | "boolean"
type PropertyStringTypes = "string" | "range" | "comparison" | "operation" | "entity" | "block" | "item" | "enchantment" | "potion" | "biome" | "world" | "equipmentSlot" | "attribute" | "sound" | "conditions" | "effects" | string
type PropertiesMap = {
	key: PropertiesMapKey
	value: Property
}
type PropertyType = PropertyTypes | PropertyTypes[]
type PropertiesMapKey = Descriptable & {
	type: PropertyType
}
type Property = Descriptable & {
	default?: any
	required: boolean
	type: PropertyType
	min?: number
	max?: number
	minLength?: number
	maxLength?: number
	minItems?: number
	maxItems?: number
	recordItem?: PropertyTypes
	items?: PropertyType | Property
	properties?: PropertyMap
	patternProperties?: PropertyMap
	propertiesMap?: PropertiesMap
	requireEnum?: boolean
	enum?: any[]
}

type Type = Descriptable & {
	type: PropertyType
	recordItem?: PropertyTypes
	properties?: PropertyMap
	patternProperties?: PropertyMap
	propertiesMap?: PropertiesMap
	requireEnum?: boolean
	enum?: any[]
	pattern?: string
	internal?: boolean
}

