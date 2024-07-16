'use server';

import z from 'zod';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const CreateInvoice = z.object({
  commonName: z.string(),
  latinName: z.string(),
  description: z.string(),
});

export async function createSharedPlant(formData: FormData) {
   
  const { commonName, latinName, description } = CreateInvoice.parse({
    commonName: formData.get('commonName'),
    latinName: formData.get('latinName'),
    description: formData.get('description')
  });

  const sharedPlant = await prisma.sharedPlant.create({
    data: {
      commonName,
      latinName,
      description
    }
  });

  console.log(sharedPlant);
}

