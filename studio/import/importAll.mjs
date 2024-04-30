import { importBloodlines } from "./bloodlines.mjs";
import { importEdges } from "./edges.mjs";
import { importLanguages } from "./languages.mjs";
import { importOrigins } from "./origins.mjs";
import { importPosts } from "./posts.mjs";
import { importResourceTypes } from "./resource-types.mjs";
import { importSkills } from "./skills.mjs";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const allFuncs = [
  importEdges(),
  importLanguages(),
  importResourceTypes(),
  importSkills(),
  importBloodlines(),
  importOrigins(),
  importPosts()
];

allFuncs.map((func) => {
  sleep(2000).then(() => {
    func;
  });
});
