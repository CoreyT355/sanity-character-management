import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession();

  if (!session) {
    throw redirect(303, '/auth/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select(`full_name, avatar_url`)
    .eq('id', session.user.id)
    .single();

  return { session, profile };
};

export const actions: Actions = {
  update: async ({ request, locals: { supabase, safeGetSession } }) => {
    const formData = await request.formData();
    const fullName = formData.get('fullName') as string;
    const avatarUrl = formData.get('avatarUrl') as string;

    const { session } = await safeGetSession();

    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      full_name: fullName,
      avatar_url: avatarUrl,
      updated_at: new Date()
    });

    if (error) {
      return fail(500, {
        fullName,
        avatarUrl
      });
    }

    return {
      fullName,
      avatarUrl
    };
  },
  signout: async ({ locals: { supabase, safeGetSession } }) => {
    console.log('SIGNING OUT');
    
    const { session } = await safeGetSession();
    if (session) {
      await supabase.auth.signOut();
      throw redirect(303, '/');
    }
  }
};
