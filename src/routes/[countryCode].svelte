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
	import Chart from 'svelte-frappe-charts';

	export let covidResult;
	export let selectedCountry;

	const labels = buildSeries('date', covidResult);

	$: confirmedData = {
		labels,
		datasets: [
			{ name: 'Confirmed', values: buildSeries('confirmed', covidResult) },
		],
	};

	$: deathsData = {
		labels,
		datasets: [
			{ name: 'Deaths', values: buildSeries('deaths', covidResult) },
		],
	};

	function buildSeries(type, result) {
		return result.data.map((d) => d[type]);
	}
</script>

<div class="flex flex-col p-3">
	<Country
		countryCode={selectedCountry.countryCode.toLowerCase()}
		countryName={selectedCountry.name}
	/>

	<Chart data={confirmedData} type="line" />
	<Chart data={deathsData} type="line" />
</div>
