// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/service/prisma';
import supabase from '@/supabaseConfig';
import { Material } from '@/types/types';
import type { NextApiRequest, NextApiResponse } from 'next'


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
