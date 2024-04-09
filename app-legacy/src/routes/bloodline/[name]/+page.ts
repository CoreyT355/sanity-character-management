import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getBloodline } from '$lib/utils/sanity';

export const ssr = false;

export const load = (async ({ params }) => {
	const bloodline = await getBloodline(params.name);
	console.log('bloodline', bloodline);
	
	if (bloodline) return bloodline;

	throw error(404, 'Not found');
}) satisfies PageLoad;
