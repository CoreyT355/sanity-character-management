import { error } from '@sveltejs/kit';
import { savePlayerCharacter, saveSkillForCharacter } from '$lib/server/sanity.ts';
import { v4 as uuidv4 } from 'uuid';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let response = new Response({
    status: 200,
    message: 'did the thing'
  });

  if (!request) {
    error(400, 'missing data');
  }

  const { character } = await request.json();

  character.bloodline = {
    _ref: character.bloodline._id,
    _key: uuidv4()
  };

  character.origin = {
    _ref: character.origin._id,
    _key: uuidv4()
  };

  character.post = {
    _ref: character.post._id,
    _key: uuidv4()
  };

  character.edges = character.edges.map((edge) => {
    return {
      _key: uuidv4(),
      _ref: edge._id
    };
  });

  character.skills = character.skills.map((skill) => {
    return {
      ranks: skill.ranks,
      _key: uuidv4(),
      skill: {
        _ref: skill._id
      }
    };
  });

  // character.languages = character.languages.map((language) => {
  //   return {
  //     ranks: language.ranks,
  //     _key: uuidv4(),
  //     language: {
  //       _ref: language._id
  //     }
  //   };
  // });

  const characterToSave = {
    name: 'Test Format',
    player: 'Corey',
    _type: 'playerCharacterV2',
    bloodline: {
      _key: uuidv4(),
      _ref: 'import-bloodline-gau'
    },
    origin: {
      _key: uuidv4(),
      _ref: 'import-origin-rootless'
    },
    post: {
      _key: uuidv4(),
      _ref: 'import-post-char'
    },
    edges: [
      { _ref: 'import-edge-grace', _key: uuidv4() },
      { _ref: 'import-edge-iron', _key: uuidv4() },
      { _ref: 'import-edge-teeth', _key: uuidv4() }
    ],
    languages: [],
    mires: [''],
    drives: ['Help others'],
    resources: [],
    aspects: [],
    skills: []
  }

  try {
    await savePlayerCharacter(characterToSave);
  } catch (saveError) {
    return new Response(JSON.stringify({
      status: 500,
      message: saveError
    }));
  }

  return response;
}
