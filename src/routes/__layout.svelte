<script>
	import '../tailwind.css'
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="bg-blue-base-dark">
	<Navbar />
	<slot />
</main>
