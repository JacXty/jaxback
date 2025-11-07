import { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  labels: {
    singular: 'Skill',
    plural: 'Skills',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'about',
      type: 'relationship',
      relationTo: 'about' as const,
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // usa la colección Media de Payload
      required: false,
    },
  ],
  timestamps: true,
}
