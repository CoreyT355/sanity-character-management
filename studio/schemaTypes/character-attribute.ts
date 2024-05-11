import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'characterAttribute',
  title: 'Character Attribute',
  icon: () => '🔑',
  type: 'document',
  fields: [
    defineField({
      name: 'attribute',
      title: 'Attribute',
      type: 'reference',
      to: [{type: 'skill'}, {type: 'language'}],
    }),
    defineField({
      name: 'ranks',
      title: 'Ranks',
      type: 'number',
    }),
  ],
})
