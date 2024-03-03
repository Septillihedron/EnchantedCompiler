
/**
 * @template T
 * @typedef {import("./yaml-element.d.ts").YamlElement<T>} YamlElement<T>
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
 * @implements {YamlElement<object>}
 */
class Section {
    /**
     * @param {Entry[] | (() => Entry[])} values
     */
    constructor(values) {
        /** @type {Entry[]} */
        this.values = []
        this.container = document.createElement("div")
        this.container.classList.add("section")
        if (Array.isArray(values)) {
            values.forEach(this.addChild.bind(this))
            return
        }

        this.generator = values
        /* create button */ {
            this.button = document.createElement("button")
			this.button.innerText = "+"
            this.button.onclick = () => {
                this.container.replaceChildren()
                if (!this.generator) {
                    console.trace("generator is undefined")
                    return
                }
                this.generator().forEach(this.addChild.bind(this))
            }
        }
        
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        if (this.button) parent.appendChild(this.button)
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.values
            .map(entry => "\r\n" + indent(entry.toYaml()))
            .join("")
    }

    getValue() {
        return Object.fromEntries(this.values.map(entry => entry.getValue()))
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (typeof val !== "object") {
            incorrectTypeSetError(val)
            return
        }
        Object.entries(val)
            .forEach(([key, val]) => {
                let entry = this.findEntryByKey(key)
                if (!entry && this.button) {
					this.button.click()
					entry = this.findEntryByKey(key)
				}
                entry?.value.setValue(val)
            })
    }
	
