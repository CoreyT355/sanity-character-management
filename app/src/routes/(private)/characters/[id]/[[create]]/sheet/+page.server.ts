import { currentCharacter } from '$lib/store/characters';
import { redirect, type Actions } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const actions: Actions = {
  test: async () => {

  },
  save: async ({ params, request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    const formData = await request.formData();

    console.log('FORMDATA', formData);

    // console.log('REQUEST', get(currentCharacter));

    const { data, error } = await supabase
      .from('player_character')
      .upsert(get(currentCharacter))
      .select();

    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  }
};
