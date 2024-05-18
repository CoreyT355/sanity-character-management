import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Edge, Language, PlayerCharacter, Skill } from '$lib/types/sanity.types';
import { getAttributes, getCharacterOptions, getPlayerCharacterById } from '$lib/server/sanity';

const bloodlines = await getCharacterOptions('bloodline');
const origins = await getCharacterOptions('origin');
const posts = await getCharacterOptions('post');

const edges: Edge[] = (await getAttributes('edge')) as Edge[];
const languages: Language[] = (await getAttributes('language')) as Language[];
const skills: Skill[] = (await getAttributes('skill')) as Skill[];

export const load = (async ({ params, url }) => {

  if (!params.id) {
    throw error(404, 'Not found');
  }

  let playerCharacter;

  if (url.searchParams.get('new')) {
    playerCharacter = {
      _id: params.id,
      player: null,
      _type: 'playerCharacterV2',
      drives: [],
      post: {
        name: null,
        _id: ''
      },
      bloodline: {
        name: null,
        _id: ''
      },
      edges: [],
      mires: null,
      resources: null,
      skills: [],
      name: null,
      languages: [],
      origin: {
        name: null,
        _id: ''
      },
      aspects: null
    };
  } else {
    playerCharacter = await getPlayerCharacterById(params.id);
  }

  return {
    bloodlines,
    edges,
    languages,
    origins,
    posts,
    skills,
    characterFromSanity: playerCharacter
  };

  throw error(404, 'Not found');
}) satisfies LayoutServerLoad;
