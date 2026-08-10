// Mock data soal Listening Comprehension. Tipe & konstanta bersama ada di
// quiz-shared.ts; sengaja bebas dari import Svelte/SvelteKit.

import { soal as baseSoal, type QuizQuestion } from './quiz-shared';

export const audioPrompt =
	'Dengarkan audio berikut ini dengan seksama, kemudian pilih jawaban yang paling tepat';

export const sectionTitle = 'Listening Comprehension';

/** Durasi audio dekoratif dan sama untuk semua soal. */
function soal(
	id: number,
	question: string,
	options: [string, string, string, string]
): QuizQuestion {
	return baseSoal(id, question, options, '01:20');
}

/** Soal 1 dan 40 memakai teks persis dari kedua frame Figma. */
export const listeningQuestions: QuizQuestion[] = [
	soal(1, 'Where are the speakers probably?', [
		'In a restaurant',
		'In a library',
		'In a train station',
		'In a hotel lobby'
	]),
	soal(2, 'What time does the man plan to leave?', [
		'At seven in the morning',
		'At nine in the morning',
		'At noon',
		'In the late afternoon'
	]),
	soal(3, 'Why is the woman calling?', [
		'To cancel an appointment',
		'To ask for directions',
		'To reschedule a meeting',
		'To complain about a service'
	]),
	soal(4, 'What does the man suggest the woman do?', [
		'Take a later flight',
		'Contact the front desk',
		'Bring an extra document',
		'Wait until tomorrow'
	]),
	soal(5, 'What problem does the speaker mention?', [
		'The equipment is broken',
		'The room is too small',
		'The schedule has changed',
		'The budget is limited'
	]),
	soal(6, 'What will the listeners most likely do next?', [
		'Watch a short video',
		'Fill out a form',
		'Move to another room',
		'Take a coffee break'
	]),
	soal(7, "What is the speaker's attitude toward the new policy?", [
		'He strongly disagrees with it',
		'He is cautiously supportive',
		'He is completely indifferent',
		'He finds it confusing'
	]),
	soal(8, 'What are the speakers mainly discussing?', [
		'A training schedule',
		'A travel itinerary',
		'A budget report',
		'A staff evaluation'
	]),
	soal(9, 'How will the man get to the conference?', [
		'By taxi',
		'By train',
		'By company car',
		'On foot'
	]),
	soal(10, 'What does the woman imply about the report?', [
		'It needs more data',
		'It was submitted late',
		'It has already been approved',
		'It should be rewritten'
	]),
	soal(11, 'Where does this conversation most likely take place?', [
		'At a bank',
		'At a post office',
		'At a travel agency',
		'At a pharmacy'
	]),
	soal(12, 'What is the main purpose of the announcement?', [
		'To introduce a new manager',
		'To warn about a delay',
		'To promote a product',
		'To explain a safety rule'
	]),
	soal(13, 'How long has the woman worked at the company?', [
		'Less than a year',
		'About three years',
		'Almost ten years',
		'More than fifteen years'
	]),
	soal(14, 'What does the man ask the woman to bring?', [
		'A copy of the contract',
		'His identification card',
		'The meeting minutes',
		'A list of participants'
	]),
	soal(15, 'What is the weather expected to be like tomorrow?', [
		'Sunny and warm',
		'Cloudy with light rain',
		'Windy and cold',
		'Foggy in the morning'
	]),
	soal(16, 'Why is the man apologizing?', [
		'He forgot an appointment',
		'He sent the wrong file',
		'He arrived late',
		'He lost a document'
	]),
	soal(17, 'What does the speaker recommend?', [
		'Booking the tickets early',
		'Choosing a cheaper option',
		'Asking for a refund',
		'Postponing the trip'
	]),
	soal(18, 'What is the woman worried about?', [
		'Missing the deadline',
		'The rising cost',
		'The lack of staff',
		'The quality of the material'
	]),
	soal(19, 'According to the speaker, what has changed recently?', [
		'The office location',
		'The working hours',
		'The dress code',
		'The parking policy'
	]),
	soal(20, 'What kind of job is the man applying for?', [
		'An engineering position',
		'A teaching position',
		'A marketing position',
		'An accounting position'
	]),
	soal(21, 'What does the woman offer to do?', [
		'Drive the man home',
		'Review his presentation',
		'Call the supplier',
		'Prepare the documents'
	]),
	soal(22, 'How much does the service cost per month?', [
		'Fifteen dollars',
		'Thirty dollars',
		'Fifty dollars',
		'Seventy dollars'
	]),
	soal(23, 'What problem does the man have with his order?', [
		'It arrived damaged',
		'It was the wrong size',
		'It never arrived',
		'It cost more than expected'
	]),
	soal(24, 'What is the speaker mainly explaining?', [
		'How to register for a course',
		'How to operate a machine',
		'How to reach the campus',
		'How to apply for a scholarship'
	]),
	soal(25, 'What will happen at three o’clock?', [
		'A guest speaker will arrive',
		'The building will close',
		'A group photo will be taken',
		'The results will be announced'
	]),
	soal(26, 'Why does the woman decline the invitation?', [
		'She has another commitment',
		'She is not feeling well',
		'She lives too far away',
		'She dislikes large gatherings'
	]),
	soal(27, 'What does the man say about the training program?', [
		'It is too expensive',
		'It is very practical',
		'It is only for new staff',
		'It has been cancelled'
	]),
	soal(28, 'Where should the listeners go for more information?', [
		'To the front desk',
		'To the company website',
		'To the human resources office',
		'To the library'
	]),
	soal(29, 'What is the woman looking for?', [
		'A parking space',
		'A meeting room',
		'A phone charger',
		'A printed handout'
	]),
	soal(30, 'What does the speaker say about the deadline?', [
		'It has been extended',
		'It cannot be changed',
		'It was moved earlier',
		'It applies only to seniors'
	]),
	soal(31, 'How does the man feel about the results?', [
		'Disappointed',
		'Surprised and pleased',
		'Completely uninterested',
		'Worried about the future'
	]),
	soal(32, 'What is mentioned as an advantage of the new system?', [
		'It saves time',
		'It is cheaper to install',
		'It requires no training',
		'It works without electricity'
	]),
	soal(33, 'What does the woman suggest they do first?', [
		'Check the inventory',
		'Contact the client',
		'Prepare the budget',
		'Schedule a meeting'
	]),
	soal(34, 'What is the man’s occupation?', [
		'A journalist',
		'A photographer',
		'An architect',
		'A tour guide'
	]),
	soal(35, 'Why was the event postponed?', [
		'Because of bad weather',
		'Because of low attendance',
		'Because the venue was unavailable',
		'Because the speaker was ill'
	]),
	soal(36, 'What does the speaker warn the listeners about?', [
		'Heavy traffic in the area',
		'A temporary power outage',
		'A change in the exam format',
		'Limited seating capacity'
	]),
	soal(37, 'What did the woman do last weekend?', [
		'She attended a workshop',
		'She visited her family',
		'She finished a project',
		'She moved to a new house'
	]),
	soal(38, 'What is the main topic of the lecture?', [
		'Renewable energy sources',
		'Modern architecture',
		'Marine biology',
		'Ancient civilizations'
	]),
	soal(39, 'What does the man plan to do after graduation?', [
		'Look for a job abroad',
		'Continue his studies',
		'Start his own business',
		'Take a long vacation'
	]),
	soal(40, "What does the main idea of the speaker's talk?", [
		'The importance of keeping a healthy lifestyle',
		'The benefits of technology in education',
		'The process of starting a small business',
		'The causes of climate change'
	])
];

export const tipsMengerjakan: string[] = [
	'Baca instruksi dengan teliti sebelum audio diputar',
	'Dengarkan audio dengan fokus',
	'Catat poin penting saat mendengarkan',
	'Pilih jawaban terbaik berdasarkan informasi audio',
	'Pastikan koneksi internet stabil'
];

/** Typo desain "headsert" diperbaiki jadi "headset". */
export const petunjukSingkatQuiz: string[] = [
	'Audio hanya diputar satu kali',
	'Pastikan koneksi internet stabil',
	'Gunakan headset untuk kualitas audio terbaik',
	'Klik “Selanjutnya” untuk menyimpan jawaban dan pindah ke soal berikutnya',
	'Anda dapat menandai soal dengan klik “Tandai Soal” untuk ditinjau kembali nanti'
];

export const quizTimerNotice =
	'Setelah Anda menekan tombol “Mulai Tes”, waktu akan langsung berjalan dan tidak dapat dijeda.';

export const nextSectionLabel = 'Selesai Bagian ini & Lanjut ke Structure & Written Expression';
