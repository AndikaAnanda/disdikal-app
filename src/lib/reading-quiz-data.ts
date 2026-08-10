// Mock data soal Reading Comprehension. Tipe & konstanta bersama ada di
// quiz-shared.ts; sengaja bebas dari import Svelte/SvelteKit.

import { soal as baseSoal, type QuizQuestion, type ReadingPassage } from './quiz-shared';

export const sectionTitle = 'Reading Comprehension';

export const readingPrompt =
	'Bacalah teks berikut dengan saksama, kemudian jawablah pertanyaan berdasarkan isi teks tersebut';

/** Tiap bacaan dipakai oleh 5 soal berurutan, jadi teksnya ditulis sekali di sini. */
const marineConservation: ReadingPassage = {
	title: 'The Benefits of Marine Conservation',
	paragraphs: [
		"Marine conservation is the effort to protect oceans, seas, and the organisms that live in them. Our oceans cover more than 70 percent of the Earth's surface and provide many benefits for human life. They produce oxygen, regulate climate, support a large variety of marine life, and provide food and jobs for millions of people.",
		'However, human activities such as pollution, overfishing, and destructive tourism threaten marine ecosystems. Plastic waste, chemical pollutants, and oil spills can damage marine habitats and harm sea animals. Coral reefs, for example, are very sensitive to pollution and rising sea temperatures.',
		'To protect our oceans, we can take small but meaningful actions. Reducing plastic use, supporting sustainable seafood, and participating in beach clean-ups are some ways to contribute. Governments and organizations also play an important role by enforcing laws and creating marine protected areas.',
		'Everyone can help ensure that our oceans remain healthy for future generations.'
	]
};

const renewableEnergy: ReadingPassage = {
	title: 'The Rise of Renewable Energy',
	paragraphs: [
		'Renewable energy comes from sources that are naturally replenished, such as sunlight, wind, water, and geothermal heat. Unlike coal and oil, these sources will not run out within a human lifetime, and they release far fewer greenhouse gases when used to generate electricity.',
		'Solar and wind power have grown the fastest over the past two decades. The cost of solar panels has fallen dramatically, making them affordable for households and small businesses. Wind turbines, once limited to coastal areas, are now built far offshore where the wind blows more steadily.',
		'Despite this progress, renewable energy still faces obstacles. Sunlight and wind are intermittent, meaning they are not available at all times, so electricity must be stored in batteries or supported by other sources. Building new transmission lines is also expensive and often delayed by lengthy approval processes.',
		'Even so, most energy analysts agree that renewables will supply the majority of the world’s electricity before the middle of this century.'
	]
};

const urbanGrowth: ReadingPassage = {
	title: 'Cities and Urban Growth',
	paragraphs: [
		'For the first time in history, more than half of the world’s population lives in cities. This shift, known as urbanization, has been driven mainly by people moving from rural areas in search of employment, education, and better health services.',
		'Cities offer clear advantages. They concentrate workers and ideas, which makes businesses more productive and innovation more likely. Public services such as transport, water, and electricity are also cheaper to deliver when many people live close together.',
		'Rapid growth, however, can overwhelm a city. Housing becomes scarce and expensive, traffic congestion wastes hours of productive time, and air quality often deteriorates. When infrastructure cannot keep pace, informal settlements appear on the edges of the city with little access to clean water or sanitation.',
		'Careful planning is therefore essential. Cities that invest early in public transport and affordable housing tend to grow more smoothly than those that react only after problems appear.'
	]
};

const sleepHealth: ReadingPassage = {
	title: 'Why Sleep Matters',
	paragraphs: [
		'Sleep is not simply a period of rest. While we sleep, the body repairs tissue, strengthens the immune system, and releases hormones that regulate growth and appetite. The brain, meanwhile, consolidates what was learned during the day, moving important information into long-term memory.',
		'Most adults need between seven and nine hours of sleep each night. Yet surveys in many countries show that a third of adults regularly sleep less than six hours, often because of long working hours, shift schedules, or late-night use of electronic devices.',
		'The consequences of chronic sleep loss accumulate slowly. Attention and reaction time decline, making accidents more likely. Over the long term, insufficient sleep is linked to a higher risk of heart disease, diabetes, and depression.',
		'Researchers recommend keeping a consistent bedtime, limiting caffeine after midday, and dimming screens in the evening to help the body prepare for rest.'
	]
};

