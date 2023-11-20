import prisma from "@/service/prisma";
import { InventoryMovement } from "@/types/types";

//import { checkProtectedApi } from '@/utils/checkServerSession';

import { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  movement?: InventoryMovement;
  message?: string;
}

const materialApi = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  //await checkProtectedApi(req, res, 'ADMIN');

  if (req.method === "POST") {
    try {
      const crearInventoryMovement = await prisma.inventoryMovement.create({
        data: {
          movementType: req.body.movementType,
          quantity: req.body.quantity,
          userId: req.body.userId,
         
        },
      });

      return res.status(201).json({ movement: crearInventoryMovement });
    } catch (error) {

      return res.status(500).json({ message: "No se puedo crear el material" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
};

export default materialApi;
