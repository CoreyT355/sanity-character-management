import { v4 as uuidv4 } from 'uuid';
import { client, nameToId } from './createClient.mjs';
import bloodlinesJson from '../data/bloodlines.json' assert { type: 'json' };

const transformBloodline = (bloodline) => {
  const loreArr = bloodline.lore.map((lore) => ({
    _id: nameToId(lore.name, 'keyValuePair'),
    _type: 'keyValuePair',
    key: lore.name,
    value: lore.description
  }));

  const aspectsArr = bloodline.aspects.map((aspect) => ({
    _id: nameToId(aspect.name, 'aspect'),
    _type: 'aspect',
    name: aspect.name,
    type: aspect.trackType.toLowerCase(),
    count: aspect.trackCount,
    description: aspect.description
  }));

  let {
    lore,
    aspects,
    questions,
    ...base
  } = bloodline;

  // console.log('LOGGING', bloodline.name);
  // console.log('ASPECTS', aspectsArr);
  // console.log('LORE', loreArr);
  // console.log('QUESTIONS', questions);
  // console.log('BASE BLOODLINE', base);

  const bloodlineInfo = {
    _id: nameToId(bloodline.name, 'bloodline'),
    _type: 'bloodline',
    // type: 'bloodline',
    ...bloodline,
    description: bloodline.description.map((desc) => ({
      _type: 'block',
      _key: uuidv4(),
      style: 'normal',
      markDefs: [],
      children: [{
        _key: uuidv4(),
        _type: 'span',
        text: desc
      }]
    })),
    lore: loreArr.map((lore) => ({ _type: 'reference', _ref: lore._id, _key: uuidv4() })),
    aspects: aspectsArr.map((aspect) => ({ _type: 'reference', _ref: aspect._id, _key: uuidv4() })),
  };

  return [loreArr, aspectsArr, bloodlineInfo];
}

export const importBloodlines = () => {
  bloodlinesJson.map((bloodline) => {
    const [lore, aspects, bloodlinesResults] = transformBloodline(bloodline);
  
    const allLoreWritten = Promise.all(lore.map((l) => {
      client.createOrReplace(l).then((res) => {
        console.log('LORE CREATED', res._id);
      });
    }));
  
    const allAspectsWritten = allLoreWritten.then(() => {
      Promise.all(aspects.map((a) => {
        client.createOrReplace(a).then((res) => {
          console.log('ASPECT CREATED', res._id);
        });
      }));
    });
  
    allAspectsWritten.then(() => {
      client.createOrReplace(bloodlinesResults)
        .then((res) => {
          console.log(`Bloodline created: ${res._id}`);
        })
        .catch((err) => {
          console.error(`Error creating bloodline: ${err}`);
        });
    });
  });
};
