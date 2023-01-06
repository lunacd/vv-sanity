export default {
  name: 'debrief',
  title: 'Debriefs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'youtubeID',
      title: 'YouTube ID',
      type: 'string',
    },
    {
      name: 'season',
      title: 'Season',
      type: 'number',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'picture',
      season: 'season',
      order: 'order',
    },
    prepare({
      title,
      media,
      season,
      order,
    }: {
      title: string
      media: string
      season: number
      order: number
    }) {
      return {
        title: `S${season}E${order} | ${title}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Season, New',
      name: 'seasonDesc',
      by: [
        {field: 'season', direction: 'desc'},
        {field: 'order', direction: 'asc'},
      ],
    },
    {
      title: 'Season, Old',
      name: 'seasonAsc',
      by: [
        {field: 'season', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
}
