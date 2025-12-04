// src/lib/sanity-client.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  // ✨ Your Project ID has been added here
  projectId: 'fvb58kni', 
  dataset: 'production',
  apiVersion: '2024-01-01', // Use a recent date
  useCdn: true, // `false` if you want to ensure fresh data
});