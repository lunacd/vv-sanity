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
      title: 'Cover (PNG 600x857)',
      type: 'image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
}
