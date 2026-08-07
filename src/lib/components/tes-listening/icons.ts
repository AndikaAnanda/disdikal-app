// Aset ikon halaman pra-tes Listening. Ikon yang glyph-nya sudah ada di folder
// aset halaman Tes Bahasa Inggris / Tutorial Kamera dipakai ulang dari sana.

import iconFile from '$lib/assets/tes-listening-icon/akar-icons_file.svg';
import iconExamOutline from '$lib/assets/tes-listening-icon/healthicons_i-exam-multiple-choice-outline.svg';
import iconHeadphones from '$lib/assets/tes-listening-icon/material-symbols_headphones-outline-rounded.svg';
import iconInfoRounded from '$lib/assets/tes-listening-icon/material-symbols_info-rounded.svg';
import iconLock from '$lib/assets/tes-listening-icon/material-symbols_lock-outline.svg';
import iconDashboard from '$lib/assets/tes-listening-icon/radix-icons_dashboard.svg';
import persiapanFokus from '$lib/assets/tes-listening-icon/persiapan-fokus.png';
import persiapanHeadset from '$lib/assets/tes-listening-icon/persiapan-headset.png';
import persiapanKamera from '$lib/assets/tes-listening-icon/persiapan-kamera.png';
import persiapanLingkungan from '$lib/assets/tes-listening-icon/persiapan-lingkungan.png';
import persiapanPosisi from '$lib/assets/tes-listening-icon/persiapan-posisi.png';
import persiapanTutupApp from '$lib/assets/tes-listening-icon/persiapan-tutup-app.png';
import type { InfoStripId, PersiapanId } from '$lib/tes-listening-data';
// Glyph identik dengan yang sudah dipakai halaman Tes Bahasa Inggris.
import { iconCheckOne, iconTimeLine } from '$lib/components/tes-bahasa/icons';

export { iconExamOutline, iconInfoRounded, iconLock, iconCheckOne, iconTimeLine };

export const infoStripIcon: Record<InfoStripId, string> = {
	audio: iconHeadphones,
	waktu: iconTimeLine,
	soal: iconFile,
	bagian: iconDashboard
};

export const persiapanAvatar: Record<PersiapanId, string> = {
	kamera: persiapanKamera,
	headset: persiapanHeadset,
	lingkungan: persiapanLingkungan,
	tutupApp: persiapanTutupApp,
	posisi: persiapanPosisi,
	fokus: persiapanFokus
};