const aviationHistory: ReadingPassage = {
	title: 'A Brief History of Flight',
	paragraphs: [
		'Human beings dreamed of flying for centuries before it became possible. Early inventors studied birds and built wings they hoped would carry them into the air, but none of these attempts succeeded, largely because they misunderstood how lift is generated.',
		'The breakthrough came in 1903, when the Wright brothers flew a powered aircraft for twelve seconds in North Carolina. Their key contribution was not the engine but the control system, which allowed the pilot to steer the aircraft rather than merely stay aloft.',
		'Aviation then advanced quickly. Within fifty years, aircraft had crossed oceans, carried passengers on scheduled routes, and reached speeds faster than sound. The introduction of the jet engine in the 1950s cut travel times sharply and made long-distance flight affordable to ordinary travellers.',
		'Today the industry faces a new challenge: reducing the fuel consumption and emissions that come with moving millions of passengers every day.'
	]
};

const remoteWork: ReadingPassage = {
	title: 'The Shift to Remote Work',
	paragraphs: [
		'Working from home was once an occasional arrangement offered to a small number of employees. Within a few years it became routine for millions of office workers, accelerated by improvements in video conferencing and cloud-based tools.',
		'Employees frequently report that remote work saves commuting time and gives them more control over their schedules. Employers, in turn, can recruit from a wider area and reduce the amount of office space they rent.',
		'The arrangement is not without drawbacks. New employees learn more slowly without informal contact with colleagues, and creative work that depends on spontaneous discussion can suffer. Some workers also find it difficult to separate their working hours from their personal life.',
		'Many organizations have settled on a hybrid model, asking staff to come to the office for two or three days a week so that collaboration and flexibility can coexist.'
	]
};

const biodiversity: ReadingPassage = {
	title: 'Biodiversity and Why It Matters',
	paragraphs: [
		'Biodiversity refers to the variety of living things in a particular place, from microscopic organisms in the soil to the largest trees in a forest. A diverse ecosystem is generally more stable, because different species perform overlapping roles and can compensate when one of them declines.',
		'This variety supports human life in ways that are easy to overlook. Insects pollinate a large share of the crops we eat, forests filter the water we drink, and a considerable number of medicines were originally derived from wild plants and fungi.',
		'Species are now disappearing far faster than the natural rate, mainly because their habitats are being converted to farmland and settlements. Climate change adds further pressure by shifting the temperature and rainfall patterns that species depend on.',
		'Conservation efforts focus on protecting large connected areas rather than isolated reserves, since animals need room to move as conditions change.'
	]
};

const digitalLiteracy: ReadingPassage = {
	title: 'Reading in the Digital Age',
	paragraphs: [
		'Access to information has never been easier. A question that once required a trip to the library can now be answered in seconds. But the same networks that distribute reliable knowledge also spread rumour and misinformation just as efficiently.',
		'Digital literacy is the ability to find, evaluate, and use online information effectively. It involves more than operating a device: a digitally literate reader checks who produced a claim, when it was published, and whether other independent sources agree.',
		'Studies suggest that readers are often overconfident about these skills. In one experiment, most participants judged the credibility of a website by its visual design rather than by the evidence it presented or the expertise of its authors.',
		'For this reason, many schools now teach verification as a basic skill, alongside reading and arithmetic.'
	]
};

/** Helper lokal: soal Reading selalu terikat pada satu bacaan. */
function soal(
	id: number,
	passage: ReadingPassage,
	question: string,
	options: [string, string, string, string]
): QuizQuestion {
	return { ...baseSoal(id, question, options), passage };
}

/**
 * 8 bacaan x 5 soal. Soal 1 memakai bacaan dan pilihan persis dari frame Figma,
 * dengan dua typo desain diperbaiki ("plastic wasted", "improtance").
 */
