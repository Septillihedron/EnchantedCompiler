import { makeSPRoot as makeRoot } from './roots/superheroes.js'

export let root = makeRoot(null)
globalThis.root = root

/**
 * @type {Record<string, {average: number, times: number[]}>}
 */
const times = {}
globalThis.times = times
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
	main.replaceChildren(root.toHTML())
}

export function compile() {
	return root.toYaml().trimStart() + "\r\n"
}

function save() {
	const save = JSON.stringify(root.getValue())
	localStorage.setItem("autosave", save)
}

function load() {
	const save = localStorage.getItem("autosave")
	if (!save) return
	const json = JSON.parse(save)
	root = makeRoot(null)
	globalThis.root = root
	root.setValue(json)
	render()
}

load()
render()
const autosaveId = setInterval(() => time("autosave", save), 1000)

