
export { Schema, DocItem, NakedProperty, Type, Property, Mode, PropertyTypes, NormalPropertyTypes, SpecialPropertyTypes };

type StringRecord<T> = Record<string, T>

type Schema = {
	triggers: StringRecord<DocItem>
	conditions: StringRecord<DocItem>
	effects: StringRecord<DocItem>
	
	skills: StringRecord<DocItem>
	
	damagemodifiers: StringRecord<DocItem>
	rewards: StringRecord<DocItem>
	
	distributions: StringRecord<DocItem>
	
	types: Record<NormalPropertyTypes, Type>

    categories: Record<Exclude<keyof Schema, "categories">, string[]>
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
type NormalPropertyTypes = "condition" | "effect" | "range" | "comparison" | "operation" | "attributeOperation" | "ConditionList" | "EffectList" | "SpawnData" | "BossBarData" | "bossBarFlag" | "bossBarColor" | "bossBarStyle" | "ItemAttributeData" | "EnchantmentData" | "ItemMetaData" | "ItemStackData" | "AttributeData" | "EntityData" | "VectorData" | "SoundData" | "PotionEffectData" | "ParticleData" | "BlockDataData" | "BlockDataComparison" | "LoreData" | "EnchantComparisonData" | "ItemMetaComparisonData" | "ItemComparisonData" | "entity" | "blockFace" | "trimPattern" | "trimMaterial" | "enchantment" | "potion" | "dyeColor" | "axolotlVariant" | "horseColor" | "horseStyle" | "damageCause" | "action" | "lootTable" | "biome" | "world" | "equipmentSlot" | "attribute" | "collisionMode" | "sound" | "particle" | "material"
type PropertyTypes = SpecialPropertyTypes | NormalPropertyTypes

type PropertiesMap = {
	key: Descriptable & (NormalProperty | StringProperty | NumberProperty | BooleanProperty)
	value: Property
}

type NormalProperty = {
	type: ValueOrArrayContaining<NormalPropertyTypes>
	default?: unknown
}

type ObjectProperty = ValueWithDefaultOrArrayContaining<"object", object> & (
	{ properties: StringRecord<Property> } |
	{ propertiesMap: PropertiesMap } |
	{ internal: true }
)

type RecordProperty = ValueWithDefaultOrArrayContaining<"record", object> & {
	recordItem: NormalPropertyTypes
}

type ArrayProperty = ValueWithDefaultOrArrayContaining<"array", any[]> & {
	items: PropertyTypes | Property
	minItems?: number
	maxItems?: number
}

type StringProperty = ValueWithDefaultOrArrayContaining<"string", string> & {
	minLength?: number
	maxLength?: number
	pattern?: string
	enum?: string[]
	requireEnum?: boolean
}

type NumberProperty = ValueWithDefaultOrArrayContaining<"number" | "integer", number> & {
	min?: number
	max?: number
}

type BooleanProperty = ValueWithDefaultOrArrayContaining<"boolean", boolean>

type NakedProperty = (
	ObjectProperty |
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

	if?: unknown
}

type Type =  NakedProperty & {
	description?: string
	available: true
	requireMode: true
	internal?: true
}

type _ArrayContaining<T extends PropertyTypes[]> = T | [...T, PropertyTypes]
type __ArrayContaining<T extends PropertyTypes[]> = _ArrayContaining<_ArrayContaining<T>>
type ____ArrayContaining<T extends PropertyTypes[]> = __ArrayContaining<__ArrayContaining<T>>
type ArrayContaining<T extends PropertyTypes> = [...PropertyTypes[], ...____ArrayContaining<[T]>]

type ValueOrArrayContaining<T extends PropertyTypes> = T | ArrayContaining<T>

type ValueWithDefaultOrArrayContaining<T extends PropertyTypes, D> = (
	{
		type: T,
		default?: D | null
	} | {
		type: ArrayContaining<T>
		default?: unknown
	}
)

