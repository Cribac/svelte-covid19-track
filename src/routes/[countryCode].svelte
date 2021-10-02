<script context="module">
	import countriesJson from '/static/data/countries.json';

	export async function load({ fetch, page }) {
		const { countryCode } = page.params;
		const res = await fetch(`/api/v1/${countryCode}`);

		if (res.ok) {
			return {
				props: {
					covidResult: await res.json(),
					selectedCountry: await countriesJson.find(c => c.countryCodeAlpha3.toLowerCase() === countryCode),
				}
			};
		}

		return {
			status: res.status,
			error: new Error(),
		};
	}
</script>

<script>
	import Country from '../components/Country.svelte';

	export let covidResult;
	export let selectedCountry;

	export const covidData = () => {
		return Object.keys(covidResult.result.result).map((k) => {
			return {
				date: k,
				confirmed: covidResult.result.result[k].confirmed,
				deaths: covidResult.result.result[k].deaths,
				recovered: covidResult.result.result[k].recovered,
			}
		});
	};
</script>

<div>
	<h2>{selectedCountry.name}</h2>
	<h3>Count: {covidResult.result.count}</h3>

	<Country
		countryCode={selectedCountry.countryCode.toLowerCase()}
		countryName={selectedCountry.name}
	/>

	<ul>
		{#each covidData() as data}
			<li>Date: {data.date}</li>
			<li>Confirmed: {data.confirmed}</li>
			<li>Deaths: {data.deaths}</li>
			<li>Recovered: {data.recovered}</li>
		{/each}
	</ul>
</div>
