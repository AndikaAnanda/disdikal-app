// Aset ikon halaman Dokumen, diekspor dari Figma. Nama file mengikuti konvensi
// Iconify yang sudah dipakai folder aset lain (mis. `eva_file-text-fill`).

import iconCancel from '$lib/assets/dokumen-icon/material-symbols_cancel-rounded.svg';
import iconCheckCircle from '$lib/assets/dokumen-icon/ic_round-check-circle.svg';
import iconCheckFill from '$lib/assets/dokumen-icon/mingcute_check-fill.svg';
import iconClock from '$lib/assets/dokumen-icon/mdi_clock.svg';
import iconExam from '$lib/assets/dokumen-icon/healthicons_i-exam-multiple-choice.svg';
import iconEye from '$lib/assets/dokumen-icon/iconoir_eye-solid.svg';
import iconFileDownload from '$lib/assets/dokumen-icon/solar_file-download-bold.svg';
import iconFileText from '$lib/assets/dokumen-icon/eva_file-text-fill.svg';
import iconGlobeBook from '$lib/assets/dokumen-icon/material-symbols_globe-book-rounded.svg';
import iconMail from '$lib/assets/dokumen-icon/material-symbols_mail-rounded.svg';
import iconOpenFile from '$lib/assets/dokumen-icon/ix_open-file-filled.svg';
import iconPdf from '$lib/assets/dokumen-icon/material-icon-theme_pdf.svg';
import iconPhone from '$lib/assets/dokumen-icon/material-symbols_call-sharp.svg';
import iconPieChart from '$lib/assets/dokumen-icon/material-symbols_pie-chart.svg';
import iconPng from '$lib/assets/dokumen-icon/bxs_file-png.svg';
import iconQuestion from '$lib/assets/dokumen-icon/akar-icons_question-fill.svg';
import iconService from '$lib/assets/dokumen-icon/lsicon_service-filled.svg';
import iconShareTime from '$lib/assets/dokumen-icon/streamline-sharp_share-time-solid.svg';
import iconUpload from '$lib/assets/dokumen-icon/material-symbols_upload-rounded.svg';
import type { DocStatus, FileType, PanduanStepId } from '$lib/dokumen-data';

export {
	iconCheckCircle,
	iconClock,
	iconCancel,
	iconQuestion,
	iconPieChart,
	iconGlobeBook,
	iconFileText,
	iconService,
	iconExam,
	iconEye,
	iconUpload,
	iconMail,
	iconPhone,
	iconPdf,
	iconPng
};

export const fileTypeIcon: Record<FileType, string> = {
	pdf: iconPdf,
	png: iconPng
};

export const statusIcon: Record<DocStatus, string> = {
	selesai: iconCheckCircle,
	proses: iconClock,
	gagal: iconCancel,
	belum: iconQuestion
};

/** Warna ikon status; dipakai legend Statistik maupun kolom pertama tabel. */
export const statusIconColor: Record<DocStatus, string> = {
	selesai: 'text-[#52D452]',
	proses: 'text-[#FF9433]',
	gagal: 'text-[#F00000]',
	belum: 'text-[#C0C0C0]'
};

export const statusPill: Record<DocStatus, { label: string; class: string }> = {
	selesai: { label: 'Selesai', class: 'bg-[#EFFDEF] text-[#40A540]' },
	proses: { label: 'Sedang Proses', class: 'bg-[#FFF2E6] text-[#FF9433]' },
	gagal: { label: 'Upload Ulang', class: 'bg-[#FEE6E6] text-[#F55454]' },
	belum: { label: 'Belum Upload', class: 'bg-[#F4F4F4] text-[#A2A2A2]' }
};

export const stepIcon: Record<PanduanStepId, string> = {
	formulir: iconFileText,
	berkas: iconOpenFile,
	validasi: iconShareTime,
	verifikasi: iconCheckFill,
	unduh: iconFileDownload
};
