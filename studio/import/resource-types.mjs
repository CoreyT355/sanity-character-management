import { v4 as uuidv4 } from 'uuid';
import { client, nameToId } from './createClient.mjs';
import resourceTypesJson from '../data/resource-types.json' assert { type: 'json' };

const transformResourceType = (resourceType) => {
  const tagsArr = resourceType.tags.map((tag) => {
    const { name, description } = tag;
    return {
      _id: nameToId(name, 'keyValuePair'),
      _type: 'keyValuePair',
      key: name,
      value: description
    };
  });

  const { name, summary, description, uses, tags, examples } = resourceType;
  const resourceTypeObj = {
    _id: nameToId(name, 'resourceType'),
    _type: 'resourceType',
    name,
    summary,
    description,
    uses,
    tags: tagsArr.map((tag) => ({ _type: 'reference', _ref: tag._id, _key: uuidv4()})),
    examples
  };

  return [tagsArr, resourceTypeObj];
};

export const importResourceTypes = () => {
  resourceTypesJson.map((resourceType) => {
    const [tagsArr, resourceTypeObj] = transformResourceType(resourceType);
    
    const allTagsWritten = Promise.all(tagsArr.map((t) => client.createOrReplace(t)));
  
    allTagsWritten.then(() => {
      client.createOrReplace(resourceTypeObj).then((res) => {
        console.log(`Resource Type created: ${res._id}`);
      }).catch((err) => {
        console.error(`Error creating resource type: ${err}`);
      });
    });
  });
}
