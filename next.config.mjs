import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // Activa turbopack y silencia el warning
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
