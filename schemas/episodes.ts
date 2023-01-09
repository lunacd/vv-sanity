export default {
  name: 'episode',
  title: 'Episides',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'season',
      title: 'Season',
      type: 'number',
    },
    {
      name: 'episode',
      title: 'Episode',
      type: 'number',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'PNG 1778x1000',
    },
    {
      name: 'youtubeID',
      title: 'YouTube ID',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      season: 'season',
      episode: 'episode',
    },
    prepare({title, episode, season}: {title: string; episode: number; season: number}) {
      return {
        title: `S${season}E${episode} | ${title}`,
      }
    },
  },
  orderings: [
    {
      title: 'Season, New',
      name: 'seasonDesc',
      by: [
        {field: 'season', direction: 'desc'},
        {field: 'episode', direction: 'asc'},
      ],
    },
    {
      title: 'Season, Old',
      name: 'seasonAsc',
      by: [
        {field: 'season', direction: 'asc'},
        {field: 'episode', direction: 'asc'},
      ],
    },
  ],
}
