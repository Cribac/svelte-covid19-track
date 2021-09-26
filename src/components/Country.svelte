<script>
	import { onMount} from 'svelte';
	import Flag from './Flag.svelte';

	export let countryCode;
	export let countryName;

	let covidData = null;

	onMount(async () => {
		const request = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`);
		const result = await request.json();
		console.log("res", result);
		if (result) {
			covidData = result;
		}
	});
</script>

<div class="text-xl">{countryName}</div>
<Flag countryCode={countryCode} />

{#if covidData}
	<div>
		<ul>
			<li>Cases: {covidData.cases}</li>
			<li>todayCases: {covidData.todayCases}</li>
			<li>deaths: {covidData.deaths}</li>
			<li>todayDeaths: {covidData.todayDeaths}</li>
			<li>recovered: {covidData.recovered}</li>
			<li>active: {covidData.active}</li>
			<li>critical: {covidData.critical}</li>
			<li>casesPerOneMillion: {covidData.casesPerOneMillion}</li>
			<li>deathsPerOneMillion: {covidData.deathsPerOneMillion}</li>
			<li>totalTests: {covidData.totalTests}</li>
			<li>testsPerOneMillion: {covidData.testsPerOneMillion}</li>
		</ul>
	</div>
{/if}

