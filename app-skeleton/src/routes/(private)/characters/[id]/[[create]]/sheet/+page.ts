import { characterSheetSchema } from "$lib/schema/character.schema";
import { writable } from "svelte/store";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async ({ parent, data }) => {
  const form = await superValidate((await parent()).character, zod(characterSheetSchema));

  console.log('LOADED CHAR', form.data);
  

  return {
    form
  };
};