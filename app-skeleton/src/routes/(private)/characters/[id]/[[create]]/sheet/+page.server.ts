import { characterSheetSchema } from '$lib/schema/character.schema';
import { currentCharacter } from '$lib/store/characters';
import { redirect, type Actions } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from '../../../$types';

export const load = (async () => {
  const form = await superValidate(get(currentCharacter), zod(characterSheetSchema));

  return {
    form
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  save: async ({ params, request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    const form = await superValidate(request, zod(characterSheetSchema));

    form.data.id = params.id;
    form.data.user_id = session.user.id;
    form.data.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('player_character')
      .upsert(form.data)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    } else {
      return { form };
    }
  }
};
