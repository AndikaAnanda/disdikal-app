<script lang="ts">
	import './layout.css';
	import { onMount } from 'svelte';
	import { me } from '$lib/api';
	import { AuthStore } from '$lib/stores';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// Verify the persisted session against the backend on boot (GET /v1/auth/me).
	// AuthStore.ready flips true once the check settles, driving the route-group gates.
	onMount(() => AuthStore.verifySession(() => me()));
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
