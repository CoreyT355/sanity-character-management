import { client, nameToId } from './createClient.mjs';
import edgesJson from '../data/edges.json' assert { type: 'json' };

const edges = edgesJson.map((edge) => ({
  _id: nameToId(edge.name, 'edge'),
  _type: 'edge',
  ...edge
}));

export const importEdges = () => {
  edges.map((e) => {
    client.createOrReplace(e)
      .then((res) => {
        console.log(`Edge created: ${res._id}`);
      })
      .catch((err) => {
        console.error(`Error creating edge: ${err}`);
      });
  });
};
