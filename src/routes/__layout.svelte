<script>
	import '../tailwind.css'
	import Navbar from '../components/Navbar.svelte';
	import DataInfo from '../components/DataInfo.svelte';
</script>

<main class="flex flex-col justify-between bg-blue-light-300">
	<header>
		<Navbar />
	</header>
	<slot />
	<footer class="flex h-12 items-center p-3 border-t border-blue-light-100">
		<DataInfo />
	</footer>
</main>
