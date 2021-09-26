<script>
	import Typeahead from "svelte-typeahead";
	import Country from '../components/Country.svelte';
	import { countriesJSON } from '../../static/data/countries.json';

	const extract = (item) => item.name;

	let country = null;

	function update(detail) {
		country = { detail };
	}

	function clear() {
		country = null;
	}
</script>

<h1 class="text-2xl ml-2 my-4">Welcome to Covid19 Track</h1>

<Typeahead
	class="ml-2"
	placeholder={`Search for country name`}
	hideLabel
	data={countriesJSON}
	{extract}
	on:select={(e) => update(e.detail)}
	on:clear={() => clear() }
/>

{#if country}
	<Country
		countryCode={country.detail.original.countryCode.toLowerCase()}
		countryName={country.detail.original.name}
	/>
{:else }
	<p class="ml-2 mt-4">Nothing selected</p>
{/if}
