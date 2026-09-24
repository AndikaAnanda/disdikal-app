import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';
import type { LayananId } from '$lib/pengajuan-data';

export const layananHref: Partial<Record<LayananId, ResolvedPathname>> = {
	gun: resolve('/pengajuan-layanan/gun-gelar'),
	updatedik: resolve('/pengajuan-layanan/update-data-dik')
};
