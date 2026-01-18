import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Standard client for production
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// Client with stega encoding for visual editing (click-to-edit)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: true,
    studioUrl: '/studio',
  },
})
