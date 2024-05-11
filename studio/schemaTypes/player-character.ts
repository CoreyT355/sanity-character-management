import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'playerCharacter',
  title: 'Player Character',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'player',
      title: 'Player',
      type: 'string',
    }),
    defineField({
      name: 'bloodline',
      title: 'Bloodline',
      type: 'reference',
      to: [{type: 'bloodline'}],
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'reference',
      to: [{type: 'origin'}],
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
    }),
    defineField({
      name: 'edges',
      title: 'Edges',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'edge'}]}],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'characterAttribute'}]}],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'characterAttribute'}]}],
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'characterResource'}]}],
    }),
    defineField({
      name: 'drives',
      title: 'Drives',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'mires',
      title: 'Mires',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'aspects',
      title: 'Aspects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'characterAspect'}]}],
    }),
    defineField({
      name: 'majorMilestones',
      title: 'Major Milestones',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'minorMilestones',
      title: 'Minor Milestones',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'temporaryTracks',
      title: 'Temporary Tracks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'characterAspect'}]}],
    }),
  ],
})
