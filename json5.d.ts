
declare module "https://cdn.jsdelivr.net/npm/json5@2/+esm" {
	const JSON5: {
		parse: (input: string) => any;
		stringify: (input: any) => string;
	};
	export default JSON5;
}
