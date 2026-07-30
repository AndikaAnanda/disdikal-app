<script lang="ts">
	import type { SuperForm } from 'sveltekit-superforms';
	import * as Card from '$lib/components/ui/card';
	import DataDiriSection from './DataDiriSection.svelte';
	import InformasiAkunSection from './InformasiAkunSection.svelte';
	import type { RegisterInput } from '$lib/schemas/register';

	let { superform }: { superform: SuperForm<RegisterInput> } = $props();
</script>

<Card.Root class="bg-transparent p-0 text-[#01296E] shadow-none ring-0">
	<Card.Content class="flex flex-col gap-5 p-0">
		<DataDiriSection {superform} />
		<InformasiAkunSection {superform} />
	</Card.Content>
</Card.Root>
