import { prismaMock } from './prisma-mock';
import { createSharedPlant } from '../app/lib/actions';


describe('Actions', () => {

  describe('createSharedPlant', () => {

    it ('asks prisma to create a shared plant', async () => {
      
    });

    it ('return success message if prisma successful', async () => {
      
    })

    it ('returns an error message if prisma fails', async () => {
      
    });

    it ('returns an error message if formdata is invalid', async () => {
      const sharedPlant = {};
      prismaMock.sharedPlant.create.mockResolvedValue({message: 'error'});
      await expect(createSharedPlant(sharedPlant)).resolves.toEqual({message: 'error'})
    });

  })
});

// task: set up mocked prisma client
// https://www.prisma.io/docs/orm/prisma-client/testing/unit-testing


