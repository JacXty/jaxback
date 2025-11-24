import type { Access, PayloadRequest } from 'payload'

// Usuario logueado
export const isLoggedIn: Access = ({ req }: { req: PayloadRequest }) => {
  return !!req.user
}

// Solo admin
export const isAdmin = ({ req }: { req: PayloadRequest }): boolean => {
  return req.user?.role === 'admin'
}

// Admin o el mismo usuario
export const isAdminOrSelf: Access = ({ req }: { req: PayloadRequest }) => {
  if (!req.user) return false

  if (req.user.role === 'admin') return true

  return {
    id: {
      equals: req.user.id,
    },
  }
}
