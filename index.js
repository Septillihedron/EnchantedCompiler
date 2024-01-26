
/**
 * @abstract
 */
class YamlElement {
    /**
     * @abstract
     * @param {HTMLElement} parent 
     */
    toHTML(parent) {
        throw new Error("unimplemented: not overriden")
    }

    /**
     * @abstract
     * @returns {string}
     */
    toYaml() {
        throw new Error("unimplemented: not overriden")
    }
}

class Input extends YamlElement {

    /**
     * @param {string} def
     */
    constructor(def) {
        super()
        this.input = document.createElement("input")
        this.input.value = def
    }

    toHTML(parent) {
        parent.appendChild(this.input)
    }

    toYaml() {
        return this.input.value
    }

}
function input(def) {
    return new Input(def)
}

/**
 * @param {string} s
 */
function indent(s) {
    return s
        .split("\r\n")
        .map(l => "  " + l)
        .join("\r\n")
}

class Section extends YamlElement {
    /**
     * @param {Entry[]} values
     */
    constructor(values) {
        super()
        this.values = values
        this.container = document.createElement("div")
        this.container.classList.add("section")
        this.values.forEach((child, i, arr) => {
            child.toHTML(this.container)
            if (i != arr.length-1 && !(child.value instanceof Section)) {
                this.container.appendChild(document.createElement("br"))
            }
        })
    }

    toHTML(parent) {
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.values
            .map(entry => "\r\n" + indent(entry.toYaml()))
            .join("")
    }

    addChild(element) {
        const lastElement = this.values[this.values.length-1]
        if (lastElement != undefined) {
            if (!(lastElement.value instanceof Section)) {
                this.container.appendChild(document.createElement("br"))
            }
        }
        this.values.push(element)
        element.toHTML(this.container)
        compile()
    }
}
function section(values) {
    return new Section(values)
}

class PropertiesMap extends Section {
    /**
     * @param {Entry[]} values
     * @param {(e: MouseEvent) => Entry} addfn 
     */
    constructor(values, addfn) {
        super(values)
        this.addButton = document.createElement("button")
        this.addButton.innerText = "+"
        this.addButton.onclick = (e) => {
            const element = addfn(e)
            this.addChild(element)
        }
    }

    toHTML(parent) {
        parent.appendChild(this.addButton)
        super.toHTML(parent)
    }
}

class Entry extends YamlElement {
    /**
     * @param {YamlElement} key
     * @param {YamlElement} value 
     */
    constructor(key, value) {
        super()
        this.key = key
        this.value = value
        this.colon = constText(": ")
    }

    toHTML(parent) {
        this.key.toHTML(parent)
        this.colon.toHTML(parent)
        this.value.toHTML(parent)
    }

    toYaml() {
        return this.key.toYaml() + ": " + this.value.toYaml()
    }
}
function entry(key, value) {
    if (typeof key === "string") key = constText(key)
    return new Entry(key, value)
}

class ConstText extends YamlElement {
    /**
     * @param {string} text
     */
    constructor(text) {
        super()
        this.text = text
        this.textElement = document.createTextNode(text)
    }

    toHTML(parent) {
        parent.appendChild(this.textElement)
    }

    toYaml() {
        return this.text
    }
}
function constText(text) {
    return new ConstText(text)
}

class RangeInput extends YamlElement {

    constructor() {
        super()
        this.min = input("-INFINITY")
        this.dash = constText(" - ")
        this.max = input("INFINITY")
    }

    toHTML(parent) {
        this.min.toHTML(parent)
        this.dash.toHTML(parent)
        this.max.toHTML(parent)
    }

    toYaml() {
        return this.min.toYaml() + " - " + this.max.toYaml()
    }
}

const createDefaultCondition = () => entry(input("condition0"), section([
    entry("type", input("TIME")),
    entry("mode", input("SELF")),
    entry("time", new RangeInput())
]))

const createDefaultEffect = () => entry(input("effect0"), section([
    entry("type", input("AOE")),
    entry("mode", input("ALL")),
    entry("conditions", new PropertiesMap([], createDefaultCondition)),
    entry("effects", new PropertiesMap([], createDefaultEffect)),
]))

const createDefaultTrigger = () => entry("trigger", section([
    entry("type", input("DAMAGEDBYENTITY")),
    entry("conditions", new PropertiesMap([], createDefaultCondition))
]))


const createDefaultSkill = () => entry(input("skill0"), section([
    entry("skill", input("CUSTOM")),
    createDefaultTrigger(),
    entry("effects", new PropertiesMap([], createDefaultEffect)),
]))

const root = entry(input("exampleman"), section([
    entry("colouredName", input("<red>Exampleboss")),
    entry("description", input("A description fit for an example")),
    entry("skills", new PropertiesMap([], createDefaultSkill))
]))

const times = []
function render() {
    const start = performance.now()
    const main = document.getElementById("main")
    main?.replaceChildren()
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

