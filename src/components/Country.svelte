<script>
	import Flag from './Flag.svelte';
	import { DateTime } from 'luxon';

	export let countryCode;
	export let countryName;
	const now = DateTime.now().toISODate();
</script>

<div class="flex">
	<Flag countryCode={countryCode} />
	<div class="flex flex-col ml-3">
		<div class="text-base">{countryName}</div>
		<div class="text-base">{now}</div>
	</div>
</div>
