import { characterSheetSchema } from '$lib/schema/character.schema';
import { currentCharacter } from '$lib/store/characters';
import { redirect, type Actions } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from '../../../$types';
import { request } from 'http';
import { supabase } from '$lib/utils/supabase';
import { v4 as uuidv4 } from 'uuid';

export const load = (async () => {
  const form = await superValidate(zod(characterSheetSchema));

  return {
    form
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  save: async ({ request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    const form = await superValidate(request, zod(characterSheetSchema));
    
    console.log('TO BE SAVED', form);

    form.data.id = uuidv4();
    form.data.user_id = session.user.id;
    form.data.updated_at = new Date().toISOString();


    // const { data, error } = await supabase
    //   .from('player_character')
    //   .insert(form.data)
    //   .select()
    //   .single();

    // if (error) {
    //   throw new Error(error.message);
    // } else {
    //   return { form };
    // }
  }
};
