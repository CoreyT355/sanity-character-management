import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  save: async ({ request, locals: { supabase, safeGetSession } }) => {
    const formData = await request.formData();

    console.log('FORMDATA', formData);

    const { session } = await safeGetSession();
    if (session) {
      // await supabase.auth.signOut();
      // throw redirect(303, '/');
    }
  }
};
