import { error } from '@sveltejs/kit';
import { savePlayerCharacter } from '$lib/server/sanity.ts';
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

  character.languages = character.languages.map((language) => {
    return {
      ranks: language.ranks,
      _key: uuidv4(),
      language: {
        _ref: language._id
      }
    };
  });

  character.mires = character.mires.map((mire) => {
    return {
      ...mire,
      _key: uuidv4()
    };
  });

  character.resources = character.resources.map((resource) => {
    return {
      _key: uuidv4(),
      text: resource.text,
      type: {
        _ref: resource.typeId
      }
    };
  });

  // character.aspects = character.aspects.map((aspect) => {
  //   return {
  //     ...aspect,
  //     _key: uuidv4(),
  //     description: [
  //       {
  //         _type: 'block',
  //         _key: uuidv4(),
  //         markDefs: [],
  //         children: [
  //           {
  //             _key: uuidv4(),
  //             _type: 'span',
  //             text: aspect.description
  //           }
  //         ]
  //       }
  //     ]
  //   };
  // });

  console.log('TACOCAT CHRACTER', character);
  

  // const characterToSave = {
  //   _id: '7a952ded-3703-4a3c-bcd6-690942c13dbd',
  //   name: 'Test Format',
  //   player: 'Corey',
  //   _type: 'playerCharacterV2',
  //   bloodline: {
  //     _key: uuidv4(),
  //     _ref: 'import-bloodline-gau'
  //   },
  //   origin: {
  //     _key: uuidv4(),
  //     _ref: 'import-origin-rootless'
  //   },
  //   post: {
  //     _key: uuidv4(),
  //     _ref: 'import-post-char'
  //   },
  //   edges: [
  //     { _ref: 'import-edge-grace', _key: uuidv4() },
  //     { _ref: 'import-edge-iron', _key: uuidv4() },
  //     { _ref: 'import-edge-teeth', _key: uuidv4() }
  //   ],
  //   languages: [
  //     { ranks: 3, _key: uuidv4(), language: { _ref: 'import-language-knock' }},
  //     { ranks: 3, _key: uuidv4(), language: { _ref: 'import-language-lowsour' }},
  //   ],
  //   mires: [
  //     { text: 'Your movements are staccato', currentTrack: [1,0], _key: uuidv4() }
  //   ],
  //   drives: ['Help others'],
  //   resources: [
  //     { text: 'Sailcloth', tags: [], _key: uuidv4(), type: { _ref: 'import-resourcetype-salvage' }}
  //   ],
  //   aspects: [
  //     {
  //       _key: uuidv4(),
  //       name: 'Blade of Husks',
  //       isComplex: false,
  //       trackLength: 3,
  //       type: 'gear',
  //       currentTrack: [1,0],
  //       description: [
  //         {
  //           _type: 'block',
  //           _key: uuidv4(),
  //           markDefs: [],
  //           children: [
  //             {
  //               _key: uuidv4(),
  //               _type: 'span',
  //               text: 'A ritual weapon made from the chitin of lost colony-members. Deals CQ Keen or Salt damage (Tzelicrae)'
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ],
  //   skills: [
  //     { ranks: 3, _key: uuidv4(), skill: { _ref: 'import-skill-vault' }},
  //     { ranks: 1, _key: uuidv4(), skill: { _ref: 'import-skill-cook' }},
  //   ]
  // }

  try {
    await savePlayerCharacter(character);
  } catch (saveError) {
    return new Response(JSON.stringify({
      status: 500,
      message: JSON.stringify(saveError)
    }));
  }

  return response;
}
