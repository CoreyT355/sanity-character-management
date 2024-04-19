// import { fail } from '@sveltejs/kit';
// import { superValidate } from 'sveltekit-superforms';
// import { characterSchemaStep4 as lastStep } from '$lib/schema/create-character';
// import { zod } from 'sveltekit-superforms/adapters';
import { getCharacterOptionNames } from '$lib/utils/sanity';

export const load = async () => {

  const bloodlines = await getCharacterOptionNames('bloodline');
  const origins = await getCharacterOptionNames('origin');
  const posts = await getCharacterOptionNames('post');

  return {
    bloodlines,
    origins,
    posts,
    // form: await superValidate(zod(lastStep))
  };
};

// export const actions = {
//   default: async ({ request }) => {
//     const form = await superValidate(request, zod(lastStep));
//     if (!form.valid) {
//       return fail(400, {
//         form
//       });
//     }
//     return {
//       form
//     };
//   }
// };
