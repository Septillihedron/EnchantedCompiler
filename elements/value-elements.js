

/**
 * @implements {YamlElement}
 */
class Input {

    /**
     * @param {string | undefined} def
     */
    constructor(def) {
        this.input = document.createElement("input")
        if (def != undefined) this.input.value = def
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.input)
    }

    toYaml() {
        return this.input.value
    }

    focus() {
        this.input.focus()
        return true
    }

    /**
     * @param {(newValue: any) => void} listener
     */
    addChangedListener(listener) {
        this.input.addEventListener("change", (e) => {
            listener(this.input.value)
        })
    }

}
/**
 * @param {string | undefined} def
 */
function input(def) {
    return new Input(def)
}

class EnumInput extends Input {

    static enums = []

    /**
     * @param {string[]} enumList 
     * @param {string | undefined} def 
     */
    constructor(enumList, def=undefined) {
        super(def)
        let dataListIndex = EnumInput.enums.findIndex(x => x == enumList)
        if (dataListIndex == -1) {
            const dataList = document.createElement("datalist")
			dataListIndex = EnumInput.enums.length
            dataList.id = `dataList-enum${dataListIndex}`
            for (const value of enumList) {
                const option = document.createElement("option")
                option.value = value
                dataList.appendChild(option)
            }
            
            const dataListContainer = document.getElementById("dataList-enums")
            dataListContainer?.appendChild(dataList)

            EnumInput.enums.push(enumList)
        }

        this.input.setAttribute("list", `dataList-enum${dataListIndex}`)
    }

}

/**
 * @implements {YamlElement}
 */
class RangeInput {

    constructor() {
        this.min = input("-INFINITY")
        this.dash = constText(" - ")
        this.max = input("INFINITY")
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        this.min.toHTML(parent)
        this.dash.toHTML(parent)
        this.max.toHTML(parent)
    }

    toYaml() {
        return this.min.toYaml() + " - " + this.max.toYaml()
    }

    focus() {
        return this.min.focus()
    }
}

/**
 * @implements {YamlElement}
 */
class ConstText {
    /**
     * @param {string} text
     */
    constructor(text) {
        this.text = text
        this.textElement = document.createTextNode(text)
    }

    /**
     * @param {HTMLElement} parent
     */
    toHTML(parent) {
        parent.appendChild(this.textElement)
    }

    toYaml() {
        return this.text
    }

    focus() {
        return false
    }
}
/**
 * @param {string} text
 */
function constText(text) {
    return new ConstText(text)
}
