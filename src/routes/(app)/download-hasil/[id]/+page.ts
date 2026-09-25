import { error } from '@sveltejs/kit';
import { downloadDetail } from '$lib/download-hasil-data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (!(params.id in downloadDetail)) error(404, 'Data hasil tidak ditemukan');
	return { id: params.id };
};
