import { defineField, defineType } from "sanity";

export default defineType({
  name: "aspect",
  title: "Aspect",
  type: "document",
  icon: () => '🔮',
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: 'text'
    }),
    defineField({
      name: "count",
      title: "Count",
      type: "number",
      validation: rule => rule.required().min(1).max(10)
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Companion", value: "companion" },
          { title: "Gear", value: "gear" },
          { title: "Trait", value: "trait" },
        ]
      }
    }),
  ]
});
