// Aset ikon halaman Tutorial Persiapan Kamera. Ikon yang glyph-nya sama dengan
// halaman Tes Bahasa Inggris dipakai ulang dari sana, tidak diunduh lagi.

import iconArrowBack from '$lib/assets/tutorial-kamera-icon/material-symbols_arrow-back-ios-new-rounded.svg';
import iconCameraFilled from '$lib/assets/tutorial-kamera-icon/material-symbols_camera-video-rounded.svg';
import iconCloseOne from '$lib/assets/tutorial-kamera-icon/icon-park-solid_close-one.svg';
import iconFaceId from '$lib/assets/tutorial-kamera-icon/teenyicons_face-id-solid.svg';
import iconFullscreen from '$lib/assets/tutorial-kamera-icon/material-symbols-light_fullscreen-rounded.svg';
import iconTimer from '$lib/assets/tutorial-kamera-icon/material-symbols_timer-outline-rounded.svg';
import iconWifi from '$lib/assets/tutorial-kamera-icon/material-symbols-light_wifi.svg';
import type { KetentuanIconId } from '$lib/tutorial-kamera-data';

export { iconArrowBack, iconCameraFilled, iconCloseOne };

/**
 * `appWeb` sengaja tidak memakai aset Figma: `carbon:application-web` diekspor
 * sebagai dua layer terpisah sehingga tidak bisa jadi satu mask. Lucide
 * `app-window` glyph-nya sepadan, jadi dirender langsung di komponennya.
 */
export const ketentuanIcon: Partial<Record<KetentuanIconId, string>> = {
	faceId: iconFaceId,
	fullscreen: iconFullscreen,
	timer: iconTimer,
	wifi: iconWifi
};
