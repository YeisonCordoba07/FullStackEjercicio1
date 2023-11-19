// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from '@/service/prisma';
import { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  user: User[];
}


export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await prisma.user.findMany();
  res.status(200).json({ user });
}
