import { PrismaClient, InventoryMovement } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

type Data = {
  movimiento: InventoryMovement[];
}

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const movimiento = await prisma.inventoryMovement.findMany();
  res.status(200).json({ movimiento });
}
