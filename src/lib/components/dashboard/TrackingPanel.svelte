<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import iconApproval from '$lib/assets/dashboard-tracking-icon/material-symbols_approval-delegation-outline-rounded.png';
	import iconExam from '$lib/assets/dashboard-tracking-icon/healthicons_i-exam-multiple-choice-outline.png';
	import iconFileText from '$lib/assets/dashboard-tracking-icon/eva_file-text-fill.png';
	import iconFormNew from '$lib/assets/dashboard-tracking-icon/fluent_form-new-20-regular.png';
	import iconPerson from '$lib/assets/dashboard-tracking-icon/material-symbols_person.png';
	import { cn } from '$lib/utils';
	import type { StepStatus, TrackingStep } from '$lib/dashboard-data';

	let { steps }: { steps: TrackingStep[] } = $props();

	const icons: Record<string, string> = {
		profil: iconPerson,
		upload: iconFileText,
		ajukan: iconFormNew,
		verifikasi: iconExam,
		hasil: iconApproval
	};

	const statusLabel: Record<StepStatus, string> = {
		done: 'Selesai',
		current: 'Sedang Berlangsung',
		pending: 'Belum Mulai'
	};

	const circleDone =
		'border-transparent bg-linear-to-b from-[#007CF0] to-[#00478A] bg-origin-border text-white';

	const circleClass: Record<StepStatus, string> = {
		done: circleDone,
		current: `${circleDone} ring-[5px] ring-(--brand-100)`,
		pending: 'border-[#dfe3ec] bg-[#eef1f6] text-[#9aa2b1]'
	};

	const pillClass: Record<StepStatus, string> = {
		done: 'bg-(--accent-green-50) text-(--accent-green)',
		current: 'bg-(--brand-50) text-(--brand-600)',
		pending: 'bg-[#f0f2f6] text-[#9aa2b1]'
	};
</script>

<div class="flex items-start">
	{#each steps as step, i (step.id)}
		{@const icon = icons[step.id] ?? iconPerson}
		{#if i > 0}
			<div
				class={cn(
					'mt-4.75 -mx-7 h-0.5 flex-1 rounded-full',
					steps[i - 1].status === 'done' ? 'bg-[#00478A]' : 'bg-[#dfe3ec]'
				)}
			></div>
		{/if}
		<div class="flex w-30 shrink-0 flex-col items-center text-center">
			<div
				class={cn(
					'mb-2.5 flex size-10 items-center justify-center rounded-full border-2',
					circleClass[step.status]
				)}
			>
				<span
					class="size-5 bg-current mask-contain mask-center mask-no-repeat"
					style="mask-image: url({icon})"
				></span>
			</div>
			<div class="mb-0.5 font-medium text-[10px] text-black">{step.label}</div>
			<div class="mb-2 min-h-8 text-xs leading-tight font-bold text-(--navy-950)">{step.title}</div>
			<Badge class={cn('border-transparent text-xs font-bold', pillClass[step.status])}>
				{statusLabel[step.status]}
			</Badge>
		</div>
	{/each}
</div>
