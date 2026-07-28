<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { AlcptSummary, RadarScore } from '$lib/dashboard-data';

	let { scores, summary }: { scores: RadarScore[]; summary: AlcptSummary } = $props();

	const CX = 170;
	const CY = 160;
	const RADIUS = 95;
	const MAX_SCORE = 100;
	const RINGS = [1, 0.75, 0.5, 0.25];

	/** Sudut tiap axis, dimulai dari atas lalu searah jarum jam. */
	function angleAt(index: number, total: number) {
		return (Math.PI * 2 * index) / total - Math.PI / 2;
	}

	function pointAt(index: number, total: number, ratio: number) {
		const angle = angleAt(index, total);
		return {
			x: CX + Math.cos(angle) * RADIUS * ratio,
			y: CY + Math.sin(angle) * RADIUS * ratio
		};
	}

	function polygon(values: number[]) {
		return values
			.map((value, i) => {
				const { x, y } = pointAt(i, values.length, value / MAX_SCORE);
				return `${x.toFixed(1)},${y.toFixed(1)}`;
			})
			.join(' ');
	}

	const ringPolygons = $derived(RINGS.map((ratio) => polygon(scores.map(() => MAX_SCORE * ratio))));
	const axisLines = $derived(scores.map((_, i) => pointAt(i, scores.length, 1)));
	const userPolygon = $derived(polygon(scores.map((s) => s.userScore)));
	const avgPolygon = $derived(polygon(scores.map((s) => s.avgScore)));
	const labels = $derived(
		scores.map((score, i) => {
			const { x, y } = pointAt(i, scores.length, 1.28);
			return { ...score, x, y };
		})
	);
</script>

<div class="text-center">
	<svg viewBox="0 0 340 320" width="100%" role="img" aria-label="Analisis skor ALCPT per aspek">
		{#each ringPolygons as points, i (i)}
			<polygon {points} fill="none" stroke="var(--dash-border)" stroke-width="1" />
		{/each}
		{#each axisLines as point, i (i)}
			<line x1={CX} y1={CY} x2={point.x} y2={point.y} stroke="var(--dash-border)" />
		{/each}

		<polygon points={avgPolygon} fill="rgb(210 75 107 / 15%)" stroke="#D05759" stroke-width="1.6" />
		<polygon points={userPolygon} fill="rgb(30 79 160 / 18%)" stroke="#007CF0" stroke-width="2" />

		{#each labels as label (label.axis)}
			<text
				x={label.x}
				y={label.y}
				text-anchor="middle"
				font-size="12"
				font-weight="700"
				fill="#33394a">{label.axis}</text
			>
			<text
				x={label.x}
				y={label.y + 15}
				text-anchor="middle"
				font-size="12"
				font-weight="800"
				fill="#1e2433">{label.userScore}</text
			>
		{/each}
	</svg>

	<div class="-mt-4 flex items-center justify-center gap-5 text-[11.5px] text-[#55607a]">
		<span>
			<span class="mr-1.5 inline-block size-2 rounded-full bg-[#007CF0]"></span>Skor Anda
		</span>
		<span>
			<span class="mr-1.5 inline-block size-2 rounded-full bg-[#D05759]"></span>Rata-rata Peserta
		</span>
	</div>
</div>

<div class="my-4 rounded-lg bg-[#E6F2FE]/40 p-3 text-center">
	<p class="text-sm font-extrabold text-(--brand-600)">
		Skor Akhir: {summary.score} ({summary.level})
	</p>
	<p class="mt-1 text-[11.5px] text-(--dash-muted)">Tanggal Tes: {summary.testDate}</p>
</div>

<Button
	variant="outline"
	class="h-auto w-full border-(--brand-500) bg-white py-2.5 text-[13px] font-bold text-(--brand-600) hover:bg-(--brand-50) hover:text-(--brand-600)"
>
	Lihat Detail Hasil Tes
</Button>
