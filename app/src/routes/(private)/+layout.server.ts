import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = (async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();

  if (!session) redirect(303, '/auth/login');

  return {};
});
