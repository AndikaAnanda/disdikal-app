<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { resolve } from '$app/paths';

	const stack = [
		{ name: 'Bun', detail: 'Package manager dan runtime.' },
		{ name: 'SvelteKit', detail: 'Framework aplikasi, Svelte 5 runes mode.' },
		{
			name: 'Tailwind CSS v4',
			detail: 'Styling lewat plugin Vite, entry di src/routes/layout.css.'
		},
		{ name: 'Bits UI', detail: 'Komponen headless untuk Svelte 5.' },
		{
			name: 'Postgres + Drizzle',
			detail: 'Skema di src/lib/server/db/schema.ts, klien postgres.js.'
		},
		{ name: 'Zod', detail: 'Validasi input, skema di src/lib/schemas.' }
	];
</script>

<div class="mx-auto max-w-2xl px-6 py-16">
	<h1 class="text-3xl font-semibold tracking-tight text-slate-900">disdikal-app</h1>
	<p class="mt-2 text-slate-600">Kerangka aplikasi siap pakai.</p>

	<Accordion.Root type="single" class="mt-10 divide-y divide-slate-200 border-y border-slate-200">
		{#each stack as entry (entry.name)}
			<Accordion.Item value={entry.name}>
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-slate-900 hover:text-slate-600"
					>
						{entry.name}
						<span aria-hidden="true" class="text-slate-400">+</span>
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="pb-4 text-sm text-slate-600">
					{entry.detail}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<a
		href={resolve('/tasks')}
		class="mt-10 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
	>
		Lihat contoh CRUD →
	</a>
</div>
