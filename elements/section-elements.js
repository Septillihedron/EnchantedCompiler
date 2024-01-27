
/**
 * @typedef {import("./yaml-element.d.ts").YamlElement} YamlElement
 */

/**
 * @param {string} s
 * @returns {string}
 */
function indent(s) {
    return s
        .split("\r\n")
        .map(l => "  " + l)
        .join("\r\n")
}

/**
 * @implements {YamlElement}
 */
class Section {
    /**
     * @param {Entry[]} values
     */
    constructor(values) {
        /** @type {Entry[]} */
        this.values = []
        this.container = document.createElement("div")
        this.container.classList.add("section")
        values.forEach(this.addChild.bind(this))
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.values
            .map(entry => "\r\n" + indent(entry.toYaml()))
            .join("")
    }

    focus() {
        for (let i=0; i<this.values.length; i++) {
            if (this.values[i].focus()) {
                return true
            }
        }
        return false
    }

    /**
     * @param {Entry} element
     */
    addChild(element) {
        const lastElement = this.values[this.values.length-1]
        if (lastElement != undefined) {
            if (!(lastElement.value instanceof Section)) {
                this.container.appendChild(document.createElement("br"))
            }
        }
        this.values.push(element)
        element.toHTML(this.container)
        element.focus()
    }

    clearChildren() {
        this.values = []
        this.container.replaceChildren()
    }
}
/**
 * @param {Entry[]} values
 */
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

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.addButton)
        super.toHTML(parent)
    }
}

class DocItemSection extends Section {

    /**
     * @param {keyof import("../docs.js").Schema} category 
     */
    constructor(category, extraEntries=[]) {
        super([])
        this.extraEntries = extraEntries
        const typeKey = (category === "skills")? "skill" : "type";
        const typeInput = new EnumInput(docs.categories[category])
        this.typeEntry = entry(typeKey, typeInput)
        this.addChild(this.typeEntry)

        typeInput.addChangedListener(newValue => {
            /** @type {import("../docs.js").DocItem | undefined} */
            const newDocItem = docs[category][newValue]
            if (newDocItem === undefined) return

            this.compileDocItem(newDocItem)
        })
    }


    /**
     * @private
     * @param {import("../docs.js").DocItem} docItem
    */
    compileDocItem(docItem) {
        this.clearChildren()
        this.addChild(this.typeEntry)
        const modes = docItem.supportedModes
        if (modes != undefined) {
            const defaultMode = this.getDefaultMode(docItem)
            this.addChild(entry("mode", new EnumInput(modes, defaultMode)))
        }
        if (docItem.properties !== undefined) {
            Object.entries(docItem.properties)
                .forEach(([name, property]) => {
                    this.addChild(entry(name, compileProperty(property)))
                })
        }
        this.extraEntries.forEach(entry => this.addChild(entry))
    }

    /**
     * @private
     * @param {import("../docs.js").DocItem} docItem
     * @returns {"ALL" | "SELF"}
    */
    getDefaultMode(docItem) {
        if (docItem.requireMode === undefined) return "SELF"
        if (docItem.requireMode) return "SELF"
        return "ALL"
    }

}

const booleanEnum = ["true", "false"]
/**
 * @param {import("../docs.js").Property} property
 */
function compileProperty(property) {
    /** @type {import("../docs.js").PropertyTypes[]} */
    const basicTypes = [ "string", "number", "integer", "boolean" ]
    if (typeof property.type != "string") {
        return constText("# not done yet")
    }
    switch(property.type) {
        case "string":
            return input(property.default ?? "text")
        case "number":
            return input(property.default ?? "0")
        case "integer":
            return input(property.default ?? "0")
        case "boolean":
            return new EnumInput(booleanEnum, property.default)
        case "range":
            return new RangeInput()
        default:
            return constText("# not done yet")
    }
}

/**
 * @implements {YamlElement}
 */
class Entry {
    /**
     * @param {YamlElement} key
     * @param {YamlElement} value 
     */
    constructor(key, value) {
        this.key = key
        this.value = value
        this.colon = constText(": ")
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        this.key.toHTML(parent)
        this.colon.toHTML(parent)
        this.value.toHTML(parent)
    }

    toYaml() {
        return this.key.toYaml() + ": " + this.value.toYaml()
    }

    focus() {
        if (this.key.focus()) return true
        if (this.value.focus()) return true
        return false
    }
}
/**
 * @param {YamlElement | string} key
 * @param {YamlElement} value
 */
function entry(key, value) {
    if (typeof key === "string") key = constText(key)
    return new Entry(key, value)
}
