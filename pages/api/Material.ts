// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Material } from '@/types/types';
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

type Data = {
  material: Material[];
}

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const material = await prisma.material.findMany();
  res.status(200).json({ material });
}
