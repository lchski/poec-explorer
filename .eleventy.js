const parse = require("csv-parse/lib/sync");

module.exports = function(eleventyConfig) {
	eleventyConfig.addDataExtension("csv", (contents) => {
		const records = parse(contents, {
			columns: true,
			skip_empty_lines: true,
		});
		return records;
	});
	
	// Return your Object options:
	return {
		dir: {
			input: "src",
			includes: "includes",
			layouts: "layouts",
			data: "data",
		}
	}
};
