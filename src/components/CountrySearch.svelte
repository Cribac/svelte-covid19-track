<script>
	import { goto } from '$app/navigation';
	import Typeahead from "svelte-typeahead";
	import countriesJson from '/static/data/countries.json';

	const extract = (item) => item.name;

	let country = null;

	async function update(detail) {
		country = { detail };
		await goto(`/${detail.original.countryCodeAlpha3.toLowerCase()}`);
	}

	function clear() {
		country = null;
	}
</script>

<Typeahead
	class="ml-2"
	placeholder={`Search for country name`}
	hideLabel
	data={countriesJson}
	{extract}
	on:select={(e) => update(e.detail)}
	on:clear={() => clear() }
/>
