import { DateTime } from 'luxon';

const now = DateTime.now();
const ago = now.minus({ days: 7 }).toISODate();

const removeDuplicates = (res) => {
	return res.result.filter((val, idx, arr) => arr.findIndex(t => (t.date === val.date)) === idx);
}

export async function get({ params }) {
	const { countryCode } = params;
	const request = await fetch(`https://covidapi.info/api/v1/country/${countryCode.toUpperCase()}/timeseries/${ago}/${now.toISODate()}`);
	const result = await request.json();
	const removed = removeDuplicates(result);

	return {
		body: { data: removed },
	};
}
