import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Edge, Language, PlayerCharacterV2, Skill } from '$lib/types/sanity.types';
import { getAttributes, getCharacterOptions, getPlayerCharacterById } from '$lib/server/sanity';

const bloodlines = await getCharacterOptions('bloodline');
const origins = await getCharacterOptions('origin');
const posts = await getCharacterOptions('post');

const edges: Edge[] = (await getAttributes('edge')) as Edge[];
const languages: Language[] = (await getAttributes('language')) as Language[];
const skills: Skill[] = (await getAttributes('skill')) as Skill[];

export const load = (async ({ params }) => {
  if (!params.id) {
    throw error(404, 'Not found');
  }

  let playerCharacter: Partial<PlayerCharacterV2>;

  if (params.create) {
    playerCharacter = {
      _id: params.id,
      _type: 'playerCharacterV2',
      name: '',
      player: '',
      userId: '',
      drives: [],
      post: {
        _type: 'reference',
        _ref: ''
      },
      bloodline: {
        _type: 'reference',
        _ref: ''
      },
      origin: {
        _type: 'reference',
        _ref: ''
      },
      edges: [],
      mires: [],
      salvage: [],
      specimens: [],
      whispers: [],
      charts: [],
      skills: [],
      languages: [],
      aspects: []
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
}) satisfies LayoutServerLoad;
