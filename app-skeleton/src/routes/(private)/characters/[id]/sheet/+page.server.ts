import { characterSheetSchema } from '$lib/schema/character.schema';
import { redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const actions: Actions = {
  save: async ({ params, request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    console.log('REQUEST', request);


    const form = await superValidate(request, zod(characterSheetSchema));

    form.data.user_id = session.user.id;
    form.data.updated_at = new Date().toISOString();

    console.log('TO BE SAVED', form.data);

    // const { data, error } = await supabase
    //   .from('player_character')
    //   .update(form.data)
    //   .eq('id', form.data.id)
    //   .select()
    //   .single();

    // if (error) {
    //   throw new Error(error.message);
    // } else {
    //   return { form };
    // }
  }
};
