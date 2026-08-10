// Status kotak nomor soal; dipakai bersama oleh strip bawah dan grid navigasi
// kanan supaya keduanya tidak pernah berbeda logika.

import type { OptionId } from '$lib/quiz-shared';

export type BoxState = 'current' | 'marked' | 'answered' | 'unanswered';

export function boxState(
	id: number,
	currentId: number,
	answers: Record<number, OptionId>,
	marked: Record<number, boolean>
): BoxState {
	if (id === currentId) return 'current';
	if (marked[id]) return 'marked';
	if (answers[id]) return 'answered';
	return 'unanswered';
}

export const boxClass: Record<BoxState, string> = {
	current: 'bg-[#007CF0] text-white',
	marked: 'border border-[#0058AA] bg-white text-[#0058AA]',
	answered: 'bg-[#EFFDEF] text-[#40A540]',
	unanswered: 'border border-[#E6EAF1] bg-white text-[#B0BDD2]'
};
