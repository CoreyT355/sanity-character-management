import { v4 as uuidv4 } from 'uuid';
import { client, nameToId } from './createClient.mjs';
import originsJson from '../data/origins.json' assert { type: 'json' };

const transformOrigin = (origin) => {

  const loreArr = origin.lore.map((lore) => ({
    _id: nameToId(lore.name, 'keyValuePair'),
    _type: 'keyValuePair',
    key: lore.name,
    value: lore.description
  }));

  const aspectsArr = origin.aspects.map((aspect) => ({
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
  } = origin;

  const originInfo = {
    _id: nameToId(origin.name, 'origin'),
    _type: 'origin',
    // type: 'origin',
    ...origin,
    description: origin.description.map((desc) => ({
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
    lore: loreArr.map((lore) => ({ _type: 'reference', _ref: lore._id, _key: uuidv4()})),
    aspects: aspectsArr.map((aspect) => ({ _type: 'reference', _ref: aspect._id, _key: uuidv4()})),
  };

  return [loreArr, aspectsArr, originInfo];
}

export const importOrigins = () => {
  originsJson.map((origin) => {
    const [lore, aspects, originsResults] = transformOrigin(origin);
  
    const allLoreWritten = Promise.all(lore.map((l) => {
      client.createOrReplace(l)
        .then((res) => {
          console.log(`Lore created: ${res._id}`);
        })
        .catch((err) => {
          console.error(`Error creating lore: ${err}`);
        })
    }));
  
    const allAspectsWritten = allLoreWritten.then(() => {
      Promise.all(aspects.map((a) => {
        client.createOrReplace(a)
          .then((res) => {
            console.log(`Aspect created: ${res._id}`);
          })
          .catch((err) => {
            console.error(`Error creating aspect: ${err}`);
          })
      }));
    });
  
    allAspectsWritten.then(() => {
      client.createOrReplace(originsResults)
        .then((res) => {
          console.log(`Origin created: ${res._id}`);
        })
        .catch((err) => {
          console.error(`Error creating origin: ${err}`);
        });
    });
  });
}
