import { compile } from "../index.js"

export function copyYaml() {
	navigator.clipboard.writeText(compile())
}
