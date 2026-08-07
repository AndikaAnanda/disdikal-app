// Aset ikon halaman Tes Bahasa Inggris, diekspor dari Figma. Nama file mengikuti
// konvensi Iconify yang sudah dipakai folder aset lain.

import iconApproval from '$lib/assets/tes-bahasa-icon/material-symbols_approval-delegation-rounded.svg';
import iconArrowNext from '$lib/assets/tes-bahasa-icon/material-symbols_arrow-forward-ios-rounded.svg';
import iconCalendar from '$lib/assets/tes-bahasa-icon/material-symbols_date-range-outline.svg';
import iconCamera from '$lib/assets/tes-bahasa-icon/material-symbols_camera-video-outline.svg';
import iconCheckCircle from '$lib/assets/tes-bahasa-icon/ic_round-check-circle.svg';
import iconCheckOne from '$lib/assets/tes-bahasa-icon/icon-park-solid_check-one.svg';
import iconClock from '$lib/assets/tes-bahasa-icon/mdi_clock-outline.svg';
import iconDevopsTest from '$lib/assets/tes-bahasa-icon/carbon_ibm-devops-test.svg';
import iconExamMultiple from '$lib/assets/tes-bahasa-icon/healthicons_i-exam-multiple-choice.svg';
import iconExamQualification from '$lib/assets/tes-bahasa-icon/healthicons_i-exam-qualification.svg';
import iconFactCheck from '$lib/assets/tes-bahasa-icon/material-symbols_fact-check-outline-rounded.svg';
import iconFileList from '$lib/assets/tes-bahasa-icon/ri_file-list-line.svg';
import iconFilePen from '$lib/assets/tes-bahasa-icon/lucide_file-pen.svg';
import iconFormNew from '$lib/assets/tes-bahasa-icon/fluent_form-new-24-filled.svg';
import iconHeadset from '$lib/assets/tes-bahasa-icon/iconoir_headset.svg';
import iconInfo from '$lib/assets/tes-bahasa-icon/bi_info-lg.svg';
import iconMail from '$lib/assets/tes-bahasa-icon/ic_outline-email.svg';
import iconPhone from '$lib/assets/tes-bahasa-icon/boxicons_phone.svg';
import iconPlayCircle from '$lib/assets/tes-bahasa-icon/material-symbols_play-circle-rounded.svg';
import iconRead from '$lib/assets/tes-bahasa-icon/ant-design_read-outlined.svg';
import iconReader from '$lib/assets/tes-bahasa-icon/radix-icons_reader.svg';
import iconSend from '$lib/assets/tes-bahasa-icon/mynaui_send-solid.svg';
import iconSupport from '$lib/assets/tes-bahasa-icon/ix_support.svg';
import iconTablerClock from '$lib/assets/tes-bahasa-icon/tabler_clock.svg';
import iconTimeLine from '$lib/assets/tes-bahasa-icon/mingcute_time-line.svg';
// Header "Informasi Peserta"/"Status Pengajuan"/"Petunjuk Singkat" memakai glyph
// yang sama dengan halaman Dokumen, jadi asetnya dipakai ulang.
import iconGlobeBook from '$lib/assets/dokumen-icon/material-symbols_globe-book-rounded.svg';
import type { StepStatus } from '$lib/dashboard-data';
import type { PengajuanStepId, TestInfoId, TestSectionId } from '$lib/tes-bahasa-data';

export {
	iconGlobeBook,
	iconExamMultiple,
	iconCamera,
	iconSupport,
	iconInfo,
	iconCalendar,
	iconClock,
	iconPhone,
	iconMail,
	iconCheckCircle,
	iconCheckOne,
	iconArrowNext,
	iconTimeLine,
	iconPlayCircle,
	iconSend,
	iconHeadset
};

export const testInfoIcon: Record<TestInfoId, string> = {
	bagian: iconFilePen,
	soal: iconFileList,
	durasi: iconTablerClock,
	passing: iconFactCheck,
	percobaan: iconDevopsTest
};

/** Kotak ikon pastel di baris "Informasi Tes". */
export const testInfoAccent: Record<TestInfoId, string> = {
	bagian: 'bg-[#E6F2FE] text-[#007CF0]',
	soal: 'bg-[#F3EFFD] text-[#865EEB]',
	durasi: 'bg-[#EFFDEF] text-[#40A540]',
	passing: 'bg-[#FFF2E6] text-[#FF9433]',
	percobaan: 'bg-[#FEE6E6] text-[#DA0000]'
};

export const testSectionIcon: Record<TestSectionId, string> = {
	listening: iconHeadset,
	structure: iconRead,
	reading: iconReader
};

export const testSectionAccent: Record<TestSectionId, string> = {
	listening: 'bg-[#E6F2FE] text-[#007CF0]',
	structure: 'bg-[#EFFDEF] text-[#40A540]',
	reading: 'bg-[#FFF2E6] text-[#FF9433]'
};

export const pengajuanStepIcon: Record<PengajuanStepId, string> = {
	pengajuan: iconFormNew,
	verifikasi: iconApproval,
	tes: iconExamMultiple,
	hasil: iconExamQualification
};

/** Warna diambil dari `status`, bukan dari label teks badge. */
export const pengajuanStatusPill: Record<StepStatus, string> = {
	done: 'bg-[#EFFDEF] text-[#40A540]',
	current: 'bg-[#E6F2FE] text-[#0058AA]',
	pending: 'bg-[#EBEBEB] text-[#777777]'
};

export const pengajuanStepCircle: Record<StepStatus, string> = {
	done: 'border-transparent bg-[#40A540] text-white',
	current: 'border-transparent bg-[#01296E] text-white ring-2 ring-[#007CF0] ring-offset-2',
	pending: 'border-[#EBEBEB] bg-white text-[#C0C0C0]'
};

export const pengajuanStepTitle: Record<StepStatus, string> = {
	done: 'text-[#40A540]',
	current: 'text-[#0071DA]',
	pending: 'text-[#343434]'
};

/** Garis penghubung mengikuti status langkah di bawahnya. */
export const pengajuanStepLine: Record<StepStatus, string> = {
	done: 'bg-[#40A540]',
	current: 'bg-[#0058AA]',
	pending: 'bg-[#EBEBEB]'
};

export const pengajuanStepPanel: Record<StepStatus, string> = {
	done: 'bg-[#FCFFFC]',
	current: 'bg-[#F7F9FE]',
	pending: 'bg-white'
};
