import type { CollectionConfig } from 'payload'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media', // si tienes colección media para imágenes
    },
    {
      name: 'contacts',
      type: 'array',
      label: 'Contacts',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'relation', type: 'text', label: 'Relation' },
      ],
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Short Bio',
    },
  ],
}
