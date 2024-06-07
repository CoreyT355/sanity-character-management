import { error } from '@sveltejs/kit';
import { supabase } from '$lib/utils/supabase.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  if (!request) {
    error(400, 'missing data');
  }

  const { character } = await request.json();

  character.updated_at = new Date().toISOString();

  console.log('JSON', character);

  const { data, error: upsertError } = await supabase
    .from('player_character')
    .update(character)
    .eq('id', character.id)
    .select()
    .single();

  if (!upsertError) {
    console.log('SAVE SUCCESS', data);

    return new Response('success', { status: 200, statusText: 'save success' });
  } else {
    console.log('UPDATE ERROR', upsertError);

    return new Response('success', { status: 500, statusText: upsertError.message });
  }
}
