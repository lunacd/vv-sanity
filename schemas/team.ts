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
      title: 'Profile Picture',
      type: 'image',
      description: 'PNG 256x256',
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
