<script>
	import Flag from './Flag.svelte';
	import { DateTime } from 'luxon';

	export let countryCode;
	export let countryName;
	export let covidData;

	const formattedDate = DateTime.fromISO(covidData.date).toFormat('yyyy LLL dd')
</script>

<div class="flex">
	<Flag countryCode={countryCode} />
	<div class="flex flex-col ml-3">
		<div class="text-base">{countryName}</div>
		<div class="text-base">Latest data at: {formattedDate}</div>
		<div class="text-base">Confirmed: {covidData.confirmed}</div>
		<div class="text-base">Deaths: {covidData.deaths}</div>
	</div>
</div>
