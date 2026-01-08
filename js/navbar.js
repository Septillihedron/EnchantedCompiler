import { copyYaml } from "./navbar/copyYaml.js"
import { openFile } from "./navbar/openFile.js"
import { pasteYaml } from "./navbar/pasteYaml.js"

document.getElementById("settings")?.addEventListener("click", (event) => {
	console.error("settings button not yet implemented")
})

document.getElementById("copy-yaml")?.addEventListener("click", copyYaml)

document.getElementById("paste-yaml")?.addEventListener("click", pasteYaml)

document.getElementById("open-file")?.addEventListener("click", openFile)
