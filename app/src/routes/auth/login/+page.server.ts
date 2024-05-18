import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, '/');
  }

  return { url: url.origin };
};

export const actions: Actions = {
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    const { data, error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      console.error(error);
      return redirect(303, '/auth/error');
    } else {
      console.log('DATA', data);
      
      return redirect(303, `/auth/callback`);
    }
  }
};
