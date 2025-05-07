import { compileTypeString } from "../compiler.js"
import { docItemSection, entry, input, propertiesMap, section, stringKeyEntry } from "../elements.js"
import { createSLSkill } from "./createSLSkill.js"

export const makeEBRoot = entry(input("exampleboss"), section([
	stringKeyEntry("colouredName", input("<red>Exampleboss")),
	stringKeyEntry("description", input("A description fit for an example")),
	stringKeyEntry("autospawn", compileTypeString("SpawnData")),
	stringKeyEntry("entity", compileTypeString("EntityData")),
	stringKeyEntry("bossbar", compileTypeString("BossBarData")),
	stringKeyEntry("damagemodifier", docItemSection("damagemodifiers")),
	stringKeyEntry("reward", docItemSection("rewards")),
	stringKeyEntry("skills", propertiesMap(createSLSkill))
]))