export const readingQuestions: QuizQuestion[] = [
	soal(1, marineConservation, 'What is the main idea of the passage?', [
		'The types of marine animals in the ocean',
		'The problems caused by plastic waste',
		'The importance and ways of marine conservation',
		'The role of governments in protecting oceans'
	]),
	soal(
		2,
		marineConservation,
		'According to the passage, how much of the Earth’s surface is covered by oceans?',
		['Less than half', 'Exactly half', 'More than 70 percent', 'Almost 90 percent']
	),
	soal(3, marineConservation, 'The word “threaten” in paragraph 2 is closest in meaning to', [
		'endanger',
		'replace',
		'observe',
		'support'
	]),
	soal(4, marineConservation, 'Why does the author mention coral reefs?', [
		'To show that they are the largest marine habitat',
		'To give an example of a habitat that is easily damaged',
		'To argue that tourism should be banned entirely',
		'To explain how oxygen is produced in the ocean'
	]),
	soal(5, marineConservation, 'What can be inferred about protecting the oceans?', [
		'Only governments are able to make a difference',
		'Individual actions also contribute to the effort',
		'The damage that has occurred cannot be reduced',
		'Marine protected areas have proven ineffective'
	]),

	soal(6, renewableEnergy, 'What is the passage mainly about?', [
		'The history of coal and oil production',
		'The growth and remaining challenges of renewable energy',
		'The design of modern wind turbines',
		'The cost of building transmission lines'
	]),
	soal(7, renewableEnergy, 'According to the passage, why has solar power spread so quickly?', [
		'Governments made it compulsory',
		'Its cost has fallen dramatically',
		'It requires no maintenance',
		'It works equally well at night'
	]),
	soal(8, renewableEnergy, 'The word “intermittent” in paragraph 3 is closest in meaning to', [
		'not continuous',
		'extremely powerful',
		'widely available',
		'newly discovered'
	]),
	soal(9, renewableEnergy, 'Why are offshore wind turbines mentioned?', [
		'To show that wind power is limited to coastal areas',
		'To explain why turbines are difficult to repair',
		'To illustrate how wind technology has expanded',
		'To compare their cost with that of solar panels'
	]),
	soal(10, renewableEnergy, 'What does the author suggest about the future of renewables?', [
		'They will remain a minor source of electricity',
		'They are likely to supply most electricity in the coming decades',
		'They will completely replace batteries',
		'They will become more expensive over time'
	]),

	soal(11, urbanGrowth, 'What is the main topic of the passage?', [
		'The decline of rural employment',
		'The benefits and difficulties of urban growth',
		'The construction of public transport systems',
		'The history of the world’s largest cities'
	]),
	soal(12, urbanGrowth, 'According to the passage, what mainly drives urbanization?', [
		'Government relocation programmes',
		'The search for work, education, and health services',
		'A shortage of farmland in rural areas',
		'Lower housing prices in cities'
	]),
	soal(13, urbanGrowth, 'The word “deteriorates” in paragraph 3 is closest in meaning to', [
		'improves',
		'worsens',
		'stabilizes',
		'disappears'
	]),
	soal(14, urbanGrowth, 'Why does the author mention informal settlements?', [
		'To show a consequence of infrastructure failing to keep pace',
		'To argue that cities should limit their population',
		'To describe a successful planning strategy',
		'To compare cities in different countries'
	]),
	soal(15, urbanGrowth, 'What can be inferred from the last paragraph?', [
		'Planning after problems appear is equally effective',
		'Early investment reduces later difficulties',
		'Public transport is too costly for most cities',
		'Urban growth will soon stop by itself'
	]),

	soal(16, sleepHealth, 'What is the main purpose of the passage?', [
		'To compare sleep habits in different countries',
		'To explain why sleep is important and what happens without it',
		'To describe recent advances in sleep medicine',
		'To argue that most people sleep too much'
	]),
	soal(17, sleepHealth, 'According to the passage, what does the brain do during sleep?', [
		'It stops all activity completely',
		'It moves important information into long-term memory',
		'It releases hormones that control appetite',
		'It repairs damaged muscle tissue'
	]),
	soal(18, sleepHealth, 'The word “consolidates” in paragraph 1 is closest in meaning to', [
		'strengthens',
		'erases',
		'delays',
		'questions'
	]),
	soal(19, sleepHealth, 'Which of the following is NOT mentioned as a cause of sleep loss?', [
		'Long working hours',
		'Shift schedules',
		'Late-night use of devices',
		'Noise from neighbours'
	]),
	soal(20, sleepHealth, 'What does the phrase “accumulate slowly” suggest about sleep loss?', [
		'Its effects appear immediately',
		'Its effects build up over time',
		'It affects only older adults',
		'It can be reversed in a single night'
	]),

	soal(21, aviationHistory, 'What is the passage mainly about?', [
		'The design of modern jet engines',
		'The development of flight from early attempts to the present',
		'The life of the Wright brothers',
		'The economics of passenger airlines'
	]),
	soal(22, aviationHistory, 'According to the passage, why did early attempts at flight fail?', [
		'The materials were too heavy',
		'Inventors misunderstood how lift is generated',
		'Engines had not yet been invented',
		'Weather conditions were unsuitable'
	]),
	soal(
		23,
		aviationHistory,
		'What does the author consider the Wright brothers’ key contribution?',
		[
			'A more powerful engine',
			'A lighter wing material',
			'A workable control system',
			'A longer runway'
		]
	),
	soal(24, aviationHistory, 'The word “aloft” in paragraph 2 is closest in meaning to', [
		'in the air',
		'on course',
		'at rest',
		'under control'
	]),
	soal(25, aviationHistory, 'What is stated about the jet engine?', [
		'It made aircraft heavier and slower',
		'It reduced travel times and lowered costs for travellers',
		'It was invented before the first powered flight',
		'It is no longer used in modern aircraft'
	]),

	soal(26, remoteWork, 'What is the main idea of the passage?', [
		'Remote work has clear benefits but also real limitations',
		'Office work will disappear within a decade',
		'Video conferencing tools are difficult to use',
		'Employers should reduce the size of their offices'
	]),
	soal(27, remoteWork, 'According to the passage, what benefit do employers gain?', [
		'Employees work longer hours',
		'They can recruit from a wider area',
		'Training becomes unnecessary',
		'Communication becomes more spontaneous'
	]),
	soal(28, remoteWork, 'The word “spontaneous” in paragraph 3 is closest in meaning to', [
		'carefully planned',
		'occurring naturally and without planning',
		'strictly formal',
		'rarely useful'
	]),
	soal(29, remoteWork, 'Which group is described as being most affected by the lack of contact?', [
		'Senior managers',
		'New employees',
		'Part-time workers',
		'Technical support staff'
	]),
	soal(30, remoteWork, 'Why do many organizations use a hybrid model?', [
		'To reduce the number of employees',
		'To combine collaboration with flexibility',
		'To avoid using video conferencing',
		'To lower the salaries of remote staff'
	]),

	soal(31, biodiversity, 'What is the passage mainly about?', [
		'The value of biodiversity and the pressures it faces',
		'The classification of species in a forest',
		'The history of national parks',
		'The chemistry of modern medicines'
	]),
	soal(32, biodiversity, 'According to the passage, why is a diverse ecosystem more stable?', [
		'It contains fewer predators',
		'Different species perform overlapping roles',
		'It receives more rainfall',
		'It changes very little over time'
	]),
	soal(33, biodiversity, 'The word “derived” in paragraph 2 is closest in meaning to', [
		'obtained',
		'rejected',
		'imitated',
		'exported'
	]),
	soal(34, biodiversity, 'What is given as the main cause of species loss?', [
		'Hunting for sport',
		'Conversion of habitat to farmland and settlements',
		'Competition between native species',
		'The spread of new medicines'
	]),
	soal(35, biodiversity, 'Why do conservation efforts favour large connected areas?', [
		'They are cheaper to establish',
		'They allow animals to move as conditions change',
		'They attract more visitors',
		'They require fewer staff to manage'
	]),

	soal(36, digitalLiteracy, 'What is the main purpose of the passage?', [
		'To explain what digital literacy is and why it is needed',
		'To describe how search engines rank websites',
		'To compare printed books with online articles',
		'To criticize the design of modern websites'
	]),
	soal(37, digitalLiteracy, 'According to the passage, digital literacy involves', [
		'operating a device quickly',
		'checking the source, date, and independent confirmation of a claim',
		'reading as much information as possible',
		'avoiding the internet for research'
	]),
	soal(38, digitalLiteracy, 'The word “credibility” in paragraph 3 is closest in meaning to', [
		'popularity',
		'trustworthiness',
		'complexity',
		'availability'
	]),
	soal(39, digitalLiteracy, 'What did the experiment described in paragraph 3 reveal?', [
		'Readers checked sources more carefully than expected',
		'Readers judged websites mainly by their visual design',
		'Most websites contained accurate information',
		'Visual design has no effect on readers'
	]),
	soal(40, digitalLiteracy, 'What can be inferred about verification skills?', [
		'They are considered as fundamental as reading and arithmetic',
		'They can only be learned at university',
		'They are no longer necessary online',
		'They are useful only for journalists'
	])
];

