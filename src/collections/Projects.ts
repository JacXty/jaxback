import { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'about',
      type: 'relationship',
      relationTo: 'about' as const,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: false,
    },
    {
      name: 'techStack',
      type: 'array',
      labels: {
        singular: 'Technology',
        plural: 'Tech Stack',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'repoUrl',
      type: 'text',
      admin: {
        description: 'URL del repositorio (GitHub, GitLab, etc.)',
      },
    },
    {
      name: 'demoUrl',
      type: 'text',
      admin: {
        description: 'URL de la demo o sitio en producción',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Imagen destacada del proyecto',
      },
    },
    {
      name: 'background',
      type: 'text',
      required: false,
      admin: {
        description: 'Color o fondo de presentación (opcional)',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
  timestamps: true,
}
