import { CollectionConfig } from 'payload';

export const UserInfo: CollectionConfig = {
  slug: 'user-info',
  labels: {
    singular: 'User Info',
    plural: 'User Info',
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
        singular: 'Info Item',
        plural: 'Info Items',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description:
              'Example: Full Name, Birth Date, Birth Place, Professional Title, Languages, Experience Years...',
          },
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            description:
              'Example: Jason Enmanuel Uyaguari Angamarca, 2000-06-22, Loja - Ecuador, 5 years, English/Spanish...',
          },
        },
      ],
    },
  ],
  timestamps: true,
};
