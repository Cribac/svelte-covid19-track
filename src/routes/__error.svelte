<script context="module">
	import { CountryService } from '../utils/countryService';

	export function load({ status, params }) {
		return {
			props: { status, params },
		};
	}
</script>

<script>
	export let status;
	export let params;

	const messages = {
		'unknown': 'An unknown error occurred.',
		404: 'No data available for Country: ',
	};

	/**
	 *
	 * @param {number} status
	 * @returns {string}
	 */
	const getError = (status) => {
		const errCode = Object.keys(messages).find(key => key === status.toString());
		return messages[errCode] || messages['unknown'];
	};

	const getCountryName = () => {
		const { countryCode } = params;
		const country = CountryService.getCountryByCode(countryCode);
		return country.name;
	};
</script>

<svelte:head>
	<title>Svelte COVID-19 Track | Error</title>
</svelte:head>

<div class="p-3">
	<div class="flex flex-col items-center bg-blue-dark-300 p-3">
		<div class="text-xl md:text-2xl text-blue-light-300">
			Sorry, something went wrong!
		</div>
		<div class="text-xl md:text-2xl text-blue-light-300">
			{getError(status)}
			{getCountryName()}
		</div>
	</div>
</div>
