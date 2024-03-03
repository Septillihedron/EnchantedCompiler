

const createDefaultCondition = () => entry(input("condition0"), new DocItemSection("conditions"))

const createDefaultEffect = () => entry(input("effect0"), new DocItemSection("effects"))

const createDefaultTrigger = () => entry("trigger", new DocItemSection("triggers", [
    entry("conditions", new PropertiesMap([], createDefaultCondition))
]))

const createDefaultSkill = () => entry(input("skill0"), new Section([
    createDefaultTrigger(),
    entry("effects", new PropertiesMap([], createDefaultEffect))
]))

const createDefaultDamageModifier = () => entry("damagemodifier", new DocItemSection("damagemodifiers"))

const createDefaultReward = () => entry("reward", new DocItemSection("rewards"))

/** @type {import("./docs").Property} */
const p = {
    type: "string",
    required: true,
    description: "The coloured name that will appear ingame. \n\nDefaults to Boss name",
}
const root = entry(input("exampleboss"), section([
    entry("colouredName", input("<red>Exampleboss")),
    entry("description", input("A description fit for an example")),
    entry("autospawn", compileTypeString("SpawnData")),
    entry("entity", compileTypeString("EntityData")),
    entry("bossbar", compileTypeString("BossBarData")),
    createDefaultDamageModifier(),
    createDefaultReward(),
    entry("skills", new PropertiesMap([], createDefaultSkill))
]))

const times = []
function render() {
    const start = performance.now()
    const main = document.getElementById("main")
    if (main === null) {
        throw Error("Main element does not exist!")
    }
    main.replaceChildren()
    root.toHTML(main)
    const end = performance.now()
    const time = Math.round(end - start)
    times.push(time)
    //console.log(`render time: ${time} ms`)
}

function compile() {
    console.log(root.toYaml())
}

render()
compile()

