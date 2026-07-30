<script lang="ts">
	import { enhance } from '$app/forms';
	import RegisterBanner from '$lib/components/register/RegisterBanner.svelte';
	import RegisterFormCard from '$lib/components/register/RegisterFormCard.svelte';
	import RegisterSidebar from '$lib/components/register/RegisterSidebar.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<svelte:head><title>Layanan Disdikal — Pendaftaran Akun</title></svelte:head>

<!-- enctype wajib: form ini punya <input type="file"> (unggah foto), dan
     use:enhance melempar error sebelum submit kalau atribut ini tidak ada. -->
<form method="POST" enctype="multipart/form-data" use:enhance class="pb-12">
	<div class="grid items-start gap-6 max-lg:grid-cols-1 lg:grid-cols-[1.65fr_1fr] lg:gap-8">
		<div class="flex flex-col gap-6">
			<RegisterBanner />
			<RegisterFormCard {form} />
		</div>
		<RegisterSidebar {form} />
	</div>
</form>
