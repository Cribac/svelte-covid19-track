<script>
	import Flag from './Flag.svelte';
	import { DateTime } from 'luxon';

	export let countryCode;
	export let countryName;
	export let covidData;

	// use DateTime.fromFormat here since the api provides a unusual date format.
	const formattedDate = DateTime.fromFormat(covidData.date, 'yyyy-MM-d').toFormat('yyyy LLL dd');
</script>

<div class="flex">
	<Flag countryCode={countryCode} />
	<div class="flex flex-col ml-3">
		<div class="text-base text-blue-dark-100">{countryName}</div>
		<div class="text-sm text-blue-dark-100 mt-1">Latest data at: {formattedDate}</div>
		<div class="text-sm text-blue-dark-100 mt-1">Confirmed Cases: {covidData.confirmed}</div>
		<div class="text-sm text-blue-dark-100 mt-1">Deaths: {covidData.deaths}</div>
	</div>
</div>
