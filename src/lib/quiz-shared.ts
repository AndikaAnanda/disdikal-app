// Tipe dan konstanta yang dipakai bersama oleh semua bagian tes (Listening,
// Structure, Reading). Sengaja bebas dari import Svelte/SvelteKit.

export type OptionId = 'A' | 'B' | 'C' | 'D';

export interface QuizOption {
	id: OptionId;
	text: string;
}

export interface ReadingPassage {
	title: string;
	paragraphs: string[];
}

export interface QuizQuestion {
	id: number;
	/** Hanya diisi bagian yang memakai audio; kalau kosong, pemutar tidak dirender. */
	audioDuration?: string;
	/** Hanya diisi bagian Reading; kalau kosong, kartu soal tetap satu kolom. */
	passage?: ReadingPassage;
	question: string;
	options: QuizOption[];
}

export const TOTAL_SECTION_QUESTIONS = 40;
/** 3 bagian × 40 soal; dipakai ring "Progress Tes". */
export const TOTAL_EXAM_QUESTIONS = 120;
export const TOTAL_SECTION_SECONDS = 40 * 60;

/** Helper ringkas untuk menulis bank soal. */
export function soal(
	id: number,
	question: string,
	options: [string, string, string, string],
	audioDuration?: string
): QuizQuestion {
	return {
		id,
		audioDuration,
		question,
		options: [
			{ id: 'A', text: options[0] },
			{ id: 'B', text: options[1] },
			{ id: 'C', text: options[2] },
			{ id: 'D', text: options[3] }
		]
	};
}
