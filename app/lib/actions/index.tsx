'use server';

import z from 'zod';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const CreateSharedPlant = z.object({
  commonName: z.string(),
  latinName: z.string(),
  description: z.string(),
  growthForm: z.string(),
  height: z.string(),
  sun: z.string(),
  soil: z.string(),
});

export async function createSharedPlant(prevState: any, formData: FormData): Promise<any> {
  try {

    const sharedPlant = CreateSharedPlant.parse({
      commonName: formData.get('commonName'),
      latinName: formData.get('latinName'),
      description: formData.get('description'),
      growthForm: formData.get('growthForm'),
      height: formData.get('height'),
      sun: formData.getAll('sun').join(','),
      soil: formData.getAll('soil').join(',')
    });
    
    await prisma.sharedPlant.create({
      data: sharedPlant
    });

  } catch(e: any) {
    return {
      message: 'error'
    }
  }

  return {message: 'success'};
}

// question: how do you catch errors and display messages to user? 

