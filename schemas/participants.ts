export default {
  name: 'participant',
  title: 'Participants',
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
      name: 'season',
      title: 'Season',
      type: 'number',
    },
  ],
  preview: {
    select: {
      name: 'name',
      media: 'picture',
      season: 'season',
    },
    prepare({name, media, season}: {name: string; media: string; season: number}) {
      return {
        title: `S${season} | ${name}`,
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
        {field: 'name', direction: 'asc'},
      ],
    },
    {
      title: 'Season, Old',
      name: 'seasonAsc',
      by: [
        {field: 'season', direction: 'asc'},
        {field: 'name', direction: 'asc'},
      ],
    },
  ],
}
