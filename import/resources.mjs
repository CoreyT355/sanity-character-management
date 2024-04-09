import { v4 as uuidv4 } from 'uuid';
import { client, nameToId } from './createClient.mjs';
import resourcesJson from '../data/resources.json' assert { type: 'json' };

const transformResource = (resource) => {
  const tagsArr = resource.tags.map((tag) => {
    const { name, description } = tag;
    return {
      _id: nameToId(name, 'keyValuePair'),
      _type: 'keyValuePair',
      key: name,
      value: description
    };
  });

  const { name, summary, description, uses, tags, examples } = resource;
  const resourceObj = {
    _id: nameToId(name, 'resource'),
    _type: 'resource',
    name,
    summary,
    description,
    uses,
    tags: tagsArr.map((tag) => ({ _type: 'reference', _ref: tag._id, _key: uuidv4()})),
    examples
  };

  return [tagsArr, resourceObj];
};

export const importResources = () => {
  resourcesJson.map((resource) => {
    const [tagsArr, resourceObj] = transformResource(resource);
    
    const allTagsWritten = Promise.all(tagsArr.map((t) => client.createOrReplace(t)));
  
    allTagsWritten.then(() => {
      client.createOrReplace(resourceObj).then((res) => {
        console.log(`Resource created: ${res._id}`);
      }).catch((err) => {
        console.error(`Error creating resource: ${err}`);
      });
    });
  });
}
