import { defineField, defineType } from "sanity";

export default defineType({
  name: "keyValuePair",
  title: "Key Value Pair",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Key",
      type: "string",
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
    }),
  ],
});
