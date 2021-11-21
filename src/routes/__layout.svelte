<script>
	import '../tailwind.css'
	import Navbar from '../components/Navbar.svelte';
	import DataInfo from '../components/DataInfo.svelte';
</script>

<header class="flex-initial">
	<Navbar />
</header>
<main class="flex-1 flex-grow">
	<slot />
</main>
<footer class="flex flex-grow-0 h-12 items-center p-3 border-t border-blue-light-100">
	<DataInfo />
</footer>
