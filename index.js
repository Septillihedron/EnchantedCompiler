

const createDefaultCondition = () => entry(input("condition0"), new DocItemSection("conditions"))

const createDefaultEffect = () => entry(input("effect0"), new DocItemSection("effects"))

const createDefaultTrigger = () => entry("trigger", new DocItemSection("triggers", [
    entry("conditions", new PropertiesMap(createDefaultCondition))
]))

const createDefaultSkill = () => entry(input("skill0"), new Section([
    createDefaultTrigger(),
    entry("effects", new PropertiesMap(createDefaultEffect))
]))

const createDefaultDamageModifier = () => entry("damagemodifier", new DocItemSection("damagemodifiers"))

const createDefaultReward = () => entry("reward", new DocItemSection("rewards"))

const makeRoot = () => entry(input("exampleboss"), section([
    entry("colouredName", input("<red>Exampleboss")),
    entry("description", input("A description fit for an example")),
    entry("autospawn", compileTypeString("SpawnData")),
    entry("entity", compileTypeString("EntityData")),
    entry("bossbar", compileTypeString("BossBarData")),
    createDefaultDamageModifier(),
    createDefaultReward(),
    entry("skills", new PropertiesMap(createDefaultSkill))
]))

let root = makeRoot()

/**
 * @type {Record<string, {average: number, times: number[]}>}
 */
const times = {}
/**
 * @template {any} T
 * @param {string} name
 * @param {() => T} func
 * @returns {T}
 */
function time(name, func) {
    const start = performance.now()
    const funcReturn = func()
    const end = performance.now()
    const time = Math.round(end - start)

    let timeData = times[name]
    if (!timeData) times[name] = timeData = {average: 0, times: []}
    timeData.times.push(time)
	timeData.average *= 1 - 1/timeData.times.length
    timeData.average += time/timeData.times.length

    const display = document.getElementById("time")
    if (display) {
        display.innerText = Object.entries(times)
            .map(([name, {average}]) => `${name}: ${average}ms`)
            .join("\r\n")
    }

    return funcReturn
}

function render() {
    const main = document.getElementById("main")
    if (main === null) {
        throw Error("Main element does not exist!")
    }
    main.replaceChildren()
    root.toHTML(main)
}

function compile() {
    return root.toYaml()
}

function save() {
    const save = JSON.stringify(root.getValue())
    localStorage.setItem("autosave", save)
}

function load() {
    const save = JSON.parse(localStorage.getItem("autosave"))
    root = makeRoot()
    root.setValue(save)
    render()
}

load()
render()
const autosaveId = setInterval(() => time("autosave", save), 1000)

