<script>
	import { goto } from '$app/navigation';
	import { DateTime } from 'luxon';
	import Typeahead from 'svelte-typeahead';
	import countriesJson from '/src/data/countries.json';

	const extract = (item) => item.name;

	let country = null;

	let currentYear = DateTime.local().year;

	const years = [2020, 2021, currentYear]

	function setCurrentYear(year) {
		currentYear = year;
	}

	function clear() {
		country = null;
	}

	async function update(detail) {
		country = { detail };
		await goto(`/${detail.original.countryCodeAlpha3.toLowerCase()}/?year=${currentYear}`);
	}
</script>

<div class="flex flex-wrap justify-between items-center">
	<Typeahead
		class="c19-typeahead"
		placeholder={`Search for country name`}
		hideLabel
		data={countriesJson}
		{extract}
		on:select={(e) => update(e.detail)}
		on:clear={() => clear() }
	/>

	<select bind:value={currentYear} on:change="{() => setCurrentYear(currentYear)}">
		{#each years as year}
			<option value={year}>
				{year}
			</option>
		{/each}
	</select>
</div>
