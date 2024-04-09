import { importBloodlines } from "./bloodlines.mjs";
import { importEdges } from "./edges.mjs";
import { importLanguages } from "./languages.mjs";
import { importOrigins } from "./origins.mjs";
import { importPosts } from "./posts.mjs";
import { importResources } from "./resources.mjs";
import { importSkills } from "./skills.mjs";

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const allFuncs = [
  importEdges(),
  importLanguages(),
  importResources(),
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
