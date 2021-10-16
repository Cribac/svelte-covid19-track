<script>
	import Flag from './Flag.svelte';
	import { DateTime } from 'luxon';

	export let countryCode;
	export let countryName;
	export let covidData;

	const { date, confirmed, deaths } = covidData;
	const formattedDate = DateTime.fromISO(date).toFormat('yyyy LLL dd')
</script>

<div class="flex">
	<Flag countryCode={countryCode} />
	<div class="flex flex-col ml-3">
		<div class="text-base">{countryName}</div>
		<div class="text-base">Latest data at: {formattedDate}</div>
		<div class="text-base">Confirmed: {confirmed}</div>
		<div class="text-base">Deaths: {deaths}</div>
	</div>
</div>
