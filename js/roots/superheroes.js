import { compileTypeString } from "../compiler.js"
import { entry, input, lazyLoadedSection, loadIfLazyLoadedSection, propertiesMap, section, stringKeyEntry } from "../elements.js"

export const createSkill = key => entry(input("skill" + key), loadIfLazyLoadedSection(compileTypeString("skill")))

export const makeSPRoot = section([
    stringKeyEntry("name", input("ExampleMan"), "The system name"),
    stringKeyEntry("colouredName", input("<red>Example Man"), "The display name"), 
    stringKeyEntry("description", input("An example hero"), "The description of the hero"), 
    stringKeyEntry("heroGainedSound", compileTypeString("SoundData"), "The sound that plays when you gain this hero"), 
    stringKeyEntry("skin", lazyLoadedSection(() => [
        stringKeyEntry("value", input(undefined)),
        stringKeyEntry("signature", input(undefined)),
    ]), "The skin that players having this hero will wear"),
    stringKeyEntry("icon", compileTypeString("ItemStackData"), "The icon for the hero selector menu"),
    stringKeyEntry("skills", propertiesMap(createSkill))
])
