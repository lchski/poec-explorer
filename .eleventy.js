const {parse} = require('csv-parse/sync');

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
			includes: "_includes",
			layouts: "_layouts",
			data: "_data",
		}
	}
};
