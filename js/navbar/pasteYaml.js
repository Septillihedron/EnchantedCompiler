
import yaml from 'https://cdn.jsdelivr.net/npm/yaml@2.3.4/+esm'

export async function pasteYaml() {
    const file = await navigator.clipboard.readText()
    const parsed = yaml.parse(file)
	console.error("paste-yaml button not yet implemented")
}