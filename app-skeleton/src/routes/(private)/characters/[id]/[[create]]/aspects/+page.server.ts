import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from '../../../$types';
import { redirect } from '@sveltejs/kit';
import { aspectSchema } from '$lib/schema/aspect.schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async ({ params, locals: { safeGetSession, supabase } }) => {
  const { session } = await safeGetSession();
  const form = await superValidate(zod(aspectSchema));

  if (!session) redirect(303, '/auth/account');

  const { data: aspects } = await supabase
    .from('aspects')
    .select('*')
    .eq('player_character_id', params.id);

  return {
    aspects,
    form
  };
}) satisfies PageServerLoad;
