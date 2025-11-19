import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminOrSelf } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',

  auth: {
    tokenExpiration: 7200,
    verify: false,
    useAPIKey: true,
  },

  admin: {
    useAsTitle: 'email',
  },

  access: {
    admin: isAdmin, // Solo admin entra al panel
    read: isAdminOrSelf, // Admin lee todo, user solo su documento
    update: isAdminOrSelf, // Igual
    delete: isAdmin, // Solo admin puede borrar
    create: isAdmin, // Solo admin puede crear usuarios
  },

  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      defaultValue: 'user',
    },
  ],
}
