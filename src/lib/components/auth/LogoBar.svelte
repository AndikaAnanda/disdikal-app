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

<div class="border-b border-(--auth-border) bg-white">
	<div class="flex flex-wrap items-center justify-between gap-4 px-[clamp(18px,3vw,48px)] py-2.25">
		<div class="flex items-center gap-3.5">
			<img
				src={logoDisdikal}
				alt="Logo Dinas Pendidikan TNI AL"
				class="size-10 rounded-full object-cover"
			/>
			<div>
				<p class="hidden text-[11.5px] tracking-[1.3px] text-(--auth-subtext) sm:block">
					MARKAS BESAR ANGKATAN LAUT
				</p>
				<p class="text-[18px] leading-[1.2] font-bold text-(--navy-950)">DINAS PENDIDIKAN</p>
			</div>
		</div>

		<Button
			variant="outline"
			href={backHref}
			class="h-auto gap-3 rounded-[26px] border-[1.5px] border-(--brand-500) bg-white px-5 py-2.25 text-[13.5px] font-semibold text-(--navy-950) hover:bg-(--brand-50) hover:text-(--navy-950)"
		>
			{backLabel}
			<ArrowRightIcon class="size-4.5 text-(--brand-500)" strokeWidth={1.9} />
		</Button>
	</div>
</div>
