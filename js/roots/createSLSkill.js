import { compileTypeString } from "../compiler.js"
import { entry, input, section, stringKeyEntry } from "../elements.js"

export const createSLSkill = key => entry(input("skill" + key), section([
    stringKeyEntry("trigger", compileTypeString("trigger")),
    stringKeyEntry("conditions", compileTypeString("ConditionList")),
    stringKeyEntry("effects", compileTypeString("EffectList"))
]))
