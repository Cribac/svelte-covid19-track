<script>
	import Flag from './Flag.svelte';

	export let countryCode;
	export let countryName;
</script>

<div class="text-xl">{countryName}</div>
<Flag countryCode={countryCode} />
