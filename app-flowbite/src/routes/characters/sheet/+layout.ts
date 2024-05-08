import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { getPlayerCharacter } from '$lib/utils/sanity';


export const load = (async () => {
  const pc = await getPlayerCharacter('Whee of Florian');

  if (pc) {
    return {
      characterFromSanity: pc
    };
  }

  throw error(404, 'Not found');
}) satisfies LayoutLoad;
