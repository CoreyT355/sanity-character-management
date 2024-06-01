import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from '../../../$types';
import { redirect, type Actions } from '@sveltejs/kit';
import { aspectSchema } from '$lib/schema/aspect.schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ params, locals: { safeGetSession, supabase } }) => {
  const { session } = await safeGetSession();
  const form = await superValidate(zod(aspectSchema));

  if (!session) redirect(303, '/auth/login');

  const { data: aspects } = await supabase
    .from('aspects')
    .select('*')
    .eq('player_character_id', params.id);

  return {
    aspects,
    form
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  save: async ({ params, request, locals: { supabase, safeGetSession } }) => {
    
    const { session } = await safeGetSession();
    
    if (!session) redirect(303, '/auth/login');
    
    const form = await superValidate(request, zod(aspectSchema));
    
    console.log('GOT HERE', form.data);
    form.data.player_character_id = params.id;
    form.data.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('aspects')
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