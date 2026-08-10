// Mock data soal Structure & Written Expression. Tipe & konstanta bersama ada
// di quiz-shared.ts; sengaja bebas dari import Svelte/SvelteKit.

import { soal, type QuizQuestion } from './quiz-shared';

export const sectionTitle = 'Structure & Written Expression';

export const structurePrompt =
	'Lengkapi kalimat berikut dengan pilihan kata atau frasa yang paling tepat';

/** Soal 5 memakai teks persis dari frame Figma. */
export const structureQuestions: QuizQuestion[] = [
	soal(1, 'The manager, along with his assistants, ________ attending the conference.', [
		'are',
		'is',
		'were',
		'have'
	]),
	soal(2, 'Neither the students nor the teacher ________ satisfied with the result.', [
		'were',
		'are',
		'was',
		'being'
	]),
	soal(3, 'By the time we arrived, the meeting ________.', [
		'has already started',
		'had already started',
		'was already starting',
		'already started'
	]),
	soal(4, 'She is the woman ________ helped me find the office.', [
		'which',
		'whom',
		'who',
		'whose'
	]),
	soal(5, 'If she ____________ harder, she will pass the exam.', [
		'study',
		'studies',
		'studied',
		'studying'
	]),
	soal(6, 'The report must ________ before the end of the month.', [
		'submit',
		'be submitted',
		'submitting',
		'to submit'
	]),
	soal(7, 'He is used to ________ in a noisy environment.', ['work', 'works', 'working', 'worked']),
	soal(8, '________ the heavy rain, the ceremony continued as planned.', [
		'Although',
		'Because of',
		'Despite',
		'However'
	]),
	soal(9, 'This is ________ book I have ever read.', [
		'the more interesting',
		'the most interesting',
		'more interesting',
		'most interesting'
	]),
	soal(10, 'Not until the ship reached the port ________ the damage.', [
		'they noticed',
		'did they notice',
		'they did notice',
		'noticed they'
	]),
	soal(11, 'The officer suggested that the recruit ________ the manual carefully.', [
		'reads',
		'read',
		'reading',
		'to read'
	]),
	soal(12, 'Hardly ________ the room when the alarm went off.', [
		'he had entered',
		'had he entered',
		'he entered',
		'did he entered'
	]),
	soal(13, 'The equipment ________ last year is still functioning well.', [
		'installing',
		'was installed',
		'installed',
		'install'
	]),
	soal(14, 'She would rather ________ at home than go to the party.', [
		'to stay',
		'staying',
		'stay',
		'stayed'
	]),
	soal(15, 'The number of applicants ________ increased significantly this year.', [
		'have',
		'has',
		'are',
		'were'
	]),
	soal(16, 'It is essential that every candidate ________ on time.', [
		'arrives',
		'arrive',
		'arriving',
		'arrived'
	]),
	soal(17, 'The instructor explained ________ to operate the new system.', [
		'that',
		'which',
		'how',
		'what'
	]),
	soal(18, 'Had I known about the schedule, I ________ earlier.', [
		'would come',
		'will come',
		'would have come',
		'had come'
	]),
	soal(19, 'The training program is designed ________ practical skills.', [
		'to develop',
		'developing',
		'develop',
		'developed'
	]),
	soal(20, 'Both of the proposals ________ carefully reviewed by the committee.', [
		'was',
		'were',
		'has been',
		'is'
	]),
	soal(21, 'The cadets were told ________ the area without permission.', [
		'not leave',
		'not to leave',
		'to not leaving',
		'not leaving'
	]),
	soal(22, '________ finishing the assignment, he submitted it immediately.', [
		'After',
		'Afterwards',
		'Later',
		'Then'
	]),
	soal(23, 'The captain, ________ experience is remarkable, led the mission.', [
		'who',
		'whom',
		'whose',
		'which'
	]),
	soal(24, 'There ________ several reasons for the delay.', ['is', 'are', 'was', 'has been']),
	soal(25, 'The document needs ________ before it is distributed.', [
		'revise',
		'revising',
		'to revising',
		'revised'
	]),
	soal(26, 'She speaks English ________ than her colleague.', [
		'more fluent',
		'most fluently',
		'more fluently',
		'fluently'
	]),
	soal(27, 'The ship sailed ________ the storm had subsided.', [
		'as soon as',
		'as soon',
		'so soon as',
		'soon as'
	]),
	soal(28, 'Each of the participants ________ a certificate at the end.', [
		'receive',
		'receives',
		'are receiving',
		'have received'
	]),
	soal(29, 'The problem was so complex ________ nobody could solve it.', [
		'so',
		'that',
		'which',
		'as'
	]),
	soal(30, 'We look forward to ________ from you soon.', ['hear', 'hearing', 'heard', 'be heard']),
	soal(31, 'The results were ________ what we had expected.', [
		'different from',
		'different than',
		'differ from',
		'differently from'
	]),
	soal(32, 'Only after the inspection ________ allowed to depart.', [
		'the vessel was',
		'was the vessel',
		'the vessel',
		'did the vessel'
	]),
	soal(33, 'He denied ________ any part in the incident.', [
		'to take',
		'taking',
		'take',
		'have taken'
	]),
	soal(34, 'The lecture was ________ interesting that nobody left early.', [
		'such',
		'very',
		'so',
		'too'
	]),
	soal(35, 'A number of officers ________ been assigned to the new unit.', [
		'has',
		'have',
		'is',
		'was'
	]),
	soal(36, 'The letter should have ________ yesterday.', ['sent', 'been sent', 'send', 'sending']),
	soal(37, 'It was ________ a difficult decision that he needed more time.', [
		'so',
		'very',
		'such',
		'too'
	]),
	soal(38, 'Neither of the answers ________ correct.', ['are', 'is', 'were', 'have been']),
	soal(39, 'The crew members, most of ________ were experienced, handled it well.', [
		'them',
		'who',
		'whom',
		'which'
	]),
	soal(40, 'He works ________ hard as any other officer in the unit.', ['so', 'as', 'too', 'more'])
];

export const tipsMengerjakan: string[] = [
	'Baca soal dan seluruh pilihan jawaban dengan teliti',
	'Perhatikan struktur kalimat dan tata bahasa yang digunakan',
	'Cermati tenses, subject-verb agreement, dan kata penghubung',
	'Kerjakan soal yang mudah terlebih dahulu',
	'Periksa kembali jawaban sebelum melanjutkan'
];

export const petunjukSingkatQuiz: string[] = [
	'Setiap soal hanya memiliki satu jawaban yang paling tepat',
	'Pastikan koneksi internet stabil',
	'Klik “Selanjutnya” untuk menyimpan jawaban dan pindah ke soal berikutnya',
	'Anda dapat menandai soal dengan klik “Tandai Soal” untuk ditinjau kembali nanti',
	'Waktu bagian ini terpisah dari bagian sebelumnya'
];

export const sectionInfo =
	'Pada bagian ini, Anda akan melengkapi kalimat dan mengidentifikasi struktur kalimat yang tepat sesuai kaidah tata bahasa Inggris.';

export const quizTimerNotice =
	'Waktu bagian ini berjalan otomatis dan tidak dapat dijeda. Pastikan Anda menyelesaikan seluruh soal sebelum waktu habis.';

/** Typo desain "Comprehesion" diperbaiki. */
export const nextSectionLabel = 'Selesai Bagian ini & Lanjut ke Reading Comprehension';
