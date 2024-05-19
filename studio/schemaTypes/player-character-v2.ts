import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'playerCharacterV2',
  title: 'Player Character v2',
  type: 'document',
  groups: [
    {name: 'edges', title: 'Edges'},
    {name: 'skills', title: 'Skills'},
    {name: 'languages', title: 'Languages'},
  ],
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
      name: 'userId',
      title: 'User Id',
      hidden: true,
      type: 'string',
    }),
    defineField({
      name: 'bloodline',
      title: 'Bloodline',
      type: 'reference',
      to: [{type: 'bloodline'}],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'reference',
      to: [{type: 'origin'}],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'edges',
      title: 'Edges',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'edge'}]}],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'skill.name',
              subtitle: 'ranks',
            },
          },
          fields: [
            {
              name: 'skill',
              title: 'Skill',
              type: 'reference',
              to: [{type: 'skill'}],
              options: {
                disableNew: true,
              },
            },
            {
              name: 'ranks',
              title: 'Ranks',
              type: 'number',
              validation: (rule) => rule.max(3),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'language.name',
              subtitle: 'ranks',
            },
          },
          fields: [
            {
              name: 'language',
              title: 'Language',
              type: 'reference',
              to: [{type: 'language'}],
              options: {
                disableNew: true,
              },
            },
            {
              name: 'ranks',
              title: 'Ranks',
              type: 'number',
              validation: (rule) => rule.max(3),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'salvage',
      title: 'Salvage',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'text',
            },
          },
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'specimens',
      title: 'Specimens',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'text',
            },
          },
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'whispers',
      title: 'Whispers',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'text',
            },
          },
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'charts',
      title: 'Charts',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'text',
            },
          },
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
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
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'text',
            },
          },
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'currentTrack',
              title: 'Current Track',
              type: 'array',
              of: [{type: 'number'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'aspects',
      title: 'Aspects',
      type: 'array',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'name',
            },
          },
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Companion', value: 'companion'},
                  {title: 'Gear', value: 'gear'},
                  {title: 'Trait', value: 'trait'},
                ],
                layout: 'radio',
              },
            },
            {
              name: 'isComplex',
              title: 'Complex Track?',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'trackLength',
              title: 'Track Length',
              type: 'number',
            },
            {
              name: 'currentTrack',
              title: 'Current Track',
              type: 'array',
              of: [{type: 'number'}],
            },
          ],
        },
      ],
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
