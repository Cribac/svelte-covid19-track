<script>
	import CountrySearch from './CountrySearch.svelte';
	import Fa from 'svelte-fa'
	import { fade } from 'svelte/transition';
	import { faVirus, faInfo, faSearch } from '@fortawesome/free-solid-svg-icons'

	export let searchVisible = false;

	function toggleSearch() {
		searchVisible = !searchVisible;
	}
</script>

<nav class="flex justify-between items-center p-3 border-b border-blue-light-100">
	<a class="flex-grow text-blue-dark-100" href="/">
		<Fa icon={faVirus} size="2x" />
	</a>
	<div class="flex flex-end text-blue-dark-100">
		<a class="flex flex-row items-center p-1 mr-3" href="/about">
			<Fa icon={faInfo} />
			<span class="ml-1">About</span>
		</a>
		<div class="flex flex-row items-center cursor-pointer p-1" on:click={toggleSearch}>
			<Fa icon={faSearch} />
			<span class="ml-1">Search</span>
		</div>
	</div>
</nav>

{#if searchVisible}
	<div class="p-3" transition:fade>
		<CountrySearch />
	</div>
{/if}
