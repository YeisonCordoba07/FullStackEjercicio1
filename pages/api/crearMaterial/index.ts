import prisma from "@/service/prisma";

//import { checkProtectedApi } from '@/utils/checkServerSession';
import { Material } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  material?: Material;
  message?: string;
}

const materialApi = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  //await checkProtectedApi(req, res, 'ADMIN');

  if (req.method === "POST") {
    try {
      const crearMaterial = await prisma.material.create({
        data: {
          id: req.body.id,
          name: req.body.name,
          quantity: req.body.quantity,
          userId: req.body.userId,
        },
      });

      return res.status(201).json({ material: crearMaterial });
    } catch (error) {

      return res.status(500).json({ message: "No se puedo crear el material" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
};

export default materialApi;
