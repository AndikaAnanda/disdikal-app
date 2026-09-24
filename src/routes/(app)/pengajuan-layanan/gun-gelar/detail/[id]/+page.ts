import { error } from '@sveltejs/kit';
import { detailPengajuan } from '$lib/gun-gelar-data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (!(params.id in detailPengajuan)) error(404, 'Pengajuan tidak ditemukan');
	return { id: params.id };
};
