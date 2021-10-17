import { DateTime } from 'luxon';
import { DataTransformer } from '../../../utils/dataTransformer';

const now: DateTime = DateTime.now();
const ago: string = now.minus({ months: 12 }).toISODate();

export async function get({ params }: { params: CountryParams }):Promise<CountryJson> {
	const { countryCode }: CountryParams = params;
	const request: Response = await fetch(`https://covidapi.info/api/v1/country/${countryCode.toUpperCase()}/timeseries/${ago}/${now.toISODate()}`);
	const result: ApiResult = await request.json();
	const removed: CovidJson[] = DataTransformer.removeDuplicates(result.result);
	const filteredByDay: CovidJson[] = DataTransformer.filterByDay(removed, '01');
	const latestData: CovidJson = DataTransformer.latestRecord(result.result);

	return {
		body: {
			latestData,
			chartData: filteredByDay
		},
	};
}
