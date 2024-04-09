import { v4 as uuidv4 } from 'uuid';
import { client, nameToId } from './createClient.mjs';
import postsJson from '../data/posts.json' assert { type: 'json' };

const transformPost = (post) => {
  const loreArr = post.lore.map((lore) => ({
    _id: nameToId(lore.name, 'keyValuePair'),
    _type: 'keyValuePair',
    key: lore.name,
    value: lore.description
  }));

  const aspectsArr = post.aspects.map((aspect) => ({
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
  } = post;

  const postInfo = {
    _id: nameToId(post.name, 'post'),
    _type: 'post',
    // type: 'post',
    ...post,
    description: post.description.map((desc) => ({
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

  return [loreArr, aspectsArr, postInfo];
}

export const importPosts = () => {
  postsJson.map((post) => {
    const [lore, aspects, postsResults] = transformPost(post);
  
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
      client.createOrReplace(postsResults)
        .then((res) => {
          console.log(`Post created: ${res._id}`);
        })
        .catch((err) => {
          console.error(`Error creating post: ${err}`);
        });
    });
  });
}
