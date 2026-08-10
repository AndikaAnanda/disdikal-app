<script lang="ts">
	import { resolve } from '$app/paths';
	import { iconExamOutline, iconInfoOutline, iconInfoRounded } from '$lib/components/quiz/icons';
	import PetunjukSingkatQuizCard from '$lib/components/quiz/PetunjukSingkatQuizCard.svelte';
	import ProgressTesCard from '$lib/components/quiz/ProgressTesCard.svelte';
	import SoalBoxes from '$lib/components/quiz/SoalBoxes.svelte';
	import SoalCard from '$lib/components/quiz/SoalCard.svelte';
	import SoalLegend from '$lib/components/quiz/SoalLegend.svelte';
	import SoalNavPager from '$lib/components/quiz/SoalNavPager.svelte';
	import TipsMengerjakanCard from '$lib/components/quiz/TipsMengerjakanCard.svelte';
	import WaktuTesCard from '$lib/components/quiz/WaktuTesCard.svelte';
	import InfoNoticeBar from '$lib/components/shared/InfoNoticeBar.svelte';
	import MaskIcon from '$lib/components/shared/MaskIcon.svelte';
	import DaftarBagianSidebar from '$lib/components/tes-listening/DaftarBagianSidebar.svelte';
	import {
		audioPrompt,
		listeningQuestions,
		nextSectionLabel,
		petunjukSingkatQuiz,
		quizTimerNotice,
		sectionTitle,
		tipsMengerjakan
	} from '$lib/listening-quiz-data';
	import { TOTAL_SECTION_QUESTIONS, TOTAL_SECTION_SECONDS, type OptionId } from '$lib/quiz-shared';
	import { testSections } from '$lib/tes-bahasa-data';
	import { infoTesBox } from '$lib/tes-listening-data';

	let currentIndex = $state(0);
	let answers = $state<Record<number, OptionId>>({});
	let marked = $state<Record<number, boolean>>({});
	let remaining = $state(TOTAL_SECTION_SECONDS);

	const currentQuestion = $derived(listeningQuestions[currentIndex]);
	const answeredCount = $derived(Object.keys(answers).length);
	const isLast = $derived(currentIndex === listeningQuestions.length - 1);
	const sectionComplete = $derived(isLast && answers[currentQuestion.id] !== undefined);

	// Waktu berhenti begitu bagian selesai atau habis; interval selalu dibersihkan.
	$effect(() => {
		if (sectionComplete || remaining <= 0) return;
		const id = setInterval(() => {
			remaining -= 1;
		}, 1000);
		return () => clearInterval(id);
	});

	function selectAnswer(id: OptionId) {
		answers[currentQuestion.id] = id;
	}

	function toggleMark() {
		marked[currentQuestion.id] = !marked[currentQuestion.id];
	}

	function goTo(index: number) {
		currentIndex = Math.min(Math.max(index, 0), listeningQuestions.length - 1);
	}
</script>

<svelte:head><title>Layanan Disdikal — Listening Comprehension</title></svelte:head>

<div class="mx-auto max-w-[1880px] px-3 sm:px-4 lg:px-5">
	<div
		class="grid grid-cols-1 items-start gap-4.5 min-[1400px]:grid-cols-[320px_minmax(0,1fr)_320px]"
	>
		<div class="flex min-w-0 flex-col gap-4.5">
			<DaftarBagianSidebar sections={testSections} activeId={testSections[0].id} />
			<ProgressTesCard answered={answeredCount} />
			<TipsMengerjakanCard items={tipsMengerjakan} />
		</div>

		<div class="flex min-w-0 flex-col gap-4.5">
			<div class="flex flex-wrap items-center justify-between gap-3 rounded-[8px] bg-white p-6">
				<div class="flex items-center gap-3">
					<MaskIcon src={iconExamOutline} class="size-5 text-[#0071DA]" />
					<h1 class="text-[16px] font-bold text-[#0071DA]">1. Listening Comprehension</h1>
				</div>
				<span class="rounded-[8px] bg-[#E6F2FE] px-3 py-1 text-[12px] font-bold text-[#0058AA]">
					{TOTAL_SECTION_QUESTIONS} Soal
				</span>
			</div>

			<InfoNoticeBar icon={iconInfoRounded} text={infoTesBox.desc} class="bg-white" />

			<!-- Di-remount tiap ganti soal supaya state pemutar audio ikut ter-reset. -->
			{#key currentQuestion.id}
				<SoalCard
					question={currentQuestion}
					position={currentIndex + 1}
					selected={answers[currentQuestion.id]}
					marked={!!marked[currentQuestion.id]}
					prompt={audioPrompt}
					onSelect={selectAnswer}
					onToggleMark={toggleMark}
				/>
			{/key}

			<InfoNoticeBar icon={iconInfoRounded} text={quizTimerNotice} class="bg-white" />

			<SoalNavPager
				canGoPrev={currentIndex > 0}
				{sectionComplete}
				answered={answeredCount}
				{sectionTitle}
				{nextSectionLabel}
				nextSectionHref={resolve('/tes-bahasa-inggris/tes/structure')}
				onPrev={() => goTo(currentIndex - 1)}
				onNext={() => goTo(currentIndex + 1)}
			/>

			<div class="flex flex-col items-center gap-4.5 rounded-[8px] bg-white p-6">
				<!-- Strip bawah hanya menampilkan jendela nomor di sekitar soal aktif;
				     daftar lengkapnya ada di panel Navigasi Soal. -->
				<SoalBoxes
					questions={listeningQuestions}
					currentId={currentQuestion.id}
					{answers}
					{marked}
					onSelect={goTo}
					window={10}
					class="justify-center"
				/>
				<SoalLegend />
			</div>
		</div>

		<div class="flex min-w-0 flex-col gap-4.5">
			<WaktuTesCard {remaining} />

			<div class="rounded-[8px] bg-white p-6">
				<div class="mb-4.5 flex items-center gap-3">
					<MaskIcon src={iconInfoOutline} class="size-5 text-[#01296E]" />
					<h2 class="text-[16px] font-bold text-[#01296E]">Navigasi Soal</h2>
				</div>
				<SoalBoxes
					questions={listeningQuestions}
					currentId={currentQuestion.id}
					{answers}
					{marked}
					onSelect={goTo}
				/>
			</div>

			<PetunjukSingkatQuizCard items={petunjukSingkatQuiz} />
		</div>
	</div>
</div>
