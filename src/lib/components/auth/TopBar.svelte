<script lang="ts">
	import ClockIcon from '@lucide/svelte/icons/clock';
	import MailIcon from '@lucide/svelte/icons/mail';

	const navLinks = ['Disdikal News', 'Faq', 'Contact'];

	// Lucide tidak menyediakan logo brand, jadi keempatnya tetap SVG custom.
	const socials = [
		{
			name: 'Facebook',
			path: 'M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z'
		},
		{
			name: 'X',
			path: 'M18.9 2H22l-7.2 8.3L23.3 22H16.7l-5.2-6.8L5.6 22H2.4l7.7-8.9L1 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z'
		},
		{
			name: 'Instagram',
			path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.8-10.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
		},
		{
			name: 'LinkedIn',
			path: 'M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.25h4.5V23h-4.5V8.25zM8.25 8.25h4.31v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V23h-4.5V8.25z'
		}
	];
</script>

<div class="bg-[#01296E] text-sm font-medium text-white">
	<div class="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-10 py-3">
		<div class="flex flex-wrap items-center gap-6 text-[#d7deed]">
			<span class="flex items-center gap-2">
				<MailIcon class="size-4" />support@tnial.com
			</span>
			<span class="flex items-center gap-2">
				<ClockIcon class="size-4" />Working: 8.00am - 5.00pm
			</span>
		</div>

		<div class="flex items-center gap-8">
			<div class="hidden items-center gap-6 text-[#d7deed] sm:flex">
				{#each navLinks as link (link)}
					<span aria-disabled="true">{link}</span>
				{/each}
			</div>
			<div class="flex items-center gap-4">
				{#each socials as social (social.name)}
					<svg viewBox="0 0 24 24" class="size-4 fill-current" role="img" aria-label={social.name}>
						<path d={social.path} />
					</svg>
				{/each}
			</div>
		</div>
	</div>
</div>
