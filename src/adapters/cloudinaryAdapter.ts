import { v2 as cloudinary } from 'cloudinary'
import type { HandleUpload, HandleDelete } from '@payloadcms/plugin-cloud-storage/types'
import type { UploadApiResponse } from 'cloudinary'

// Configura Cloudinary con tus credenciales (si no lo hiciste ya en otro lugar)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const cloudinaryAdapter = () => ({
  name: 'cloudinary-adapter',

  async handleUpload({ file, collection }: Parameters<HandleUpload>[0]) {
    try {
      const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'auto',
            // 👇 Aquí defines la carpeta de destino
            public_id: `mavenbox/jacxty/${file.filename.replace(/\.[^/.]+$/, '')}`,
            overwrite: false,
            use_filename: true,
          },
          (error, result) => {
            if (error) return reject(error)
            if (!result) return reject(new Error('No result returned from Cloudinary'))
            resolve(result)
          },
        )

        uploadStream.end(file.buffer)
      })

      // Actualiza metadatos para Payload
      file.filename = uploadResult.public_id
      file.mimeType = uploadResult.format
      file.filesize = uploadResult.bytes
      // @ts-ignore
      file.url = uploadResult.secure_url
    } catch (err) {
      console.error('Cloudinary Upload Error:', err)
      throw err
    }
  },

  async handleDelete({ filename }: Parameters<HandleDelete>[0]) {
    try {
      // 👇 También elimina desde la carpeta mavenbox/jacxty
      await cloudinary.uploader.destroy(`mavenbox/jacxty/${filename.replace(/\.[^/.]+$/, '')}`)
    } catch (error) {
      console.error('Cloudinary Delete Error:', error)
    }
  },

  staticHandler() {
    return new Response('Not implemented', { status: 501 })
  },
})
