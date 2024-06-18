import { characterSheetSchema } from '$lib/schema/character.schema';
import { redirect, type Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from '../../../$types';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '$lib/utils/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';

const insertCharacterResource = async (characterResource, playerCharacterId: string) => {
  const resourceToInsert = {
    ...characterResource,
    player_character_id: playerCharacterId
  };

  const { data, error } = await supabase
      .from('player_character_resources')
      .insert(resourceToInsert)
      .select()
      .single();
  
      if (error) {
        console.log('TACOCAT RESOURCE ERROR', error);
      } else {
        console.log('TACOCAT RESOURCE ERROR', data);
      }
};

export const load = (async () => {
  const form = await superValidate(zod(characterSheetSchema));

  return {
    form
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  save: async ({ request, locals: { supabase, safeGetSession } }) => {
    const insertCharacterResource = async (characterResource, playerCharacterId: string) => {
      const resourceToInsert = {
        ...characterResource,
        player_character_id: playerCharacterId
      };
    
      const { data, error } = await supabase
          .from('player_character_resources')
          .insert(resourceToInsert)
          .select()
          .single();
      
          if (error) {
            console.log('TACOCAT RESOURCE ERROR', error);
          } else {
            console.log('TACOCAT RESOURCE ERROR', data);
          }
    };

    const { session } = await safeGetSession();

    if (!session) redirect(303, '/auth/login');

    const form = await superValidate(request, zod(characterSheetSchema));

    // if (!form.valid) {
    //   return fail(400, { form });
    // }

    const playerCharacterId = uuidv4();

    form.data.id = playerCharacterId;
    form.data.user_id = session.user.id;
    form.data.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('player_character')
      .insert(form.data)
      .select('id')
      .single();

    form.data.salvage.forEach(async (salvage) => {
      const resourceToInsert = {
        ...salvage,
        player_character_id: playerCharacterId
      };

      const { data, error } = await supabase
        .from('player_character_resources')
        .insert(resourceToInsert)
        .select()
        .single();
  
      if (error) {
        console.log('Add Salvage Error', error);
      }
    });

    form.data.specimens.forEach(async (specimen) => {
      const resourceToInsert = {
        ...specimen,
        player_character_id: playerCharacterId
      };

      const { data, error } = await supabase
          .from('player_character_resources')
          .insert(resourceToInsert)
          .select()
          .single();
  
      if (error) {
        console.log('Add Specimen Error', error);
      }
    });

    form.data.whispers.forEach(async (whisper) => {
      const resourceToInsert = {
        ...whisper,
        player_character_id: playerCharacterId
      };

      const { data, error } = await supabase
        .from('player_character_resources')
        .insert(resourceToInsert)
        .select()
        .single();
  
      if (error) {
        console.log('Add Whisper Error', error);
      }
    });

    form.data.charts.forEach(async (chart) => {
      const resourceToInsert = {
        ...chart,
        player_character_id: playerCharacterId
      };

      const { data, error } = await supabase
        .from('player_character_resources')
        .insert(resourceToInsert)
        .select()
        .single();
  
      if (error) {
        console.log('Add Chart Error', error);
      }
    });

    if (error) {
      return message(form, error);
    } else {
      return { form };
    }
  }
};
