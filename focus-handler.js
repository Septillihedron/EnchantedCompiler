import { root } from "./index.js"

document.addEventListener("keydown", event => {
    if (event.key === "Tab") {
		event.preventDefault()
		if (event.shiftKey) {
			root.focusPrevious()
		} else {
			root.focusNext()
		}
	}
})
