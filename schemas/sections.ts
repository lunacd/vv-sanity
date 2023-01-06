export default {
  name: 'section',
  title: 'Sections',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'season',
      title: 'Season',
      type: 'number',
    },
    {
      name: 'icon',
      title: 'Icon (SVG 1:1)',
      type: 'image',
    },
    {
      name: 'startEpisode',
      title: 'Start Episode Index',
      type: 'number',
    },
    {
      name: 'endEpisode',
      title: 'End Episode Index',
      type: 'number',
    },
  ],
  preview: {
    select: {
      season: 'season',
      title: 'title',
      subtitle: 'subtitle',
      media: 'icon',
    },
    prepare({
      title,
      subtitle,
      season,
      media,
    }: {
      title: string
      subtitle: string
      season: number
      media: string
    }) {
      return {
        title: `S${season} | ${title}`,
        subtitle: subtitle,
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
        {field: 'startEpisode', direction: 'asc'},
      ],
    },
    {
      title: 'Season, Old',
      name: 'seasonAsc',
      by: [
        {field: 'season', direction: 'asc'},
        {field: 'startEpisode', direction: 'asc'},
      ],
    },
  ],
}
