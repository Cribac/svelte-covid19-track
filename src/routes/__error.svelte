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

<div class="p-3">
	<div>
		Sorry, something went wrong: {getError(status)}
	</div>
</div>
