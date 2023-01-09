export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'numSeasons',
      title: 'Number of Seasons',
      type: 'number',
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'roadmapBlurbTitle',
      title: 'Roadmap Blurb Title',
      type: 'string',
    },
    {
      name: 'roadmapBlurbContent',
      title: 'Roadmap Blurb Content',
      type: 'text',
    },
    {
      name: 'voicesBlurbTitle',
      title: 'Student Voices Blurb Title',
      type: 'string',
    },
    {
      name: 'voicesBlurbContent',
      title: 'Student Voices Blurb Content',
      type: 'text',
    },
    {
      name: 'resourcesBlurbTitle',
      title: 'Resources Blurb Title',
      type: 'string',
    },
    {
      name: 'resourcesBlurbContent',
      title: 'Resources Blurb Content',
      type: 'text',
    },
    {
      name: 'contactBlurbTitle',
      title: 'Contact Us Blurb Title',
      type: 'string',
    },
    {
      name: 'contactBlurbContent',
      title: 'Contact Us Blurb Content',
      type: 'text',
    },
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Website Settings',
      }
    },
  },
}
