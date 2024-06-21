import { characterSheetSchema } from '$lib/schema/character.schema';
import { redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from '../../$types';
import { v4 as uuidv4 } from 'uuid';

export const load = (async ({ params, parent, locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  const form = await superValidate((await parent()).character, zod(characterSheetSchema));

  return {
    form
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  save: async ({ params, request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    const form = await superValidate(request, zod(characterSheetSchema));

    form.data.user_id = session.user.id;
    form.data.updated_at = new Date().toISOString();

    const { player_character_resources, ...characterToSave } = form.data;

    const { data, error } = await supabase
      .from('player_character')
      .update(characterToSave)
      .eq('id', form.data.id)
      .select()
      .single();

    const playerCharacterResources = player_character_resources.map((resource) => ({
      ...resource,
      id: resource.id ?? uuidv4(),
      player_character_id: data.id
    }));

    const { data: resourceData, error: resourceError } = await supabase
      .from('player_character_resources')
      .upsert(playerCharacterResources)
      .select();

    if (resourceError) {
      console.log('Add resources Error', resourceError);
    }

    if (error) {
      throw new Error(error.message);
    } else {
      return { form };
    }
  },
  saveResource: async ({ params, request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    const form = await superValidate(request, zod(characterSheetSchema));

    form.data.updated_at = new Date().toISOString();

    if (form.data.id) {
      const { data, error } = await supabase
        .from('player_character_resources')
        .update(form.data)
        .eq('id', form.data.id)
        .select()
        .single();
    } else {
      const { data, error } = await supabase
        .from('player_character_resources')
        .insert(form.data)
        .select()
        .single();
    }

    if (error) {
      throw new Error(error.message);
    } else {
      return { form };
    }
  }
};
