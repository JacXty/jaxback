import { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'pages',
    access: {
      read: ({ req }) => {
        return !!req.user; 
      },
    },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea', // ideal para texto largo
    },
  ],
  timestamps: true, // agrega createdAt / updatedAt automáticamente
}
