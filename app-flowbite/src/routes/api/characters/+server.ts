import { error } from '@sveltejs/kit';
import { savePlayerCharacter } from  '$lib/server/sanity.ts';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  if (!request) {
    error(400, 'missing data');
  }

  const { character } = await request.json();

  const test = JSON.stringify(character.edges);

  console.log('HELP', test);
  

  return new Response({
    status: 200,
    message: 'did the thing'
  });
}
