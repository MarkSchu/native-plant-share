'use server'

import z from 'zod';
// import sql from '@vercel/postgres';

const CreateSharedPlant = z.object({
  commonName: z.string(),
  latinName: z.string(),
  description: z.string()
});

export async function createSharedPlant(formData: FormData) {

  const {commonName, latinName, description} = CreateSharedPlant.parse({
    commonName: formData.get('commonName'),
    latinName: formData.get('latinName'),
    description: formData.get('description')
  });

  // await sql `
  //   INSERT INTO sharedplants (commonName, latinName, description)
  //   VALUES (${commonName}, ${latinName}, ${description})
  // `
}