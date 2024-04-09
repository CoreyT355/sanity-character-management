import { client, nameToId } from './createClient.mjs';
import languagesJson from '../data/languages.json' assert { type: 'json' };

const languages = languagesJson.map((language) => ({
  _id: nameToId(language.name, 'language'),
  _type: 'language',
  ...language
}));

export const importLanguages = () => {
  languages.map((e) => {
    client.createOrReplace(e)
      .then((res) => {
        console.log(`Language created: ${res._id}`);
      })
      .catch((err) => {
        console.error(`Error creating language: ${err}`);
      });
  });
}
