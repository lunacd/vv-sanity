export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Profile Picture (PNG 256x256)',
      type: 'image',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'picture',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'seasonDesc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'name', direction: 'asc'},
      ],
    },
  ],
}
