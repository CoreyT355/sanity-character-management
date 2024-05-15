import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import json from '$lib/data/characters/character-save.json';
import { getPlayerCharacter } from '$lib/utils/sanity';


export const load = (async () => {
  const pc = await getPlayerCharacter('Whee of Florian');

  if (json) {
    return {
      characterFromSanity: pc,
      savedCharacter: json
    };
  }

  throw error(404, 'Not found');
}) satisfies LayoutLoad;
