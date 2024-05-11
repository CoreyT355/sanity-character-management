import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getCharacterOption } from '$lib/server/sanity';

export const load = (async ({ params }) => {
  const characterOption = await getCharacterOption(params.characterOption, params.name);

  if (characterOption) return characterOption;

  throw error(404, 'Not found');
}) satisfies PageServerLoad;
