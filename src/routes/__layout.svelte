<script>
	import '../tailwind.css'
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="bg-blue-light-300">
	<Navbar />
	<slot />
</main>
