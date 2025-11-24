// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { v2 as cloudinary } from 'cloudinary'

import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Page } from './collections/Page'
import { About } from './collections/About'
import { Skills } from './collections/Skills'
import { Education } from './collections/Education'
import { Experience } from './collections/Experience'
import { Projects } from './collections/Projects'
import { cloudinaryAdapter } from './adapters/cloudinaryAdapter'
import { UserInfo } from './collections/UserInfo'
import { Contacts } from './collections/Contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const allowedOrigins = process.env.CORS_ORIGINS?.split(',') || [
  'http://localhost:5173',
  'http://localhost:3000',
]

export default buildConfig({
  cors: allowedOrigins,
  csrf: allowedOrigins,

  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoRefresh: true,
  },
  collections: [Users, Media, Page, About, Skills, Education, Experience, Projects, UserInfo, Contacts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: cloudinaryAdapter,
          disableLocalStorage: true, // evita guardar archivos localmente
          generateFileURL: ({ filename }) => cloudinary.url(`media/${filename}`, { secure: true }),
        },
      },
    }),
  ],
})
