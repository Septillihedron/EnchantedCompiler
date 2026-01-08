
/**
 * @type {OpenFilePickerOptions}
 */
const filePickerOptions = {
	multiple: false,
	excludeAcceptAllOption: false,
	id: "",
	types: [
		{
			description: "Yaml Files",
			accept: {
				"application/x-yaml": [".yml", ".yaml"], 
				"text/yaml": [".yml", ".yaml"], 
			}
		}
	],
}

export async function openFile() {
	const [fileHandle] = await window.showOpenFilePicker(filePickerOptions);

	const permission = await fileHandle.requestPermission({ mode: 'readwrite' });
	if (permission !== 'granted') {
		console.error("Write permission denied.");
		return;
	}

	const writable = await fileHandle.createWritable();

	await writable.write("Hello, this is new content!\n");

	await writable.close();

	console.log("File has been written successfully.");
}
