import { characterSheetSchema } from '$lib/schema/character.schema';
import { redirect, type Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from '../../../$types';
import { v4 as uuidv4 } from 'uuid';
import { resourceSchema } from '$lib/schema/resource.schema';

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

    // if (!form.valid) {
    //   return fail(400, { form });
    // }

    form.data.user_id = session.user.id;
    form.data.updated_at = new Date().toISOString();

    const { player_character_resources, ...newCharacter } = form.data;

    const { data, error } = await supabase
      .from('player_character')
      .insert(newCharacter)
      .select('id')
      .single();
      
      if (error) {
        console.log('TACOCAT ERROR', error);
      }
      
    form.data.id = data.id;
    
    const { data: resourceData, error: resourceError } = await supabase
      .from('player_character_resources')
      .insert(player_character_resources.map((resource) => ({
        ...resource,
        player_character_id: data.id
      })))
      .select()
      .single();

    if (resourceError) {
      console.log('Add resources Error', resourceError);
    }

    console.log('FORM', form);
    

    if (error) {
      return message(form, error);
    } else {
      return { form };
    }
  }
};
