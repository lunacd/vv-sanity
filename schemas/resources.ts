export default {
  name: 'resource',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      description: 'PNG 600x857',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
}
