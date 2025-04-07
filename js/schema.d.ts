
export { Schema, DocItem, NakedProperty, Type, Property, Mode, PropertyTypes, NormalPropertyTypes, SpecialPropertyTypes };

export const docs: Schema

type StringRecord<T> = Record<string, T>

type Schema = {
	triggers: StringRecord<DocItem>
	conditions: StringRecord<DocItem>
	effects: StringRecord<DocItem>
	particleShapes: StringRecord<DocItem>
	skills: StringRecord<DocItem>
	damagemodifiers: StringRecord<DocItem>
	rewards: StringRecord<DocItem>
	distributions: StringRecord<DocItem>
	entityData: StringRecord<DocItem>
	
	types: Record<NormalPropertyTypes, Type>
}

type Descriptable = {
	description: string
}

type Plugins = "Superheroes" | "EnchantedBosses" | "EnchantedCombat"
type Mode = "SELF" | "OTHER" | "LOCATION" | "ITEM" | "ALL"
type DocItem = Descriptable & {
	properties?: StringRecord<Property>
	available: boolean
	requireMode: boolean
	supportedModes?: Mode[]
	exclusiveTo?: Plugins
}

type SpecialPropertyTypes = "array" | "record" | "object" | "string" | "number" | "integer" | "boolean"
type NormalPropertyTypes = "trigger" | "condition" | "effect" | "range" | "comparison" | "operation" | "attributeOperation" | "ConditionList" | "EffectList" | "SpawnData" | "BossBarData" | "bossBarFlag" | "bossBarColor" | "bossBarStyle" | "ItemAttributeData" | "EnchantmentData" | "ItemMetaData" | "ItemStackData" | "AttributeData" | "EntityData" | "VectorData" | "SoundData" | "PotionEffectData" | "ParticleData" | "BlockDataData" | "BlockDataComparison" | "LoreData" | "EnchantComparisonData" | "ItemMetaComparisonData" | "ItemComparisonData" | "entity" | "blockFace" | "trimPattern" | "trimMaterial" | "enchantment" | "potion" | "dyeColor" | "axolotlVariant" | "horseColor" | "horseStyle" | "damageCause" | "action" | "lootTable" | "biome" | "world" | "equipmentSlot" | "attribute" | "collisionMode" | "sound" | "particle" | "material"
type PropertyTypes = SpecialPropertyTypes | NormalPropertyTypes

type PropertiesMap = {
	key: Descriptable & (NormalProperty | StringProperty | NumberProperty | BooleanProperty)
	value: Property
}

type NormalProperty = {
	type: NormalPropertyTypes
	default?: unknown
}

export type MultiType = {
	type: PropertyTypes[]
	default?: unknown
}

type ObjectProperty = {
	type: "object", 
	default?: object
}

export type NormalObjectProperty = ObjectProperty & { properties: StringRecord<Property> }
export type MapObjectProperty = ObjectProperty & { propertiesMap: PropertiesMap }
export type InternalObjectProperty = ObjectProperty & { internal: true }

export type RecordProperty = {
	type: "record", 
	recordItem: NormalPropertyTypes
	default?: object
}

export type ArrayProperty = {
	type: "array"
	items: PropertyTypes | Property
	minItems?: number
	maxItems?: number
	default?: any[]
}

export type StringProperty = {
	type: "string"
	minLength?: number
	maxLength?: number
	pattern?: string
	enum?: string[]
	requireEnum?: boolean
	default?: string
}

export type NumberProperty = {
	type: "number" | "integer"
	min?: number
	max?: number
	default?: number
}

export type BooleanProperty = {
	type: "boolean"
	default?: boolean
}

type NakedProperty = (
	MultiType | 
	(
		NormalObjectProperty |
		MapObjectProperty |
		InternalObjectProperty
	) |
	RecordProperty |
	ArrayProperty |
	StringProperty |
	NumberProperty |
	BooleanProperty |
	NormalProperty
)

type Property = NakedProperty & {
	description: string
	required: boolean
}

type Type = NakedProperty & {
	description?: string
	available: true
	requireMode: true
	internal?: true
}