export const tipsMengerjakan: string[] = [
	'Baca judul dan keseluruhan teks terlebih dahulu',
	'Pahami ide pokok pada setiap paragraf',
	'Perhatikan kata kunci yang berkaitan dengan pertanyaan',
	'Jangan terpaku pada kata yang tidak Anda pahami',
	'Periksa kembali jawaban sebelum menyelesaikan tes'
];

export const petunjukSingkatQuiz: string[] = [
	'Setiap soal hanya memiliki satu jawaban yang paling tepat',
	'Teks bacaan tetap dapat dibaca selama Anda mengerjakan soal',
	'Pastikan koneksi internet stabil',
	'Klik “Selanjutnya” untuk menyimpan jawaban dan pindah ke soal berikutnya',
	'Anda dapat menandai soal dengan klik “Tandai Soal” untuk ditinjau kembali nanti'
];

export const sectionInfo =
	'Pada bagian ini, Anda akan membaca sebuah teks singkat, kemudian menjawab pertanyaan berdasarkan isi teks tersebut.';

export const quizTimerNotice =
	'Waktu bagian ini berjalan otomatis dan tidak dapat dijeda. Pastikan Anda menyelesaikan seluruh soal sebelum waktu habis.';

/** Bagian terakhir: tidak ada bagian berikutnya untuk dituju. */
export const nextSectionLabel = 'Selesaikan Tes';

export const completionNote = 'Periksa kembali jawaban Anda sebelum menekan “Selesaikan Tes”';
