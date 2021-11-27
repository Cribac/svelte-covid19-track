<script context="module">
	export function load({ status }) {
		return {
			props: { status },
		};
	}
</script>

<script>
	export let status;

	const messages = {
		'unknown': 'An unknown error occurred.',
		404: 'Country data is not available',
	};

	/**
	 *
	 * @param {number} status
	 * @returns {string}
	 */
	const getError = (status) => {
		const errCode = Object.keys(messages).find(key => key === status.toString());
		return messages[errCode] || messages['unknown'];
	}
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
		</div>
	</div>
</div>
