import { CollectionConfig } from 'payload';

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  labels: {
    singular: 'Contact',
    plural: 'Contacts',
  },
  admin: {
    useAsTitle: 'about',
  },
  fields: [
    {
      name: 'about',
      type: 'relationship',
      relationTo: 'about' as const,
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      labels: {
        singular: 'Contact Item',
        plural: 'Contact Items',
      },
      fields: [
        {
          name: 'network',
          type: 'text',
          required: true,
          admin: {
            description: 'Example: WhatsApp, LinkedIn, GitHub, Email...',
          },
        },
        {
          name: 'profile',
          type: 'text',
          required: true,
          admin: {
            description: 'Username, email, phone number, etc.',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: false,
          admin: {
            description: 'Optional link like wa.me, linkedin.com, github.com, mailto:, etc.',
          },
        },
      ],
    },
  ],
  timestamps: true,
};
