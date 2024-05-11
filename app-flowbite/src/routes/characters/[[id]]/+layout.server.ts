import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { PlayerCharacter } from '$lib/types/sanity.types';
import { getPlayerCharacterById } from '$lib/server/sanity';

export const load = (async ({ params, url }) => {
  if (!params.id) {
    throw error(404, 'Not found');
  }

  let playerCharacter;

  if (url.searchParams.get('new')) {
    playerCharacter = <PlayerCharacter>{
      _type: 'playerCharacterV2',
      _id: params.id,
      languages: [],
      edges: [],
      name: '',
      post: {
        name: '',
        _id: ''
      },
      mires: [''],
      drives: [''],
      resources: [],
      player: '',
      bloodline: {
        name: '',
        _id: ''
      },
      aspects: [],
      skills: [],
      origin: {
        name: '',
        _id: ''
      }
    };
  } else {
    playerCharacter = await getPlayerCharacterById(params.id);
  }

  return {
    characterFromSanity: playerCharacter
  };

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;
