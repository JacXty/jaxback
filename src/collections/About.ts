import { isAdmin, isAdminOrSelf } from '@/access'
import { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'about',
  labels: {
    singular: 'About',
    plural: 'About',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages' as const,
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
  ],
  timestamps: true,
}
