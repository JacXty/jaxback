import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    // 1. Habilita el login tradicional (email/password), equivalente a 'auth: true'
    verify: false,
    // 2. Habilita la creación de API Keys en el Admin
    useAPIKey: true,
  },
  fields: [
    // Email y Password son añadidos automáticamente por la configuración 'auth'
  ],
}
