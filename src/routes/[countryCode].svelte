<script context="module">
	import countriesJson from '/static/data/countries.json';

	export async function load({ fetch, page }) {
		const { countryCode } = page.params;
		const res = await fetch(`/api/v1/${countryCode}`);

		if (res.ok && res.status === 200) {
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
	import DataInfo from '../components/DataInfo.svelte';
	import Chart from 'svelte-frappe-charts';

	export let covidResult;
	export let selectedCountry;

	const labels = buildSeries('date', covidResult.chartData);

	$: confirmedData = {
		labels,
		datasets: [
			{ name: 'Confirmed', values: buildSeries('confirmed', covidResult.chartData) },
		],
	};

	$: deathsData = {
		labels,
		datasets: [
			{ name: 'Deaths', values: buildSeries('deaths', covidResult.chartData) },
		],
	};

	function buildSeries(type, data) {
		return data.map((d) => d[type]);
	}
</script>

<div class="flex flex-col p-3">
	<Country
		countryCode={selectedCountry.countryCode.toLowerCase()}
		countryName={selectedCountry.name}
		covidData={covidResult.latestData}
	/>

	<div class="mt-4">
		<Chart
			data={confirmedData}
			title="Confirmed cases during the last year."
			type="line"
		/>
		<Chart
			data={deathsData}
			title="Deaths during the last year."
			type="line"
		/>
	</div>
	<DataInfo />
</div>
