<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import logoDisdikal from '$lib/assets/logo-disdikal.png';

	const isLoginPage = $derived(page.url.pathname === resolve('/login'));
	const backHref = $derived(isLoginPage ? resolve('/') : resolve('/login'));
	const backLabel = $derived(isLoginPage ? 'Back to Home' : 'Login Page');
</script>

<div
	class="border-b-2 border-(--auth-accent) bg-[linear-gradient(90deg,var(--auth-nav-from),var(--auth-nav-to))]"
>
	<div
		class="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-[clamp(18px,3vw,48px)] py-3 sm:gap-x-4"
	>
		<div class="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
			<img
				src={logoDisdikal}
				alt="Logo Dinas Pendidikan TNI AL"
				class="size-9 rounded-full object-cover sm:size-10"
			/>
			<div class="min-w-0">
				<p class="hidden text-[10.5px] tracking-[1.3px] text-(--auth-bar-text) sm:block">
					MARKAS BESAR ANGKATAN LAUT
				</p>
				<p class="text-[15px] leading-[1.2] font-bold text-white sm:text-[17.5px]">
					DINAS PENDIDIKAN
				</p>
			</div>
		</div>

		<Button
			variant="outline"
			href={backHref}
			class="h-auto shrink-0 cursor-pointer gap-2 rounded-full border-0 bg-white px-4 py-2 text-[12px] font-semibold text-(--navy-950) shadow-[0_2px_10px_rgba(3,15,46,0.35)] hover:bg-(--brand-50) hover:text-(--navy-950) sm:gap-3 sm:px-5 sm:py-2.25 sm:text-[13px]"
		>
			{backLabel}
			<ArrowRightIcon class="size-4 text-(--navy-950) sm:size-4.5" strokeWidth={1.9} />
		</Button>
	</div>
</div>
