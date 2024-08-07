import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

import prisma from './prisma-client-for-mock';

jest.mock('./prisma-client-for-mock', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>()
}));

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>