const {parse} = require('csv-parse/sync');

module.exports = function(eleventyConfig) {
	eleventyConfig.addDataExtension("csv", (contents) => {
		const records = parse(contents, {
			columns: true,
			skip_empty_lines: true,
		});
		return records;
	});

	eleventyConfig.addFilter("filterMatchingRows", function(arrayToFilter, arrayVar, comparisonValue) {
		return arrayToFilter.filter((value) => value[arrayVar] == comparisonValue);
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
