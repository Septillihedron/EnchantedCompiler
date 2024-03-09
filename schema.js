/** @type {import("./docs").Schema} */
const docs = {
    triggers: {
        DAMAGEDENTITY: {
            description: "Triggers when the user damage an entity. \nThe target entity will be set as the damaged entity",
            available: true,
            requireMode: true
        },
        DAMAGEDBYENTITY: {
            description: "Triggers when an entity damages the user. \nThe target entity will be set as the damaging entity",
            available: true,
            requireMode: true
        },
        DAMAGEDBYPROJECTILE: {
            description: "Triggers when an entity damages the user. \nIf the damaging entity is a projectile, the target entity will be set as the source of the projectile. \nOtherwise, The target entity will be set as the damaging entity",
            properties: {
                onlyProjectiles: {
                    description: "If true, will only trigger if the damaging entity is a projectile. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        DAMAGEDENTITYWITHPROJECTILE: {
            description: "Triggers when the user damages an entity directly or with a projectile. \nThe target entity will be set as the damaged entity",
            properties: {
                onlyProjectiles: {
                    description: "If true, will only trigger if the damage is from a projectile. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        LAUNCHPROJECTILE: {
            description: "Triggers when the user launched a projectile. \nThe target entity will be set as the launched projectile",
            available: true,
            requireMode: true
        },
        PROJECTILEHIT: {
            description: "Triggers when a projectile shot by the user landed and/or hits an entity. \nThe target entity will be set as the projectile",
            available: true,
            requireMode: true
        },
        DAMAGED: {
            description: "Triggers when the user gets damaged",
            properties: {
                causes: {
                    description: "The causes of damage. Defaults to all damage causes",
                    required: false,
                    type: "array",
                    items: "damageCause",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        SNEAK: {
            description: "Triggers when the user sneaks",
            available: true,
            requireMode: true
        },
        TOGGLEGLIDE: {
            description: "Triggers when the user glides or unglides",
            available: true,
            requireMode: true
        },
        PLAYERJUMP: {
            description: "Triggers when the user jumps",
            available: true,
            requireMode: true
        },
        LOOP: {
            description: "Triggers periodically every couple of ticks",
            properties: {
                period: {
                    description: "The delay period in seconds (1 = 20 ticks). \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            available: true,
            requireMode: true
        },
        COMBAT: {
            description: "Triggers when the user damages an entity or gets damaged by an entity. \nThe target entity will be set as the damaged entity or the damaging entity respectively",
            available: true,
            requireMode: true
        },
        DEATH: {
            description: "Triggers when the user is killed. \nThe target entity will be set as the killer if it exist",
            available: true,
            requireMode: true
        },
        SPAWN: {
            description: "Triggers when the user spawns",
            available: true,
            requireMode: true
        },
        TARGET: {
            description: "Triggers when the user targets an entity. \nThe target entity will be set as the target",
            available: true,
            requireMode: true
        },
        TARGETED: {
            description: "Triggers when the user is targeted by an entity. \nThe target entity will be set as the entity that targeted the user",
            available: true,
            requireMode: true
        },
        VEHICLE: {
            description: "Deprecated, use ENTERVEHICLE instead. \nTriggers when the user enters a vehicle. \nThe target entity will be set as the vehicle",
            available: true,
            requireMode: true
        },
        ENTERVEHICLE: {
            description: "Triggers when the user enters a vehicle. \nThe target entity will be set as the vehicle",
            available: true,
            requireMode: true
        },
        BECOMEVEHICLE: {
            description: "Triggers when an entity enters the user, thus using the user as a vehicle. \nThe target entity will be set as the entering entity",
            available: true,
            requireMode: true
        },
        EXITVEHICLE: {
            description: "Triggers when the user exits a vehicle. \nThe target entity will be set as the vehicle",
            available: true,
            requireMode: true
        },
        PLAYERJOIN: {
            description: "Triggers when the user joins the server",
            available: true,
            requireMode: true
        },
        PLAYERQUIT: {
            description: "Triggers when the user exits the server",
            available: true,
            requireMode: true
        },
        PROJECTILECOMBAT: {
            description: "Acts like the DAMAGEDBYPROJECTILE and DAMAGEDENTITYWITHPROJECTILE triggers combined",
            properties: {
                onlyProjectiles: {
                    description: "If true, will only trigger if the damage is from a projectile. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        TAME: {
            description: "Triggers when the user tames an entity. \nThe target entity will be set as the tamed entity",
            available: true,
            requireMode: true
        },
        INTERACT: {
            description: "Triggers when the user interacts with a block or air",
            properties: {
                actions: {
                    description: "The interactions that will trigger this trigger. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "action",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        KILL: {
            description: "Triggers when the user kills an entity. \nThe target entity will be set as the killed entity",
            available: true,
            requireMode: true
        },
        POTIONEFFECT: {
            description: "Triggers when a potion effect is applied to the user",
            properties: {
                effects: {
                    description: "The potion effects that will trigger this trigger. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "potion",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        INTERACTENTITY: {
            description: "Triggers when the user right clicks an entity. \nThe target entity will be set as the interacted entity",
            available: true,
            requireMode: true
        },
        RIPTIDE: {
            description: "Triggers when the user activates the riptide enchantment",
            available: true,
            requireMode: true
        },
        CHANGEMAINHAND: {
            description: "Triggers when the user changes where the main hand slot is (i.e. scrolls or hits a number). \nThe item will be set as the item in the new slot",
            available: true,
            requireMode: true
        },
        EQUIPARMOR: {
            description: "Triggers when the user equips an armour. \nThe item will be set as the equiped item",
            available: true,
            requireMode: true
        },
        SPRINT: {
            description: "Triggers when the user starts or stops sprinting",
            available: true,
            requireMode: true
        },
        BLOCKBREAK: {
            description: "Triggers when the user breaks a block. \nThe location will be set as the location of the broken block",
            available: true,
            requireMode: true
        },
        TOTEM: {
            description: "Triggers when the user activates a totem. \nThe target entity will be set as the killer of the user",
            available: true,
            requireMode: true
        },
        CONSUME: {
            description: "Triggers when the user consumed an item",
            available: true,
            requireMode: true
        },
        MOVE: {
            description: "Triggers when the user moves. \nThe location will be set as the location the user moves to",
            available: true,
            requireMode: true
        },
        SWAPHANDS: {
            description: "Triggers when the user swaps hands",
            available: true,
            requireMode: true
        }
    },
    conditions: {
        HEALTH: {
            description: "Checks if the hp percentage of the user or target entity is in the range",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                healthPercentange: {
                    description: "The health percentage range to check againts. \nDefaults to \"0 - 100\"",
                    required: false,
                    type: "range",
                    default: "0 - 100"
                },
                minimumHealthPercentage: {
                    description: "Deprecated, use `healthPercentange` instead. The minimum hp percentage. \nDefaults to 0",
                    required: false,
                    type: "number",
                    min: 0,
                    max: 100,
                    default: 0
                },
                maximumHealthPercentage: {
                    description: "Deprecated, use `healthPercentange` instead. The maximum hp percentage. \nDefaults to 100",
                    required: false,
                    type: "number",
                    min: 0,
                    max: 100,
                    default: 100
                }
            },
            available: true,
            requireMode: true
        },
        CHANCE: {
            description: "A chance for this condition to be true",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            properties: {
                chance: {
                    description: "The chance that is used. \nDefaults to 1",
                    required: false,
                    type: "number",
                    min: 0,
                    max: 1,
                    default: 1
                }
            },
            available: true,
            requireMode: true
        },
        COOLDOWN: {
            description: "Checks if the time since the get last effect triggered is after the cooldown",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            properties: {
                cooldown: {
                    description: "The cooldown time that is used in seconds. \nDefaults to 10",
                    required: false,
                    type: "number",
                    default: 10
                }
            },
            available: true,
            requireMode: true
        },
        ENTITY: {
            description: "Checks the target entity against this whitelist/blacklist",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                whitelist: {
                    description: "If true, the entities property will whitelist. If false, the entities property will blacklist. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                entities: {
                    description: "The list of entities to be whitelisted/blacklisted. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "entity",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        SIZE: {
            description: "Checks if the size of the user or target entity is in the range (for slimes, magma cubes, and phantoms)",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                minimumSize: {
                    description: "The minimum size. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                maximumSize: {
                    description: "The maximum size. \nDefaults to 4",
                    required: false,
                    type: "integer",
                    default: 4
                }
            },
            available: true,
            requireMode: true
        },
        NOT: {
            description: "Inverts the inside condition",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION",
                "ITEM"
            ],
            properties: {
                condition: {
                    description: "The condition to invert",
                    required: true,
                    type: "condition"
                }
            },
            available: true,
            requireMode: true
        },
        SNEAK: {
            description: "Checks if the player or entity is shifting",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                sneak: {
                    description: "If true, checks if the entity is shifting. If false, it checks the opposite. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        TIME: {
            description: "Checks the relative ingame time (time of day) of the world that the player is in against the range. Measured in milli-hours or hours*1000",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            properties: {
                minimumTime: {
                    description: "Deprecated. The minimum time. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                maximumTime: {
                    description: "Deprecated. The maximum time. \nDefaults to 24000",
                    required: false,
                    type: "integer",
                    default: 24000
                },
                time: {
                    description: "A range for time. \nDefaults to \"0 - 24000\"",
                    required: false,
                    type: "range",
                    default: "0 - 24000"
                }
            },
            available: true,
            requireMode: true
        },
        ONGROUND: {
            description: "Checks if the user or target entity is on the ground",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                grounded: {
                    description: "If true, checks if the entity is on the ground. If false, it checks the opposite. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        GLIDING: {
            description: "Checks if the user gliding",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            properties: {
                shouldGlide: {
                    description: "Deprecated, use `glide` instead. If true, checks if the entity is gliding. If false, it checks the opposite. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                glide: {
                    description: "If true, checks if the entity is gliding. If false, it checks the opposite. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        BIOME: {
            description: "Checks if the biome that the user, target entity, or location is in is one of the listed biomes",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                biomes: {
                    description: "The list of biomes. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "biome",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        COMPARISON: {
            description: "Compares a variable",
            available: false,
            properties: {
                comparison: {
                    description: "The comparison to use. \nDefaults to \"EQUALS\"",
                    required: false,
                    type: "comparison",
                    default: "EQUALS"
                },
                value: {
                    description: "The value to compare against. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                }
            },
            requireMode: true
        },
        METADATA: {
            description: "Compares a user defined variable",
            available: true,
            properties: {
                comparison: {
                    description: "The comparison to use. \nDefaults to \"EQUALS\"",
                    required: false,
                    type: "comparison",
                    default: "EQUALS"
                },
                value: {
                    description: "The value to compare against. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                },
                variable: {
                    description: "The variable to compare",
                    required: true,
                    type: "string"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        NPC: {
            description: "Checks if the user or target entity is an npc",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                isNPC: {
                    description: "If true, checks if the entity is an npc. If false, it checks the opposite. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        WEATHER: {
            description: "Checks if the world that the user is in has a storm",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            available: true,
            requireMode: true
        },
        INBLOCK: {
            description: "Checks if the user or target entity is in one of the listed blocks",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                blocks: {
                    description: "The list of blocks. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "material",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        WORLD: {
            description: "Checks if the world that the user, target entity, or location is in is one of the listed worlds",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                worlds: {
                    description: "The list of worlds. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "world",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        TAMED: {
            description: "Checks if the target entity is tamed",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                checkOwner: {
                    description: "If true, also checks if the user is the owner. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        FLYING: {
            description: "Checks if the user or target entity is flying",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        FLY: {
            description: "Checks if the user or target entity is flying. Alias for FLYING",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        HEIGHT: {
            description: "Checks if the user or target entity y coordinate is in the range",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                height: {
                    description: "The range in blocks. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                }
            },
            available: true,
            requireMode: true
        },
        BLOCK: {
            description: "Checks if the location has one of the listed blocks",
            supportedModes: [
                "ALL",
                "LOCATION"
            ],
            properties: {
                materials: {
                    description: "The list of blocks. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "material",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        ITEM: {
            description: "Checks the item or the item in the declared slot against the declared item",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "ITEM"
            ],
            properties: {
                slot: {
                    description: "The slot to check. \nDefaults to \"HAND\"",
                    required: false,
                    type: [
                        "equipmentSlot",
                        "integer"
                    ],
                    default: "HAND"
                },
                item: {
                    description: "The item to check against",
                    required: true,
                    type: "ItemComparisonData"
                }
            },
            available: true,
            requireMode: true
        },
        OR: {
            description: "ORs all the conditions inside",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION",
                "ITEM"
            ],
            requireMode: false,
            properties: {
                conditions: {
                    description: "The conditions to OR. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                }
            },
            available: true
        },
        VISIBILITY: {
            description: "Checks if the user has a direct line of sight to the target entity",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                maxDistance: {
                    description: "The maximum distance to the target entity. \nDefaults to 16",
                    required: false,
                    type: "number",
                    default: 16
                }
            },
            available: true,
            requireMode: true
        },
        TEMPERATURE: {
            description: "Checks if the location or the location of the user or target entity is in the range",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                temperature: {
                    description: "The range of tempreture from -1 to 1. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                }
            },
            available: true,
            requireMode: true
        },
        DISTANCE: {
            description: "Checks if the distance squared between the user and target entity is in the range",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                distance: {
                    description: "The squared distance range in blocks. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                }
            },
            available: true,
            requireMode: true
        },
        SHIELDED: {
            description: "Checks if the user is blocking",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            available: true,
            requireMode: true
        },
        WRAPPER: {
            description: "Checks if all inside conditions are true",
            requireMode: false,
            available: false,
            properties: {
                conditions: {
                    description: "The conditions to check. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                }
            }
        },
        ITEMWRAPPER: {
            description: "Checks if all inside conditions are true. \nThe item will be set as the item in the specified slot of the user or target entity",
            requireMode: false,
            available: true,
            properties: {
                conditions: {
                    description: "The conditions to check. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                slot: {
                    description: "The slot for the item. \nDefaults to \"HAND\"",
                    required: false,
                    type: [
                        "equipmentSlot",
                        "integer"
                    ],
                    default: "HAND"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ]
        },
        SWIMMING: {
            description: "Checks if the user or target entity is swimming",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        SPEED: {
            description: "Checks whether the speed of the user or target entity is in the range",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                speed: {
                    description: "The speed range to check againts",
                    required: true,
                    type: "range"
                }
            },
            available: true,
            requireMode: true
        },
        SHOOTER: {
            description: "Checks whether the shooter of the `OTHER` entity is the `SELF` entity",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        HERO: {
            description: "Checks the user or target entity against the list of heroes\n\nOnly available if you have the Superheroes plugin",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            exclusiveTo: "Superheroes",
            properties: {
                heroes: {
                    description: "The list of heroes. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "string",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        BOSS: {
            description: "Checks if the user or target entity one of the listed bosses\n\nOnly available if you have the EnchantedBosses plugin",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            exclusiveTo: "EnchantedBosses",
            properties: {
                entities: {
                    description: "The list of bosses. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "string",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        SKILLITEM: {
            description: "Checks if the user has the skill item in one of the skill item slots\n\nOnly available if you have the EnchantedCombat plugin",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            exclusiveTo: "EnchantedCombat",
            properties: {
                skillItem: {
                    description: "The skill item to check for",
                    required: true,
                    type: "string"
                }
            },
            available: true,
            requireMode: true
        },
        ITEMLEVEL: {
            description: "Checks if the user has the item level in the range\n\nOnly available if you have the EnchantedCombat plugin",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            exclusiveTo: "EnchantedCombat",
            properties: {
                itemLevel: {
                    description: "The range of item levels. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                }
            },
            available: true,
            requireMode: true
        }
    },
    effects: {
        DAMAGE: {
            description: "Damages the user or the target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                damage: {
                    description: "The amount damage that will be dealt. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                },
                cause: {
                    description: "The type of damage that will be dealt. \nDefaults to \"CUSTOM\"",
                    required: false,
                    type: "damageCause",
                    default: "CUSTOM"
                }
            },
            available: true,
            requireMode: true
        },
        WRAPPER: {
            description: "Acts like a trigger",
            available: false,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                }
            }
        },
        AOE: {
            description: "Acts like a trigger. \nTriggers for every entity in the range. \nThe target entity will be set to the entity this trigger triggers for",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                radius: {
                    description: "Half the side length of the box. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                }
            },
            supportedModes: [
                "ALL",
                "SELF"
            ]
        },
        VELOCITY: {
            description: "Modifies the velocity of the user or target entity. Same as FLING",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                velocity: {
                    description: "The number on the right side of the operation. The same as `value`. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                component: {
                    description: "The component(s) to modify, `ALL` means all components (ex. `XZ` would only modify the X and Z velocities and leave Y unmodified)",
                    required: true,
                    type: "string",
                    pattern: "^(([XYZ]{0,3})|(ALL))$"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        CANCEL: {
            description: "Cancels the event that triggered this effect",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            available: true,
            requireMode: true
        },
        GLIDING: {
            description: "Sets the gliding mode of the user or target entity (works even if an Elytra is not equipped)",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                glide: {
                    description: "If true, makes the user or target entity glide. If false, makes the user or target entity stop gliding. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        WAIT: {
            description: "Acts like a trigger. \nWaits a duration of time before it triggers",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                delay: {
                    description: "The delay time in seconds (1 is 20 ticks). \nDefaults to 1",
                    required: true,
                    type: "number",
                    default: 1
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION",
                "ITEM"
            ]
        },
        POTION: {
            description: "Applies the potion effect to the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                potion: {
                    description: "The potion effect. \nDefaults to {\"type\":\"REGENERATION\",\"potency\":1,\"duration\":10}",
                    required: false,
                    type: "PotionEffectData",
                    default: {
                        type: "REGENERATION",
                        potency: 1,
                        duration: 10
                    }
                }
            },
            available: true,
            requireMode: true
        },
        WEB: {
            description: "Change the block at target entity for a duration of time, then change it back. Same as BLOCKENTITY",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                duration: {
                    description: "The duration of time that the block will be there in seconds (1 is 20 ticks). If less than 0, the block will not change back. \nDefaults to -1",
                    required: false,
                    type: "number",
                    default: -1
                },
                block: {
                    description: "The block to change to. \nDefaults to \"COBWEB\"",
                    required: false,
                    type: "material",
                    default: "COBWEB"
                }
            },
            available: true,
            requireMode: true
        },
        BLOCKENTITY: {
            description: "Change the block at target entity for a duration of time, then change it back. Same as WEB",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                duration: {
                    description: "The duration of time that the block will be there in seconds (1 is 20 ticks). If less than 0, the block will not change back. \nDefaults to -1",
                    required: false,
                    type: "number",
                    default: -1
                },
                block: {
                    description: "The block to change to. \nDefaults to \"COBWEB\"",
                    required: false,
                    type: "material",
                    default: "COBWEB"
                }
            },
            available: true,
            requireMode: true
        },
        ARROW: {
            description: "Shoot an arrow to the location of the target entity",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                velocity: {
                    description: "Used to determine the time that it takes to hit by (pythagoras distance)/velocity. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                entity: {
                    description: "The entity launch. \nDefaults to \"arrow\"",
                    required: false,
                    type: "entity",
                    default: "arrow"
                },
                damage: {
                    description: "If projectile entity is an arrow, the damage that the arrow will do. \nDefaults to 4",
                    if: {
                        entity: {
                            const: "arrow"
                        }
                    },
                    required: false,
                    type: "integer",
                    default: 4
                },
                fireTicks: {
                    description: "The amount of ticks the projectile will be on fire. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                }
            },
            available: true,
            requireMode: true
        },
        MODIFY: {
            description: "Modifies a variable, either user defined or not",
            available: false,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            requireMode: true
        },
        ATTRIBUTE: {
            description: "Modifies an attribute owned by the user or target entity",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                attribute: {
                    description: "The attribute to modify. The name of the attribute should exclude the \"GENERIC_\" in the begining",
                    required: true,
                    type: "attribute"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        BREAKBLOCK: {
            description: "Not implemented yet",
            available: false,
            requireMode: true
        },
        LAUNCH: {
            description: "Launches an entity. \nMode `OTHER`: Launched in the direction of the target entity. \nMode `SELF`: Launched in the direction the user is facing",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                entity: {
                    description: "The entity to launch. \nDefaults to \"FIREBALL\"",
                    required: false,
                    type: "entity",
                    default: "FIREBALL"
                },
                velocity: {
                    description: "The speed to launch at. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            available: true,
            requireMode: true
        },
        MESSAGE: {
            description: "Sends a chat message to the user or target player",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                message: {
                    description: "The message to send. The first occurence of \"player\" will be replaced by the player name",
                    required: true,
                    type: "string"
                }
            },
            available: true,
            requireMode: true
        },
        PICKUP: {
            description: "Pick up the target entity and places it on the user's head",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        REPULSE: {
            description: "Repulse the target entity",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                velocity: {
                    description: "The speed to repulse the target entity. Positive value means away from the user. Negative value means into the user. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                add: {
                    description: "Whether to add velocity or set it. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        RESIZE: {
            description: "Resizes the user or target entity (for slimes, magma cubes, and phantoms)",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                retainHealth: {
                    description: "For slimes and magma cubes. If true, make the entity retain the previous health, if more than the new max health, it sets it to the new max health. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        SMITE: {
            description: "Smites the user or target entity. Same as LIGHTNING",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                fake: {
                    description: "If true, it only makes the effect of lightning, not summoning an actual lightning. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        LIGHTNING: {
            description: "Smites the user or target entity. Same as SMITE",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                fake: {
                    description: "If true, it only makes the effect of lightning, not summoning an actual lightning. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        FLING: {
            description: "Modifies the velocity of the user or target entity. Same as VELOCITY",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                velocity: {
                    description: "The number on the right side of the operation. The same as `value`. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                component: {
                    description: "The component(s) to modify, `ALL` means all components (ex. `XZ` would only modify the X and Z velocities and leave Y unmodified)",
                    required: true,
                    type: "string",
                    pattern: "^(([XYZ]{0,3})|(ALL))$"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        METADATA: {
            description: "Modifies a user defined variable",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                variable: {
                    description: "The name of the variable",
                    required: true,
                    type: "string"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        GIVEITEM: {
            description: "Gives the user or target entity an item",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                dropIfFull: {
                    description: "If true, drops the items that did not fit into the inventory. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                item: {
                    description: "The item to give",
                    required: true,
                    type: "ItemStackData"
                }
            },
            available: true,
            requireMode: true
        },
        SCRAMBLEINVENTORY: {
            description: "Scrambles the inventory of the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        RANDOMTELEPORT: {
            description: "Teleports the user or target entity a random distance",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                minDistance: {
                    description: "The minimum distance. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                },
                maxDistance: {
                    description: "The maximum distance. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                }
            },
            available: true,
            requireMode: true
        },
        PROJECTILE: {
            description: "Shoots an entity from the user. \nMode `SELF`: Shoots in the direction that the user is looking. \nMode `OTHER`: Shoots at the target entity. \nMode `LOCATION`: Shoots at the location",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                entity: {
                    description: "The entity to shoot",
                    required: true,
                    type: "EntityData"
                },
                velocity: {
                    description: "The shooting velocity. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            available: true,
            requireMode: true
        },
        SOUND: {
            description: "Plays a sound at the location or at the location of the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                sound: {
                    description: "The sound data",
                    required: true,
                    type: "SoundData"
                }
            },
            available: true,
            requireMode: true
        },
        COMMAND: {
            description: "Excecutes a list of commands",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                executor: {
                    description: "The executor that will execute the command. \nDefaults to \"CONSOLE\"",
                    required: false,
                    type: "string",
                    enum: [
                        "CONSOLE",
                        "PLAYER"
                    ],
                    default: "CONSOLE"
                },
                commands: {
                    description: "The list of commands to execute. \"%self_name%\" will be interpreted as the user if the user is a player. Otherwise, \"%target_name%\" will be interpreted as the target entity if the target entity is a player. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "string",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        LUNGE: {
            description: "Applies an acceleration to the user or the target entity based on the direction the user is looking",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                horizontalVelocity: {
                    description: "The scale to scale the horizontal components of the velocity vector. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                },
                verticalVelocity: {
                    description: "The scale to scale the vertical components of the velocity vector. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                },
                overwrite: {
                    description: "If true, sets the velocity vector. If false, adds to the velocity vector. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        NEAREST: {
            description: "Acts like a trigger. \nTriggers for the nearest entity in the radius. \nThe target entity will be set as the nearest entity",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                radius: {
                    description: "Half the side length of the box. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ]
        },
        SHOOTER: {
            description: "Acts like a trigger. \nTriggers for the target entity. \nThe new target entity will be set as the source of the projectile if the old target entity is a projectile, otherwise the target entity will remain the same",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                onlyProjectiles: {
                    description: "If true, only triggers if the original target entity is a projectile. If false, keep the target entity the same. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            supportedModes: [
                "ALL",
                "OTHER"
            ]
        },
        KNOCKBACK: {
            description: "Applies a velocity to the target entity in the direction that the user is looking as the direction",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            properties: {
                multiplier: {
                    description: "The velocity to apply. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                overwriteCurrentVelocity: {
                    description: "If true, sets the velocity of the target entity. If false, adds to the original velocity of the target entity. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        IGNITE: {
            description: "Sets the user or target entity on fire. Same as FIRE",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                fireTicks: {
                    description: "The amount of time the fire will last (in ticks). \nDefaults to 40",
                    required: false,
                    type: "integer",
                    default: 40
                }
            },
            available: true,
            requireMode: true
        },
        FIRE: {
            description: "Sets the user or target entity on fire. Same as IGNITE",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                fireTicks: {
                    description: "The amount of time the fire will last (in ticks). \nDefaults to 40",
                    required: false,
                    type: "integer",
                    default: 40
                }
            },
            available: true,
            requireMode: true
        },
        TARGET: {
            description: "If the user is a mob, sets the target of the user to the target entity",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        SWAP: {
            description: "Swaps the position of the user and target entity",
            supportedModes: [
                "ALL",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        LOCATIONCUBE: {
            description: "Acts like a trigger. \nTriggers for every location in the cube around the user or target entity. \nThe location will be set as the location the trigger triggers for",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                verticalRadius: {
                    description: "Half of the vertical side length of the cube. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                horizontalRadius: {
                    description: "Half of the horizontal side length of the cube. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                offset: {
                    description: "The offset from the original location. \nDefaults to {\"x\":0,\"y\":0,\"z\":0}",
                    required: false,
                    type: "VectorData",
                    default: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ]
        },
        PLACEBLOCK: {
            description: "Replaces a block at the location for an amount of time. Retains the original block data",
            supportedModes: [
                "ALL",
                "LOCATION"
            ],
            properties: {
                material: {
                    description: "The block to replace to, will override the \"block\" property if it exist. \nDefaults to null",
                    required: false,
                    type: "material",
                    default: null
                },
                block: {
                    description: "The data for the block to replace to, requires the \"material\" property to not exist or be null. \nDefaults to {}",
                    required: false,
                    type: "BlockDataData",
                    default: {}
                },
                updatePhysics: {
                    description: "If false, does not update neighboring blocks. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                revertsAfter: {
                    description: "Time before the block reverts to the original block in seconds (1 is 20 ticks). If less than or equal to 0, does not revert the original block. \nDefaults to -1",
                    required: false,
                    type: "number",
                    default: -1
                }
            },
            available: true,
            requireMode: true
        },
        SPAWNENTITY: {
            description: "Spawns an entity at the location or the location of the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                entity: {
                    description: "The entity to spawn",
                    required: true,
                    type: "EntityData"
                }
            },
            available: true,
            requireMode: true
        },
        REMOVEPOTION: {
            description: "Removes potion effects from the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                types: {
                    description: "The list of potion types. If empty, removes all potion effect. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "potion",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        TELEPORT: {
            description: "Teleports the user to the location or the location of the target entity",
            supportedModes: [
                "ALL",
                "OTHER",
                "LOCATION"
            ],
            available: true,
            requireMode: true
        },
        RAYTRACE: {
            description: "Acts like a trigger. \nSends out a raytrace that collides with entities or blocks in the direction that the user or target entity is looking. \nThe target entity will be set as the collided entity. \nThe location will be set as the location of the collided block",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                maxDistance: {
                    description: "The maximum distance the raytrace can collide. \nDefaults to 10",
                    required: false,
                    type: "integer",
                    default: 10
                },
                alwaysHit: {
                    description: "If true, if the raytrace does not hit anything, the location will be set as the maxDistance in the direction the user is looking. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                ignorePassanles: {
                    description: "Whether to ignore passable blocks (ex. tall grass, signs, fluids). \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                raySize: {
                    description: "The collision size of the ray. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                collisionMode: {
                    description: "The collision behavior when a fluid gets hit by the raytrace. \nDefaults to \"NEVER\"",
                    required: false,
                    type: "collisionMode",
                    default: "NEVER"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ]
        },
        TIMER: {
            description: "Acts like a trigger. \nTriggers for a number of times with a period and initial delay. \nTarget items will be forwarded",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                delay: {
                    description: "The initial delay in seconds (1 is 20 ticks). \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                period: {
                    description: "The delay between triggers in seconds (1 is 20 ticks). \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                numberOfRepeats: {
                    description: "The number of times this trigger will trigger. \nDefaults to 1",
                    required: false,
                    type: "integer",
                    default: 1
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION",
                "ITEM"
            ]
        },
        REMOVEENTITY: {
            description: "Removes the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            available: true,
            requireMode: true
        },
        ITEMSTACK: {
            description: "Acts like a trigger. \nTriggers for the item in the slot. \nThe item will be set to the item in the slot",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                slot: {
                    description: "The slot of the item. \nDefaults to \"HAND\"",
                    required: false,
                    type: [
                        "equipmentSlot",
                        "integer"
                    ],
                    default: "HAND"
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ]
        },
        ITEMAMOUNT: {
            description: "Modifies the item amount",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            supportedModes: [
                "ALL",
                "ITEM"
            ],
            requireMode: true
        },
        SWITCHEROO: {
            description: "Acts like a trigger. \nThe target entity will be set as the original user.\n the user will be set as the original target entity",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                }
            },
            supportedModes: [
                "ALL",
                "OTHER"
            ]
        },
        LOCATIONOFFSET: {
            description: "Acts like a trigger. \nTriggers the location of the user or target entity after being offseted. \nThe location will be set as the location the trigger triggers for",
            available: true,
            requireMode: false,
            properties: {
                conditions: {
                    description: "The list of conditions. \nDefaults to {}",
                    required: false,
                    type: "ConditionList",
                    default: {}
                },
                effects: {
                    description: "The list of effects. \nDefaults to {}",
                    required: false,
                    type: "EffectList",
                    default: {}
                },
                offset: {
                    description: "The offset from the original location. \nDefaults to {\"x\":0,\"y\":0,\"z\":0}",
                    required: false,
                    type: "VectorData",
                    default: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ]
        },
        BONEMEAL: {
            description: "Applies bonemeal to the location or location of the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER",
                "LOCATION"
            ],
            properties: {
                faces: {
                    description: "The list of faces to apply bonemeal from. \nDefaults to [\"UP\",\"DOWN\",\"NORTH\",\"SOUTH\",\"EAST\",\"WEST\"]",
                    required: false,
                    type: "array",
                    items: "blockFace",
                    default: [
                        "UP",
                        "DOWN",
                        "NORTH",
                        "SOUTH",
                        "EAST",
                        "WEST"
                    ]
                }
            },
            available: true,
            requireMode: true
        },
        HUNGER: {
            description: "Modifies the hunger value of the user or target entity",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        LOSETARGET: {
            description: "Make the user lose interest in the current target",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            available: true,
            requireMode: true
        },
        VEINMINER: {
            description: "Breaks surrounding blocks around a location recursively",
            supportedModes: [
                "ALL",
                "LOCATION"
            ],
            properties: {
                types: {
                    description: "The list of types that can be broken",
                    required: true,
                    type: "array",
                    items: "material"
                },
                delay: {
                    description: "The delay between each break is seconds (1 is 20 ticks). \nDefaults to 0.5",
                    required: false,
                    type: "number",
                    default: 0.5
                },
                allowMultiTypeVein: {
                    description: "If true, the vein will break all types in the list instead of only breaking the same type of block as the one in original location. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                limit: {
                    description: "The max recursion depth ie. the radius from the start. \nDefaults to 10",
                    required: false,
                    type: "integer",
                    default: 10
                }
            },
            available: true,
            requireMode: true
        },
        ACTIONBAR: {
            description: "Sends an action bar to the user or target entity",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            properties: {
                message: {
                    description: "The message to send, instances of the text \"<player>\" will be changed to the name of the player that this is sent",
                    required: true,
                    type: "string"
                }
            },
            available: true,
            requireMode: true
        },
        FREEZE: {
            description: "Modifies the user or target entity freezing ticks (ie. powdered snow effect)",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        HEALTH: {
            description: "Modifies the health of the user or target entity. Also rounds down to the nearest hitpoint/half a heart",
            available: true,
            properties: {
                operation: {
                    description: "The operation to do",
                    required: true,
                    type: "operation"
                },
                value: {
                    description: "The number on the right side of the operation. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            requireMode: true
        },
        FLY: {
            description: "Sets the ability for the creative flight. Alias for FLYING \n\nModes: \nSELF: For the user;\nOTHER: For the target entity.",
            supportedModes: [
                "SELF",
                "OTHER"
            ],
            properties: {
                fly: {
                    description: "Whether to set it to enable or disable creative flight. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        FLYING: {
            description: "Sets the ability for the creative flight. Alias for FLY \n\nModes: \nSELF: For the user;\nOTHER: For the target entity.",
            supportedModes: [
                "SELF",
                "OTHER"
            ],
            properties: {
                fly: {
                    description: "Whether to set it to enable or disable creative flight. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        MINION: {
            description: "Spawns bosses on the location of the user or target entity\n\nOnly available if you have the EnchantedBosses plugin",
            supportedModes: [
                "ALL",
                "SELF",
                "OTHER"
            ],
            exclusiveTo: "EnchantedBosses",
            properties: {
                amount: {
                    description: "The amount of minions to spawn. \nDefaults to 1",
                    required: false,
                    type: "integer",
                    default: 1
                },
                spawn: {
                    description: "The name of the boss to spawn",
                    required: true,
                    type: "string"
                },
                spawnOnTarget: {
                    description: "Whether or not to spawn on the target entity when using mode \"OTHER\". \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        RIDER: {
            description: "Spawns a boss that rides the user\n\nOnly available if you have the EnchantedBosses plugin",
            supportedModes: [
                "ALL",
                "SELF"
            ],
            exclusiveTo: "EnchantedBosses",
            properties: {
                rider: {
                    description: "The name of the boss to spawn",
                    required: true,
                    type: "string"
                }
            },
            available: true,
            requireMode: true
        }
    },
    skills: {
        CUSTOM: {
            description: "Adds a custom skill. Only available in SuperheroesPlusUltra",
            properties: {
                trigger: {
                    description: "The trigger for the effect list to execute",
                    required: true,
                    type: "trigger",
                },
                effects: {
                    description: "The list of effects to execute",
                    required: true,
                    type: "EffectList"
                }
            },
            available: true, 
            requireMode: true,
        },
        POTIONEFFECT: {
            description: "Applies the potion effect to the user",
            properties: {
                potency: {
                    description: "The potency or amplifier of the potion. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                type: {
                    description: "The type of the potion. \nDefaults to {}",
                    required: false,
                    type: "potion",
                    default: {}
                },
                duration: {
                    description: "The duration of the potion in seconds (1 is 20 ticks). 0 is for infinite duration (Integer maximum ticks). \nDefaults to 4",
                    required: false,
                    type: "number",
                    default: 4
                }
            },
            available: true,
            requireMode: true
        },
        OHKO: {
            description: "Kills the entity in one hit",
            properties: {
                entityTypes: {
                    description: "The types of entities that can be killed in one hit by the user. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "entity",
                    default: []
                },
                displayName: {
                    description: "The custom name of the entity that can be killed in one hit by the user. \nDefaults to any name",
                    required: false,
                    type: "string",
                    default: ""
                }
            },
            available: true,
            requireMode: true
        },
        REPULSION: {
            description: "Repulses all nearby entities when the user sneaks",
            properties: {
                multiplier: {
                    description: "The multiplier for the repulsion. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                radius: {
                    description: "The radius where inside entities are effected. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                },
                entityBlacklist: {
                    description: "The entities to not get effected. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "entity",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        CONVERTITEM: {
            description: "Converts the input item into the output item when the user picks up an item",
            properties: {
                inputItem: {
                    description: "The input item to convert. \nDefaults to null",
                    required: false,
                    type: "ItemStackData",
                    default: null
                },
                outputItem: {
                    description: "The item to convert to. \nDefaults to null",
                    required: false,
                    type: "ItemStackData",
                    default: null
                },
                chance: {
                    description: "The chance of the conversion. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                }
            },
            available: true,
            requireMode: true
        },
        COOLDOWN: {
            description: "The cooldown for the skill",
            properties: {
                cooldown: {
                    description: "The cooldown in seconds. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                },
                cooldownMessage: {
                    description: "The message to display when the skill is on cooldown. \nDefaults to null",
                    required: false,
                    type: "string",
                    default: null
                }
            },
            available: true,
            requireMode: true
        },
        CONVERTBLOCK: {
            description: "Converts a block when the user right clicks a block",
            properties: {
                cooldown: {
                    description: "The cooldown in seconds. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                },
                cooldownMessage: {
                    description: "The message to display when the skill is on cooldown. \nDefaults to null",
                    required: false,
                    type: "string",
                    default: null
                },
                outputBlock: {
                    description: "The block to convert to. \nDefaults to \"GOLD_BLOCK\"",
                    required: false,
                    type: "material",
                    default: "GOLD_BLOCK"
                },
                inputBlocks: {
                    description: "The list of blocks to convert from. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "material",
                    default: []
                }
            },
            available: true,
            requireMode: true
        },
        REMOTEDETONATION: {
            description: "Creates an explosion at the entity the user is looking at when the user sneaks",
            properties: {
                cooldown: {
                    description: "The cooldown in seconds. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                },
                cooldownMessage: {
                    description: "The message to display when the skill is on cooldown. \nDefaults to null",
                    required: false,
                    type: "string",
                    default: null
                },
                explosionStrength: {
                    description: "The strength of the explosion. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                explodable: {
                    description: "The types of entities that can be exploded. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "entity",
                    default: []
                },
                spawnsFire: {
                    description: "If true, explosion will spawn fire. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                breakBlocks: {
                    description: "If true, the explosion will break blocks. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                removeDetonatedEntity: {
                    description: "If true, the entity that was detonated will be removed. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                }
            },
            available: true,
            requireMode: true
        },
        BLOCKDROPS: {
            description: "Changes the block drops of a block",
            properties: {
                convertMap: {
                    description: "The map of block to items to drops. \nDefaults to {}",
                    required: false,
                    type: "object",
                    propertiesMap: {
                        key: {
                            description: "The block drop to change",
                            type: "material"
                        },
                        value: {
                            description: "The items to drop",
                            required: true,
                            type: "record",
                            recordItem: "ItemStackData"
                        }
                    },
                    default: {}
                },
                replaceDrops: {
                    description: "If true, the original block drops will be replaced with the new drops. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        CREEPER: {
            description: "Creates an explosion when the user sneaks on the ground until the explosion",
            properties: {
                cooldown: {
                    description: "The cooldown in seconds. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                },
                cooldownMessage: {
                    description: "The message to display when the skill is on cooldown. \nDefaults to null",
                    required: false,
                    type: "string",
                    default: null
                },
                creeper_power: {
                    description: "The power of the explosion. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                fuse: {
                    description: "The time to wait until the explosion in seconds (1 is 20 ticks). \nDefaults to 2",
                    required: false,
                    type: "number",
                    default: 2
                },
                slowfall_duration: {
                    description: "The duration of the slowfall potion in seconds (1 is 20 ticks). \nDefaults to 7",
                    required: false,
                    type: "number",
                    default: 7
                },
                upwardsVelocity: {
                    description: "The upwards velocity to apply to the user. \nDefaults to 2.5",
                    required: false,
                    type: "number",
                    default: 2.5
                }
            },
            available: true,
            requireMode: true
        },
        GIVEITEM: {
            description: "Gives the user an item",
            properties: {
                canStore: {
                    description: "If true, the item can be stored outside of the player inventory. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                canDrop: {
                    description: "If true, the item can be dropped. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                canLoseOnDeath: {
                    description: "If true, the item can be lost on death. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                loseItemOnHeroLoss: {
                    description: "If true, the item will be lost on if the user changes hero. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                item: {
                    description: "The item to give",
                    required: true,
                    type: "ItemStackData"
                }
            },
            available: true,
            requireMode: true
        },
        GUN: {
            description: "Shoots the gun in the direction that the user is looking at when the user right clicks if the user holds the gun item",
            properties: {
                cooldown: {
                    description: "The cooldown in seconds. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                },
                cooldownMessage: {
                    description: "The message to display when the skill is on cooldown. \nDefaults to null",
                    required: false,
                    type: "string",
                    default: null
                },
                maxDistance: {
                    description: "The max distance the bullet can travel. \nDefaults to 64",
                    required: false,
                    type: "number",
                    default: 64
                },
                bulletSize: {
                    description: "The size of the bullet. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                damage: {
                    description: "The damage that will be dealt by the bullet. \nDefaults to 5",
                    required: false,
                    type: "number",
                    default: 5
                },
                item: {
                    description: "The item that will be used as the gun",
                    required: true,
                    type: "material"
                },
                shootSound: {
                    description: "The sound that will be played when the gun shoots",
                    required: true,
                    type: "SoundData"
                },
                trailParticle: {
                    description: "The particle that will be used for the trail",
                    required: true,
                    type: "ParticleData"
                },
                hitParticle: {
                    description: "The particle that will be spawned at the hit location",
                    required: true,
                    type: "ParticleData"
                }
            },
            available: true,
            requireMode: true
        },
        SNEAK: {
            description: "Prevents the user from sneaking or unsneaking",
            properties: {
                mustSneak: {
                    description: "If true, prevents the user from unsneaking. If false, prevents the user from sneaking. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                needsInvisibility: {
                    description: "If true, only prevents the user when the user is invisible. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                }
            },
            available: true,
            requireMode: true
        },
        SHIELD: {
            description: "Sets the shields cooldown when the user take damage",
            properties: {
                cooldown: {
                    description: "The shield cooldown in seconds (1 is 20 ticks). \nDefaults to 100",
                    required: false,
                    type: "number",
                    default: 100
                }
            },
            available: true,
            requireMode: true
        },
        SPELL: {
            description: "",
            properties: {
                spell: {
                    description: "The type of spell to cast",
                    required: true,
                    type: "string",
                    enum: [
                        "FIREBALL",
                        "SNOWBALL",
                        "ARROW",
                        "LIGHTNING",
                        "EGG",
                        "WATER",
                        "LAVA",
                        "FIRE",
                        "EXPLOSION",
                        "TRIDENT",
                        "TRANSMUTATION",
                        "FANGS"
                    ]
                },
                fuel: {
                    description: "The fuel that will be used to cast the spell. \nDefaults to \"REDSTONE\"",
                    required: false,
                    type: "material",
                    default: "REDSTONE"
                },
                cooldown: {
                    description: "The cooldown in seconds (1 is 20 ticks). \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                cost: {
                    description: "The amount of fuel that will be used to cast the spell. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                spellName: {
                    description: "The name of the spell. Defaults to the type of spell",
                    required: false,
                    type: "string",
                    default: ""
                },
                cooldownMessage: {
                    description: "The message that will be displayed when the spell is on cooldown. \n%spellName% will be replaced with the spell name\n%cooldown% with the cooldown in seconds\n\n%fuel% with the name of the fuel material\n%cost% with the amount of fuel used. \nDefaults to \"%spellName% has %currentcooldown% seconds remaining.\"",
                    required: false,
                    type: "string",
                    default: "%spellName% has %currentcooldown% seconds remaining."
                },
                moreFuelMessage: {
                    description: ". \nDefaults to \"This spell needs %fuelneeded% more %fuel%\"",
                    required: false,
                    type: "string",
                    default: "This spell needs %fuelneeded% more %fuel%"
                },
                displayNameFormat: {
                    description: ". \nDefaults to \"&5%spellName%\"",
                    required: false,
                    type: "string",
                    default: "&5%spellName%"
                },
                loreFormat: {
                    description: ". \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "string",
                    default: []
                },
                transmutationData: {
                    description: ". \nDefaults to {}",
                    required: false,
                    type: "object",
                    default: {},
                    properties: {
                        resultantBlock: {
                            description: ". \nDefaults to \"REDSTONE_BLOCK\"",
                            required: false,
                            type: "material",
                            default: "REDSTONE_BLOCK"
                        },
                        transmutableBlocks: {
                            description: ". \nDefaults to []",
                            required: false,
                            type: "array",
                            items: "material",
                            default: []
                        }
                    }
                }
            },
            available: true,
            requireMode: true
        },
        THROWER: {
            description: "",
            properties: {
                cooldown: {
                    description: "The cooldown in seconds. \nDefaults to null",
                    required: false,
                    type: "number",
                    default: null
                },
                cooldownMessage: {
                    description: "The message to display when the skill is on cooldown. \nDefaults to null",
                    required: false,
                    type: "string",
                    default: null
                },
                ammoCost: {
                    description: ". \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                item: {
                    description: ". \nDefaults to {}",
                    required: false,
                    type: "ItemStackData",
                    default: {}
                },
                projectile: {
                    description: ". \nDefaults to \"SNOWBALL\"",
                    required: false,
                    type: "entity",
                    default: "SNOWBALL"
                },
                actions: {
                    description: ". \nDefaults to [\"RIGHT_CLICK_AIR\",\"RIGHT_CLICK_BLOCK\"]",
                    required: false,
                    type: "array",
                    items: "action",
                    default: [
                        "RIGHT_CLICK_AIR",
                        "RIGHT_CLICK_BLOCK"
                    ]
                },
                canPickUp: {
                    description: ". \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                velocity: {
                    description: ". \nDefaults to 1.4",
                    required: false,
                    type: "number",
                    default: 1.4
                },
                damage: {
                    description: ". \nDefaults to 3",
                    required: false,
                    type: "number",
                    default: 3
                }
            },
            available: true,
            requireMode: true
        },
        BLOCKRAY: {
            description: "",
            properties: {
                blocksToPlace: {
                    description: ". \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "material",
                    default: []
                },
                blocksToReplace: {
                    description: ". \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "material",
                    default: []
                },
                blockRayMode: {
                    description: "",
                    required: true,
                    type: "string",
                    enum: [
                        "ABOVEBLOCK",
                        "CLOSERBLOCK",
                        "THEBLOCK"
                    ]
                },
                maxDistance: {
                    description: ". \nDefaults to 20",
                    required: false,
                    type: "integer",
                    default: 20
                },
                shouldRevert: {
                    description: ". \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                revertsAfter: {
                    description: "in seconds (1 is 20 ticks). \nDefaults to 15",
                    required: false,
                    type: "integer",
                    default: 15
                }
            },
            available: true,
            requireMode: true
        },
        CRAFTING: {
            description: "Enables the user to use this recipe",
            properties: {
                isShaped: {
                    description: "If true, this recipe is shaped. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                result: {
                    description: "The result of the recipe. \nDefaults to {\"type\":\"STONE\",\"amount\":1}",
                    required: false,
                    type: "ItemStackData",
                    default: {
                        type: "STONE",
                        amount: 1
                    }
                },
                recipeKeys: {
                    description: "The list of keys to the material that the key is representing. \nDefaults to {}",
                    if: {
                        isShaped: {
                            const: true
                        }
                    },
                    required: false,
                    type: "object",
                    default: {},
                    propertiesMap: {
                        key: {
                            description: "keys",
                            type: "string",
                            pattern: "^.$",
                        },
                        value: {
                            description: "The material that the key is representing",
                            required: true,
                            type: "material"
                        }
                    }
                },
                recipe: {
                    description: "The shape of the recipe. \nDefaults to [\"\",\"\",\"\"]",
                    if: {
                        isShaped: {
                            const: true
                        }
                    },
                    required: false,
                    type: "array",
                    items: {
                        description: "A row of recipe keys",
                        required: true,
                        type: "string",
                        maxLength: 3
                    },
                    maxItems: 3,
                    default: [
                        "",
                        "",
                        ""
                    ]
                },
                ingredients: {
                    description: "The map of ingredients to count of that ingredients that's needed for the recipe. \nDefaults to {}",
                    if: {
                        isShaped: {
                            const: false
                        }
                    },
                    required: false,
                    type: "object",
                    default: {},
                    propertiesMap: {
                        key: {
                            description: "The recipe key",
                            type: "material"
                        },
                        value: {
                            description: "The material that the key maps to",
                            required: true,
                            type: "integer",
                            min: 1,
                            max: 9
                        }
                    }
                }
            },
            available: true,
            requireMode: true
        }
    },
    damagemodifiers: {
        BLANK: {
            description: "No damage modifier",
            available: true,
            requireMode: true
        },
        EASED: {
            description: "Modifies the damage based on a downwards facing parabola. \nFor visualization: https://www.desmos.com/calculator/pyb798rnyr",
            properties: {
                expectedMaximumDamage: {
                    description: "The width of the parabola. \nThe variable b on desmos. \nDefaults to 30",
                    required: false,
                    type: "number",
                    default: 30
                },
                damageCap: {
                    description: "The maximum of the parabola. \nThe variable k on desmos. \nDefaults to 15",
                    required: false,
                    type: "number",
                    default: 15
                }
            },
            available: true,
            requireMode: true
        },
        EASEDPLAYERADJUSTED: {
            description: "Modifies the damage based on a downwards facing parabola divided by (number of players)^(playerScalingModifier). \nFor visualization: https://www.desmos.com/calculator/drpnfjm4ty",
            properties: {
                expectedMaximumDamage: {
                    description: "The width of the parabola. \nThe variable b on desmos. \nDefaults to 30",
                    required: false,
                    type: "number",
                    default: 30
                },
                damageCap: {
                    description: "The maximum of the parabola. \nThe variable k on desmos. \nDefaults to 15",
                    required: false,
                    type: "number",
                    default: 15
                },
                playerScalingModifier: {
                    description: "The power the number of players is raised by. \nRecommended not to set to above one as then it will punish players for bringing teammates. \nThe variable w on desmos. \nDefaults to 0.5",
                    required: false,
                    type: "number",
                    default: 0.5
                }
            },
            available: true,
            requireMode: true
        },
        PLAYERADJUSTED: {
            description: "Modifies the damage based damage/((number of players)^(playerScalingModifier)). \nFor visualization: https://www.desmos.com/calculator/p03hsebinc",
            properties: {
                playerScalingModifier: {
                    description: "The power the number of players is raised by. \nRecommended not to set to above one as then it will punish players for bringing teammates. \nThe variable w on desmos. \nDefaults to 0.5",
                    required: false,
                    type: "number",
                    default: 0.5
                }
            },
            available: true,
            requireMode: true
        }
    },
    rewards: {
        BASIC: {
            description: "Gives experience, items, and executes commands",
            properties: {
                commands: {
                    description: "The list of commands to execute. \nAll instances of \"<player>\" will be replaced by the player name. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "string",
                    default: []
                },
                items: {
                    description: "The map of items to give to the player. \nDefaults to {}",
                    required: false,
                    type: "record",
                    recordItem: "ItemStackData",
                    default: {}
                },
                experience: {
                    description: "The amount of experience to give. \nDefaults to 100",
                    required: false,
                    type: "integer",
                    default: 100
                }
            },
            available: true,
            requireMode: true
        }
    },
    distributions: {
        LOOT: {
            description: "Adds a chance for loot tables to have the skill item",
            properties: {
                chance: {
                    description: "The chance of the skill item being added. \nDefaults to 0",
                    required: false,
                    type: "number",
                    min: 0,
                    max: 1,
                    default: 0
                },
                loottables: {
                    description: "The loot tables to add the skill item to",
                    required: true,
                    type: "array",
                    items: "lootTable"
                }
            },
            available: true,
            requireMode: true
        },
        CRAFTING: {
            description: "Adds a recipe for the skill item",
            properties: {
                recipe: {
                    description: "The shape of the recipe. \nDefaults to [\"\",\"\",\"\"]",
                    required: true,
                    type: "array",
                    items: {
                        description: "A row of recipe keys",
                        required: true,
                        type: "string",
                        maxLength: 3,
                        minLength: 3
                    },
                    default: [
                        "",
                        "",
                        ""
                    ],
                    maxItems: 3,
                    minItems: 3
                },
                recipeKeys: {
                    description: "The map from recipe key to material/skill item",
                    required: true,
                    type: "object",
                    propertiesMap: {
                        key: {
                            description: "The Recipe key",
                            type: "string",
                            pattern: "^.$"
                        },
                        value: {
                            description: "The material or skill item",
                            type: [
                                "material",
                                "string"
                            ],
                            required: true
                        }
                    }
                }
            },
            available: true,
            requireMode: true
        }
    },
    types: {
        trigger: {
            description: "A skills library trigger",
            type: "object",
            internal: true,
            available: true,
            requireMode: true
        },
        condition: {
            description: "A skills library condition",
            type: "object",
            internal: true,
            available: true,
            requireMode: true
        },
        effect: {
            description: "A skills library effect",
            type: "object",
            internal: true,
            available: true,
            requireMode: true
        },
        range: {
            description: "A range of value",
            type: [
                "string",
                "number"
            ],
            pattern: "^(([0-9]+)|([0-9]*\\.[0-9]+))( *- +(([0-9]+)|([0-9]*\\.[0-9]+)))?$",
            available: true,
            requireMode: true
        },
        comparison: {
            description: "A number comparison operator",
            type: "string",
            enum: [
                "=",
                "==",
                "EQUAL",
                "<",
                "LESS",
                ">",
                "GREATER",
                "<=",
                "LESSEQUAL",
                ">=",
                "GREATEREQUAL"
            ],
            available: true,
            requireMode: true
        },
        operation: {
            description: "A number operator",
            type: "string",
            enum: [
                "ADD",
                "SUBTRACT",
                "MULTIPLY",
                "DIVIDE",
                "SET"
            ],
            available: true,
            requireMode: true
        },
        attributeOperation: {
            description: "A number operator for attributes",
            type: "string",
            enum: [
                "ADD_NUMBER",
                "ADD_SCALAR",
                "MULTIPLY_SCALAR_1"
            ],
            available: true,
            requireMode: true
        },
        ConditionList: {
            description: "A list of conditions",
            type: "record",
            recordItem: "condition",
            available: true,
            requireMode: true
        },
        EffectList: {
            description: "A list of effects",
            type: "record",
            recordItem: "effect",
            available: true,
            requireMode: true
        },
        SpawnData: {
            description: "The data for spawning behavior",
            type: "object",
            properties: {
                enabled: {
                    description: "Whether the spawn behavior is enabled. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                weighting: {
                    description: "The weighting of the spawn behavior. \nDefaults to 1",
                    required: false,
                    type: "integer",
                    default: 1
                },
                biomes: {
                    description: "The list of biomes that this boss can or cannot spawn in. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "biome",
                    default: []
                },
                worlds: {
                    description: "The list of worlds that this boss can spawn in. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "world",
                    default: []
                },
                biomesWhitelist: {
                    description: "Whether the biomes list is a whitelist or blacklist. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                spaceNeeded: {
                    description: "The space needed to spawn the boss. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                spawnOnAir: {
                    description: "Whether the boss can spawn on air. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                maxHeight: {
                    description: "The maximum height the boss can spawn at. -1 for world height. \nDefaults to -1",
                    required: false,
                    type: "number",
                    default: -1
                }
            },
            available: true,
            requireMode: true
        },
        BossBarData: {
            description: "The styling for a boss bar",
            type: "object",
            properties: {
                enabled: {
                    description: "Whether the boss bar is enabled. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                flags: {
                    description: "The flags for the boss bar. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "bossBarFlag",
                    default: []
                },
                color: {
                    description: "The color of the boss bar. \nDefaults to \"PURPLE\"",
                    required: false,
                    type: "bossBarColor",
                    default: "PURPLE"
                },
                style: {
                    description: "The style of the boss bar. \nDefaults to \"PROGRESS\"",
                    required: false,
                    type: "bossBarStyle",
                    default: "PROGRESS"
                }
            },
            available: true,
            requireMode: true
        },
        bossBarFlag: {
            description: "The flag of a boss bar",
            type: "string",
            enum: [
                "DARKEN_SCREEN",
                "PLAY_BOSS_MUSIC",
                "CREATE_WORLD_FOG"
            ],
            available: true,
            requireMode: true
        },
        bossBarColor: {
            description: "The color of a boss bar",
            type: "string",
            enum: [
                "PINK",
                "BLUE",
                "RED",
                "GREEN",
                "YELLOW",
                "PURPLE",
                "WHITE"
            ],
            available: true,
            requireMode: true
        },
        bossBarStyle: {
            description: "The style of a boss bar",
            type: "string",
            enum: [
                "PROGRESS",
                "NOTCHED_6",
                "NOTCHED_10",
                "NOTCHED_12",
                "NOTCHED_20"
            ],
            available: true,
            requireMode: true
        },
        ItemAttributeData: {
            description: "The attribute data for an item",
            type: "object",
            propertiesMap: {
                key: {
                    description: "The attribute name",
                    type: "attribute"
                },
                value: {
                    description: "The attribute properties",
                    required: false,
                    type: "object",
                    default: null,
                    properties: {
                        value: {
                            description: "The value of the attribute to change to",
                            required: false,
                            type: "number",
                            default: 0
                        },
                        equipmentslot: {
                            description: "The slot that this attribute will be active",
                            required: false,
                            type: "equipmentSlot",
                            default: "HAND"
                        },
                        operation: {
                            description: "The operation to do on the attribute with `value`",
                            required: false,
                            type: "attributeOperation",
                            default: "ADD_NUMBER"
                        }
                    }
                }
            },
            available: true,
            requireMode: true
        },
        EnchantmentData: {
            description: "The enchantment data for an item",
            type: "object",
            propertiesMap: {
                key: {
                    description: "The enchantment name",
                    type: "enchantment"
                },
                value: {
                    description: "The level of the enchantment",
                    required: true,
                    type: "integer"
                }
            },
            available: true,
            requireMode: true
        },
        ItemMetaData: {
            description: "The metadata of an item",
            type: "object",
            properties: {
                displayName: {
                    description: "The display name of the item. Defaults to the normal item name",
                    required: false,
                    type: "string",
                    default: ""
                },
                lore: {
                    description: "The lore of the item. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "string",
                    default: []
                },
                isUnbreakable: {
                    description: "If true, makes the item unbreakable. \nDefaults to false",
                    required: false,
                    type: "boolean",
                    default: false
                },
                durability: {
                    description: "The durability of the item. 0 is normal durability. \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                customModelData: {
                    description: "The custom model data for this item (used for texture packs). \nDefaults to 0",
                    required: false,
                    type: "integer",
                    default: 0
                },
                attributes: {
                    description: "The attributes. \nDefaults to {}",
                    required: false,
                    type: "ItemAttributeData",
                    default: {}
                },
                enchants: {
                    description: "The enchantments. \nDefaults to {}",
                    required: false,
                    type: "EnchantmentData",
                    default: {}
                },
                trim: {
                    description: "For armors. This contains the trim metadata of the item. \nDefaults to {}",
                    required: false,
                    type: "object",
                    default: {},
                    properties: {
                        pattern: {
                            description: "The trim pattern",
                            required: true,
                            type: "trimPattern"
                        },
                        material: {
                            description: "The trim material",
                            required: true,
                            type: "trimMaterial"
                        }
                    }
                },
                color: {
                    description: "For leather armors. This contains the color metadata of the item. \nDefaults to {\"red\":200,\"green\":0,\"blue\":255}",
                    if: {
                        type: {
                            const: [
                                "POTION",
                                "SPLASH_POTION",
                                "LINGERING_POTION",
                                "TIPPED_ARROW"
                            ]
                        }
                    },
                    required: false,
                    type: "object",
                    default: {
                        red: 200,
                        green: 0,
                        blue: 255
                    },
                    properties: {
                        red: {
                            description: "The red value (0-255)",
                            required: true,
                            type: "integer",
                            min: 0,
                            max: 255
                        },
                        green: {
                            description: "The green value (0-255)",
                            required: true,
                            type: "integer",
                            min: 0,
                            max: 255
                        },
                        blue: {
                            description: "The blue value (0-255)",
                            required: true,
                            type: "integer",
                            min: 0,
                            max: 255
                        }
                    }
                },
                book: {
                    description: "For writable/written books. This contains the book metadata of the item. \nDefaults to {}",
                    required: false,
                    type: "object",
                    default: {},
                    properties: {
                        pages: {
                            description: "The contents for each page. \nDefaults to []",
                            required: false,
                            type: "array",
                            items: "string",
                            default: []
                        },
                        author: {
                            description: "The author of the book. \nDefaults to \"\"",
                            required: false,
                            type: "string",
                            default: ""
                        },
                        title: {
                            description: "The title of the book. \nDefaults to \"Sep is cool (and Xem too)\"",
                            required: false,
                            type: "string",
                            default: "Sep is cool (and Xem too)"
                        }
                    }
                },
                potion: {
                    description: "For potions, splash potions, lingering potions, or tipped arrows. This contains the potion metadata of the item. \nDefaults to {}",
                    if: {
                        type: {
                            const: [
                                "POTION",
                                "SPLASH_POTION",
                                "LINGERING_POTION",
                                "TIPPED_ARROW"
                            ]
                        }
                    },
                    required: false,
                    type: "object",
                    default: {},
                    properties: {
                        type: {
                            description: "The type of potion",
                            required: true,
                            type: "potion"
                        },
                        extended: {
                            description: "Whether the potion is extended. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        upgraded: {
                            description: "Whether the potion is upgraded. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        }
                    }
                }
            },
            available: true,
            requireMode: true
        },
        ItemStackData: {
            description: "The data of an item",
            type: "object",
            properties: {
                type: {
                    description: "The type of item. \nDefaults to \"STONE\"",
                    required: false,
                    type: "material",
                    default: "STONE"
                },
                amount: {
                    description: "The amount of item to give. \nDefaults to 1",
                    required: false,
                    type: "integer",
                    default: 1
                },
                metadata: {
                    description: "The metadata of the item. \nDefaults to {}",
                    required: false,
                    type: "ItemMetaData",
                    default: {}
                }
            },
            available: true,
            requireMode: true
        },
        AttributeData: {
            description: "The list of attributes and it's value",
            type: "object",
            propertiesMap: {
                key: {
                    description: "The attribute name",
                    type: "attribute"
                },
                value: {
                    description: "The attribute value",
                    required: false,
                    type: "number",
                    default: -1
                }
            },
            available: true,
            requireMode: true
        },
        EntityData: {
            description: "The data of an entity",
            type: "object",
            properties: {
                type: {
                    description: "The entity type. \nDefaults to \"ZOMBIE\"",
                    required: false,
                    type: "entity",
                    default: "ZOMBIE"
                },
                nametag: {
                    description: "The nametag of the spawned entity. Defaults to no nametag",
                    required: false,
                    type: "string",
                    default: ""
                },
                shouldDespawn: {
                    description: "If true, the entity can despawn. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                passenger: {
                    description: "The passenger of the entity. \nDefaults to {}",
                    required: false,
                    type: "EntityData",
                    default: {}
                },
                attributes: {
                    description: "The attributes of the entity. \nDefaults to {}",
                    required: false,
                    type: "AttributeData",
                    default: {}
                },
                extra: {
                    description: "The extra data for entities. \nDefaults to {}",
                    required: false,
                    type: "object",
                    default: {},
                    properties: {
                        canEquip: {
                            description: "For living entities. Whether the entity can pick up items. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        isZombifiable: {
                            description: "For piglins, piglin brutes, and hoglins. Whether the entity can be zombified into their zombie couterparts. \nDefaults to true",
                            required: false,
                            type: "boolean",
                            default: true
                        },
                        color: {
                            description: "For colorable entities. The color for the entity",
                            required: true,
                            type: "dyeColor"
                        },
                        armorSection: {
                            description: "For horses. The armor for the horse. \nDefaults to {}",
                            required: false,
                            type: "ItemStackData",
                            default: {}
                        },
                        hasSaddle: {
                            description: "For horses___. Whether the entity has a saddle attached. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        style: {
                            description: "For horses. The style/markings that the horse has. \nDefaults to \"NONE\"",
                            required: false,
                            type: "horseStyle",
                            default: "NONE"
                        },
                        tamingDifficulty: {
                            description: "For horses___. The difficulty of taming the entity (ie the amount of domesticating (feeding, riding, ect.) necessary in order to tame it). \nDefaults to 1",
                            required: false,
                            type: "integer",
                            default: 1
                        },
                        jumpStrength: {
                            description: "For horses___. The strength of jump for the entity. \nDefaults to 0.7",
                            required: false,
                            type: "number",
                            default: 0.7
                        },
                        hasChest: {
                            description: "For chestedHorses___. Whether the entity is carrying a chest. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        tamed: {
                            description: "For horses. Whether the horse is tamed. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        angry: {
                            description: "For wolfs. Whether the wolf is angry. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        size: {
                            description: "For slimes, magmacubes, and phantoms. The size of the entity. \nDefaults to 0",
                            required: false,
                            type: "integer",
                            default: 0
                        },
                        potion: {
                            description: "For thrown potions. The item data for the thrown potion. \nDefaults to {}",
                            required: false,
                            type: "ItemStackData",
                            default: {}
                        },
                        fuse: {
                            description: "For creepers. The time a creeper is allowed to be primed before exploding (in ticks). \nDefaults to 30",
                            required: false,
                            type: "integer",
                            default: 30
                        },
                        ignited: {
                            description: "For creepers. Whether the creeper is primed/ignited. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        explosionRadius: {
                            description: "For creepers. The explosion radius when exploded. \nDefaults to 3",
                            required: false,
                            type: "integer",
                            default: 3
                        },
                        powered: {
                            description: "For creepers. Whether the creeper is powered/charged/electrecuted. \nDefaults to 3",
                            required: false,
                            type: "integer",
                            default: 3
                        },
                        variant: {
                            description: "For axolotls. The variant of the entity. Defaults to a random variant (probably, not sure)",
                            required: false,
                            type: "axolotlVariant",
                            default: ""
                        },
                        isBaby: {
                            description: "For ageable entities. Whether the entity is a baby. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        },
                        type: {
                            description: "For dropped item. The type of item. \nDefaults to \"STONE\"",
                            required: false,
                            type: "material",
                            default: "STONE"
                        },
                        amount: {
                            description: "For dropped item. The amount of item to give. \nDefaults to 1",
                            required: false,
                            type: "integer",
                            default: 1
                        },
                        metadata: {
                            description: "For dropped item. The metadata of the item. \nDefaults to {}",
                            required: false,
                            type: "ItemMetaData",
                            default: {}
                        },
                        charged: {
                            description: "For whither skulls. Whether to make the skull blue or not. \nDefaults to false",
                            required: false,
                            type: "boolean",
                            default: false
                        }
                    }
                }
            },
            available: true,
            requireMode: true
        },
        VectorData: {
            description: "The data of a vector",
            type: "object",
            default: {
                x: 0,
                y: 0,
                z: 0
            },
            properties: {
                x: {
                    description: "The x component of the vector. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                },
                y: {
                    description: "The y component of the vector. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                },
                z: {
                    description: "The z component of the vector. \nDefaults to 0",
                    required: false,
                    type: "number",
                    default: 0
                }
            },
            available: true,
            requireMode: true
        },
        SoundData: {
            description: "The data of a sound",
            type: "object",
            properties: {
                sound: {
                    description: "The sound to make. \nDefaults to \"ENTITY_GENERIC_EXPLODE\"",
                    required: false,
                    type: "sound",
                    default: "ENTITY_GENERIC_EXPLODE"
                },
                volume: {
                    description: "The volume of the sound. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                },
                pitch: {
                    description: "The pitch of the sound. \nDefaults to 1",
                    required: false,
                    type: "number",
                    default: 1
                }
            },
            available: true,
            requireMode: true
        },
        PotionEffectData: {
            description: "The data of a potion effect",
            type: "object",
            properties: {
                potency: {
                    description: "The potency or amplifier of the potion. \nDefaults to 1",
                    required: false,
                    type: "integer",
                    default: 1
                },
                type: {
                    description: "The type of the potion",
                    required: true,
                    type: "potion"
                },
                ambient: {
                    description: "Whether to make the particles more translucent or not. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                hasParticles: {
                    description: "Whether to make this potion effect has particles or not. \nDefaults to true",
                    required: false,
                    type: "boolean",
                    default: true
                },
                duration: {
                    description: "The duration of the potion in seconds (1 is 20 ticks). 0 is for infinite duration (Integer maximum ticks). \nDefaults to 10",
                    required: false,
                    type: "number",
                    default: 10
                }
            },
            available: true,
            requireMode: true
        },
        ParticleData: {
            description: "The data of a particle",
            type: "object",
            properties: {
                particle: {
                    description: "The particle type. \nDefaults to \"BARRIER\"",
                    required: false,
                    type: "particle",
                    default: "BARRIER"
                },
                numberOfParticles: {
                    description: "The number of particle. \nDefaults to 1",
                    required: false,
                    type: "integer",
                    default: 1
                }
            },
            available: true,
            requireMode: true
        },
        BlockDataData: {
            description: "The data of a block data",
            type: "object",
            properties: {
                type: {
                    description: "The type of block. \nDefaults to \"STONE\"",
                    required: false,
                    type: "material",
                    default: "STONE"
                },
                level: {
                    description: "The fluid level of the block. \n\nDefaults to not set",
                    required: false,
                    type: "integer",
                    default: -1
                },
                age: {
                    description: "The growth stage of the block. \n\nDefaults to not set",
                    required: false,
                    type: "integer",
                    default: -1
                }
            },
            available: true,
            requireMode: true
        },
        BlockDataComparison: {
            description: "A comparison for block data",
            type: "object",
            properties: {
                types: {
                    description: "The types that is compared to. \nDefaults to [\"STONE\"]",
                    required: false,
                    type: "array",
                    items: "material",
                    default: [
                        "STONE"
                    ]
                },
                type: {
                    description: "The type that is compared to. Can be used instead of `types`. \nDefaults to \"STONE\"",
                    required: false,
                    type: "material",
                    default: "STONE"
                },
                level: {
                    description: "The range of fluid levels. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                },
                age: {
                    description: "The range of block age. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                }
            },
            available: true,
            requireMode: true
        },
        LoreData: {
            type: "array",
            items: "string",
            available: true,
            requireMode: true
        },
        EnchantComparisonData: {
            type: "object",
            default: {},
            propertiesMap: {
                key: {
                    description: "The enchantment name",
                    type: "enchantment"
                },
                value: {
                    description: "The level of the enchantment",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                }
            },
            available: true,
            requireMode: true
        },
        ItemMetaComparisonData: {
            description: "A comparison for metadata",
            type: "object",
            properties: {
                displayName: {
                    description: "A regex to match the display name against. \nDefaults to \".+\"",
                    required: false,
                    type: "string",
                    default: ".+"
                },
                lore: {
                    description: "A list of regex to match the lore against. \nDefaults to \".+\"",
                    required: false,
                    type: "LoreData",
                    default: ".+"
                },
                enchants: {
                    description: "The item to check against. \nDefaults to {}",
                    required: false,
                    type: "EnchantComparisonData",
                    default: {}
                }
            },
            available: true,
            requireMode: true
        },
        ItemComparisonData: {
            description: "A comparison for items",
            type: "object",
            properties: {
                types: {
                    description: "The list of item types. \nDefaults to []",
                    required: false,
                    type: "array",
                    items: "material",
                    default: []
                },
                type: {
                    description: "An item type. Can be used instead of `types` for single items. \nDefaults to \"STONE\"",
                    required: false,
                    type: "material",
                    default: "STONE"
                },
                amount: {
                    description: "The range of item amount. \nDefaults to \"-Infinity - Infinity\"",
                    required: false,
                    type: "range",
                    default: "-Infinity - Infinity"
                },
                metadata: {
                    description: "The metadata of the item. \nDefaults to {}",
                    required: false,
                    type: "ItemMetaComparisonData",
                    default: {}
                }
            },
            available: true,
            requireMode: true
        },
        entity: {
            description: "A type of entity",
            type: "string",
            enum: [
                "DROPPED_ITEM",
                "EXPERIENCE_ORB",
                "AREA_EFFECT_CLOUD",
                "ELDER_GUARDIAN",
                "WITHER_SKELETON",
                "STRAY",
                "EGG",
                "LEASH_HITCH",
                "PAINTING",
                "ARROW",
                "SNOWBALL",
                "FIREBALL",
                "SMALL_FIREBALL",
                "ENDER_PEARL",
                "ENDER_SIGNAL",
                "SPLASH_POTION",
                "THROWN_EXP_BOTTLE",
                "ITEM_FRAME",
                "WITHER_SKULL",
                "PRIMED_TNT",
                "FALLING_BLOCK",
                "FIREWORK",
                "HUSK",
                "SPECTRAL_ARROW",
                "SHULKER_BULLET",
                "DRAGON_FIREBALL",
                "ZOMBIE_VILLAGER",
                "SKELETON_HORSE",
                "ZOMBIE_HORSE",
                "ARMOR_STAND",
                "DONKEY",
                "MULE",
                "EVOKER_FANGS",
                "EVOKER",
                "VEX",
                "VINDICATOR",
                "ILLUSIONER",
                "MINECART_COMMAND",
                "BOAT",
                "MINECART",
                "MINECART_CHEST",
                "MINECART_FURNACE",
                "MINECART_TNT",
                "MINECART_HOPPER",
                "MINECART_MOB_SPAWNER",
                "CREEPER",
                "SKELETON",
                "SPIDER",
                "GIANT",
                "ZOMBIE",
                "SLIME",
                "GHAST",
                "ZOMBIFIED_PIGLIN",
                "ENDERMAN",
                "CAVE_SPIDER",
                "SILVERFISH",
                "BLAZE",
                "MAGMA_CUBE",
                "ENDER_DRAGON",
                "WITHER",
                "BAT",
                "WITCH",
                "ENDERMITE",
                "GUARDIAN",
                "SHULKER",
                "PIG",
                "SHEEP",
                "COW",
                "CHICKEN",
                "SQUID",
                "WOLF",
                "MUSHROOM_COW",
                "SNOWMAN",
                "OCELOT",
                "IRON_GOLEM",
                "HORSE",
                "RABBIT",
                "POLAR_BEAR",
                "LLAMA",
                "LLAMA_SPIT",
                "PARROT",
                "VILLAGER",
                "ENDER_CRYSTAL",
                "TURTLE",
                "PHANTOM",
                "TRIDENT",
                "COD",
                "SALMON",
                "PUFFERFISH",
                "TROPICAL_FISH",
                "DROWNED",
                "DOLPHIN",
                "CAT",
                "PANDA",
                "PILLAGER",
                "RAVAGER",
                "TRADER_LLAMA",
                "WANDERING_TRADER",
                "FOX",
                "BEE",
                "HOGLIN",
                "PIGLIN",
                "STRIDER",
                "ZOGLIN",
                "PIGLIN_BRUTE",
                "AXOLOTL",
                "GLOW_ITEM_FRAME",
                "GLOW_SQUID",
                "GOAT",
                "MARKER",
                "ALLAY",
                "CHEST_BOAT",
                "FROG",
                "TADPOLE",
                "WARDEN",
                "CAMEL",
                "BLOCK_DISPLAY",
                "INTERACTION",
                "ITEM_DISPLAY",
                "SNIFFER",
                "TEXT_DISPLAY",
                "FISHING_HOOK",
                "LIGHTNING",
                "PLAYER",
                "UNKNOWN"
            ],
            available: true,
            requireMode: true
        },
        blockFace: {
            description: "A face of a block",
            type: "string",
            enum: [
                "NORTH",
                "EAST",
                "SOUTH",
                "WEST",
                "UP",
                "DOWN",
                "NORTH_EAST",
                "NORTH_WEST",
                "SOUTH_EAST",
                "SOUTH_WEST",
                "WEST_NORTH_WEST",
                "NORTH_NORTH_WEST",
                "NORTH_NORTH_EAST",
                "EAST_NORTH_EAST",
                "EAST_SOUTH_EAST",
                "SOUTH_SOUTH_EAST",
                "SOUTH_SOUTH_WEST",
                "WEST_SOUTH_WEST",
                "SELF"
            ],
            available: true,
            requireMode: true
        },
        trimPattern: {
            description: "",
            type: "string",
            enum: [
                "RIB",
                "TIDE",
                "DUNE",
                "SILENCE",
                "SNOUT",
                "EYE",
                "WARD",
                "COAST",
                "HOST",
                "SENTRY",
                "RAISER",
                "SPIRE",
                "WAYFINDER",
                "SHAPER",
                "WILD",
                "VEX"
            ],
            available: true,
            requireMode: true
        },
        trimMaterial: {
            description: "",
            type: "string",
            enum: [
                "NETHERITE",
                "GOLD",
                "REDSTONE",
                "EMERALD",
                "QUARTZ",
                "DIAMOND",
                "IRON",
                "LAPIS",
                "AMETHYST",
                "COPPER"
            ],
            available: true,
            requireMode: true
        },
        enchantment: {
            description: "An enchantment",
            type: "string",
            requireEnum: false,
            enum: [
                "fire_protection",
                "sharpness",
                "flame",
                "soul_speed",
                "aqua_affinity",
                "punch",
                "loyalty",
                "depth_strider",
                "vanishing_curse",
                "unbreaking",
                "knockback",
                "luck_of_the_sea",
                "binding_curse",
                "fortune",
                "protection",
                "efficiency",
                "mending",
                "frost_walker",
                "lure",
                "looting",
                "piercing",
                "blast_protection",
                "smite",
                "multishot",
                "swift_sneak",
                "fire_aspect",
                "channeling",
                "sweeping",
                "thorns",
                "bane_of_arthropods",
                "respiration",
                "riptide",
                "silk_touch",
                "quick_charge",
                "projectile_protection",
                "impaling",
                "feather_falling",
                "power",
                "infinity"
            ],
            available: true,
            requireMode: true
        },
        potion: {
            description: "A potion effect",
            type: "string",
            enum: [
                "SPEED",
                "SLOWNESS",
                "HASTE",
                "MINING_FATIGUE",
                "STRENGTH",
                "INSTANT_HEALTH",
                "INSTANT_DAMAGE",
                "JUMP_BOOST",
                "NAUSEA",
                "REGENERATION",
                "RESISTANCE",
                "FIRE_RESISTANCE",
                "WATER_BREATHING",
                "INVISIBILITY",
                "BLINDNESS",
                "NIGHT_VISION",
                "HUNGER",
                "WEAKNESS",
                "POISON",
                "WITHER",
                "HEALTH_BOOST",
                "ABSORPTION",
                "SATURATION",
                "GLOWING",
                "LEVITATION",
                "LUCK",
                "UNLUCK",
                "SLOW_FALLING",
                "CONDUIT_POWER",
                "DOLPHINS_GRACE",
                "BAD_OMEN",
                "HERO_OF_THE_VILLAGE",
                "DARKNESS"
            ],
            available: true,
            requireMode: true
        },
        dyeColor: {
            description: "A dye color",
            type: "string",
            enum: [
                "WHITE",
                "ORANGE",
                "MAGENTA",
                "LIGHT_BLUE",
                "YELLOW",
                "LIME",
                "PINK",
                "GRAY",
                "LIGHT_GRAY",
                "CYAN",
                "PURPLE",
                "BLUE",
                "BROWN",
                "GREEN",
                "RED",
                "BLACK"
            ],
            available: true,
            requireMode: true
        },
        axolotlVariant: {
            description: "A variant of axolotls",
            type: "string",
            enum: [
                "BLUE",
                "CYAN",
                "GOLD",
                "LUCY",
                "WILD"
            ],
            available: true,
            requireMode: true
        },
        horseColor: {
            description: "A color of horses",
            type: "string",
            enum: [
                "BLACK",
                "BROWN",
                "CHESTNUT",
                "CREAMY",
                "DARK_BROWN",
                "GRAY",
                "WHITE"
            ],
            available: true,
            requireMode: true
        },
        horseStyle: {
            description: "A style/markings of horses",
            type: "string",
            enum: [
                "BLACK_DOTS",
                "NONE",
                "WHITE",
                "WHITE_DOTS",
                "WHITEFIELD"
            ],
            available: true,
            requireMode: true
        },
        damageCause: {
            description: "A damage cause",
            type: "string",
            enum: [
                "KILL",
                "WORLD_BORDER",
                "CONTACT",
                "ENTITY_ATTACK",
                "ENTITY_SWEEP_ATTACK",
                "PROJECTILE",
                "SUFFOCATION",
                "FALL",
                "FIRE",
                "FIRE_TICK",
                "MELTING",
                "LAVA",
                "DROWNING",
                "BLOCK_EXPLOSION",
                "ENTITY_EXPLOSION",
                "VOID",
                "LIGHTNING",
                "SUICIDE",
                "STARVATION",
                "POISON",
                "MAGIC",
                "WITHER",
                "FALLING_BLOCK",
                "THORNS",
                "DRAGON_BREATH",
                "CUSTOM",
                "FLY_INTO_WALL",
                "HOT_FLOOR",
                "CRAMMING",
                "DRYOUT",
                "FREEZE",
                "SONIC_BOOM"
            ],
            available: true,
            requireMode: true
        },
        action: {
            description: "An interaction action",
            type: "string",
            enum: [
                "LEFT_CLICK_BLOCK",
                "RIGHT_CLICK_BLOCK",
                "LEFT_CLICK_AIR",
                "RIGHT_CLICK_AIR",
                "PHYSICAL"
            ],
            available: true,
            requireMode: true
        },
        lootTable: {
            description: "A loot table type",
            type: "string",
            enum: [
                "EMPTY",
                "ABANDONED_MINESHAFT",
                "BURIED_TREASURE",
                "DESERT_PYRAMID",
                "END_CITY_TREASURE",
                "IGLOO_CHEST",
                "JUNGLE_TEMPLE",
                "JUNGLE_TEMPLE_DISPENSER",
                "NETHER_BRIDGE",
                "PILLAGER_OUTPOST",
                "BASTION_TREASURE",
                "BASTION_OTHER",
                "BASTION_BRIDGE",
                "BASTION_HOGLIN_STABLE",
                "ANCIENT_CITY",
                "ANCIENT_CITY_ICE_BOX",
                "RUINED_PORTAL",
                "SHIPWRECK_MAP",
                "SHIPWRECK_SUPPLY",
                "SHIPWRECK_TREASURE",
                "SIMPLE_DUNGEON",
                "SPAWN_BONUS_CHEST",
                "STRONGHOLD_CORRIDOR",
                "STRONGHOLD_CROSSING",
                "STRONGHOLD_LIBRARY",
                "UNDERWATER_RUIN_BIG",
                "UNDERWATER_RUIN_SMALL",
                "VILLAGE_ARMORER",
                "VILLAGE_BUTCHER",
                "VILLAGE_CARTOGRAPHER",
                "VILLAGE_DESERT_HOUSE",
                "VILLAGE_FISHER",
                "VILLAGE_FLETCHER",
                "VILLAGE_MASON",
                "VILLAGE_PLAINS_HOUSE",
                "VILLAGE_SAVANNA_HOUSE",
                "VILLAGE_SHEPHERD",
                "VILLAGE_SNOWY_HOUSE",
                "VILLAGE_TAIGA_HOUSE",
                "VILLAGE_TANNERY",
                "VILLAGE_TEMPLE",
                "VILLAGE_TOOLSMITH",
                "VILLAGE_WEAPONSMITH",
                "WOODLAND_MANSION",
                "ARMOR_STAND",
                "AXOLOTL",
                "BAT",
                "BEE",
                "BLAZE",
                "CAT",
                "CAVE_SPIDER",
                "CHICKEN",
                "COD",
                "COW",
                "CREEPER",
                "DOLPHIN",
                "DONKEY",
                "DROWNED",
                "ELDER_GUARDIAN",
                "ENDER_DRAGON",
                "ENDERMAN",
                "ENDERMITE",
                "EVOKER",
                "FOX",
                "GHAST",
                "GIANT",
                "GLOW_SQUID",
                "GOAT",
                "GUARDIAN",
                "HOGLIN",
                "HORSE",
                "HUSK",
                "ILLUSIONER",
                "IRON_GOLEM",
                "LLAMA",
                "MAGMA_CUBE",
                "MOOSHROOM",
                "MULE",
                "OCELOT",
                "PANDA",
                "PARROT",
                "PHANTOM",
                "PIG",
                "PIGLIN",
                "PIGLIN_BRUTE",
                "PILLAGER",
                "PLAYER",
                "POLAR_BEAR",
                "PUFFERFISH",
                "RABBIT",
                "RAVAGER",
                "SALMON",
                "SHULKER",
                "SILVERFISH",
                "SKELETON",
                "SKELETON_HORSE",
                "SLIME",
                "SNOW_GOLEM",
                "SPIDER",
                "SQUID",
                "STRAY",
                "STRIDER",
                "TRADER_LLAMA",
                "TROPICAL_FISH",
                "TURTLE",
                "VEX",
                "VILLAGER",
                "VINDICATOR",
                "WANDERING_TRADER",
                "WITCH",
                "WITHER",
                "WITHER_SKELETON",
                "WOLF",
                "ZOGLIN",
                "ZOMBIE",
                "ZOMBIE_HORSE",
                "ZOMBIE_VILLAGER",
                "ZOMBIFIED_PIGLIN",
                "ARMORER_GIFT",
                "BUTCHER_GIFT",
                "CARTOGRAPHER_GIFT",
                "CAT_MORNING_GIFT",
                "CLERIC_GIFT",
                "FARMER_GIFT",
                "FISHERMAN_GIFT",
                "FISHING",
                "FISHING_FISH",
                "FISHING_JUNK",
                "FISHING_TREASURE",
                "FLETCHER_GIFT",
                "LEATHERWORKER_GIFT",
                "LIBRARIAN_GIFT",
                "MASON_GIFT",
                "SHEPHERD_GIFT",
                "TOOLSMITH_GIFT",
                "WEAPONSMITH_GIFT",
                "SNIFFER_DIGGING",
                "PIGLIN_BARTERING",
                "DESERT_WELL_ARCHAEOLOGY",
                "DESERT_PYRAMID_ARCHAEOLOGY",
                "TRAIL_RUINS_ARCHAEOLOGY_COMMON",
                "TRAIL_RUINS_ARCHAEOLOGY_RARE",
                "OCEAN_RUIN_WARM_ARCHAEOLOGY",
                "OCEAN_RUIN_COLD_ARCHAEOLOGY",
                "SHEEP",
                "SHEEP_BLACK",
                "SHEEP_BLUE",
                "SHEEP_BROWN",
                "SHEEP_CYAN",
                "SHEEP_GRAY",
                "SHEEP_GREEN",
                "SHEEP_LIGHT_BLUE",
                "SHEEP_LIGHT_GRAY",
                "SHEEP_LIME",
                "SHEEP_MAGENTA",
                "SHEEP_ORANGE",
                "SHEEP_PINK",
                "SHEEP_PURPLE",
                "SHEEP_RED",
                "SHEEP_WHITE",
                "SHEEP_YELLOW"
            ],
            available: true,
            requireMode: true
        },
        biome: {
            description: "A biome",
            type: "string",
            enum: [
                "OCEAN",
                "PLAINS",
                "DESERT",
                "WINDSWEPT_HILLS",
                "FOREST",
                "TAIGA",
                "SWAMP",
                "MANGROVE_SWAMP",
                "RIVER",
                "NETHER_WASTES",
                "THE_END",
                "FROZEN_OCEAN",
                "FROZEN_RIVER",
                "SNOWY_PLAINS",
                "MUSHROOM_FIELDS",
                "BEACH",
                "JUNGLE",
                "SPARSE_JUNGLE",
                "DEEP_OCEAN",
                "STONY_SHORE",
                "SNOWY_BEACH",
                "BIRCH_FOREST",
                "DARK_FOREST",
                "SNOWY_TAIGA",
                "OLD_GROWTH_PINE_TAIGA",
                "WINDSWEPT_FOREST",
                "SAVANNA",
                "SAVANNA_PLATEAU",
                "BADLANDS",
                "WOODED_BADLANDS",
                "SMALL_END_ISLANDS",
                "END_MIDLANDS",
                "END_HIGHLANDS",
                "END_BARRENS",
                "WARM_OCEAN",
                "LUKEWARM_OCEAN",
                "COLD_OCEAN",
                "DEEP_LUKEWARM_OCEAN",
                "DEEP_COLD_OCEAN",
                "DEEP_FROZEN_OCEAN",
                "THE_VOID",
                "SUNFLOWER_PLAINS",
                "WINDSWEPT_GRAVELLY_HILLS",
                "FLOWER_FOREST",
                "ICE_SPIKES",
                "OLD_GROWTH_BIRCH_FOREST",
                "OLD_GROWTH_SPRUCE_TAIGA",
                "WINDSWEPT_SAVANNA",
                "ERODED_BADLANDS",
                "BAMBOO_JUNGLE",
                "SOUL_SAND_VALLEY",
                "CRIMSON_FOREST",
                "WARPED_FOREST",
                "BASALT_DELTAS",
                "DRIPSTONE_CAVES",
                "LUSH_CAVES",
                "DEEP_DARK",
                "MEADOW",
                "GROVE",
                "SNOWY_SLOPES",
                "FROZEN_PEAKS",
                "JAGGED_PEAKS",
                "STONY_PEAKS",
                "CHERRY_GROVE",
                "CUSTOM"
            ],
            available: true,
            requireMode: true
        },
        world: {
            description: "A dimension",
            type: "string",
            requireEnum: false,
            enum: [
                "world",
                "world_nether",
                "world_the_end"
            ],
            available: true,
            requireMode: true
        },
        equipmentSlot: {
            description: "An equipment slot",
            type: "string",
            enum: [
                "HAND",
                "OFF_HAND",
                "FEET",
                "LEGS",
                "CHEST",
                "HEAD"
            ],
            available: true,
            requireMode: true
        },
        attribute: {
            description: "An attribute",
            type: "string",
            enum: [
                "MAX_HEALTH",
                "FOLLOW_RANGE",
                "KNOCKBACK_RESISTANCE",
                "MOVEMENT_SPEED",
                "FLYING_SPEED",
                "ATTACK_DAMAGE",
                "ATTACK_KNOCKBACK",
                "ATTACK_SPEED",
                "ARMOR",
                "ARMOR_TOUGHNESS",
                "LUCK",
                "HORSE_JUMP_STRENGTH",
                "ZOMBIE_SPAWN_REINFORCEMENTS"
            ],
            available: true,
            requireMode: true
        },
        collisionMode: {
            description: "The fluid collision mode for raytrace",
            type: "string",
            enum: [
                "NEVER",
                "SOURCE_ONLY",
                "ALWAYS"
            ],
            available: true,
            requireMode: true
        },
        sound: {
            description: "A sound",
            type: "string",
            enum: [
                "AMBIENT_BASALT_DELTAS_ADDITIONS",
                "AMBIENT_BASALT_DELTAS_LOOP",
                "AMBIENT_BASALT_DELTAS_MOOD",
                "AMBIENT_CAVE",
                "AMBIENT_CRIMSON_FOREST_ADDITIONS",
                "AMBIENT_CRIMSON_FOREST_LOOP",
                "AMBIENT_CRIMSON_FOREST_MOOD",
                "AMBIENT_NETHER_WASTES_ADDITIONS",
                "AMBIENT_NETHER_WASTES_LOOP",
                "AMBIENT_NETHER_WASTES_MOOD",
                "AMBIENT_SOUL_SAND_VALLEY_ADDITIONS",
                "AMBIENT_SOUL_SAND_VALLEY_LOOP",
                "AMBIENT_SOUL_SAND_VALLEY_MOOD",
                "AMBIENT_UNDERWATER_ENTER",
                "AMBIENT_UNDERWATER_EXIT",
                "AMBIENT_UNDERWATER_LOOP",
                "AMBIENT_UNDERWATER_LOOP_ADDITIONS",
                "AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE",
                "AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE",
                "AMBIENT_WARPED_FOREST_ADDITIONS",
                "AMBIENT_WARPED_FOREST_LOOP",
                "AMBIENT_WARPED_FOREST_MOOD",
                "BLOCK_AMETHYST_BLOCK_BREAK",
                "BLOCK_AMETHYST_BLOCK_CHIME",
                "BLOCK_AMETHYST_BLOCK_FALL",
                "BLOCK_AMETHYST_BLOCK_HIT",
                "BLOCK_AMETHYST_BLOCK_PLACE",
                "BLOCK_AMETHYST_BLOCK_RESONATE",
                "BLOCK_AMETHYST_BLOCK_STEP",
                "BLOCK_AMETHYST_CLUSTER_BREAK",
                "BLOCK_AMETHYST_CLUSTER_FALL",
                "BLOCK_AMETHYST_CLUSTER_HIT",
                "BLOCK_AMETHYST_CLUSTER_PLACE",
                "BLOCK_AMETHYST_CLUSTER_STEP",
                "BLOCK_ANCIENT_DEBRIS_BREAK",
                "BLOCK_ANCIENT_DEBRIS_FALL",
                "BLOCK_ANCIENT_DEBRIS_HIT",
                "BLOCK_ANCIENT_DEBRIS_PLACE",
                "BLOCK_ANCIENT_DEBRIS_STEP",
                "BLOCK_ANVIL_BREAK",
                "BLOCK_ANVIL_DESTROY",
                "BLOCK_ANVIL_FALL",
                "BLOCK_ANVIL_HIT",
                "BLOCK_ANVIL_LAND",
                "BLOCK_ANVIL_PLACE",
                "BLOCK_ANVIL_STEP",
                "BLOCK_ANVIL_USE",
                "BLOCK_AZALEA_BREAK",
                "BLOCK_AZALEA_FALL",
                "BLOCK_AZALEA_HIT",
                "BLOCK_AZALEA_LEAVES_BREAK",
                "BLOCK_AZALEA_LEAVES_FALL",
                "BLOCK_AZALEA_LEAVES_HIT",
                "BLOCK_AZALEA_LEAVES_PLACE",
                "BLOCK_AZALEA_LEAVES_STEP",
                "BLOCK_AZALEA_PLACE",
                "BLOCK_AZALEA_STEP",
                "BLOCK_BAMBOO_BREAK",
                "BLOCK_BAMBOO_FALL",
                "BLOCK_BAMBOO_HIT",
                "BLOCK_BAMBOO_PLACE",
                "BLOCK_BAMBOO_SAPLING_BREAK",
                "BLOCK_BAMBOO_SAPLING_HIT",
                "BLOCK_BAMBOO_SAPLING_PLACE",
                "BLOCK_BAMBOO_STEP",
                "BLOCK_BAMBOO_WOOD_BREAK",
                "BLOCK_BAMBOO_WOOD_BUTTON_CLICK_OFF",
                "BLOCK_BAMBOO_WOOD_BUTTON_CLICK_ON",
                "BLOCK_BAMBOO_WOOD_DOOR_CLOSE",
                "BLOCK_BAMBOO_WOOD_DOOR_OPEN",
                "BLOCK_BAMBOO_WOOD_FALL",
                "BLOCK_BAMBOO_WOOD_FENCE_GATE_CLOSE",
                "BLOCK_BAMBOO_WOOD_FENCE_GATE_OPEN",
                "BLOCK_BAMBOO_WOOD_HANGING_SIGN_BREAK",
                "BLOCK_BAMBOO_WOOD_HANGING_SIGN_FALL",
                "BLOCK_BAMBOO_WOOD_HANGING_SIGN_HIT",
                "BLOCK_BAMBOO_WOOD_HANGING_SIGN_PLACE",
                "BLOCK_BAMBOO_WOOD_HANGING_SIGN_STEP",
                "BLOCK_BAMBOO_WOOD_HIT",
                "BLOCK_BAMBOO_WOOD_PLACE",
                "BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_OFF",
                "BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_ON",
                "BLOCK_BAMBOO_WOOD_STEP",
                "BLOCK_BAMBOO_WOOD_TRAPDOOR_CLOSE",
                "BLOCK_BAMBOO_WOOD_TRAPDOOR_OPEN",
                "BLOCK_BARREL_CLOSE",
                "BLOCK_BARREL_OPEN",
                "BLOCK_BASALT_BREAK",
                "BLOCK_BASALT_FALL",
                "BLOCK_BASALT_HIT",
                "BLOCK_BASALT_PLACE",
                "BLOCK_BASALT_STEP",
                "BLOCK_BEACON_ACTIVATE",
                "BLOCK_BEACON_AMBIENT",
                "BLOCK_BEACON_DEACTIVATE",
                "BLOCK_BEACON_POWER_SELECT",
                "BLOCK_BEEHIVE_DRIP",
                "BLOCK_BEEHIVE_ENTER",
                "BLOCK_BEEHIVE_EXIT",
                "BLOCK_BEEHIVE_SHEAR",
                "BLOCK_BEEHIVE_WORK",
                "BLOCK_BELL_RESONATE",
                "BLOCK_BELL_USE",
                "BLOCK_BIG_DRIPLEAF_BREAK",
                "BLOCK_BIG_DRIPLEAF_FALL",
                "BLOCK_BIG_DRIPLEAF_HIT",
                "BLOCK_BIG_DRIPLEAF_PLACE",
                "BLOCK_BIG_DRIPLEAF_STEP",
                "BLOCK_BIG_DRIPLEAF_TILT_DOWN",
                "BLOCK_BIG_DRIPLEAF_TILT_UP",
                "BLOCK_BLASTFURNACE_FIRE_CRACKLE",
                "BLOCK_BONE_BLOCK_BREAK",
                "BLOCK_BONE_BLOCK_FALL",
                "BLOCK_BONE_BLOCK_HIT",
                "BLOCK_BONE_BLOCK_PLACE",
                "BLOCK_BONE_BLOCK_STEP",
                "BLOCK_BREWING_STAND_BREW",
                "BLOCK_BUBBLE_COLUMN_BUBBLE_POP",
                "BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT",
                "BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE",
                "BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT",
                "BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE",
                "BLOCK_CAKE_ADD_CANDLE",
                "BLOCK_CALCITE_BREAK",
                "BLOCK_CALCITE_FALL",
                "BLOCK_CALCITE_HIT",
                "BLOCK_CALCITE_PLACE",
                "BLOCK_CALCITE_STEP",
                "BLOCK_CAMPFIRE_CRACKLE",
                "BLOCK_CANDLE_AMBIENT",
                "BLOCK_CANDLE_BREAK",
                "BLOCK_CANDLE_EXTINGUISH",
                "BLOCK_CANDLE_FALL",
                "BLOCK_CANDLE_HIT",
                "BLOCK_CANDLE_PLACE",
                "BLOCK_CANDLE_STEP",
                "BLOCK_CAVE_VINES_BREAK",
                "BLOCK_CAVE_VINES_FALL",
                "BLOCK_CAVE_VINES_HIT",
                "BLOCK_CAVE_VINES_PICK_BERRIES",
                "BLOCK_CAVE_VINES_PLACE",
                "BLOCK_CAVE_VINES_STEP",
                "BLOCK_CHAIN_BREAK",
                "BLOCK_CHAIN_FALL",
                "BLOCK_CHAIN_HIT",
                "BLOCK_CHAIN_PLACE",
                "BLOCK_CHAIN_STEP",
                "BLOCK_CHERRY_LEAVES_BREAK",
                "BLOCK_CHERRY_LEAVES_FALL",
                "BLOCK_CHERRY_LEAVES_HIT",
                "BLOCK_CHERRY_LEAVES_PLACE",
                "BLOCK_CHERRY_LEAVES_STEP",
                "BLOCK_CHERRY_SAPLING_BREAK",
                "BLOCK_CHERRY_SAPLING_FALL",
                "BLOCK_CHERRY_SAPLING_HIT",
                "BLOCK_CHERRY_SAPLING_PLACE",
                "BLOCK_CHERRY_SAPLING_STEP",
                "BLOCK_CHERRY_WOOD_BREAK",
                "BLOCK_CHERRY_WOOD_BUTTON_CLICK_OFF",
                "BLOCK_CHERRY_WOOD_BUTTON_CLICK_ON",
                "BLOCK_CHERRY_WOOD_DOOR_CLOSE",
                "BLOCK_CHERRY_WOOD_DOOR_OPEN",
                "BLOCK_CHERRY_WOOD_FALL",
                "BLOCK_CHERRY_WOOD_FENCE_GATE_CLOSE",
                "BLOCK_CHERRY_WOOD_FENCE_GATE_OPEN",
                "BLOCK_CHERRY_WOOD_HANGING_SIGN_BREAK",
                "BLOCK_CHERRY_WOOD_HANGING_SIGN_FALL",
                "BLOCK_CHERRY_WOOD_HANGING_SIGN_HIT",
                "BLOCK_CHERRY_WOOD_HANGING_SIGN_PLACE",
                "BLOCK_CHERRY_WOOD_HANGING_SIGN_STEP",
                "BLOCK_CHERRY_WOOD_HIT",
                "BLOCK_CHERRY_WOOD_PLACE",
                "BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_OFF",
                "BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_ON",
                "BLOCK_CHERRY_WOOD_STEP",
                "BLOCK_CHERRY_WOOD_TRAPDOOR_CLOSE",
                "BLOCK_CHERRY_WOOD_TRAPDOOR_OPEN",
                "BLOCK_CHEST_CLOSE",
                "BLOCK_CHEST_LOCKED",
                "BLOCK_CHEST_OPEN",
                "BLOCK_CHISELED_BOOKSHELF_BREAK",
                "BLOCK_CHISELED_BOOKSHELF_FALL",
                "BLOCK_CHISELED_BOOKSHELF_HIT",
                "BLOCK_CHISELED_BOOKSHELF_INSERT",
                "BLOCK_CHISELED_BOOKSHELF_INSERT_ENCHANTED",
                "BLOCK_CHISELED_BOOKSHELF_PICKUP",
                "BLOCK_CHISELED_BOOKSHELF_PICKUP_ENCHANTED",
                "BLOCK_CHISELED_BOOKSHELF_PLACE",
                "BLOCK_CHISELED_BOOKSHELF_STEP",
                "BLOCK_CHORUS_FLOWER_DEATH",
                "BLOCK_CHORUS_FLOWER_GROW",
                "BLOCK_COMPARATOR_CLICK",
                "BLOCK_COMPOSTER_EMPTY",
                "BLOCK_COMPOSTER_FILL",
                "BLOCK_COMPOSTER_FILL_SUCCESS",
                "BLOCK_COMPOSTER_READY",
                "BLOCK_CONDUIT_ACTIVATE",
                "BLOCK_CONDUIT_AMBIENT",
                "BLOCK_CONDUIT_AMBIENT_SHORT",
                "BLOCK_CONDUIT_ATTACK_TARGET",
                "BLOCK_CONDUIT_DEACTIVATE",
                "BLOCK_COPPER_BREAK",
                "BLOCK_COPPER_FALL",
                "BLOCK_COPPER_HIT",
                "BLOCK_COPPER_PLACE",
                "BLOCK_COPPER_STEP",
                "BLOCK_CORAL_BLOCK_BREAK",
                "BLOCK_CORAL_BLOCK_FALL",
                "BLOCK_CORAL_BLOCK_HIT",
                "BLOCK_CORAL_BLOCK_PLACE",
                "BLOCK_CORAL_BLOCK_STEP",
                "BLOCK_CROP_BREAK",
                "BLOCK_DECORATED_POT_BREAK",
                "BLOCK_DECORATED_POT_FALL",
                "BLOCK_DECORATED_POT_HIT",
                "BLOCK_DECORATED_POT_PLACE",
                "BLOCK_DECORATED_POT_SHATTER",
                "BLOCK_DECORATED_POT_STEP",
                "BLOCK_DEEPSLATE_BREAK",
                "BLOCK_DEEPSLATE_BRICKS_BREAK",
                "BLOCK_DEEPSLATE_BRICKS_FALL",
                "BLOCK_DEEPSLATE_BRICKS_HIT",
                "BLOCK_DEEPSLATE_BRICKS_PLACE",
                "BLOCK_DEEPSLATE_BRICKS_STEP",
                "BLOCK_DEEPSLATE_FALL",
                "BLOCK_DEEPSLATE_HIT",
                "BLOCK_DEEPSLATE_PLACE",
                "BLOCK_DEEPSLATE_STEP",
                "BLOCK_DEEPSLATE_TILES_BREAK",
                "BLOCK_DEEPSLATE_TILES_FALL",
                "BLOCK_DEEPSLATE_TILES_HIT",
                "BLOCK_DEEPSLATE_TILES_PLACE",
                "BLOCK_DEEPSLATE_TILES_STEP",
                "BLOCK_DISPENSER_DISPENSE",
                "BLOCK_DISPENSER_FAIL",
                "BLOCK_DISPENSER_LAUNCH",
                "BLOCK_DRIPSTONE_BLOCK_BREAK",
                "BLOCK_DRIPSTONE_BLOCK_FALL",
                "BLOCK_DRIPSTONE_BLOCK_HIT",
                "BLOCK_DRIPSTONE_BLOCK_PLACE",
                "BLOCK_DRIPSTONE_BLOCK_STEP",
                "BLOCK_ENCHANTMENT_TABLE_USE",
                "BLOCK_ENDER_CHEST_CLOSE",
                "BLOCK_ENDER_CHEST_OPEN",
                "BLOCK_END_GATEWAY_SPAWN",
                "BLOCK_END_PORTAL_FRAME_FILL",
                "BLOCK_END_PORTAL_SPAWN",
                "BLOCK_FENCE_GATE_CLOSE",
                "BLOCK_FENCE_GATE_OPEN",
                "BLOCK_FIRE_AMBIENT",
                "BLOCK_FIRE_EXTINGUISH",
                "BLOCK_FLOWERING_AZALEA_BREAK",
                "BLOCK_FLOWERING_AZALEA_FALL",
                "BLOCK_FLOWERING_AZALEA_HIT",
                "BLOCK_FLOWERING_AZALEA_PLACE",
                "BLOCK_FLOWERING_AZALEA_STEP",
                "BLOCK_FROGLIGHT_BREAK",
                "BLOCK_FROGLIGHT_FALL",
                "BLOCK_FROGLIGHT_HIT",
                "BLOCK_FROGLIGHT_PLACE",
                "BLOCK_FROGLIGHT_STEP",
                "BLOCK_FROGSPAWN_BREAK",
                "BLOCK_FROGSPAWN_FALL",
                "BLOCK_FROGSPAWN_HATCH",
                "BLOCK_FROGSPAWN_HIT",
                "BLOCK_FROGSPAWN_PLACE",
                "BLOCK_FROGSPAWN_STEP",
                "BLOCK_FUNGUS_BREAK",
                "BLOCK_FUNGUS_FALL",
                "BLOCK_FUNGUS_HIT",
                "BLOCK_FUNGUS_PLACE",
                "BLOCK_FUNGUS_STEP",
                "BLOCK_FURNACE_FIRE_CRACKLE",
                "BLOCK_GILDED_BLACKSTONE_BREAK",
                "BLOCK_GILDED_BLACKSTONE_FALL",
                "BLOCK_GILDED_BLACKSTONE_HIT",
                "BLOCK_GILDED_BLACKSTONE_PLACE",
                "BLOCK_GILDED_BLACKSTONE_STEP",
                "BLOCK_GLASS_BREAK",
                "BLOCK_GLASS_FALL",
                "BLOCK_GLASS_HIT",
                "BLOCK_GLASS_PLACE",
                "BLOCK_GLASS_STEP",
                "BLOCK_GRASS_BREAK",
                "BLOCK_GRASS_FALL",
                "BLOCK_GRASS_HIT",
                "BLOCK_GRASS_PLACE",
                "BLOCK_GRASS_STEP",
                "BLOCK_GRAVEL_BREAK",
                "BLOCK_GRAVEL_FALL",
                "BLOCK_GRAVEL_HIT",
                "BLOCK_GRAVEL_PLACE",
                "BLOCK_GRAVEL_STEP",
                "BLOCK_GRINDSTONE_USE",
                "BLOCK_GROWING_PLANT_CROP",
                "BLOCK_HANGING_ROOTS_BREAK",
                "BLOCK_HANGING_ROOTS_FALL",
                "BLOCK_HANGING_ROOTS_HIT",
                "BLOCK_HANGING_ROOTS_PLACE",
                "BLOCK_HANGING_ROOTS_STEP",
                "BLOCK_HANGING_SIGN_BREAK",
                "BLOCK_HANGING_SIGN_FALL",
                "BLOCK_HANGING_SIGN_HIT",
                "BLOCK_HANGING_SIGN_PLACE",
                "BLOCK_HANGING_SIGN_STEP",
                "BLOCK_HONEY_BLOCK_BREAK",
                "BLOCK_HONEY_BLOCK_FALL",
                "BLOCK_HONEY_BLOCK_HIT",
                "BLOCK_HONEY_BLOCK_PLACE",
                "BLOCK_HONEY_BLOCK_SLIDE",
                "BLOCK_HONEY_BLOCK_STEP",
                "BLOCK_IRON_DOOR_CLOSE",
                "BLOCK_IRON_DOOR_OPEN",
                "BLOCK_IRON_TRAPDOOR_CLOSE",
                "BLOCK_IRON_TRAPDOOR_OPEN",
                "BLOCK_LADDER_BREAK",
                "BLOCK_LADDER_FALL",
                "BLOCK_LADDER_HIT",
                "BLOCK_LADDER_PLACE",
                "BLOCK_LADDER_STEP",
                "BLOCK_LANTERN_BREAK",
                "BLOCK_LANTERN_FALL",
                "BLOCK_LANTERN_HIT",
                "BLOCK_LANTERN_PLACE",
                "BLOCK_LANTERN_STEP",
                "BLOCK_LARGE_AMETHYST_BUD_BREAK",
                "BLOCK_LARGE_AMETHYST_BUD_PLACE",
                "BLOCK_LAVA_AMBIENT",
                "BLOCK_LAVA_EXTINGUISH",
                "BLOCK_LAVA_POP",
                "BLOCK_LEVER_CLICK",
                "BLOCK_LILY_PAD_PLACE",
                "BLOCK_LODESTONE_BREAK",
                "BLOCK_LODESTONE_FALL",
                "BLOCK_LODESTONE_HIT",
                "BLOCK_LODESTONE_PLACE",
                "BLOCK_LODESTONE_STEP",
                "BLOCK_MANGROVE_ROOTS_BREAK",
                "BLOCK_MANGROVE_ROOTS_FALL",
                "BLOCK_MANGROVE_ROOTS_HIT",
                "BLOCK_MANGROVE_ROOTS_PLACE",
                "BLOCK_MANGROVE_ROOTS_STEP",
                "BLOCK_MEDIUM_AMETHYST_BUD_BREAK",
                "BLOCK_MEDIUM_AMETHYST_BUD_PLACE",
                "BLOCK_METAL_BREAK",
                "BLOCK_METAL_FALL",
                "BLOCK_METAL_HIT",
                "BLOCK_METAL_PLACE",
                "BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF",
                "BLOCK_METAL_PRESSURE_PLATE_CLICK_ON",
                "BLOCK_METAL_STEP",
                "BLOCK_MOSS_BREAK",
                "BLOCK_MOSS_CARPET_BREAK",
                "BLOCK_MOSS_CARPET_FALL",
                "BLOCK_MOSS_CARPET_HIT",
                "BLOCK_MOSS_CARPET_PLACE",
                "BLOCK_MOSS_CARPET_STEP",
                "BLOCK_MOSS_FALL",
                "BLOCK_MOSS_HIT",
                "BLOCK_MOSS_PLACE",
                "BLOCK_MOSS_STEP",
                "BLOCK_MUDDY_MANGROVE_ROOTS_BREAK",
                "BLOCK_MUDDY_MANGROVE_ROOTS_FALL",
                "BLOCK_MUDDY_MANGROVE_ROOTS_HIT",
                "BLOCK_MUDDY_MANGROVE_ROOTS_PLACE",
                "BLOCK_MUDDY_MANGROVE_ROOTS_STEP",
                "BLOCK_MUD_BREAK",
                "BLOCK_MUD_BRICKS_BREAK",
                "BLOCK_MUD_BRICKS_FALL",
                "BLOCK_MUD_BRICKS_HIT",
                "BLOCK_MUD_BRICKS_PLACE",
                "BLOCK_MUD_BRICKS_STEP",
                "BLOCK_MUD_FALL",
                "BLOCK_MUD_HIT",
                "BLOCK_MUD_PLACE",
                "BLOCK_MUD_STEP",
                "BLOCK_NETHERITE_BLOCK_BREAK",
                "BLOCK_NETHERITE_BLOCK_FALL",
                "BLOCK_NETHERITE_BLOCK_HIT",
                "BLOCK_NETHERITE_BLOCK_PLACE",
                "BLOCK_NETHERITE_BLOCK_STEP",
                "BLOCK_NETHERRACK_BREAK",
                "BLOCK_NETHERRACK_FALL",
                "BLOCK_NETHERRACK_HIT",
                "BLOCK_NETHERRACK_PLACE",
                "BLOCK_NETHERRACK_STEP",
                "BLOCK_NETHER_BRICKS_BREAK",
                "BLOCK_NETHER_BRICKS_FALL",
                "BLOCK_NETHER_BRICKS_HIT",
                "BLOCK_NETHER_BRICKS_PLACE",
                "BLOCK_NETHER_BRICKS_STEP",
                "BLOCK_NETHER_GOLD_ORE_BREAK",
                "BLOCK_NETHER_GOLD_ORE_FALL",
                "BLOCK_NETHER_GOLD_ORE_HIT",
                "BLOCK_NETHER_GOLD_ORE_PLACE",
                "BLOCK_NETHER_GOLD_ORE_STEP",
                "BLOCK_NETHER_ORE_BREAK",
                "BLOCK_NETHER_ORE_FALL",
                "BLOCK_NETHER_ORE_HIT",
                "BLOCK_NETHER_ORE_PLACE",
                "BLOCK_NETHER_ORE_STEP",
                "BLOCK_NETHER_SPROUTS_BREAK",
                "BLOCK_NETHER_SPROUTS_FALL",
                "BLOCK_NETHER_SPROUTS_HIT",
                "BLOCK_NETHER_SPROUTS_PLACE",
                "BLOCK_NETHER_SPROUTS_STEP",
                "BLOCK_NETHER_WART_BREAK",
                "BLOCK_NETHER_WOOD_BREAK",
                "BLOCK_NETHER_WOOD_BUTTON_CLICK_OFF",
                "BLOCK_NETHER_WOOD_BUTTON_CLICK_ON",
                "BLOCK_NETHER_WOOD_DOOR_CLOSE",
                "BLOCK_NETHER_WOOD_DOOR_OPEN",
                "BLOCK_NETHER_WOOD_FALL",
                "BLOCK_NETHER_WOOD_FENCE_GATE_CLOSE",
                "BLOCK_NETHER_WOOD_FENCE_GATE_OPEN",
                "BLOCK_NETHER_WOOD_HANGING_SIGN_BREAK",
                "BLOCK_NETHER_WOOD_HANGING_SIGN_FALL",
                "BLOCK_NETHER_WOOD_HANGING_SIGN_HIT",
                "BLOCK_NETHER_WOOD_HANGING_SIGN_PLACE",
                "BLOCK_NETHER_WOOD_HANGING_SIGN_STEP",
                "BLOCK_NETHER_WOOD_HIT",
                "BLOCK_NETHER_WOOD_PLACE",
                "BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_OFF",
                "BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_ON",
                "BLOCK_NETHER_WOOD_STEP",
                "BLOCK_NETHER_WOOD_TRAPDOOR_CLOSE",
                "BLOCK_NETHER_WOOD_TRAPDOOR_OPEN",
                "BLOCK_NOTE_BLOCK_BANJO",
                "BLOCK_NOTE_BLOCK_BASEDRUM",
                "BLOCK_NOTE_BLOCK_BASS",
                "BLOCK_NOTE_BLOCK_BELL",
                "BLOCK_NOTE_BLOCK_BIT",
                "BLOCK_NOTE_BLOCK_CHIME",
                "BLOCK_NOTE_BLOCK_COW_BELL",
                "BLOCK_NOTE_BLOCK_DIDGERIDOO",
                "BLOCK_NOTE_BLOCK_FLUTE",
                "BLOCK_NOTE_BLOCK_GUITAR",
                "BLOCK_NOTE_BLOCK_HARP",
                "BLOCK_NOTE_BLOCK_HAT",
                "BLOCK_NOTE_BLOCK_IMITATE_CREEPER",
                "BLOCK_NOTE_BLOCK_IMITATE_ENDER_DRAGON",
                "BLOCK_NOTE_BLOCK_IMITATE_PIGLIN",
                "BLOCK_NOTE_BLOCK_IMITATE_SKELETON",
                "BLOCK_NOTE_BLOCK_IMITATE_WITHER_SKELETON",
                "BLOCK_NOTE_BLOCK_IMITATE_ZOMBIE",
                "BLOCK_NOTE_BLOCK_IRON_XYLOPHONE",
                "BLOCK_NOTE_BLOCK_PLING",
                "BLOCK_NOTE_BLOCK_SNARE",
                "BLOCK_NOTE_BLOCK_XYLOPHONE",
                "BLOCK_NYLIUM_BREAK",
                "BLOCK_NYLIUM_FALL",
                "BLOCK_NYLIUM_HIT",
                "BLOCK_NYLIUM_PLACE",
                "BLOCK_NYLIUM_STEP",
                "BLOCK_PACKED_MUD_BREAK",
                "BLOCK_PACKED_MUD_FALL",
                "BLOCK_PACKED_MUD_HIT",
                "BLOCK_PACKED_MUD_PLACE",
                "BLOCK_PACKED_MUD_STEP",
                "BLOCK_PINK_PETALS_BREAK",
                "BLOCK_PINK_PETALS_FALL",
                "BLOCK_PINK_PETALS_HIT",
                "BLOCK_PINK_PETALS_PLACE",
                "BLOCK_PINK_PETALS_STEP",
                "BLOCK_PISTON_CONTRACT",
                "BLOCK_PISTON_EXTEND",
                "BLOCK_POINTED_DRIPSTONE_BREAK",
                "BLOCK_POINTED_DRIPSTONE_DRIP_LAVA",
                "BLOCK_POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON",
                "BLOCK_POINTED_DRIPSTONE_DRIP_WATER",
                "BLOCK_POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON",
                "BLOCK_POINTED_DRIPSTONE_FALL",
                "BLOCK_POINTED_DRIPSTONE_HIT",
                "BLOCK_POINTED_DRIPSTONE_LAND",
                "BLOCK_POINTED_DRIPSTONE_PLACE",
                "BLOCK_POINTED_DRIPSTONE_STEP",
                "BLOCK_POLISHED_DEEPSLATE_BREAK",
                "BLOCK_POLISHED_DEEPSLATE_FALL",
                "BLOCK_POLISHED_DEEPSLATE_HIT",
                "BLOCK_POLISHED_DEEPSLATE_PLACE",
                "BLOCK_POLISHED_DEEPSLATE_STEP",
                "BLOCK_PORTAL_AMBIENT",
                "BLOCK_PORTAL_TRAVEL",
                "BLOCK_PORTAL_TRIGGER",
                "BLOCK_POWDER_SNOW_BREAK",
                "BLOCK_POWDER_SNOW_FALL",
                "BLOCK_POWDER_SNOW_HIT",
                "BLOCK_POWDER_SNOW_PLACE",
                "BLOCK_POWDER_SNOW_STEP",
                "BLOCK_PUMPKIN_CARVE",
                "BLOCK_REDSTONE_TORCH_BURNOUT",
                "BLOCK_RESPAWN_ANCHOR_AMBIENT",
                "BLOCK_RESPAWN_ANCHOR_CHARGE",
                "BLOCK_RESPAWN_ANCHOR_DEPLETE",
                "BLOCK_RESPAWN_ANCHOR_SET_SPAWN",
                "BLOCK_ROOTED_DIRT_BREAK",
                "BLOCK_ROOTED_DIRT_FALL",
                "BLOCK_ROOTED_DIRT_HIT",
                "BLOCK_ROOTED_DIRT_PLACE",
                "BLOCK_ROOTED_DIRT_STEP",
                "BLOCK_ROOTS_BREAK",
                "BLOCK_ROOTS_FALL",
                "BLOCK_ROOTS_HIT",
                "BLOCK_ROOTS_PLACE",
                "BLOCK_ROOTS_STEP",
                "BLOCK_SAND_BREAK",
                "BLOCK_SAND_FALL",
                "BLOCK_SAND_HIT",
                "BLOCK_SAND_PLACE",
                "BLOCK_SAND_STEP",
                "BLOCK_SCAFFOLDING_BREAK",
                "BLOCK_SCAFFOLDING_FALL",
                "BLOCK_SCAFFOLDING_HIT",
                "BLOCK_SCAFFOLDING_PLACE",
                "BLOCK_SCAFFOLDING_STEP",
                "BLOCK_SCULK_BREAK",
                "BLOCK_SCULK_CATALYST_BLOOM",
                "BLOCK_SCULK_CATALYST_BREAK",
                "BLOCK_SCULK_CATALYST_FALL",
                "BLOCK_SCULK_CATALYST_HIT",
                "BLOCK_SCULK_CATALYST_PLACE",
                "BLOCK_SCULK_CATALYST_STEP",
                "BLOCK_SCULK_CHARGE",
                "BLOCK_SCULK_FALL",
                "BLOCK_SCULK_HIT",
                "BLOCK_SCULK_PLACE",
                "BLOCK_SCULK_SENSOR_BREAK",
                "BLOCK_SCULK_SENSOR_CLICKING",
                "BLOCK_SCULK_SENSOR_CLICKING_STOP",
                "BLOCK_SCULK_SENSOR_FALL",
                "BLOCK_SCULK_SENSOR_HIT",
                "BLOCK_SCULK_SENSOR_PLACE",
                "BLOCK_SCULK_SENSOR_STEP",
                "BLOCK_SCULK_SHRIEKER_BREAK",
                "BLOCK_SCULK_SHRIEKER_FALL",
                "BLOCK_SCULK_SHRIEKER_HIT",
                "BLOCK_SCULK_SHRIEKER_PLACE",
                "BLOCK_SCULK_SHRIEKER_SHRIEK",
                "BLOCK_SCULK_SHRIEKER_STEP",
                "BLOCK_SCULK_SPREAD",
                "BLOCK_SCULK_STEP",
                "BLOCK_SCULK_VEIN_BREAK",
                "BLOCK_SCULK_VEIN_FALL",
                "BLOCK_SCULK_VEIN_HIT",
                "BLOCK_SCULK_VEIN_PLACE",
                "BLOCK_SCULK_VEIN_STEP",
                "BLOCK_SHROOMLIGHT_BREAK",
                "BLOCK_SHROOMLIGHT_FALL",
                "BLOCK_SHROOMLIGHT_HIT",
                "BLOCK_SHROOMLIGHT_PLACE",
                "BLOCK_SHROOMLIGHT_STEP",
                "BLOCK_SHULKER_BOX_CLOSE",
                "BLOCK_SHULKER_BOX_OPEN",
                "BLOCK_SIGN_WAXED_INTERACT_FAIL",
                "BLOCK_SLIME_BLOCK_BREAK",
                "BLOCK_SLIME_BLOCK_FALL",
                "BLOCK_SLIME_BLOCK_HIT",
                "BLOCK_SLIME_BLOCK_PLACE",
                "BLOCK_SLIME_BLOCK_STEP",
                "BLOCK_SMALL_AMETHYST_BUD_BREAK",
                "BLOCK_SMALL_AMETHYST_BUD_PLACE",
                "BLOCK_SMALL_DRIPLEAF_BREAK",
                "BLOCK_SMALL_DRIPLEAF_FALL",
                "BLOCK_SMALL_DRIPLEAF_HIT",
                "BLOCK_SMALL_DRIPLEAF_PLACE",
                "BLOCK_SMALL_DRIPLEAF_STEP",
                "BLOCK_SMITHING_TABLE_USE",
                "BLOCK_SMOKER_SMOKE",
                "BLOCK_SNIFFER_EGG_CRACK",
                "BLOCK_SNIFFER_EGG_HATCH",
                "BLOCK_SNIFFER_EGG_PLOP",
                "BLOCK_SNOW_BREAK",
                "BLOCK_SNOW_FALL",
                "BLOCK_SNOW_HIT",
                "BLOCK_SNOW_PLACE",
                "BLOCK_SNOW_STEP",
                "BLOCK_SOUL_SAND_BREAK",
                "BLOCK_SOUL_SAND_FALL",
                "BLOCK_SOUL_SAND_HIT",
                "BLOCK_SOUL_SAND_PLACE",
                "BLOCK_SOUL_SAND_STEP",
                "BLOCK_SOUL_SOIL_BREAK",
                "BLOCK_SOUL_SOIL_FALL",
                "BLOCK_SOUL_SOIL_HIT",
                "BLOCK_SOUL_SOIL_PLACE",
                "BLOCK_SOUL_SOIL_STEP",
                "BLOCK_SPORE_BLOSSOM_BREAK",
                "BLOCK_SPORE_BLOSSOM_FALL",
                "BLOCK_SPORE_BLOSSOM_HIT",
                "BLOCK_SPORE_BLOSSOM_PLACE",
                "BLOCK_SPORE_BLOSSOM_STEP",
                "BLOCK_STEM_BREAK",
                "BLOCK_STEM_FALL",
                "BLOCK_STEM_HIT",
                "BLOCK_STEM_PLACE",
                "BLOCK_STEM_STEP",
                "BLOCK_STONE_BREAK",
                "BLOCK_STONE_BUTTON_CLICK_OFF",
                "BLOCK_STONE_BUTTON_CLICK_ON",
                "BLOCK_STONE_FALL",
                "BLOCK_STONE_HIT",
                "BLOCK_STONE_PLACE",
                "BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF",
                "BLOCK_STONE_PRESSURE_PLATE_CLICK_ON",
                "BLOCK_STONE_STEP",
                "BLOCK_SUSPICIOUS_GRAVEL_BREAK",
                "BLOCK_SUSPICIOUS_GRAVEL_FALL",
                "BLOCK_SUSPICIOUS_GRAVEL_HIT",
                "BLOCK_SUSPICIOUS_GRAVEL_PLACE",
                "BLOCK_SUSPICIOUS_GRAVEL_STEP",
                "BLOCK_SUSPICIOUS_SAND_BREAK",
                "BLOCK_SUSPICIOUS_SAND_FALL",
                "BLOCK_SUSPICIOUS_SAND_HIT",
                "BLOCK_SUSPICIOUS_SAND_PLACE",
                "BLOCK_SUSPICIOUS_SAND_STEP",
                "BLOCK_SWEET_BERRY_BUSH_BREAK",
                "BLOCK_SWEET_BERRY_BUSH_PICK_BERRIES",
                "BLOCK_SWEET_BERRY_BUSH_PLACE",
                "BLOCK_TRIPWIRE_ATTACH",
                "BLOCK_TRIPWIRE_CLICK_OFF",
                "BLOCK_TRIPWIRE_CLICK_ON",
                "BLOCK_TRIPWIRE_DETACH",
                "BLOCK_TUFF_BREAK",
                "BLOCK_TUFF_FALL",
                "BLOCK_TUFF_HIT",
                "BLOCK_TUFF_PLACE",
                "BLOCK_TUFF_STEP",
                "BLOCK_VINE_BREAK",
                "BLOCK_VINE_FALL",
                "BLOCK_VINE_HIT",
                "BLOCK_VINE_PLACE",
                "BLOCK_VINE_STEP",
                "BLOCK_WART_BLOCK_BREAK",
                "BLOCK_WART_BLOCK_FALL",
                "BLOCK_WART_BLOCK_HIT",
                "BLOCK_WART_BLOCK_PLACE",
                "BLOCK_WART_BLOCK_STEP",
                "BLOCK_WATER_AMBIENT",
                "BLOCK_WEEPING_VINES_BREAK",
                "BLOCK_WEEPING_VINES_FALL",
                "BLOCK_WEEPING_VINES_HIT",
                "BLOCK_WEEPING_VINES_PLACE",
                "BLOCK_WEEPING_VINES_STEP",
                "BLOCK_WET_GRASS_BREAK",
                "BLOCK_WET_GRASS_FALL",
                "BLOCK_WET_GRASS_HIT",
                "BLOCK_WET_GRASS_PLACE",
                "BLOCK_WET_GRASS_STEP",
                "BLOCK_WOODEN_BUTTON_CLICK_OFF",
                "BLOCK_WOODEN_BUTTON_CLICK_ON",
                "BLOCK_WOODEN_DOOR_CLOSE",
                "BLOCK_WOODEN_DOOR_OPEN",
                "BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF",
                "BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON",
                "BLOCK_WOODEN_TRAPDOOR_CLOSE",
                "BLOCK_WOODEN_TRAPDOOR_OPEN",
                "BLOCK_WOOD_BREAK",
                "BLOCK_WOOD_FALL",
                "BLOCK_WOOD_HIT",
                "BLOCK_WOOD_PLACE",
                "BLOCK_WOOD_STEP",
                "BLOCK_WOOL_BREAK",
                "BLOCK_WOOL_FALL",
                "BLOCK_WOOL_HIT",
                "BLOCK_WOOL_PLACE",
                "BLOCK_WOOL_STEP",
                "ENCHANT_THORNS_HIT",
                "ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM",
                "ENTITY_ALLAY_AMBIENT_WITH_ITEM",
                "ENTITY_ALLAY_DEATH",
                "ENTITY_ALLAY_HURT",
                "ENTITY_ALLAY_ITEM_GIVEN",
                "ENTITY_ALLAY_ITEM_TAKEN",
                "ENTITY_ALLAY_ITEM_THROWN",
                "ENTITY_ARMOR_STAND_BREAK",
                "ENTITY_ARMOR_STAND_FALL",
                "ENTITY_ARMOR_STAND_HIT",
                "ENTITY_ARMOR_STAND_PLACE",
                "ENTITY_ARROW_HIT",
                "ENTITY_ARROW_HIT_PLAYER",
                "ENTITY_ARROW_SHOOT",
                "ENTITY_AXOLOTL_ATTACK",
                "ENTITY_AXOLOTL_DEATH",
                "ENTITY_AXOLOTL_HURT",
                "ENTITY_AXOLOTL_IDLE_AIR",
                "ENTITY_AXOLOTL_IDLE_WATER",
                "ENTITY_AXOLOTL_SPLASH",
                "ENTITY_AXOLOTL_SWIM",
                "ENTITY_BAT_AMBIENT",
                "ENTITY_BAT_DEATH",
                "ENTITY_BAT_HURT",
                "ENTITY_BAT_LOOP",
                "ENTITY_BAT_TAKEOFF",
                "ENTITY_BEE_DEATH",
                "ENTITY_BEE_HURT",
                "ENTITY_BEE_LOOP",
                "ENTITY_BEE_LOOP_AGGRESSIVE",
                "ENTITY_BEE_POLLINATE",
                "ENTITY_BEE_STING",
                "ENTITY_BLAZE_AMBIENT",
                "ENTITY_BLAZE_BURN",
                "ENTITY_BLAZE_DEATH",
                "ENTITY_BLAZE_HURT",
                "ENTITY_BLAZE_SHOOT",
                "ENTITY_BOAT_PADDLE_LAND",
                "ENTITY_BOAT_PADDLE_WATER",
                "ENTITY_CAMEL_AMBIENT",
                "ENTITY_CAMEL_DASH",
                "ENTITY_CAMEL_DASH_READY",
                "ENTITY_CAMEL_DEATH",
                "ENTITY_CAMEL_EAT",
                "ENTITY_CAMEL_HURT",
                "ENTITY_CAMEL_SADDLE",
                "ENTITY_CAMEL_SIT",
                "ENTITY_CAMEL_STAND",
                "ENTITY_CAMEL_STEP",
                "ENTITY_CAMEL_STEP_SAND",
                "ENTITY_CAT_AMBIENT",
                "ENTITY_CAT_BEG_FOR_FOOD",
                "ENTITY_CAT_DEATH",
                "ENTITY_CAT_EAT",
                "ENTITY_CAT_HISS",
                "ENTITY_CAT_HURT",
                "ENTITY_CAT_PURR",
                "ENTITY_CAT_PURREOW",
                "ENTITY_CAT_STRAY_AMBIENT",
                "ENTITY_CHICKEN_AMBIENT",
                "ENTITY_CHICKEN_DEATH",
                "ENTITY_CHICKEN_EGG",
                "ENTITY_CHICKEN_HURT",
                "ENTITY_CHICKEN_STEP",
                "ENTITY_COD_AMBIENT",
                "ENTITY_COD_DEATH",
                "ENTITY_COD_FLOP",
                "ENTITY_COD_HURT",
                "ENTITY_COW_AMBIENT",
                "ENTITY_COW_DEATH",
                "ENTITY_COW_HURT",
                "ENTITY_COW_MILK",
                "ENTITY_COW_STEP",
                "ENTITY_CREEPER_DEATH",
                "ENTITY_CREEPER_HURT",
                "ENTITY_CREEPER_PRIMED",
                "ENTITY_DOLPHIN_AMBIENT",
                "ENTITY_DOLPHIN_AMBIENT_WATER",
                "ENTITY_DOLPHIN_ATTACK",
                "ENTITY_DOLPHIN_DEATH",
                "ENTITY_DOLPHIN_EAT",
                "ENTITY_DOLPHIN_HURT",
                "ENTITY_DOLPHIN_JUMP",
                "ENTITY_DOLPHIN_PLAY",
                "ENTITY_DOLPHIN_SPLASH",
                "ENTITY_DOLPHIN_SWIM",
                "ENTITY_DONKEY_AMBIENT",
                "ENTITY_DONKEY_ANGRY",
                "ENTITY_DONKEY_CHEST",
                "ENTITY_DONKEY_DEATH",
                "ENTITY_DONKEY_EAT",
                "ENTITY_DONKEY_HURT",
                "ENTITY_DRAGON_FIREBALL_EXPLODE",
                "ENTITY_DROWNED_AMBIENT",
                "ENTITY_DROWNED_AMBIENT_WATER",
                "ENTITY_DROWNED_DEATH",
                "ENTITY_DROWNED_DEATH_WATER",
                "ENTITY_DROWNED_HURT",
                "ENTITY_DROWNED_HURT_WATER",
                "ENTITY_DROWNED_SHOOT",
                "ENTITY_DROWNED_STEP",
                "ENTITY_DROWNED_SWIM",
                "ENTITY_EGG_THROW",
                "ENTITY_ELDER_GUARDIAN_AMBIENT",
                "ENTITY_ELDER_GUARDIAN_AMBIENT_LAND",
                "ENTITY_ELDER_GUARDIAN_CURSE",
                "ENTITY_ELDER_GUARDIAN_DEATH",
                "ENTITY_ELDER_GUARDIAN_DEATH_LAND",
                "ENTITY_ELDER_GUARDIAN_FLOP",
                "ENTITY_ELDER_GUARDIAN_HURT",
                "ENTITY_ELDER_GUARDIAN_HURT_LAND",
                "ENTITY_ENDERMAN_AMBIENT",
                "ENTITY_ENDERMAN_DEATH",
                "ENTITY_ENDERMAN_HURT",
                "ENTITY_ENDERMAN_SCREAM",
                "ENTITY_ENDERMAN_STARE",
                "ENTITY_ENDERMAN_TELEPORT",
                "ENTITY_ENDERMITE_AMBIENT",
                "ENTITY_ENDERMITE_DEATH",
                "ENTITY_ENDERMITE_HURT",
                "ENTITY_ENDERMITE_STEP",
                "ENTITY_ENDER_DRAGON_AMBIENT",
                "ENTITY_ENDER_DRAGON_DEATH",
                "ENTITY_ENDER_DRAGON_FLAP",
                "ENTITY_ENDER_DRAGON_GROWL",
                "ENTITY_ENDER_DRAGON_HURT",
                "ENTITY_ENDER_DRAGON_SHOOT",
                "ENTITY_ENDER_EYE_DEATH",
                "ENTITY_ENDER_EYE_LAUNCH",
                "ENTITY_ENDER_PEARL_THROW",
                "ENTITY_EVOKER_AMBIENT",
                "ENTITY_EVOKER_CAST_SPELL",
                "ENTITY_EVOKER_CELEBRATE",
                "ENTITY_EVOKER_DEATH",
                "ENTITY_EVOKER_FANGS_ATTACK",
                "ENTITY_EVOKER_HURT",
                "ENTITY_EVOKER_PREPARE_ATTACK",
                "ENTITY_EVOKER_PREPARE_SUMMON",
                "ENTITY_EVOKER_PREPARE_WOLOLO",
                "ENTITY_EXPERIENCE_BOTTLE_THROW",
                "ENTITY_EXPERIENCE_ORB_PICKUP",
                "ENTITY_FIREWORK_ROCKET_BLAST",
                "ENTITY_FIREWORK_ROCKET_BLAST_FAR",
                "ENTITY_FIREWORK_ROCKET_LARGE_BLAST",
                "ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR",
                "ENTITY_FIREWORK_ROCKET_LAUNCH",
                "ENTITY_FIREWORK_ROCKET_SHOOT",
                "ENTITY_FIREWORK_ROCKET_TWINKLE",
                "ENTITY_FIREWORK_ROCKET_TWINKLE_FAR",
                "ENTITY_FISHING_BOBBER_RETRIEVE",
                "ENTITY_FISHING_BOBBER_SPLASH",
                "ENTITY_FISHING_BOBBER_THROW",
                "ENTITY_FISH_SWIM",
                "ENTITY_FOX_AGGRO",
                "ENTITY_FOX_AMBIENT",
                "ENTITY_FOX_BITE",
                "ENTITY_FOX_DEATH",
                "ENTITY_FOX_EAT",
                "ENTITY_FOX_HURT",
                "ENTITY_FOX_SCREECH",
                "ENTITY_FOX_SLEEP",
                "ENTITY_FOX_SNIFF",
                "ENTITY_FOX_SPIT",
                "ENTITY_FOX_TELEPORT",
                "ENTITY_FROG_AMBIENT",
                "ENTITY_FROG_DEATH",
                "ENTITY_FROG_EAT",
                "ENTITY_FROG_HURT",
                "ENTITY_FROG_LAY_SPAWN",
                "ENTITY_FROG_LONG_JUMP",
                "ENTITY_FROG_STEP",
                "ENTITY_FROG_TONGUE",
                "ENTITY_GENERIC_BIG_FALL",
                "ENTITY_GENERIC_BURN",
                "ENTITY_GENERIC_DEATH",
                "ENTITY_GENERIC_DRINK",
                "ENTITY_GENERIC_EAT",
                "ENTITY_GENERIC_EXPLODE",
                "ENTITY_GENERIC_EXTINGUISH_FIRE",
                "ENTITY_GENERIC_HURT",
                "ENTITY_GENERIC_SMALL_FALL",
                "ENTITY_GENERIC_SPLASH",
                "ENTITY_GENERIC_SWIM",
                "ENTITY_GHAST_AMBIENT",
                "ENTITY_GHAST_DEATH",
                "ENTITY_GHAST_HURT",
                "ENTITY_GHAST_SCREAM",
                "ENTITY_GHAST_SHOOT",
                "ENTITY_GHAST_WARN",
                "ENTITY_GLOW_ITEM_FRAME_ADD_ITEM",
                "ENTITY_GLOW_ITEM_FRAME_BREAK",
                "ENTITY_GLOW_ITEM_FRAME_PLACE",
                "ENTITY_GLOW_ITEM_FRAME_REMOVE_ITEM",
                "ENTITY_GLOW_ITEM_FRAME_ROTATE_ITEM",
                "ENTITY_GLOW_SQUID_AMBIENT",
                "ENTITY_GLOW_SQUID_DEATH",
                "ENTITY_GLOW_SQUID_HURT",
                "ENTITY_GLOW_SQUID_SQUIRT",
                "ENTITY_GOAT_AMBIENT",
                "ENTITY_GOAT_DEATH",
                "ENTITY_GOAT_EAT",
                "ENTITY_GOAT_HORN_BREAK",
                "ENTITY_GOAT_HURT",
                "ENTITY_GOAT_LONG_JUMP",
                "ENTITY_GOAT_MILK",
                "ENTITY_GOAT_PREPARE_RAM",
                "ENTITY_GOAT_RAM_IMPACT",
                "ENTITY_GOAT_SCREAMING_AMBIENT",
                "ENTITY_GOAT_SCREAMING_DEATH",
                "ENTITY_GOAT_SCREAMING_EAT",
                "ENTITY_GOAT_SCREAMING_HORN_BREAK",
                "ENTITY_GOAT_SCREAMING_HURT",
                "ENTITY_GOAT_SCREAMING_LONG_JUMP",
                "ENTITY_GOAT_SCREAMING_MILK",
                "ENTITY_GOAT_SCREAMING_PREPARE_RAM",
                "ENTITY_GOAT_SCREAMING_RAM_IMPACT",
                "ENTITY_GOAT_STEP",
                "ENTITY_GUARDIAN_AMBIENT",
                "ENTITY_GUARDIAN_AMBIENT_LAND",
                "ENTITY_GUARDIAN_ATTACK",
                "ENTITY_GUARDIAN_DEATH",
                "ENTITY_GUARDIAN_DEATH_LAND",
                "ENTITY_GUARDIAN_FLOP",
                "ENTITY_GUARDIAN_HURT",
                "ENTITY_GUARDIAN_HURT_LAND",
                "ENTITY_HOGLIN_AMBIENT",
                "ENTITY_HOGLIN_ANGRY",
                "ENTITY_HOGLIN_ATTACK",
                "ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED",
                "ENTITY_HOGLIN_DEATH",
                "ENTITY_HOGLIN_HURT",
                "ENTITY_HOGLIN_RETREAT",
                "ENTITY_HOGLIN_STEP",
                "ENTITY_HORSE_AMBIENT",
                "ENTITY_HORSE_ANGRY",
                "ENTITY_HORSE_ARMOR",
                "ENTITY_HORSE_BREATHE",
                "ENTITY_HORSE_DEATH",
                "ENTITY_HORSE_EAT",
                "ENTITY_HORSE_GALLOP",
                "ENTITY_HORSE_HURT",
                "ENTITY_HORSE_JUMP",
                "ENTITY_HORSE_LAND",
                "ENTITY_HORSE_SADDLE",
                "ENTITY_HORSE_STEP",
                "ENTITY_HORSE_STEP_WOOD",
                "ENTITY_HOSTILE_BIG_FALL",
                "ENTITY_HOSTILE_DEATH",
                "ENTITY_HOSTILE_HURT",
                "ENTITY_HOSTILE_SMALL_FALL",
                "ENTITY_HOSTILE_SPLASH",
                "ENTITY_HOSTILE_SWIM",
                "ENTITY_HUSK_AMBIENT",
                "ENTITY_HUSK_CONVERTED_TO_ZOMBIE",
                "ENTITY_HUSK_DEATH",
                "ENTITY_HUSK_HURT",
                "ENTITY_HUSK_STEP",
                "ENTITY_ILLUSIONER_AMBIENT",
                "ENTITY_ILLUSIONER_CAST_SPELL",
                "ENTITY_ILLUSIONER_DEATH",
                "ENTITY_ILLUSIONER_HURT",
                "ENTITY_ILLUSIONER_MIRROR_MOVE",
                "ENTITY_ILLUSIONER_PREPARE_BLINDNESS",
                "ENTITY_ILLUSIONER_PREPARE_MIRROR",
                "ENTITY_IRON_GOLEM_ATTACK",
                "ENTITY_IRON_GOLEM_DAMAGE",
                "ENTITY_IRON_GOLEM_DEATH",
                "ENTITY_IRON_GOLEM_HURT",
                "ENTITY_IRON_GOLEM_REPAIR",
                "ENTITY_IRON_GOLEM_STEP",
                "ENTITY_ITEM_BREAK",
                "ENTITY_ITEM_FRAME_ADD_ITEM",
                "ENTITY_ITEM_FRAME_BREAK",
                "ENTITY_ITEM_FRAME_PLACE",
                "ENTITY_ITEM_FRAME_REMOVE_ITEM",
                "ENTITY_ITEM_FRAME_ROTATE_ITEM",
                "ENTITY_ITEM_PICKUP",
                "ENTITY_LEASH_KNOT_BREAK",
                "ENTITY_LEASH_KNOT_PLACE",
                "ENTITY_LIGHTNING_BOLT_IMPACT",
                "ENTITY_LIGHTNING_BOLT_THUNDER",
                "ENTITY_LINGERING_POTION_THROW",
                "ENTITY_LLAMA_AMBIENT",
                "ENTITY_LLAMA_ANGRY",
                "ENTITY_LLAMA_CHEST",
                "ENTITY_LLAMA_DEATH",
                "ENTITY_LLAMA_EAT",
                "ENTITY_LLAMA_HURT",
                "ENTITY_LLAMA_SPIT",
                "ENTITY_LLAMA_STEP",
                "ENTITY_LLAMA_SWAG",
                "ENTITY_MAGMA_CUBE_DEATH",
                "ENTITY_MAGMA_CUBE_DEATH_SMALL",
                "ENTITY_MAGMA_CUBE_HURT",
                "ENTITY_MAGMA_CUBE_HURT_SMALL",
                "ENTITY_MAGMA_CUBE_JUMP",
                "ENTITY_MAGMA_CUBE_SQUISH",
                "ENTITY_MAGMA_CUBE_SQUISH_SMALL",
                "ENTITY_MINECART_INSIDE",
                "ENTITY_MINECART_INSIDE_UNDERWATER",
                "ENTITY_MINECART_RIDING",
                "ENTITY_MOOSHROOM_CONVERT",
                "ENTITY_MOOSHROOM_EAT",
                "ENTITY_MOOSHROOM_MILK",
                "ENTITY_MOOSHROOM_SHEAR",
                "ENTITY_MOOSHROOM_SUSPICIOUS_MILK",
                "ENTITY_MULE_AMBIENT",
                "ENTITY_MULE_ANGRY",
                "ENTITY_MULE_CHEST",
                "ENTITY_MULE_DEATH",
                "ENTITY_MULE_EAT",
                "ENTITY_MULE_HURT",
                "ENTITY_OCELOT_AMBIENT",
                "ENTITY_OCELOT_DEATH",
                "ENTITY_OCELOT_HURT",
                "ENTITY_PAINTING_BREAK",
                "ENTITY_PAINTING_PLACE",
                "ENTITY_PANDA_AGGRESSIVE_AMBIENT",
                "ENTITY_PANDA_AMBIENT",
                "ENTITY_PANDA_BITE",
                "ENTITY_PANDA_CANT_BREED",
                "ENTITY_PANDA_DEATH",
                "ENTITY_PANDA_EAT",
                "ENTITY_PANDA_HURT",
                "ENTITY_PANDA_PRE_SNEEZE",
                "ENTITY_PANDA_SNEEZE",
                "ENTITY_PANDA_STEP",
                "ENTITY_PANDA_WORRIED_AMBIENT",
                "ENTITY_PARROT_AMBIENT",
                "ENTITY_PARROT_DEATH",
                "ENTITY_PARROT_EAT",
                "ENTITY_PARROT_FLY",
                "ENTITY_PARROT_HURT",
                "ENTITY_PARROT_IMITATE_BLAZE",
                "ENTITY_PARROT_IMITATE_CREEPER",
                "ENTITY_PARROT_IMITATE_DROWNED",
                "ENTITY_PARROT_IMITATE_ELDER_GUARDIAN",
                "ENTITY_PARROT_IMITATE_ENDERMITE",
                "ENTITY_PARROT_IMITATE_ENDER_DRAGON",
                "ENTITY_PARROT_IMITATE_EVOKER",
                "ENTITY_PARROT_IMITATE_GHAST",
                "ENTITY_PARROT_IMITATE_GUARDIAN",
                "ENTITY_PARROT_IMITATE_HOGLIN",
                "ENTITY_PARROT_IMITATE_HUSK",
                "ENTITY_PARROT_IMITATE_ILLUSIONER",
                "ENTITY_PARROT_IMITATE_MAGMA_CUBE",
                "ENTITY_PARROT_IMITATE_PHANTOM",
                "ENTITY_PARROT_IMITATE_PIGLIN",
                "ENTITY_PARROT_IMITATE_PIGLIN_BRUTE",
                "ENTITY_PARROT_IMITATE_PILLAGER",
                "ENTITY_PARROT_IMITATE_RAVAGER",
                "ENTITY_PARROT_IMITATE_SHULKER",
                "ENTITY_PARROT_IMITATE_SILVERFISH",
                "ENTITY_PARROT_IMITATE_SKELETON",
                "ENTITY_PARROT_IMITATE_SLIME",
                "ENTITY_PARROT_IMITATE_SPIDER",
                "ENTITY_PARROT_IMITATE_STRAY",
                "ENTITY_PARROT_IMITATE_VEX",
                "ENTITY_PARROT_IMITATE_VINDICATOR",
                "ENTITY_PARROT_IMITATE_WARDEN",
                "ENTITY_PARROT_IMITATE_WITCH",
                "ENTITY_PARROT_IMITATE_WITHER",
                "ENTITY_PARROT_IMITATE_WITHER_SKELETON",
                "ENTITY_PARROT_IMITATE_ZOGLIN",
                "ENTITY_PARROT_IMITATE_ZOMBIE",
                "ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER",
                "ENTITY_PARROT_STEP",
                "ENTITY_PHANTOM_AMBIENT",
                "ENTITY_PHANTOM_BITE",
                "ENTITY_PHANTOM_DEATH",
                "ENTITY_PHANTOM_FLAP",
                "ENTITY_PHANTOM_HURT",
                "ENTITY_PHANTOM_SWOOP",
                "ENTITY_PIGLIN_ADMIRING_ITEM",
                "ENTITY_PIGLIN_AMBIENT",
                "ENTITY_PIGLIN_ANGRY",
                "ENTITY_PIGLIN_BRUTE_AMBIENT",
                "ENTITY_PIGLIN_BRUTE_ANGRY",
                "ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED",
                "ENTITY_PIGLIN_BRUTE_DEATH",
                "ENTITY_PIGLIN_BRUTE_HURT",
                "ENTITY_PIGLIN_BRUTE_STEP",
                "ENTITY_PIGLIN_CELEBRATE",
                "ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED",
                "ENTITY_PIGLIN_DEATH",
                "ENTITY_PIGLIN_HURT",
                "ENTITY_PIGLIN_JEALOUS",
                "ENTITY_PIGLIN_RETREAT",
                "ENTITY_PIGLIN_STEP",
                "ENTITY_PIG_AMBIENT",
                "ENTITY_PIG_DEATH",
                "ENTITY_PIG_HURT",
                "ENTITY_PIG_SADDLE",
                "ENTITY_PIG_STEP",
                "ENTITY_PILLAGER_AMBIENT",
                "ENTITY_PILLAGER_CELEBRATE",
                "ENTITY_PILLAGER_DEATH",
                "ENTITY_PILLAGER_HURT",
                "ENTITY_PLAYER_ATTACK_CRIT",
                "ENTITY_PLAYER_ATTACK_KNOCKBACK",
                "ENTITY_PLAYER_ATTACK_NODAMAGE",
                "ENTITY_PLAYER_ATTACK_STRONG",
                "ENTITY_PLAYER_ATTACK_SWEEP",
                "ENTITY_PLAYER_ATTACK_WEAK",
                "ENTITY_PLAYER_BIG_FALL",
                "ENTITY_PLAYER_BREATH",
                "ENTITY_PLAYER_BURP",
                "ENTITY_PLAYER_DEATH",
                "ENTITY_PLAYER_HURT",
                "ENTITY_PLAYER_HURT_DROWN",
                "ENTITY_PLAYER_HURT_FREEZE",
                "ENTITY_PLAYER_HURT_ON_FIRE",
                "ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH",
                "ENTITY_PLAYER_LEVELUP",
                "ENTITY_PLAYER_SMALL_FALL",
                "ENTITY_PLAYER_SPLASH",
                "ENTITY_PLAYER_SPLASH_HIGH_SPEED",
                "ENTITY_PLAYER_SWIM",
                "ENTITY_POLAR_BEAR_AMBIENT",
                "ENTITY_POLAR_BEAR_AMBIENT_BABY",
                "ENTITY_POLAR_BEAR_DEATH",
                "ENTITY_POLAR_BEAR_HURT",
                "ENTITY_POLAR_BEAR_STEP",
                "ENTITY_POLAR_BEAR_WARNING",
                "ENTITY_PUFFER_FISH_AMBIENT",
                "ENTITY_PUFFER_FISH_BLOW_OUT",
                "ENTITY_PUFFER_FISH_BLOW_UP",
                "ENTITY_PUFFER_FISH_DEATH",
                "ENTITY_PUFFER_FISH_FLOP",
                "ENTITY_PUFFER_FISH_HURT",
                "ENTITY_PUFFER_FISH_STING",
                "ENTITY_RABBIT_AMBIENT",
                "ENTITY_RABBIT_ATTACK",
                "ENTITY_RABBIT_DEATH",
                "ENTITY_RABBIT_HURT",
                "ENTITY_RABBIT_JUMP",
                "ENTITY_RAVAGER_AMBIENT",
                "ENTITY_RAVAGER_ATTACK",
                "ENTITY_RAVAGER_CELEBRATE",
                "ENTITY_RAVAGER_DEATH",
                "ENTITY_RAVAGER_HURT",
                "ENTITY_RAVAGER_ROAR",
                "ENTITY_RAVAGER_STEP",
                "ENTITY_RAVAGER_STUNNED",
                "ENTITY_SALMON_AMBIENT",
                "ENTITY_SALMON_DEATH",
                "ENTITY_SALMON_FLOP",
                "ENTITY_SALMON_HURT",
                "ENTITY_SHEEP_AMBIENT",
                "ENTITY_SHEEP_DEATH",
                "ENTITY_SHEEP_HURT",
                "ENTITY_SHEEP_SHEAR",
                "ENTITY_SHEEP_STEP",
                "ENTITY_SHULKER_AMBIENT",
                "ENTITY_SHULKER_BULLET_HIT",
                "ENTITY_SHULKER_BULLET_HURT",
                "ENTITY_SHULKER_CLOSE",
                "ENTITY_SHULKER_DEATH",
                "ENTITY_SHULKER_HURT",
                "ENTITY_SHULKER_HURT_CLOSED",
                "ENTITY_SHULKER_OPEN",
                "ENTITY_SHULKER_SHOOT",
                "ENTITY_SHULKER_TELEPORT",
                "ENTITY_SILVERFISH_AMBIENT",
                "ENTITY_SILVERFISH_DEATH",
                "ENTITY_SILVERFISH_HURT",
                "ENTITY_SILVERFISH_STEP",
                "ENTITY_SKELETON_AMBIENT",
                "ENTITY_SKELETON_CONVERTED_TO_STRAY",
                "ENTITY_SKELETON_DEATH",
                "ENTITY_SKELETON_HORSE_AMBIENT",
                "ENTITY_SKELETON_HORSE_AMBIENT_WATER",
                "ENTITY_SKELETON_HORSE_DEATH",
                "ENTITY_SKELETON_HORSE_GALLOP_WATER",
                "ENTITY_SKELETON_HORSE_HURT",
                "ENTITY_SKELETON_HORSE_JUMP_WATER",
                "ENTITY_SKELETON_HORSE_STEP_WATER",
                "ENTITY_SKELETON_HORSE_SWIM",
                "ENTITY_SKELETON_HURT",
                "ENTITY_SKELETON_SHOOT",
                "ENTITY_SKELETON_STEP",
                "ENTITY_SLIME_ATTACK",
                "ENTITY_SLIME_DEATH",
                "ENTITY_SLIME_DEATH_SMALL",
                "ENTITY_SLIME_HURT",
                "ENTITY_SLIME_HURT_SMALL",
                "ENTITY_SLIME_JUMP",
                "ENTITY_SLIME_JUMP_SMALL",
                "ENTITY_SLIME_SQUISH",
                "ENTITY_SLIME_SQUISH_SMALL",
                "ENTITY_SNIFFER_DEATH",
                "ENTITY_SNIFFER_DIGGING",
                "ENTITY_SNIFFER_DIGGING_STOP",
                "ENTITY_SNIFFER_DROP_SEED",
                "ENTITY_SNIFFER_EAT",
                "ENTITY_SNIFFER_HAPPY",
                "ENTITY_SNIFFER_HURT",
                "ENTITY_SNIFFER_IDLE",
                "ENTITY_SNIFFER_SCENTING",
                "ENTITY_SNIFFER_SEARCHING",
                "ENTITY_SNIFFER_SNIFFING",
                "ENTITY_SNIFFER_STEP",
                "ENTITY_SNOWBALL_THROW",
                "ENTITY_SNOW_GOLEM_AMBIENT",
                "ENTITY_SNOW_GOLEM_DEATH",
                "ENTITY_SNOW_GOLEM_HURT",
                "ENTITY_SNOW_GOLEM_SHEAR",
                "ENTITY_SNOW_GOLEM_SHOOT",
                "ENTITY_SPIDER_AMBIENT",
                "ENTITY_SPIDER_DEATH",
                "ENTITY_SPIDER_HURT",
                "ENTITY_SPIDER_STEP",
                "ENTITY_SPLASH_POTION_BREAK",
                "ENTITY_SPLASH_POTION_THROW",
                "ENTITY_SQUID_AMBIENT",
                "ENTITY_SQUID_DEATH",
                "ENTITY_SQUID_HURT",
                "ENTITY_SQUID_SQUIRT",
                "ENTITY_STRAY_AMBIENT",
                "ENTITY_STRAY_DEATH",
                "ENTITY_STRAY_HURT",
                "ENTITY_STRAY_STEP",
                "ENTITY_STRIDER_AMBIENT",
                "ENTITY_STRIDER_DEATH",
                "ENTITY_STRIDER_EAT",
                "ENTITY_STRIDER_HAPPY",
                "ENTITY_STRIDER_HURT",
                "ENTITY_STRIDER_RETREAT",
                "ENTITY_STRIDER_SADDLE",
                "ENTITY_STRIDER_STEP",
                "ENTITY_STRIDER_STEP_LAVA",
                "ENTITY_TADPOLE_DEATH",
                "ENTITY_TADPOLE_FLOP",
                "ENTITY_TADPOLE_GROW_UP",
                "ENTITY_TADPOLE_HURT",
                "ENTITY_TNT_PRIMED",
                "ENTITY_TROPICAL_FISH_AMBIENT",
                "ENTITY_TROPICAL_FISH_DEATH",
                "ENTITY_TROPICAL_FISH_FLOP",
                "ENTITY_TROPICAL_FISH_HURT",
                "ENTITY_TURTLE_AMBIENT_LAND",
                "ENTITY_TURTLE_DEATH",
                "ENTITY_TURTLE_DEATH_BABY",
                "ENTITY_TURTLE_EGG_BREAK",
                "ENTITY_TURTLE_EGG_CRACK",
                "ENTITY_TURTLE_EGG_HATCH",
                "ENTITY_TURTLE_HURT",
                "ENTITY_TURTLE_HURT_BABY",
                "ENTITY_TURTLE_LAY_EGG",
                "ENTITY_TURTLE_SHAMBLE",
                "ENTITY_TURTLE_SHAMBLE_BABY",
                "ENTITY_TURTLE_SWIM",
                "ENTITY_VEX_AMBIENT",
                "ENTITY_VEX_CHARGE",
                "ENTITY_VEX_DEATH",
                "ENTITY_VEX_HURT",
                "ENTITY_VILLAGER_AMBIENT",
                "ENTITY_VILLAGER_CELEBRATE",
                "ENTITY_VILLAGER_DEATH",
                "ENTITY_VILLAGER_HURT",
                "ENTITY_VILLAGER_NO",
                "ENTITY_VILLAGER_TRADE",
                "ENTITY_VILLAGER_WORK_ARMORER",
                "ENTITY_VILLAGER_WORK_BUTCHER",
                "ENTITY_VILLAGER_WORK_CARTOGRAPHER",
                "ENTITY_VILLAGER_WORK_CLERIC",
                "ENTITY_VILLAGER_WORK_FARMER",
                "ENTITY_VILLAGER_WORK_FISHERMAN",
                "ENTITY_VILLAGER_WORK_FLETCHER",
                "ENTITY_VILLAGER_WORK_LEATHERWORKER",
                "ENTITY_VILLAGER_WORK_LIBRARIAN",
                "ENTITY_VILLAGER_WORK_MASON",
                "ENTITY_VILLAGER_WORK_SHEPHERD",
                "ENTITY_VILLAGER_WORK_TOOLSMITH",
                "ENTITY_VILLAGER_WORK_WEAPONSMITH",
                "ENTITY_VILLAGER_YES",
                "ENTITY_VINDICATOR_AMBIENT",
                "ENTITY_VINDICATOR_CELEBRATE",
                "ENTITY_VINDICATOR_DEATH",
                "ENTITY_VINDICATOR_HURT",
                "ENTITY_WANDERING_TRADER_AMBIENT",
                "ENTITY_WANDERING_TRADER_DEATH",
                "ENTITY_WANDERING_TRADER_DISAPPEARED",
                "ENTITY_WANDERING_TRADER_DRINK_MILK",
                "ENTITY_WANDERING_TRADER_DRINK_POTION",
                "ENTITY_WANDERING_TRADER_HURT",
                "ENTITY_WANDERING_TRADER_NO",
                "ENTITY_WANDERING_TRADER_REAPPEARED",
                "ENTITY_WANDERING_TRADER_TRADE",
                "ENTITY_WANDERING_TRADER_YES",
                "ENTITY_WARDEN_AGITATED",
                "ENTITY_WARDEN_AMBIENT",
                "ENTITY_WARDEN_ANGRY",
                "ENTITY_WARDEN_ATTACK_IMPACT",
                "ENTITY_WARDEN_DEATH",
                "ENTITY_WARDEN_DIG",
                "ENTITY_WARDEN_EMERGE",
                "ENTITY_WARDEN_HEARTBEAT",
                "ENTITY_WARDEN_HURT",
                "ENTITY_WARDEN_LISTENING",
                "ENTITY_WARDEN_LISTENING_ANGRY",
                "ENTITY_WARDEN_NEARBY_CLOSE",
                "ENTITY_WARDEN_NEARBY_CLOSER",
                "ENTITY_WARDEN_NEARBY_CLOSEST",
                "ENTITY_WARDEN_ROAR",
                "ENTITY_WARDEN_SNIFF",
                "ENTITY_WARDEN_SONIC_BOOM",
                "ENTITY_WARDEN_SONIC_CHARGE",
                "ENTITY_WARDEN_STEP",
                "ENTITY_WARDEN_TENDRIL_CLICKS",
                "ENTITY_WITCH_AMBIENT",
                "ENTITY_WITCH_CELEBRATE",
                "ENTITY_WITCH_DEATH",
                "ENTITY_WITCH_DRINK",
                "ENTITY_WITCH_HURT",
                "ENTITY_WITCH_THROW",
                "ENTITY_WITHER_AMBIENT",
                "ENTITY_WITHER_BREAK_BLOCK",
                "ENTITY_WITHER_DEATH",
                "ENTITY_WITHER_HURT",
                "ENTITY_WITHER_SHOOT",
                "ENTITY_WITHER_SKELETON_AMBIENT",
                "ENTITY_WITHER_SKELETON_DEATH",
                "ENTITY_WITHER_SKELETON_HURT",
                "ENTITY_WITHER_SKELETON_STEP",
                "ENTITY_WITHER_SPAWN",
                "ENTITY_WOLF_AMBIENT",
                "ENTITY_WOLF_DEATH",
                "ENTITY_WOLF_GROWL",
                "ENTITY_WOLF_HOWL",
                "ENTITY_WOLF_HURT",
                "ENTITY_WOLF_PANT",
                "ENTITY_WOLF_SHAKE",
                "ENTITY_WOLF_STEP",
                "ENTITY_WOLF_WHINE",
                "ENTITY_ZOGLIN_AMBIENT",
                "ENTITY_ZOGLIN_ANGRY",
                "ENTITY_ZOGLIN_ATTACK",
                "ENTITY_ZOGLIN_DEATH",
                "ENTITY_ZOGLIN_HURT",
                "ENTITY_ZOGLIN_STEP",
                "ENTITY_ZOMBIE_AMBIENT",
                "ENTITY_ZOMBIE_ATTACK_IRON_DOOR",
                "ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR",
                "ENTITY_ZOMBIE_BREAK_WOODEN_DOOR",
                "ENTITY_ZOMBIE_CONVERTED_TO_DROWNED",
                "ENTITY_ZOMBIE_DEATH",
                "ENTITY_ZOMBIE_DESTROY_EGG",
                "ENTITY_ZOMBIE_HORSE_AMBIENT",
                "ENTITY_ZOMBIE_HORSE_DEATH",
                "ENTITY_ZOMBIE_HORSE_HURT",
                "ENTITY_ZOMBIE_HURT",
                "ENTITY_ZOMBIE_INFECT",
                "ENTITY_ZOMBIE_STEP",
                "ENTITY_ZOMBIE_VILLAGER_AMBIENT",
                "ENTITY_ZOMBIE_VILLAGER_CONVERTED",
                "ENTITY_ZOMBIE_VILLAGER_CURE",
                "ENTITY_ZOMBIE_VILLAGER_DEATH",
                "ENTITY_ZOMBIE_VILLAGER_HURT",
                "ENTITY_ZOMBIE_VILLAGER_STEP",
                "ENTITY_ZOMBIFIED_PIGLIN_AMBIENT",
                "ENTITY_ZOMBIFIED_PIGLIN_ANGRY",
                "ENTITY_ZOMBIFIED_PIGLIN_DEATH",
                "ENTITY_ZOMBIFIED_PIGLIN_HURT",
                "EVENT_RAID_HORN",
                "INTENTIONALLY_EMPTY",
                "ITEM_ARMOR_EQUIP_CHAIN",
                "ITEM_ARMOR_EQUIP_DIAMOND",
                "ITEM_ARMOR_EQUIP_ELYTRA",
                "ITEM_ARMOR_EQUIP_GENERIC",
                "ITEM_ARMOR_EQUIP_GOLD",
                "ITEM_ARMOR_EQUIP_IRON",
                "ITEM_ARMOR_EQUIP_LEATHER",
                "ITEM_ARMOR_EQUIP_NETHERITE",
                "ITEM_ARMOR_EQUIP_TURTLE",
                "ITEM_AXE_SCRAPE",
                "ITEM_AXE_STRIP",
                "ITEM_AXE_WAX_OFF",
                "ITEM_BONE_MEAL_USE",
                "ITEM_BOOK_PAGE_TURN",
                "ITEM_BOOK_PUT",
                "ITEM_BOTTLE_EMPTY",
                "ITEM_BOTTLE_FILL",
                "ITEM_BOTTLE_FILL_DRAGONBREATH",
                "ITEM_BRUSH_BRUSHING_GENERIC",
                "ITEM_BRUSH_BRUSHING_GRAVEL",
                "ITEM_BRUSH_BRUSHING_GRAVEL_COMPLETE",
                "ITEM_BRUSH_BRUSHING_SAND",
                "ITEM_BRUSH_BRUSHING_SAND_COMPLETE",
                "ITEM_BUCKET_EMPTY",
                "ITEM_BUCKET_EMPTY_AXOLOTL",
                "ITEM_BUCKET_EMPTY_FISH",
                "ITEM_BUCKET_EMPTY_LAVA",
                "ITEM_BUCKET_EMPTY_POWDER_SNOW",
                "ITEM_BUCKET_EMPTY_TADPOLE",
                "ITEM_BUCKET_FILL",
                "ITEM_BUCKET_FILL_AXOLOTL",
                "ITEM_BUCKET_FILL_FISH",
                "ITEM_BUCKET_FILL_LAVA",
                "ITEM_BUCKET_FILL_POWDER_SNOW",
                "ITEM_BUCKET_FILL_TADPOLE",
                "ITEM_BUNDLE_DROP_CONTENTS",
                "ITEM_BUNDLE_INSERT",
                "ITEM_BUNDLE_REMOVE_ONE",
                "ITEM_CHORUS_FRUIT_TELEPORT",
                "ITEM_CROP_PLANT",
                "ITEM_CROSSBOW_HIT",
                "ITEM_CROSSBOW_LOADING_END",
                "ITEM_CROSSBOW_LOADING_MIDDLE",
                "ITEM_CROSSBOW_LOADING_START",
                "ITEM_CROSSBOW_QUICK_CHARGE_1",
                "ITEM_CROSSBOW_QUICK_CHARGE_2",
                "ITEM_CROSSBOW_QUICK_CHARGE_3",
                "ITEM_CROSSBOW_SHOOT",
                "ITEM_DYE_USE",
                "ITEM_ELYTRA_FLYING",
                "ITEM_FIRECHARGE_USE",
                "ITEM_FLINTANDSTEEL_USE",
                "ITEM_GLOW_INK_SAC_USE",
                "ITEM_GOAT_HORN_PLAY",
                "ITEM_GOAT_HORN_SOUND_0",
                "ITEM_GOAT_HORN_SOUND_1",
                "ITEM_GOAT_HORN_SOUND_2",
                "ITEM_GOAT_HORN_SOUND_3",
                "ITEM_GOAT_HORN_SOUND_4",
                "ITEM_GOAT_HORN_SOUND_5",
                "ITEM_GOAT_HORN_SOUND_6",
                "ITEM_GOAT_HORN_SOUND_7",
                "ITEM_HOE_TILL",
                "ITEM_HONEYCOMB_WAX_ON",
                "ITEM_HONEY_BOTTLE_DRINK",
                "ITEM_INK_SAC_USE",
                "ITEM_LODESTONE_COMPASS_LOCK",
                "ITEM_NETHER_WART_PLANT",
                "ITEM_SHIELD_BLOCK",
                "ITEM_SHIELD_BREAK",
                "ITEM_SHOVEL_FLATTEN",
                "ITEM_SPYGLASS_STOP_USING",
                "ITEM_SPYGLASS_USE",
                "ITEM_TOTEM_USE",
                "ITEM_TRIDENT_HIT",
                "ITEM_TRIDENT_HIT_GROUND",
                "ITEM_TRIDENT_RETURN",
                "ITEM_TRIDENT_RIPTIDE_1",
                "ITEM_TRIDENT_RIPTIDE_2",
                "ITEM_TRIDENT_RIPTIDE_3",
                "ITEM_TRIDENT_THROW",
                "ITEM_TRIDENT_THUNDER",
                "MUSIC_CREATIVE",
                "MUSIC_CREDITS",
                "MUSIC_DISC_11",
                "MUSIC_DISC_13",
                "MUSIC_DISC_5",
                "MUSIC_DISC_BLOCKS",
                "MUSIC_DISC_CAT",
                "MUSIC_DISC_CHIRP",
                "MUSIC_DISC_FAR",
                "MUSIC_DISC_MALL",
                "MUSIC_DISC_MELLOHI",
                "MUSIC_DISC_OTHERSIDE",
                "MUSIC_DISC_PIGSTEP",
                "MUSIC_DISC_RELIC",
                "MUSIC_DISC_STAL",
                "MUSIC_DISC_STRAD",
                "MUSIC_DISC_WAIT",
                "MUSIC_DISC_WARD",
                "MUSIC_DRAGON",
                "MUSIC_END",
                "MUSIC_GAME",
                "MUSIC_MENU",
                "MUSIC_NETHER_BASALT_DELTAS",
                "MUSIC_NETHER_CRIMSON_FOREST",
                "MUSIC_NETHER_NETHER_WASTES",
                "MUSIC_NETHER_SOUL_SAND_VALLEY",
                "MUSIC_NETHER_WARPED_FOREST",
                "MUSIC_OVERWORLD_BADLANDS",
                "MUSIC_OVERWORLD_BAMBOO_JUNGLE",
                "MUSIC_OVERWORLD_CHERRY_GROVE",
                "MUSIC_OVERWORLD_DEEP_DARK",
                "MUSIC_OVERWORLD_DESERT",
                "MUSIC_OVERWORLD_DRIPSTONE_CAVES",
                "MUSIC_OVERWORLD_FLOWER_FOREST",
                "MUSIC_OVERWORLD_FOREST",
                "MUSIC_OVERWORLD_FROZEN_PEAKS",
                "MUSIC_OVERWORLD_GROVE",
                "MUSIC_OVERWORLD_JAGGED_PEAKS",
                "MUSIC_OVERWORLD_JUNGLE",
                "MUSIC_OVERWORLD_LUSH_CAVES",
                "MUSIC_OVERWORLD_MEADOW",
                "MUSIC_OVERWORLD_OLD_GROWTH_TAIGA",
                "MUSIC_OVERWORLD_SNOWY_SLOPES",
                "MUSIC_OVERWORLD_SPARSE_JUNGLE",
                "MUSIC_OVERWORLD_STONY_PEAKS",
                "MUSIC_OVERWORLD_SWAMP",
                "MUSIC_UNDER_WATER",
                "PARTICLE_SOUL_ESCAPE",
                "UI_BUTTON_CLICK",
                "UI_CARTOGRAPHY_TABLE_TAKE_RESULT",
                "UI_LOOM_SELECT_PATTERN",
                "UI_LOOM_TAKE_RESULT",
                "UI_STONECUTTER_SELECT_RECIPE",
                "UI_STONECUTTER_TAKE_RESULT",
                "UI_TOAST_CHALLENGE_COMPLETE",
                "UI_TOAST_IN",
                "UI_TOAST_OUT",
                "WEATHER_RAIN",
                "WEATHER_RAIN_ABOVE"
            ],
            available: true,
            requireMode: true
        },
        particle: {
            description: "A particle",
            type: "string",
            enum: [
                "EXPLOSION_NORMAL",
                "EXPLOSION_LARGE",
                "EXPLOSION_HUGE",
                "FIREWORKS_SPARK",
                "WATER_BUBBLE",
                "WATER_SPLASH",
                "WATER_WAKE",
                "SUSPENDED",
                "SUSPENDED_DEPTH",
                "CRIT",
                "CRIT_MAGIC",
                "SMOKE_NORMAL",
                "SMOKE_LARGE",
                "SPELL",
                "SPELL_INSTANT",
                "SPELL_MOB",
                "SPELL_MOB_AMBIENT",
                "SPELL_WITCH",
                "DRIP_WATER",
                "DRIP_LAVA",
                "VILLAGER_ANGRY",
                "VILLAGER_HAPPY",
                "TOWN_AURA",
                "NOTE",
                "PORTAL",
                "ENCHANTMENT_TABLE",
                "FLAME",
                "LAVA",
                "CLOUD",
                "REDSTONE",
                "SNOWBALL",
                "SNOW_SHOVEL",
                "SLIME",
                "HEART",
                "ITEM_CRACK",
                "BLOCK_CRACK",
                "BLOCK_DUST",
                "WATER_DROP",
                "MOB_APPEARANCE",
                "DRAGON_BREATH",
                "END_ROD",
                "DAMAGE_INDICATOR",
                "SWEEP_ATTACK",
                "FALLING_DUST",
                "TOTEM",
                "SPIT",
                "SQUID_INK",
                "BUBBLE_POP",
                "CURRENT_DOWN",
                "BUBBLE_COLUMN_UP",
                "NAUTILUS",
                "DOLPHIN",
                "SNEEZE",
                "CAMPFIRE_COSY_SMOKE",
                "CAMPFIRE_SIGNAL_SMOKE",
                "COMPOSTER",
                "FLASH",
                "FALLING_LAVA",
                "LANDING_LAVA",
                "FALLING_WATER",
                "DRIPPING_HONEY",
                "FALLING_HONEY",
                "LANDING_HONEY",
                "FALLING_NECTAR",
                "SOUL_FIRE_FLAME",
                "ASH",
                "CRIMSON_SPORE",
                "WARPED_SPORE",
                "SOUL",
                "DRIPPING_OBSIDIAN_TEAR",
                "FALLING_OBSIDIAN_TEAR",
                "LANDING_OBSIDIAN_TEAR",
                "REVERSE_PORTAL",
                "WHITE_ASH",
                "DUST_COLOR_TRANSITION",
                "VIBRATION",
                "FALLING_SPORE_BLOSSOM",
                "SPORE_BLOSSOM_AIR",
                "SMALL_FLAME",
                "SNOWFLAKE",
                "DRIPPING_DRIPSTONE_LAVA",
                "FALLING_DRIPSTONE_LAVA",
                "DRIPPING_DRIPSTONE_WATER",
                "FALLING_DRIPSTONE_WATER",
                "GLOW_SQUID_INK",
                "GLOW",
                "WAX_ON",
                "WAX_OFF",
                "ELECTRIC_SPARK",
                "SCRAPE",
                "SONIC_BOOM",
                "SCULK_SOUL",
                "SCULK_CHARGE",
                "SCULK_CHARGE_POP",
                "SHRIEK",
                "CHERRY_LEAVES",
                "EGG_CRACK",
                "BLOCK_MARKER",
                "LEGACY_BLOCK_CRACK",
                "LEGACY_BLOCK_DUST",
                "LEGACY_FALLING_DUST"
            ],
            available: true,
            requireMode: true
        },
        material: {
            type: "string",
            enum: [
                "AIR",
                "STONE",
                "GRANITE",
                "POLISHED_GRANITE",
                "DIORITE",
                "POLISHED_DIORITE",
                "ANDESITE",
                "POLISHED_ANDESITE",
                "DEEPSLATE",
                "COBBLED_DEEPSLATE",
                "POLISHED_DEEPSLATE",
                "CALCITE",
                "TUFF",
                "DRIPSTONE_BLOCK",
                "GRASS_BLOCK",
                "DIRT",
                "COARSE_DIRT",
                "PODZOL",
                "ROOTED_DIRT",
                "MUD",
                "CRIMSON_NYLIUM",
                "WARPED_NYLIUM",
                "COBBLESTONE",
                "OAK_PLANKS",
                "SPRUCE_PLANKS",
                "BIRCH_PLANKS",
                "JUNGLE_PLANKS",
                "ACACIA_PLANKS",
                "CHERRY_PLANKS",
                "DARK_OAK_PLANKS",
                "MANGROVE_PLANKS",
                "BAMBOO_PLANKS",
                "CRIMSON_PLANKS",
                "WARPED_PLANKS",
                "BAMBOO_MOSAIC",
                "OAK_SAPLING",
                "SPRUCE_SAPLING",
                "BIRCH_SAPLING",
                "JUNGLE_SAPLING",
                "ACACIA_SAPLING",
                "CHERRY_SAPLING",
                "DARK_OAK_SAPLING",
                "MANGROVE_PROPAGULE",
                "BEDROCK",
                "SAND",
                "SUSPICIOUS_SAND",
                "SUSPICIOUS_GRAVEL",
                "RED_SAND",
                "GRAVEL",
                "COAL_ORE",
                "DEEPSLATE_COAL_ORE",
                "IRON_ORE",
                "DEEPSLATE_IRON_ORE",
                "COPPER_ORE",
                "DEEPSLATE_COPPER_ORE",
                "GOLD_ORE",
                "DEEPSLATE_GOLD_ORE",
                "REDSTONE_ORE",
                "DEEPSLATE_REDSTONE_ORE",
                "EMERALD_ORE",
                "DEEPSLATE_EMERALD_ORE",
                "LAPIS_ORE",
                "DEEPSLATE_LAPIS_ORE",
                "DIAMOND_ORE",
                "DEEPSLATE_DIAMOND_ORE",
                "NETHER_GOLD_ORE",
                "NETHER_QUARTZ_ORE",
                "ANCIENT_DEBRIS",
                "COAL_BLOCK",
                "RAW_IRON_BLOCK",
                "RAW_COPPER_BLOCK",
                "RAW_GOLD_BLOCK",
                "AMETHYST_BLOCK",
                "BUDDING_AMETHYST",
                "IRON_BLOCK",
                "COPPER_BLOCK",
                "GOLD_BLOCK",
                "DIAMOND_BLOCK",
                "NETHERITE_BLOCK",
                "EXPOSED_COPPER",
                "WEATHERED_COPPER",
                "OXIDIZED_COPPER",
                "CUT_COPPER",
                "EXPOSED_CUT_COPPER",
                "WEATHERED_CUT_COPPER",
                "OXIDIZED_CUT_COPPER",
                "CUT_COPPER_STAIRS",
                "EXPOSED_CUT_COPPER_STAIRS",
                "WEATHERED_CUT_COPPER_STAIRS",
                "OXIDIZED_CUT_COPPER_STAIRS",
                "CUT_COPPER_SLAB",
                "EXPOSED_CUT_COPPER_SLAB",
                "WEATHERED_CUT_COPPER_SLAB",
                "OXIDIZED_CUT_COPPER_SLAB",
                "WAXED_COPPER_BLOCK",
                "WAXED_EXPOSED_COPPER",
                "WAXED_WEATHERED_COPPER",
                "WAXED_OXIDIZED_COPPER",
                "WAXED_CUT_COPPER",
                "WAXED_EXPOSED_CUT_COPPER",
                "WAXED_WEATHERED_CUT_COPPER",
                "WAXED_OXIDIZED_CUT_COPPER",
                "WAXED_CUT_COPPER_STAIRS",
                "WAXED_EXPOSED_CUT_COPPER_STAIRS",
                "WAXED_WEATHERED_CUT_COPPER_STAIRS",
                "WAXED_OXIDIZED_CUT_COPPER_STAIRS",
                "WAXED_CUT_COPPER_SLAB",
                "WAXED_EXPOSED_CUT_COPPER_SLAB",
                "WAXED_WEATHERED_CUT_COPPER_SLAB",
                "WAXED_OXIDIZED_CUT_COPPER_SLAB",
                "OAK_LOG",
                "SPRUCE_LOG",
                "BIRCH_LOG",
                "JUNGLE_LOG",
                "ACACIA_LOG",
                "CHERRY_LOG",
                "DARK_OAK_LOG",
                "MANGROVE_LOG",
                "MANGROVE_ROOTS",
                "MUDDY_MANGROVE_ROOTS",
                "CRIMSON_STEM",
                "WARPED_STEM",
                "BAMBOO_BLOCK",
                "STRIPPED_OAK_LOG",
                "STRIPPED_SPRUCE_LOG",
                "STRIPPED_BIRCH_LOG",
                "STRIPPED_JUNGLE_LOG",
                "STRIPPED_ACACIA_LOG",
                "STRIPPED_CHERRY_LOG",
                "STRIPPED_DARK_OAK_LOG",
                "STRIPPED_MANGROVE_LOG",
                "STRIPPED_CRIMSON_STEM",
                "STRIPPED_WARPED_STEM",
                "STRIPPED_OAK_WOOD",
                "STRIPPED_SPRUCE_WOOD",
                "STRIPPED_BIRCH_WOOD",
                "STRIPPED_JUNGLE_WOOD",
                "STRIPPED_ACACIA_WOOD",
                "STRIPPED_CHERRY_WOOD",
                "STRIPPED_DARK_OAK_WOOD",
                "STRIPPED_MANGROVE_WOOD",
                "STRIPPED_CRIMSON_HYPHAE",
                "STRIPPED_WARPED_HYPHAE",
                "STRIPPED_BAMBOO_BLOCK",
                "OAK_WOOD",
                "SPRUCE_WOOD",
                "BIRCH_WOOD",
                "JUNGLE_WOOD",
                "ACACIA_WOOD",
                "CHERRY_WOOD",
                "DARK_OAK_WOOD",
                "MANGROVE_WOOD",
                "CRIMSON_HYPHAE",
                "WARPED_HYPHAE",
                "OAK_LEAVES",
                "SPRUCE_LEAVES",
                "BIRCH_LEAVES",
                "JUNGLE_LEAVES",
                "ACACIA_LEAVES",
                "CHERRY_LEAVES",
                "DARK_OAK_LEAVES",
                "MANGROVE_LEAVES",
                "AZALEA_LEAVES",
                "FLOWERING_AZALEA_LEAVES",
                "SPONGE",
                "WET_SPONGE",
                "GLASS",
                "TINTED_GLASS",
                "LAPIS_BLOCK",
                "SANDSTONE",
                "CHISELED_SANDSTONE",
                "CUT_SANDSTONE",
                "COBWEB",
                "GRASS",
                "FERN",
                "AZALEA",
                "FLOWERING_AZALEA",
                "DEAD_BUSH",
                "SEAGRASS",
                "SEA_PICKLE",
                "WHITE_WOOL",
                "ORANGE_WOOL",
                "MAGENTA_WOOL",
                "LIGHT_BLUE_WOOL",
                "YELLOW_WOOL",
                "LIME_WOOL",
                "PINK_WOOL",
                "GRAY_WOOL",
                "LIGHT_GRAY_WOOL",
                "CYAN_WOOL",
                "PURPLE_WOOL",
                "BLUE_WOOL",
                "BROWN_WOOL",
                "GREEN_WOOL",
                "RED_WOOL",
                "BLACK_WOOL",
                "DANDELION",
                "POPPY",
                "BLUE_ORCHID",
                "ALLIUM",
                "AZURE_BLUET",
                "RED_TULIP",
                "ORANGE_TULIP",
                "WHITE_TULIP",
                "PINK_TULIP",
                "OXEYE_DAISY",
                "CORNFLOWER",
                "LILY_OF_THE_VALLEY",
                "WITHER_ROSE",
                "TORCHFLOWER",
                "PITCHER_PLANT",
                "SPORE_BLOSSOM",
                "BROWN_MUSHROOM",
                "RED_MUSHROOM",
                "CRIMSON_FUNGUS",
                "WARPED_FUNGUS",
                "CRIMSON_ROOTS",
                "WARPED_ROOTS",
                "NETHER_SPROUTS",
                "WEEPING_VINES",
                "TWISTING_VINES",
                "SUGAR_CANE",
                "KELP",
                "MOSS_CARPET",
                "PINK_PETALS",
                "MOSS_BLOCK",
                "HANGING_ROOTS",
                "BIG_DRIPLEAF",
                "SMALL_DRIPLEAF",
                "BAMBOO",
                "OAK_SLAB",
                "SPRUCE_SLAB",
                "BIRCH_SLAB",
                "JUNGLE_SLAB",
                "ACACIA_SLAB",
                "CHERRY_SLAB",
                "DARK_OAK_SLAB",
                "MANGROVE_SLAB",
                "BAMBOO_SLAB",
                "BAMBOO_MOSAIC_SLAB",
                "CRIMSON_SLAB",
                "WARPED_SLAB",
                "STONE_SLAB",
                "SMOOTH_STONE_SLAB",
                "SANDSTONE_SLAB",
                "CUT_SANDSTONE_SLAB",
                "PETRIFIED_OAK_SLAB",
                "COBBLESTONE_SLAB",
                "BRICK_SLAB",
                "STONE_BRICK_SLAB",
                "MUD_BRICK_SLAB",
                "NETHER_BRICK_SLAB",
                "QUARTZ_SLAB",
                "RED_SANDSTONE_SLAB",
                "CUT_RED_SANDSTONE_SLAB",
                "PURPUR_SLAB",
                "PRISMARINE_SLAB",
                "PRISMARINE_BRICK_SLAB",
                "DARK_PRISMARINE_SLAB",
                "SMOOTH_QUARTZ",
                "SMOOTH_RED_SANDSTONE",
                "SMOOTH_SANDSTONE",
                "SMOOTH_STONE",
                "BRICKS",
                "BOOKSHELF",
                "CHISELED_BOOKSHELF",
                "DECORATED_POT",
                "MOSSY_COBBLESTONE",
                "OBSIDIAN",
                "TORCH",
                "END_ROD",
                "CHORUS_PLANT",
                "CHORUS_FLOWER",
                "PURPUR_BLOCK",
                "PURPUR_PILLAR",
                "PURPUR_STAIRS",
                "SPAWNER",
                "CHEST",
                "CRAFTING_TABLE",
                "FARMLAND",
                "FURNACE",
                "LADDER",
                "COBBLESTONE_STAIRS",
                "SNOW",
                "ICE",
                "SNOW_BLOCK",
                "CACTUS",
                "CLAY",
                "JUKEBOX",
                "OAK_FENCE",
                "SPRUCE_FENCE",
                "BIRCH_FENCE",
                "JUNGLE_FENCE",
                "ACACIA_FENCE",
                "CHERRY_FENCE",
                "DARK_OAK_FENCE",
                "MANGROVE_FENCE",
                "BAMBOO_FENCE",
                "CRIMSON_FENCE",
                "WARPED_FENCE",
                "PUMPKIN",
                "CARVED_PUMPKIN",
                "JACK_O_LANTERN",
                "NETHERRACK",
                "SOUL_SAND",
                "SOUL_SOIL",
                "BASALT",
                "POLISHED_BASALT",
                "SMOOTH_BASALT",
                "SOUL_TORCH",
                "GLOWSTONE",
                "INFESTED_STONE",
                "INFESTED_COBBLESTONE",
                "INFESTED_STONE_BRICKS",
                "INFESTED_MOSSY_STONE_BRICKS",
                "INFESTED_CRACKED_STONE_BRICKS",
                "INFESTED_CHISELED_STONE_BRICKS",
                "INFESTED_DEEPSLATE",
                "STONE_BRICKS",
                "MOSSY_STONE_BRICKS",
                "CRACKED_STONE_BRICKS",
                "CHISELED_STONE_BRICKS",
                "PACKED_MUD",
                "MUD_BRICKS",
                "DEEPSLATE_BRICKS",
                "CRACKED_DEEPSLATE_BRICKS",
                "DEEPSLATE_TILES",
                "CRACKED_DEEPSLATE_TILES",
                "CHISELED_DEEPSLATE",
                "REINFORCED_DEEPSLATE",
                "BROWN_MUSHROOM_BLOCK",
                "RED_MUSHROOM_BLOCK",
                "MUSHROOM_STEM",
                "IRON_BARS",
                "CHAIN",
                "GLASS_PANE",
                "MELON",
                "VINE",
                "GLOW_LICHEN",
                "BRICK_STAIRS",
                "STONE_BRICK_STAIRS",
                "MUD_BRICK_STAIRS",
                "MYCELIUM",
                "LILY_PAD",
                "NETHER_BRICKS",
                "CRACKED_NETHER_BRICKS",
                "CHISELED_NETHER_BRICKS",
                "NETHER_BRICK_FENCE",
                "NETHER_BRICK_STAIRS",
                "SCULK",
                "SCULK_VEIN",
                "SCULK_CATALYST",
                "SCULK_SHRIEKER",
                "ENCHANTING_TABLE",
                "END_PORTAL_FRAME",
                "END_STONE",
                "END_STONE_BRICKS",
                "DRAGON_EGG",
                "SANDSTONE_STAIRS",
                "ENDER_CHEST",
                "EMERALD_BLOCK",
                "OAK_STAIRS",
                "SPRUCE_STAIRS",
                "BIRCH_STAIRS",
                "JUNGLE_STAIRS",
                "ACACIA_STAIRS",
                "CHERRY_STAIRS",
                "DARK_OAK_STAIRS",
                "MANGROVE_STAIRS",
                "BAMBOO_STAIRS",
                "BAMBOO_MOSAIC_STAIRS",
                "CRIMSON_STAIRS",
                "WARPED_STAIRS",
                "COMMAND_BLOCK",
                "BEACON",
                "COBBLESTONE_WALL",
                "MOSSY_COBBLESTONE_WALL",
                "BRICK_WALL",
                "PRISMARINE_WALL",
                "RED_SANDSTONE_WALL",
                "MOSSY_STONE_BRICK_WALL",
                "GRANITE_WALL",
                "STONE_BRICK_WALL",
                "MUD_BRICK_WALL",
                "NETHER_BRICK_WALL",
                "ANDESITE_WALL",
                "RED_NETHER_BRICK_WALL",
                "SANDSTONE_WALL",
                "END_STONE_BRICK_WALL",
                "DIORITE_WALL",
                "BLACKSTONE_WALL",
                "POLISHED_BLACKSTONE_WALL",
                "POLISHED_BLACKSTONE_BRICK_WALL",
                "COBBLED_DEEPSLATE_WALL",
                "POLISHED_DEEPSLATE_WALL",
                "DEEPSLATE_BRICK_WALL",
                "DEEPSLATE_TILE_WALL",
                "ANVIL",
                "CHIPPED_ANVIL",
                "DAMAGED_ANVIL",
                "CHISELED_QUARTZ_BLOCK",
                "QUARTZ_BLOCK",
                "QUARTZ_BRICKS",
                "QUARTZ_PILLAR",
                "QUARTZ_STAIRS",
                "WHITE_TERRACOTTA",
                "ORANGE_TERRACOTTA",
                "MAGENTA_TERRACOTTA",
                "LIGHT_BLUE_TERRACOTTA",
                "YELLOW_TERRACOTTA",
                "LIME_TERRACOTTA",
                "PINK_TERRACOTTA",
                "GRAY_TERRACOTTA",
                "LIGHT_GRAY_TERRACOTTA",
                "CYAN_TERRACOTTA",
                "PURPLE_TERRACOTTA",
                "BLUE_TERRACOTTA",
                "BROWN_TERRACOTTA",
                "GREEN_TERRACOTTA",
                "RED_TERRACOTTA",
                "BLACK_TERRACOTTA",
                "BARRIER",
                "LIGHT",
                "HAY_BLOCK",
                "WHITE_CARPET",
                "ORANGE_CARPET",
                "MAGENTA_CARPET",
                "LIGHT_BLUE_CARPET",
                "YELLOW_CARPET",
                "LIME_CARPET",
                "PINK_CARPET",
                "GRAY_CARPET",
                "LIGHT_GRAY_CARPET",
                "CYAN_CARPET",
                "PURPLE_CARPET",
                "BLUE_CARPET",
                "BROWN_CARPET",
                "GREEN_CARPET",
                "RED_CARPET",
                "BLACK_CARPET",
                "TERRACOTTA",
                "PACKED_ICE",
                "DIRT_PATH",
                "SUNFLOWER",
                "LILAC",
                "ROSE_BUSH",
                "PEONY",
                "TALL_GRASS",
                "LARGE_FERN",
                "WHITE_STAINED_GLASS",
                "ORANGE_STAINED_GLASS",
                "MAGENTA_STAINED_GLASS",
                "LIGHT_BLUE_STAINED_GLASS",
                "YELLOW_STAINED_GLASS",
                "LIME_STAINED_GLASS",
                "PINK_STAINED_GLASS",
                "GRAY_STAINED_GLASS",
                "LIGHT_GRAY_STAINED_GLASS",
                "CYAN_STAINED_GLASS",
                "PURPLE_STAINED_GLASS",
                "BLUE_STAINED_GLASS",
                "BROWN_STAINED_GLASS",
                "GREEN_STAINED_GLASS",
                "RED_STAINED_GLASS",
                "BLACK_STAINED_GLASS",
                "WHITE_STAINED_GLASS_PANE",
                "ORANGE_STAINED_GLASS_PANE",
                "MAGENTA_STAINED_GLASS_PANE",
                "LIGHT_BLUE_STAINED_GLASS_PANE",
                "YELLOW_STAINED_GLASS_PANE",
                "LIME_STAINED_GLASS_PANE",
                "PINK_STAINED_GLASS_PANE",
                "GRAY_STAINED_GLASS_PANE",
                "LIGHT_GRAY_STAINED_GLASS_PANE",
                "CYAN_STAINED_GLASS_PANE",
                "PURPLE_STAINED_GLASS_PANE",
                "BLUE_STAINED_GLASS_PANE",
                "BROWN_STAINED_GLASS_PANE",
                "GREEN_STAINED_GLASS_PANE",
                "RED_STAINED_GLASS_PANE",
                "BLACK_STAINED_GLASS_PANE",
                "PRISMARINE",
                "PRISMARINE_BRICKS",
                "DARK_PRISMARINE",
                "PRISMARINE_STAIRS",
                "PRISMARINE_BRICK_STAIRS",
                "DARK_PRISMARINE_STAIRS",
                "SEA_LANTERN",
                "RED_SANDSTONE",
                "CHISELED_RED_SANDSTONE",
                "CUT_RED_SANDSTONE",
                "RED_SANDSTONE_STAIRS",
                "REPEATING_COMMAND_BLOCK",
                "CHAIN_COMMAND_BLOCK",
                "MAGMA_BLOCK",
                "NETHER_WART_BLOCK",
                "WARPED_WART_BLOCK",
                "RED_NETHER_BRICKS",
                "BONE_BLOCK",
                "STRUCTURE_VOID",
                "SHULKER_BOX",
                "WHITE_SHULKER_BOX",
                "ORANGE_SHULKER_BOX",
                "MAGENTA_SHULKER_BOX",
                "LIGHT_BLUE_SHULKER_BOX",
                "YELLOW_SHULKER_BOX",
                "LIME_SHULKER_BOX",
                "PINK_SHULKER_BOX",
                "GRAY_SHULKER_BOX",
                "LIGHT_GRAY_SHULKER_BOX",
                "CYAN_SHULKER_BOX",
                "PURPLE_SHULKER_BOX",
                "BLUE_SHULKER_BOX",
                "BROWN_SHULKER_BOX",
                "GREEN_SHULKER_BOX",
                "RED_SHULKER_BOX",
                "BLACK_SHULKER_BOX",
                "WHITE_GLAZED_TERRACOTTA",
                "ORANGE_GLAZED_TERRACOTTA",
                "MAGENTA_GLAZED_TERRACOTTA",
                "LIGHT_BLUE_GLAZED_TERRACOTTA",
                "YELLOW_GLAZED_TERRACOTTA",
                "LIME_GLAZED_TERRACOTTA",
                "PINK_GLAZED_TERRACOTTA",
                "GRAY_GLAZED_TERRACOTTA",
                "LIGHT_GRAY_GLAZED_TERRACOTTA",
                "CYAN_GLAZED_TERRACOTTA",
                "PURPLE_GLAZED_TERRACOTTA",
                "BLUE_GLAZED_TERRACOTTA",
                "BROWN_GLAZED_TERRACOTTA",
                "GREEN_GLAZED_TERRACOTTA",
                "RED_GLAZED_TERRACOTTA",
                "BLACK_GLAZED_TERRACOTTA",
                "WHITE_CONCRETE",
                "ORANGE_CONCRETE",
                "MAGENTA_CONCRETE",
                "LIGHT_BLUE_CONCRETE",
                "YELLOW_CONCRETE",
                "LIME_CONCRETE",
                "PINK_CONCRETE",
                "GRAY_CONCRETE",
                "LIGHT_GRAY_CONCRETE",
                "CYAN_CONCRETE",
                "PURPLE_CONCRETE",
                "BLUE_CONCRETE",
                "BROWN_CONCRETE",
                "GREEN_CONCRETE",
                "RED_CONCRETE",
                "BLACK_CONCRETE",
                "WHITE_CONCRETE_POWDER",
                "ORANGE_CONCRETE_POWDER",
                "MAGENTA_CONCRETE_POWDER",
                "LIGHT_BLUE_CONCRETE_POWDER",
                "YELLOW_CONCRETE_POWDER",
                "LIME_CONCRETE_POWDER",
                "PINK_CONCRETE_POWDER",
                "GRAY_CONCRETE_POWDER",
                "LIGHT_GRAY_CONCRETE_POWDER",
                "CYAN_CONCRETE_POWDER",
                "PURPLE_CONCRETE_POWDER",
                "BLUE_CONCRETE_POWDER",
                "BROWN_CONCRETE_POWDER",
                "GREEN_CONCRETE_POWDER",
                "RED_CONCRETE_POWDER",
                "BLACK_CONCRETE_POWDER",
                "TURTLE_EGG",
                "SNIFFER_EGG",
                "DEAD_TUBE_CORAL_BLOCK",
                "DEAD_BRAIN_CORAL_BLOCK",
                "DEAD_BUBBLE_CORAL_BLOCK",
                "DEAD_FIRE_CORAL_BLOCK",
                "DEAD_HORN_CORAL_BLOCK",
                "TUBE_CORAL_BLOCK",
                "BRAIN_CORAL_BLOCK",
                "BUBBLE_CORAL_BLOCK",
                "FIRE_CORAL_BLOCK",
                "HORN_CORAL_BLOCK",
                "TUBE_CORAL",
                "BRAIN_CORAL",
                "BUBBLE_CORAL",
                "FIRE_CORAL",
                "HORN_CORAL",
                "DEAD_BRAIN_CORAL",
                "DEAD_BUBBLE_CORAL",
                "DEAD_FIRE_CORAL",
                "DEAD_HORN_CORAL",
                "DEAD_TUBE_CORAL",
                "TUBE_CORAL_FAN",
                "BRAIN_CORAL_FAN",
                "BUBBLE_CORAL_FAN",
                "FIRE_CORAL_FAN",
                "HORN_CORAL_FAN",
                "DEAD_TUBE_CORAL_FAN",
                "DEAD_BRAIN_CORAL_FAN",
                "DEAD_BUBBLE_CORAL_FAN",
                "DEAD_FIRE_CORAL_FAN",
                "DEAD_HORN_CORAL_FAN",
                "BLUE_ICE",
                "CONDUIT",
                "POLISHED_GRANITE_STAIRS",
                "SMOOTH_RED_SANDSTONE_STAIRS",
                "MOSSY_STONE_BRICK_STAIRS",
                "POLISHED_DIORITE_STAIRS",
                "MOSSY_COBBLESTONE_STAIRS",
                "END_STONE_BRICK_STAIRS",
                "STONE_STAIRS",
                "SMOOTH_SANDSTONE_STAIRS",
                "SMOOTH_QUARTZ_STAIRS",
                "GRANITE_STAIRS",
                "ANDESITE_STAIRS",
                "RED_NETHER_BRICK_STAIRS",
                "POLISHED_ANDESITE_STAIRS",
                "DIORITE_STAIRS",
                "COBBLED_DEEPSLATE_STAIRS",
                "POLISHED_DEEPSLATE_STAIRS",
                "DEEPSLATE_BRICK_STAIRS",
                "DEEPSLATE_TILE_STAIRS",
                "POLISHED_GRANITE_SLAB",
                "SMOOTH_RED_SANDSTONE_SLAB",
                "MOSSY_STONE_BRICK_SLAB",
                "POLISHED_DIORITE_SLAB",
                "MOSSY_COBBLESTONE_SLAB",
                "END_STONE_BRICK_SLAB",
                "SMOOTH_SANDSTONE_SLAB",
                "SMOOTH_QUARTZ_SLAB",
                "GRANITE_SLAB",
                "ANDESITE_SLAB",
                "RED_NETHER_BRICK_SLAB",
                "POLISHED_ANDESITE_SLAB",
                "DIORITE_SLAB",
                "COBBLED_DEEPSLATE_SLAB",
                "POLISHED_DEEPSLATE_SLAB",
                "DEEPSLATE_BRICK_SLAB",
                "DEEPSLATE_TILE_SLAB",
                "SCAFFOLDING",
                "REDSTONE",
                "REDSTONE_TORCH",
                "REDSTONE_BLOCK",
                "REPEATER",
                "COMPARATOR",
                "PISTON",
                "STICKY_PISTON",
                "SLIME_BLOCK",
                "HONEY_BLOCK",
                "OBSERVER",
                "HOPPER",
                "DISPENSER",
                "DROPPER",
                "LECTERN",
                "TARGET",
                "LEVER",
                "LIGHTNING_ROD",
                "DAYLIGHT_DETECTOR",
                "SCULK_SENSOR",
                "CALIBRATED_SCULK_SENSOR",
                "TRIPWIRE_HOOK",
                "TRAPPED_CHEST",
                "TNT",
                "REDSTONE_LAMP",
                "NOTE_BLOCK",
                "STONE_BUTTON",
                "POLISHED_BLACKSTONE_BUTTON",
                "OAK_BUTTON",
                "SPRUCE_BUTTON",
                "BIRCH_BUTTON",
                "JUNGLE_BUTTON",
                "ACACIA_BUTTON",
                "CHERRY_BUTTON",
                "DARK_OAK_BUTTON",
                "MANGROVE_BUTTON",
                "BAMBOO_BUTTON",
                "CRIMSON_BUTTON",
                "WARPED_BUTTON",
                "STONE_PRESSURE_PLATE",
                "POLISHED_BLACKSTONE_PRESSURE_PLATE",
                "LIGHT_WEIGHTED_PRESSURE_PLATE",
                "HEAVY_WEIGHTED_PRESSURE_PLATE",
                "OAK_PRESSURE_PLATE",
                "SPRUCE_PRESSURE_PLATE",
                "BIRCH_PRESSURE_PLATE",
                "JUNGLE_PRESSURE_PLATE",
                "ACACIA_PRESSURE_PLATE",
                "CHERRY_PRESSURE_PLATE",
                "DARK_OAK_PRESSURE_PLATE",
                "MANGROVE_PRESSURE_PLATE",
                "BAMBOO_PRESSURE_PLATE",
                "CRIMSON_PRESSURE_PLATE",
                "WARPED_PRESSURE_PLATE",
                "IRON_DOOR",
                "OAK_DOOR",
                "SPRUCE_DOOR",
                "BIRCH_DOOR",
                "JUNGLE_DOOR",
                "ACACIA_DOOR",
                "CHERRY_DOOR",
                "DARK_OAK_DOOR",
                "MANGROVE_DOOR",
                "BAMBOO_DOOR",
                "CRIMSON_DOOR",
                "WARPED_DOOR",
                "IRON_TRAPDOOR",
                "OAK_TRAPDOOR",
                "SPRUCE_TRAPDOOR",
                "BIRCH_TRAPDOOR",
                "JUNGLE_TRAPDOOR",
                "ACACIA_TRAPDOOR",
                "CHERRY_TRAPDOOR",
                "DARK_OAK_TRAPDOOR",
                "MANGROVE_TRAPDOOR",
                "BAMBOO_TRAPDOOR",
                "CRIMSON_TRAPDOOR",
                "WARPED_TRAPDOOR",
                "OAK_FENCE_GATE",
                "SPRUCE_FENCE_GATE",
                "BIRCH_FENCE_GATE",
                "JUNGLE_FENCE_GATE",
                "ACACIA_FENCE_GATE",
                "CHERRY_FENCE_GATE",
                "DARK_OAK_FENCE_GATE",
                "MANGROVE_FENCE_GATE",
                "BAMBOO_FENCE_GATE",
                "CRIMSON_FENCE_GATE",
                "WARPED_FENCE_GATE",
                "POWERED_RAIL",
                "DETECTOR_RAIL",
                "RAIL",
                "ACTIVATOR_RAIL",
                "SADDLE",
                "MINECART",
                "CHEST_MINECART",
                "FURNACE_MINECART",
                "TNT_MINECART",
                "HOPPER_MINECART",
                "CARROT_ON_A_STICK",
                "WARPED_FUNGUS_ON_A_STICK",
                "ELYTRA",
                "OAK_BOAT",
                "OAK_CHEST_BOAT",
                "SPRUCE_BOAT",
                "SPRUCE_CHEST_BOAT",
                "BIRCH_BOAT",
                "BIRCH_CHEST_BOAT",
                "JUNGLE_BOAT",
                "JUNGLE_CHEST_BOAT",
                "ACACIA_BOAT",
                "ACACIA_CHEST_BOAT",
                "CHERRY_BOAT",
                "CHERRY_CHEST_BOAT",
                "DARK_OAK_BOAT",
                "DARK_OAK_CHEST_BOAT",
                "MANGROVE_BOAT",
                "MANGROVE_CHEST_BOAT",
                "BAMBOO_RAFT",
                "BAMBOO_CHEST_RAFT",
                "STRUCTURE_BLOCK",
                "JIGSAW",
                "TURTLE_HELMET",
                "SCUTE",
                "FLINT_AND_STEEL",
                "APPLE",
                "BOW",
                "ARROW",
                "COAL",
                "CHARCOAL",
                "DIAMOND",
                "EMERALD",
                "LAPIS_LAZULI",
                "QUARTZ",
                "AMETHYST_SHARD",
                "RAW_IRON",
                "IRON_INGOT",
                "RAW_COPPER",
                "COPPER_INGOT",
                "RAW_GOLD",
                "GOLD_INGOT",
                "NETHERITE_INGOT",
                "NETHERITE_SCRAP",
                "WOODEN_SWORD",
                "WOODEN_SHOVEL",
                "WOODEN_PICKAXE",
                "WOODEN_AXE",
                "WOODEN_HOE",
                "STONE_SWORD",
                "STONE_SHOVEL",
                "STONE_PICKAXE",
                "STONE_AXE",
                "STONE_HOE",
                "GOLDEN_SWORD",
                "GOLDEN_SHOVEL",
                "GOLDEN_PICKAXE",
                "GOLDEN_AXE",
                "GOLDEN_HOE",
                "IRON_SWORD",
                "IRON_SHOVEL",
                "IRON_PICKAXE",
                "IRON_AXE",
                "IRON_HOE",
                "DIAMOND_SWORD",
                "DIAMOND_SHOVEL",
                "DIAMOND_PICKAXE",
                "DIAMOND_AXE",
                "DIAMOND_HOE",
                "NETHERITE_SWORD",
                "NETHERITE_SHOVEL",
                "NETHERITE_PICKAXE",
                "NETHERITE_AXE",
                "NETHERITE_HOE",
                "STICK",
                "BOWL",
                "MUSHROOM_STEW",
                "STRING",
                "FEATHER",
                "GUNPOWDER",
                "WHEAT_SEEDS",
                "WHEAT",
                "BREAD",
                "LEATHER_HELMET",
                "LEATHER_CHESTPLATE",
                "LEATHER_LEGGINGS",
                "LEATHER_BOOTS",
                "CHAINMAIL_HELMET",
                "CHAINMAIL_CHESTPLATE",
                "CHAINMAIL_LEGGINGS",
                "CHAINMAIL_BOOTS",
                "IRON_HELMET",
                "IRON_CHESTPLATE",
                "IRON_LEGGINGS",
                "IRON_BOOTS",
                "DIAMOND_HELMET",
                "DIAMOND_CHESTPLATE",
                "DIAMOND_LEGGINGS",
                "DIAMOND_BOOTS",
                "GOLDEN_HELMET",
                "GOLDEN_CHESTPLATE",
                "GOLDEN_LEGGINGS",
                "GOLDEN_BOOTS",
                "NETHERITE_HELMET",
                "NETHERITE_CHESTPLATE",
                "NETHERITE_LEGGINGS",
                "NETHERITE_BOOTS",
                "FLINT",
                "PORKCHOP",
                "COOKED_PORKCHOP",
                "PAINTING",
                "GOLDEN_APPLE",
                "ENCHANTED_GOLDEN_APPLE",
                "OAK_SIGN",
                "SPRUCE_SIGN",
                "BIRCH_SIGN",
                "JUNGLE_SIGN",
                "ACACIA_SIGN",
                "CHERRY_SIGN",
                "DARK_OAK_SIGN",
                "MANGROVE_SIGN",
                "BAMBOO_SIGN",
                "CRIMSON_SIGN",
                "WARPED_SIGN",
                "OAK_HANGING_SIGN",
                "SPRUCE_HANGING_SIGN",
                "BIRCH_HANGING_SIGN",
                "JUNGLE_HANGING_SIGN",
                "ACACIA_HANGING_SIGN",
                "CHERRY_HANGING_SIGN",
                "DARK_OAK_HANGING_SIGN",
                "MANGROVE_HANGING_SIGN",
                "BAMBOO_HANGING_SIGN",
                "CRIMSON_HANGING_SIGN",
                "WARPED_HANGING_SIGN",
                "BUCKET",
                "WATER_BUCKET",
                "LAVA_BUCKET",
                "POWDER_SNOW_BUCKET",
                "SNOWBALL",
                "LEATHER",
                "MILK_BUCKET",
                "PUFFERFISH_BUCKET",
                "SALMON_BUCKET",
                "COD_BUCKET",
                "TROPICAL_FISH_BUCKET",
                "AXOLOTL_BUCKET",
                "TADPOLE_BUCKET",
                "BRICK",
                "CLAY_BALL",
                "DRIED_KELP_BLOCK",
                "PAPER",
                "BOOK",
                "SLIME_BALL",
                "EGG",
                "COMPASS",
                "RECOVERY_COMPASS",
                "BUNDLE",
                "FISHING_ROD",
                "CLOCK",
                "SPYGLASS",
                "GLOWSTONE_DUST",
                "COD",
                "SALMON",
                "TROPICAL_FISH",
                "PUFFERFISH",
                "COOKED_COD",
                "COOKED_SALMON",
                "INK_SAC",
                "GLOW_INK_SAC",
                "COCOA_BEANS",
                "WHITE_DYE",
                "ORANGE_DYE",
                "MAGENTA_DYE",
                "LIGHT_BLUE_DYE",
                "YELLOW_DYE",
                "LIME_DYE",
                "PINK_DYE",
                "GRAY_DYE",
                "LIGHT_GRAY_DYE",
                "CYAN_DYE",
                "PURPLE_DYE",
                "BLUE_DYE",
                "BROWN_DYE",
                "GREEN_DYE",
                "RED_DYE",
                "BLACK_DYE",
                "BONE_MEAL",
                "BONE",
                "SUGAR",
                "CAKE",
                "WHITE_BED",
                "ORANGE_BED",
                "MAGENTA_BED",
                "LIGHT_BLUE_BED",
                "YELLOW_BED",
                "LIME_BED",
                "PINK_BED",
                "GRAY_BED",
                "LIGHT_GRAY_BED",
                "CYAN_BED",
                "PURPLE_BED",
                "BLUE_BED",
                "BROWN_BED",
                "GREEN_BED",
                "RED_BED",
                "BLACK_BED",
                "COOKIE",
                "FILLED_MAP",
                "SHEARS",
                "MELON_SLICE",
                "DRIED_KELP",
                "PUMPKIN_SEEDS",
                "MELON_SEEDS",
                "BEEF",
                "COOKED_BEEF",
                "CHICKEN",
                "COOKED_CHICKEN",
                "ROTTEN_FLESH",
                "ENDER_PEARL",
                "BLAZE_ROD",
                "GHAST_TEAR",
                "GOLD_NUGGET",
                "NETHER_WART",
                "POTION",
                "GLASS_BOTTLE",
                "SPIDER_EYE",
                "FERMENTED_SPIDER_EYE",
                "BLAZE_POWDER",
                "MAGMA_CREAM",
                "BREWING_STAND",
                "CAULDRON",
                "ENDER_EYE",
                "GLISTERING_MELON_SLICE",
                "ALLAY_SPAWN_EGG",
                "AXOLOTL_SPAWN_EGG",
                "BAT_SPAWN_EGG",
                "BEE_SPAWN_EGG",
                "BLAZE_SPAWN_EGG",
                "CAT_SPAWN_EGG",
                "CAMEL_SPAWN_EGG",
                "CAVE_SPIDER_SPAWN_EGG",
                "CHICKEN_SPAWN_EGG",
                "COD_SPAWN_EGG",
                "COW_SPAWN_EGG",
                "CREEPER_SPAWN_EGG",
                "DOLPHIN_SPAWN_EGG",
                "DONKEY_SPAWN_EGG",
                "DROWNED_SPAWN_EGG",
                "ELDER_GUARDIAN_SPAWN_EGG",
                "ENDER_DRAGON_SPAWN_EGG",
                "ENDERMAN_SPAWN_EGG",
                "ENDERMITE_SPAWN_EGG",
                "EVOKER_SPAWN_EGG",
                "FOX_SPAWN_EGG",
                "FROG_SPAWN_EGG",
                "GHAST_SPAWN_EGG",
                "GLOW_SQUID_SPAWN_EGG",
                "GOAT_SPAWN_EGG",
                "GUARDIAN_SPAWN_EGG",
                "HOGLIN_SPAWN_EGG",
                "HORSE_SPAWN_EGG",
                "HUSK_SPAWN_EGG",
                "IRON_GOLEM_SPAWN_EGG",
                "LLAMA_SPAWN_EGG",
                "MAGMA_CUBE_SPAWN_EGG",
                "MOOSHROOM_SPAWN_EGG",
                "MULE_SPAWN_EGG",
                "OCELOT_SPAWN_EGG",
                "PANDA_SPAWN_EGG",
                "PARROT_SPAWN_EGG",
                "PHANTOM_SPAWN_EGG",
                "PIG_SPAWN_EGG",
                "PIGLIN_SPAWN_EGG",
                "PIGLIN_BRUTE_SPAWN_EGG",
                "PILLAGER_SPAWN_EGG",
                "POLAR_BEAR_SPAWN_EGG",
                "PUFFERFISH_SPAWN_EGG",
                "RABBIT_SPAWN_EGG",
                "RAVAGER_SPAWN_EGG",
                "SALMON_SPAWN_EGG",
                "SHEEP_SPAWN_EGG",
                "SHULKER_SPAWN_EGG",
                "SILVERFISH_SPAWN_EGG",
                "SKELETON_SPAWN_EGG",
                "SKELETON_HORSE_SPAWN_EGG",
                "SLIME_SPAWN_EGG",
                "SNIFFER_SPAWN_EGG",
                "SNOW_GOLEM_SPAWN_EGG",
                "SPIDER_SPAWN_EGG",
                "SQUID_SPAWN_EGG",
                "STRAY_SPAWN_EGG",
                "STRIDER_SPAWN_EGG",
                "TADPOLE_SPAWN_EGG",
                "TRADER_LLAMA_SPAWN_EGG",
                "TROPICAL_FISH_SPAWN_EGG",
                "TURTLE_SPAWN_EGG",
                "VEX_SPAWN_EGG",
                "VILLAGER_SPAWN_EGG",
                "VINDICATOR_SPAWN_EGG",
                "WANDERING_TRADER_SPAWN_EGG",
                "WARDEN_SPAWN_EGG",
                "WITCH_SPAWN_EGG",
                "WITHER_SPAWN_EGG",
                "WITHER_SKELETON_SPAWN_EGG",
                "WOLF_SPAWN_EGG",
                "ZOGLIN_SPAWN_EGG",
                "ZOMBIE_SPAWN_EGG",
                "ZOMBIE_HORSE_SPAWN_EGG",
                "ZOMBIE_VILLAGER_SPAWN_EGG",
                "ZOMBIFIED_PIGLIN_SPAWN_EGG",
                "EXPERIENCE_BOTTLE",
                "FIRE_CHARGE",
                "WRITABLE_BOOK",
                "WRITTEN_BOOK",
                "ITEM_FRAME",
                "GLOW_ITEM_FRAME",
                "FLOWER_POT",
                "CARROT",
                "POTATO",
                "BAKED_POTATO",
                "POISONOUS_POTATO",
                "MAP",
                "GOLDEN_CARROT",
                "SKELETON_SKULL",
                "WITHER_SKELETON_SKULL",
                "PLAYER_HEAD",
                "ZOMBIE_HEAD",
                "CREEPER_HEAD",
                "DRAGON_HEAD",
                "PIGLIN_HEAD",
                "NETHER_STAR",
                "PUMPKIN_PIE",
                "FIREWORK_ROCKET",
                "FIREWORK_STAR",
                "ENCHANTED_BOOK",
                "NETHER_BRICK",
                "PRISMARINE_SHARD",
                "PRISMARINE_CRYSTALS",
                "RABBIT",
                "COOKED_RABBIT",
                "RABBIT_STEW",
                "RABBIT_FOOT",
                "RABBIT_HIDE",
                "ARMOR_STAND",
                "IRON_HORSE_ARMOR",
                "GOLDEN_HORSE_ARMOR",
                "DIAMOND_HORSE_ARMOR",
                "LEATHER_HORSE_ARMOR",
                "LEAD",
                "NAME_TAG",
                "COMMAND_BLOCK_MINECART",
                "MUTTON",
                "COOKED_MUTTON",
                "WHITE_BANNER",
                "ORANGE_BANNER",
                "MAGENTA_BANNER",
                "LIGHT_BLUE_BANNER",
                "YELLOW_BANNER",
                "LIME_BANNER",
                "PINK_BANNER",
                "GRAY_BANNER",
                "LIGHT_GRAY_BANNER",
                "CYAN_BANNER",
                "PURPLE_BANNER",
                "BLUE_BANNER",
                "BROWN_BANNER",
                "GREEN_BANNER",
                "RED_BANNER",
                "BLACK_BANNER",
                "END_CRYSTAL",
                "CHORUS_FRUIT",
                "POPPED_CHORUS_FRUIT",
                "TORCHFLOWER_SEEDS",
                "PITCHER_POD",
                "BEETROOT",
                "BEETROOT_SEEDS",
                "BEETROOT_SOUP",
                "DRAGON_BREATH",
                "SPLASH_POTION",
                "SPECTRAL_ARROW",
                "TIPPED_ARROW",
                "LINGERING_POTION",
                "SHIELD",
                "TOTEM_OF_UNDYING",
                "SHULKER_SHELL",
                "IRON_NUGGET",
                "KNOWLEDGE_BOOK",
                "DEBUG_STICK",
                "MUSIC_DISC_13",
                "MUSIC_DISC_CAT",
                "MUSIC_DISC_BLOCKS",
                "MUSIC_DISC_CHIRP",
                "MUSIC_DISC_FAR",
                "MUSIC_DISC_MALL",
                "MUSIC_DISC_MELLOHI",
                "MUSIC_DISC_STAL",
                "MUSIC_DISC_STRAD",
                "MUSIC_DISC_WARD",
                "MUSIC_DISC_11",
                "MUSIC_DISC_WAIT",
                "MUSIC_DISC_OTHERSIDE",
                "MUSIC_DISC_RELIC",
                "MUSIC_DISC_5",
                "MUSIC_DISC_PIGSTEP",
                "DISC_FRAGMENT_5",
                "TRIDENT",
                "PHANTOM_MEMBRANE",
                "NAUTILUS_SHELL",
                "HEART_OF_THE_SEA",
                "CROSSBOW",
                "SUSPICIOUS_STEW",
                "LOOM",
                "FLOWER_BANNER_PATTERN",
                "CREEPER_BANNER_PATTERN",
                "SKULL_BANNER_PATTERN",
                "MOJANG_BANNER_PATTERN",
                "GLOBE_BANNER_PATTERN",
                "PIGLIN_BANNER_PATTERN",
                "GOAT_HORN",
                "COMPOSTER",
                "BARREL",
                "SMOKER",
                "BLAST_FURNACE",
                "CARTOGRAPHY_TABLE",
                "FLETCHING_TABLE",
                "GRINDSTONE",
                "SMITHING_TABLE",
                "STONECUTTER",
                "BELL",
                "LANTERN",
                "SOUL_LANTERN",
                "SWEET_BERRIES",
                "GLOW_BERRIES",
                "CAMPFIRE",
                "SOUL_CAMPFIRE",
                "SHROOMLIGHT",
                "HONEYCOMB",
                "BEE_NEST",
                "BEEHIVE",
                "HONEY_BOTTLE",
                "HONEYCOMB_BLOCK",
                "LODESTONE",
                "CRYING_OBSIDIAN",
                "BLACKSTONE",
                "BLACKSTONE_SLAB",
                "BLACKSTONE_STAIRS",
                "GILDED_BLACKSTONE",
                "POLISHED_BLACKSTONE",
                "POLISHED_BLACKSTONE_SLAB",
                "POLISHED_BLACKSTONE_STAIRS",
                "CHISELED_POLISHED_BLACKSTONE",
                "POLISHED_BLACKSTONE_BRICKS",
                "POLISHED_BLACKSTONE_BRICK_SLAB",
                "POLISHED_BLACKSTONE_BRICK_STAIRS",
                "CRACKED_POLISHED_BLACKSTONE_BRICKS",
                "RESPAWN_ANCHOR",
                "CANDLE",
                "WHITE_CANDLE",
                "ORANGE_CANDLE",
                "MAGENTA_CANDLE",
                "LIGHT_BLUE_CANDLE",
                "YELLOW_CANDLE",
                "LIME_CANDLE",
                "PINK_CANDLE",
                "GRAY_CANDLE",
                "LIGHT_GRAY_CANDLE",
                "CYAN_CANDLE",
                "PURPLE_CANDLE",
                "BLUE_CANDLE",
                "BROWN_CANDLE",
                "GREEN_CANDLE",
                "RED_CANDLE",
                "BLACK_CANDLE",
                "SMALL_AMETHYST_BUD",
                "MEDIUM_AMETHYST_BUD",
                "LARGE_AMETHYST_BUD",
                "AMETHYST_CLUSTER",
                "POINTED_DRIPSTONE",
                "OCHRE_FROGLIGHT",
                "VERDANT_FROGLIGHT",
                "PEARLESCENT_FROGLIGHT",
                "FROGSPAWN",
                "ECHO_SHARD",
                "BRUSH",
                "NETHERITE_UPGRADE_SMITHING_TEMPLATE",
                "SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE",
                "DUNE_ARMOR_TRIM_SMITHING_TEMPLATE",
                "COAST_ARMOR_TRIM_SMITHING_TEMPLATE",
                "WILD_ARMOR_TRIM_SMITHING_TEMPLATE",
                "WARD_ARMOR_TRIM_SMITHING_TEMPLATE",
                "EYE_ARMOR_TRIM_SMITHING_TEMPLATE",
                "VEX_ARMOR_TRIM_SMITHING_TEMPLATE",
                "TIDE_ARMOR_TRIM_SMITHING_TEMPLATE",
                "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE",
                "RIB_ARMOR_TRIM_SMITHING_TEMPLATE",
                "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE",
                "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE",
                "SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE",
                "SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE",
                "RAISER_ARMOR_TRIM_SMITHING_TEMPLATE",
                "HOST_ARMOR_TRIM_SMITHING_TEMPLATE",
                "ANGLER_POTTERY_SHERD",
                "ARCHER_POTTERY_SHERD",
                "ARMS_UP_POTTERY_SHERD",
                "BLADE_POTTERY_SHERD",
                "BREWER_POTTERY_SHERD",
                "BURN_POTTERY_SHERD",
                "DANGER_POTTERY_SHERD",
                "EXPLORER_POTTERY_SHERD",
                "FRIEND_POTTERY_SHERD",
                "HEART_POTTERY_SHERD",
                "HEARTBREAK_POTTERY_SHERD",
                "HOWL_POTTERY_SHERD",
                "MINER_POTTERY_SHERD",
                "MOURNER_POTTERY_SHERD",
                "PLENTY_POTTERY_SHERD",
                "PRIZE_POTTERY_SHERD",
                "SHEAF_POTTERY_SHERD",
                "SHELTER_POTTERY_SHERD",
                "SKULL_POTTERY_SHERD",
                "SNORT_POTTERY_SHERD",
                "WATER",
                "LAVA",
                "TALL_SEAGRASS",
                "PISTON_HEAD",
                "MOVING_PISTON",
                "WALL_TORCH",
                "FIRE",
                "SOUL_FIRE",
                "REDSTONE_WIRE",
                "OAK_WALL_SIGN",
                "SPRUCE_WALL_SIGN",
                "BIRCH_WALL_SIGN",
                "ACACIA_WALL_SIGN",
                "CHERRY_WALL_SIGN",
                "JUNGLE_WALL_SIGN",
                "DARK_OAK_WALL_SIGN",
                "MANGROVE_WALL_SIGN",
                "BAMBOO_WALL_SIGN",
                "OAK_WALL_HANGING_SIGN",
                "SPRUCE_WALL_HANGING_SIGN",
                "BIRCH_WALL_HANGING_SIGN",
                "ACACIA_WALL_HANGING_SIGN",
                "CHERRY_WALL_HANGING_SIGN",
                "JUNGLE_WALL_HANGING_SIGN",
                "DARK_OAK_WALL_HANGING_SIGN",
                "MANGROVE_WALL_HANGING_SIGN",
                "CRIMSON_WALL_HANGING_SIGN",
                "WARPED_WALL_HANGING_SIGN",
                "BAMBOO_WALL_HANGING_SIGN",
                "REDSTONE_WALL_TORCH",
                "SOUL_WALL_TORCH",
                "NETHER_PORTAL",
                "ATTACHED_PUMPKIN_STEM",
                "ATTACHED_MELON_STEM",
                "PUMPKIN_STEM",
                "MELON_STEM",
                "WATER_CAULDRON",
                "LAVA_CAULDRON",
                "POWDER_SNOW_CAULDRON",
                "END_PORTAL",
                "COCOA",
                "TRIPWIRE",
                "POTTED_TORCHFLOWER",
                "POTTED_OAK_SAPLING",
                "POTTED_SPRUCE_SAPLING",
                "POTTED_BIRCH_SAPLING",
                "POTTED_JUNGLE_SAPLING",
                "POTTED_ACACIA_SAPLING",
                "POTTED_CHERRY_SAPLING",
                "POTTED_DARK_OAK_SAPLING",
                "POTTED_MANGROVE_PROPAGULE",
                "POTTED_FERN",
                "POTTED_DANDELION",
                "POTTED_POPPY",
                "POTTED_BLUE_ORCHID",
                "POTTED_ALLIUM",
                "POTTED_AZURE_BLUET",
                "POTTED_RED_TULIP",
                "POTTED_ORANGE_TULIP",
                "POTTED_WHITE_TULIP",
                "POTTED_PINK_TULIP",
                "POTTED_OXEYE_DAISY",
                "POTTED_CORNFLOWER",
                "POTTED_LILY_OF_THE_VALLEY",
                "POTTED_WITHER_ROSE",
                "POTTED_RED_MUSHROOM",
                "POTTED_BROWN_MUSHROOM",
                "POTTED_DEAD_BUSH",
                "POTTED_CACTUS",
                "CARROTS",
                "POTATOES",
                "SKELETON_WALL_SKULL",
                "WITHER_SKELETON_WALL_SKULL",
                "ZOMBIE_WALL_HEAD",
                "PLAYER_WALL_HEAD",
                "CREEPER_WALL_HEAD",
                "DRAGON_WALL_HEAD",
                "PIGLIN_WALL_HEAD",
                "WHITE_WALL_BANNER",
                "ORANGE_WALL_BANNER",
                "MAGENTA_WALL_BANNER",
                "LIGHT_BLUE_WALL_BANNER",
                "YELLOW_WALL_BANNER",
                "LIME_WALL_BANNER",
                "PINK_WALL_BANNER",
                "GRAY_WALL_BANNER",
                "LIGHT_GRAY_WALL_BANNER",
                "CYAN_WALL_BANNER",
                "PURPLE_WALL_BANNER",
                "BLUE_WALL_BANNER",
                "BROWN_WALL_BANNER",
                "GREEN_WALL_BANNER",
                "RED_WALL_BANNER",
                "BLACK_WALL_BANNER",
                "TORCHFLOWER_CROP",
                "PITCHER_CROP",
                "BEETROOTS",
                "END_GATEWAY",
                "FROSTED_ICE",
                "KELP_PLANT",
                "DEAD_TUBE_CORAL_WALL_FAN",
                "DEAD_BRAIN_CORAL_WALL_FAN",
                "DEAD_BUBBLE_CORAL_WALL_FAN",
                "DEAD_FIRE_CORAL_WALL_FAN",
                "DEAD_HORN_CORAL_WALL_FAN",
                "TUBE_CORAL_WALL_FAN",
                "BRAIN_CORAL_WALL_FAN",
                "BUBBLE_CORAL_WALL_FAN",
                "FIRE_CORAL_WALL_FAN",
                "HORN_CORAL_WALL_FAN",
                "BAMBOO_SAPLING",
                "POTTED_BAMBOO",
                "VOID_AIR",
                "CAVE_AIR",
                "BUBBLE_COLUMN",
                "SWEET_BERRY_BUSH",
                "WEEPING_VINES_PLANT",
                "TWISTING_VINES_PLANT",
                "CRIMSON_WALL_SIGN",
                "WARPED_WALL_SIGN",
                "POTTED_CRIMSON_FUNGUS",
                "POTTED_WARPED_FUNGUS",
                "POTTED_CRIMSON_ROOTS",
                "POTTED_WARPED_ROOTS",
                "CANDLE_CAKE",
                "WHITE_CANDLE_CAKE",
                "ORANGE_CANDLE_CAKE",
                "MAGENTA_CANDLE_CAKE",
                "LIGHT_BLUE_CANDLE_CAKE",
                "YELLOW_CANDLE_CAKE",
                "LIME_CANDLE_CAKE",
                "PINK_CANDLE_CAKE",
                "GRAY_CANDLE_CAKE",
                "LIGHT_GRAY_CANDLE_CAKE",
                "CYAN_CANDLE_CAKE",
                "PURPLE_CANDLE_CAKE",
                "BLUE_CANDLE_CAKE",
                "BROWN_CANDLE_CAKE",
                "GREEN_CANDLE_CAKE",
                "RED_CANDLE_CAKE",
                "BLACK_CANDLE_CAKE",
                "POWDER_SNOW",
                "CAVE_VINES",
                "CAVE_VINES_PLANT",
                "BIG_DRIPLEAF_STEM",
                "POTTED_AZALEA_BUSH",
                "POTTED_FLOWERING_AZALEA_BUSH"
            ],
            available: true,
            requireMode: true
        }
    },
    categories: {
        triggers: [],
        conditions: [],
        effects: [],
        skills: [],
        damagemodifiers: [],
        rewards: [],
        distributions: [],
        types: [],
    }
}
