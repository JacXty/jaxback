import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

export const Experience: CollectionConfig = {
  slug: 'experience',
  labels: {
    singular: 'Experience',
    plural: 'Experiences',
  },
  admin: {
    useAsTitle: 'company',
  },
  fields: [
    {
      name: 'about',
      type: 'relationship',
      relationTo: 'about' as const,
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        admin: {
          placeholder: 'Type your content here...',
        },
      }),
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],

  hooks: {
    afterRead: [
      async ({ doc }) => {
        if (doc?.description) {
          try {
            // convertLexicalToHTML espera { data: SerializedEditorState } según docs
            const html = convertLexicalToHTML({ data: doc.description })
            doc.descriptionHTML = html
          } catch (err) {
            // por si algo falla, no rompas la respuesta
            console.error('Error convirtiendo description a HTML:', err)
            doc.descriptionHTML = null
          }
        }
        return doc
      },
    ],
  },
  timestamps: true,
}
