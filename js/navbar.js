import { compile } from "./index.js"

document.getElementById("settings")?.addEventListener("click", (event) => {
	console.error("settings button not yet implemented")
})

document.getElementById("copy-yaml")?.addEventListener("click", (event) => {
	navigator.clipboard.writeText(compile())
})

document.getElementById("load-file")?.addEventListener("click", (event) => {
	console.error("load-file button not yet implemented")
})

document.getElementById("save-file")?.addEventListener("click", (event) => {
	console.error("save-file button not yet implemented")
})

	

