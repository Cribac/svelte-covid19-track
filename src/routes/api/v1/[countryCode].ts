import { DateTime } from 'luxon';
import { DataTransformer } from '../../../utils/dataTransformer';

const now = DateTime.now();
const ago = now.minus({ months: 12 }).toISODate();

export async function get({ params }) {
	const { countryCode } = params;
	const request = await fetch(`https://covidapi.info/api/v1/country/${countryCode.toUpperCase()}/timeseries/${ago}/${now.toISODate()}`);
	const result = await request.json();
	const removed = DataTransformer.removeDuplicates(result.result);
	const filteredByDay = DataTransformer.filterByDay(removed, '01');

	return {
		body: { data: filteredByDay },
	};
}
