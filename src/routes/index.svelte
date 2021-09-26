<script>
	import Typeahead from "svelte-typeahead";
	import Flag from '../components/Flag.svelte';
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

<h1 class="text-2xl">Welcome to Covid19 Track</h1>

<Typeahead
	placeholder={`Search for country name`}
	hideLabel
	data={countriesJSON}
	{extract}
	on:select={(e) => update(e.detail)}
	on:clear={() => clear() }
/>

{#if country}
	<Flag countryCode={country.detail.original.countryCode.toLowerCase()} />
{:else }
	<p>Nothing selected</p>
{/if}
