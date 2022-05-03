<script context="module">
	import { DataTransformer } from '/src/utils/dataTransformer';
	import countriesJson from '/src/data/countries.json';

	export async function load({ fetch, params }) {
		const { countryCode } = params;
		const selectedCountry = await countriesJson.find(c => c.countryCodeAlpha3.toLowerCase() === countryCode);
		const res = await fetch('/api/v1/covidData');

		let errorStatus = null;

		if (res.ok && res.status === 200) {
			const covidData = await res.json();
			const countryCovidData = covidData.result[selectedCountry.name];
			if (countryCovidData) {
				const filteredByDay = DataTransformer.filterByDay(countryCovidData, '-1');
				const filteredByYear = DataTransformer.filterByYear(filteredByDay, '2022');
				const latestData = DataTransformer.latestRecord(filteredByYear);

				return {
					props: {
						covidResult: filteredByYear,
						latestData,
						selectedCountry,
					}
				};
			} else {
				errorStatus = 404
			}
		}

		return {
			status: errorStatus || res.status,
			error: new Error(),
		};
	}
</script>

<script>
	import Country from '../components/Country.svelte';
	import Chart from 'svelte-frappe-charts';

	export let covidResult;
	export let selectedCountry;
	export let latestData;

	/**
	 * @type string[]
	 */
	const labels = buildSeries('date', covidResult);

	/**
	 * @type ChartData
	 */
	$: confirmedData = {
		labels,
		datasets: [
			{ name: 'Confirmed', values: buildSeries('confirmed', covidResult) },
		],
	};

	/**
	 * @type ChartData
	 */
	$: deathsData = {
		labels,
		datasets: [
			{ name: 'Deaths', values: buildSeries('deaths', covidResult) },
		],
	};

	/**
	 * @param {string} type
	 * @param {CovidJson[]} data
	 * @returns {string[] || number[]}
	 */
	function buildSeries(type, data) {
		return data.map((d) => d[type]);
	}
</script>

<svelte:head>
	<title>Svelte COVID-19 Track | {selectedCountry.name}</title>
</svelte:head>

<div class="flex flex-col p-3">
	<Country
		countryCode={selectedCountry.countryCode.toLowerCase()}
		countryName={selectedCountry.name}
		covidData={latestData}
	/>

	<div class="mt-8">
		<Chart
			data={confirmedData}
			title="Confirmed cases during the last year."
			type="line"
		/>
	</div>
	<div class="mt-8">
		<Chart
			data={deathsData}
			title="Deaths during the last year."
			type="line"
		/>
	</div>
</div>
