import { client, nameToId } from './createClient.mjs';
import skillsJson from '../data/skills.json' assert { type: 'json' };

const skills = skillsJson.map((skill) => ({
  _id: nameToId(skill.name, 'skill'),
  _type: 'skill',
  displayName: skill.name,
  ...skill
}));

export const importSkills = () => {
  skills.map((e) => {
    client.createOrReplace(e)
      .then((res) => {
        console.log(`Skill created: ${res._id}`);
      })
      .catch((err) => {
        console.error(`Error creating skill: ${err}`);
      });
  });
}