	findEntryByKey(key) {
		return this.values.find(entry => entry.key.getValue() === key)
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
            if (!(lastElement.value instanceof Section || lastElement.value instanceof ArraySection)) {
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

/**
 * @implements {YamlElement<unknown[]>}
 */
class ArraySection {
    /**
     * @param {(() => YamlElement<unknown>)} addfn
     */
    constructor(addfn) {
        /** @type {YamlElement<unknown>[]} */
        this.values = []
        this.container = document.createElement("ul")
        this.container.classList.add("array")

        this.addButton = document.createElement("button")
        this.addButton.innerText = "+"
        this.addButton.onclick = () => {
            const element = addfn()
            this.addChild(element)
        }
        
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.addButton)
        parent.appendChild(this.container)
    }

    toYaml() {
        return this.values
            .map(item => "\r\n- " + indent(item.toYaml()).trimStart())
            .join("")
    }

    getValue() {
        return this.values.map(item => item.getValue())
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (!Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
        for (let i=this.values.length; i<val.length; i++) {
            this.addButton.click()
        }
        val.forEach((val, index) => {
            this.values[index].setValue(val)
        })
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
     * @param {YamlElement<unknown>} element
     */
    addChild(element) {
        this.values.push(element)
        const li = document.createElement("li")
        this.container.appendChild(li)
        element.toHTML(li)
        element.focus()
    }

    clearChildren() {
        this.values = []
        this.container.replaceChildren()
    }
}

class PropertiesMap extends Section {
    /**
     * @param {(name: string | number) => Entry} addfn 
     */
    constructor(addfn) {
        super([])
        this.addfn = addfn
        this.addButton = document.createElement("button")
        this.addButton.innerText = "+"
        this.addButton.onclick = () => {
            const element = addfn(this.values.length)
            this.addChild(element)
        }
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (!val) return
        if (typeof val !== "object") return

        Object.entries(val)
            .forEach(([key, val]) => {
                let entry = this.values.find(entry => entry.key.getValue() === key)
                if (!entry) {
                    entry = this.addfn(key)
                    this.addChild(entry)
                }
                entry?.setValue([key, val])
            })
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
     * @param {Entry[]} [extraEntries=[]] 
     */
    constructor(category, extraEntries=[]) {
        super([])
        this.extraEntries = extraEntries
        this.category = category
        this.typeKey = (category === "skills")? "skill" : "type";
        const typeInput = new EnumInput(docs.categories[category])
        this.typeEntry = entry(this.typeKey, typeInput)
        this.addChild(this.typeEntry)

        typeInput.addChangedListener(this.updateProperties.bind(this))
    }

    updateProperties(newValue) {
        /** @type {import("../docs.js").DocItem | undefined} */
        const newDocItem = docs[this.category][newValue]
        if (newDocItem === undefined) return

        this.compileDocItem(newDocItem)
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val && typeof val === "object") {
            const type = val[this.typeKey]
            if (type) this.updateProperties(type)
        }
        super.setValue(val)
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
            const defaultMode = this.getDefaultMode(modes, docItem.requireMode)
            this.addChild(entry("mode", new EnumInput(modes, defaultMode)))
        }
        if (docItem.properties !== undefined) {
            Object.entries(docItem.properties)
                .forEach(([name, property]) => {
                    this.addChild(entry(name, compileProperty(property)))
                })
        }
        this.extraEntries.forEach(entry => this.addChild(entry))
        this.focus()
    }

    /**
     * @private
     * @param {import("../docs.js").Mode[]} modes
     * @param {boolean} requireMode
     */
    getDefaultMode(modes, requireMode) {
        if (requireMode && modes.length >= 2) return modes[1]
        else return "ALL"
    }

}

/**
 * @implements {YamlElement<[unknown, unknown]>}
 */
class Entry {
    /**
     * @param {YamlElement<unknown>} key
     * @param {YamlElement<unknown>} value 
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

    getValue() {
        return /** @type {[unknown, unknown]} */ ([this.key.getValue(), this.value.getValue()])
    }

    /**
     * @param {unknown} val
     */
    setValue(val) {
        if (val == null) return
        if (!Array.isArray(val)) {
            incorrectTypeSetError(val)
            return
        }
        this.key.setValue(val[0])
        this.value.setValue(val[1])
    }

    focus() {
        if (this.key.focus()) return true
        if (this.value.focus()) return true
        return false
    }
}
/**
 * @param {YamlElement<unknown> | string} key
 * @param {YamlElement<unknown>} value
 */
function entry(key, value) {
    if (typeof key === "string") key = constText(key)
    return new Entry(key, value)
}

const booleanEnum = ["true", "false"]

/**
 * @param {import("../docs.js").NakedProperty} property 
 * @returns {YamlElement<unknown>}
 */
function compileProperty(property) {
    if (typeof property.type != "string") {
        return constText("# not done yet")
    }
    switch(property.type) {
        case "string":
            if (property.enum) {
                return new EnumInput(property.enum, property.default ?? "")
            }
            return input(property.default ?? "text")
        case "number": // fallthrough
        case "integer":
            return input(property.default?.toString() ?? "0")
        case "boolean":
            return new EnumInput(booleanEnum, property.default?.toString() ?? "")
        case "range":
            return new RangeInput()
        case "array":
            return new ArraySection(() => {
                if (typeof property.items === "object") return compileProperty(property.items)
                if (docs.categories.types.includes(property.items)) {
                    return compileTypeString(/** @type {import("../docs.js").NormalPropertyTypes} */ (property.items))
                }
                return compileProperty(/** @type {any} */ ({ type: property.items }))
            })
        case "record":
            return new PropertiesMap(() => entry(input(property.recordItem+"0"), compileTypeString(property.recordItem)))
        case "object":
            if ("properties" in property) {
                return new Section(() => {
                    const entries = []
                    for (const [name, prop] of Object.entries(property.properties)) {
                        const value = compileProperty(prop)
                        value.setValue(prop.default)
                        entries.push(entry(name, value))
                    }
                    return entries
                })
            }
            if ("propertiesMap" in property) {
                const propertiesMap = property.propertiesMap
                return new PropertiesMap(() => {
                    const key = compileProperty(propertiesMap.key)
                    const value = compileProperty(propertiesMap.value)
                    value.setValue(propertiesMap.value.default)
                    return entry(key, value)
                })
            }
            return constText("# not done yet")
        case "condition":
            return new DocItemSection("conditions", [
                entry("else", compileTypeString("EffectList"))
            ])
        case "effect": 
            return new DocItemSection("effects")
        default:
            return compileTypeString(property.type)
    }
}

/**
 * @param {import("../docs.js").NormalPropertyTypes} typeName
 */
function compileTypeString(typeName) {
    if (typeName in docs.types) {
        let type = docs.types[typeName]
        if (type.internal) {
            return compileProperty({ type: typeName })
        }
        return compileProperty(type)
    }
    console.log("Not done: " + typeName)
    return constText("# not done yet")
}
