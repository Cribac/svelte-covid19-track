/**
 * Class to handle, manipulate and transform the raw COVID-19 data retrieved by the queries.
 */

export class DataTransformer {
	/**
	 * Remove duplicates from an array of objects.
	 */
	static removeDuplicates = function(input:CovidJson[]):CovidJson[] {
		return input.filter((val, idx, arr) => arr.findIndex(t => (t.date === val.date)) === idx);
	};

	/**
	 * Filter COVID-19 data array of objects by a specific day.
	 *
	 * @param {CovidJson[]} input
	 * @param {string} filter
	 */
	static filterByDay = function(input:CovidJson[], filter:string):CovidJson[] | [] {
		return input.flatMap((i) => i.date.endsWith(filter) ? i : [] );
	}

	/**
	 * Filter COVID-19 data array of objects by year.
	 *
	 * @param {CovidJson[]} input
	 * @param {string} filter
	 */
	static filterByYear = function(input:CovidJson[], filter:string):CovidJson[] | [] {
		return input.flatMap((i) => i.date.startsWith(filter) ? i : [] );
	}

	/**
	 * Retrieve the most recent data.
	 *
	 * @param {CovidJson[]} input
	 * @return {CovidJson}
	 */
	static latestRecord(input:CovidJson[]):CovidJson {
		return input[input.length - 1];
	}
}

