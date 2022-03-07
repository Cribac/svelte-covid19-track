<script>
	import Flag from './Flag.svelte';
	import { DateTime } from 'luxon';

	export let countryCode;
	export let countryName;
	export let covidData;

	// use DateTime.fromFormat here since the api provides a unusual date format.
	const formattedDate = () => {
		const formats = ['yyyy-MM-dd', 'yyyy-M-dd', 'yyyy-M-d', 'yyyy-MM-d'];
		const fromFormat = formats.find((f) => DateTime.fromFormat(covidData.date, f).invalid === null);
		return DateTime.fromFormat(covidData.date, fromFormat).toFormat('yyyy LLL dd');
	}
</script>

<div class="flex flex-wrap">
	<Flag countryCode={countryCode} />
	<div class="flex flex-col">
		<div class="text-base text-blue-dark-100">{countryName}</div>
		<div class="text-sm text-blue-dark-100 mt-1">Latest data at: {formattedDate()}</div>
		<div class="text-sm text-blue-dark-100 mt-1">Confirmed Cases: {covidData.confirmed}</div>
		<div class="text-sm text-blue-dark-100 mt-1">Deaths: {covidData.deaths}</div>
	</div>
</div>
