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
		404: 'Country data is not available',
	};

</script>

<div class="p-3">
	<div>
		Sorry, something went wrong: {messages[status]}
	</div>
</div>
