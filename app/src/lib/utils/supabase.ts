import { env } from '$env/dynamic/public';
import type { Database } from '$lib/types/supabase-types';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient<Database>(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);
