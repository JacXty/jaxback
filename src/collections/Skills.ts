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
      relationTo: 'media',
      required: false,
    },
    {
      name: 'url',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'https://...',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Frontend', value: 'front' },
        { label: 'Backend', value: 'back' },
        { label: 'QA', value: 'qa' },
        { label: 'DevOps', value: 'devops' },
        { label: 'Design', value: 'design' },
      ],
      admin: {
        isClearable: false,
      },
    },
  ],
  timestamps: true,
}
