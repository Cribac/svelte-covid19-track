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

	function clearCountry() {
		country = null;
	}

	function updateCountry(detail) {
		country = detail;
	}

	async function transitionToCountry() {
		if (country) {
			console.log(country);
			await goto(`/${country.original.countryCodeAlpha3.toLowerCase()}/?year=${currentYear}`);
		}
	}
</script>

<div class="flex flex-wrap justify-between items-center">
	<Typeahead
		class="c19-typeahead"
		placeholder={`Search for country name`}
		hideLabel
		data={countriesJson}
		{extract}
		on:select={(e) => updateCountry(e.detail)}
		on:clear={() => clearCountry() }
	/>

	<select bind:value={currentYear} on:change="{() => setCurrentYear(currentYear)}">
		{#each years as year}
			<option value={year}>
				{year}
			</option>
		{/each}
	</select>

	<button class="c19-button" on:click="{() => transitionToCountry()}">
		Go
	</button>
</div>
