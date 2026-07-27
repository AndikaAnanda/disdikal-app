<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';

	const stack = [
		{ name: 'Bun', detail: 'Package manager dan runtime.' },
		{ name: 'SvelteKit', detail: 'Framework aplikasi, Svelte 5 runes mode.' },
		{
			name: 'Tailwind CSS v4',
			detail: 'Styling lewat plugin Vite, entry di src/routes/layout.css.'
		},
		{
			name: 'shadcn-svelte',
			detail: 'Komponen siap pakai di src/lib/components/ui, dibangun di atas Bits UI.'
		},
		{
			name: 'Postgres + Drizzle',
			detail: 'Skema di src/lib/server/db/schema.ts, klien postgres.js.'
		},
		{ name: 'Zod', detail: 'Validasi input, skema di src/lib/schemas.' }
	];
</script>

<div class="mx-auto max-w-2xl px-6 py-16">
	<h1 class="text-3xl font-semibold tracking-tight">disdikal-app</h1>
	<p class="mt-2 text-muted-foreground">Kerangka aplikasi siap pakai.</p>

	<Accordion.Root type="single" class="mt-10">
		{#each stack as entry (entry.name)}
			<Accordion.Item value={entry.name}>
				<Accordion.Trigger>{entry.name}</Accordion.Trigger>
				<Accordion.Content>{entry.detail}</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<Button href={resolve('/tasks')} class="mt-10">Lihat contoh CRUD</Button>
</div>
