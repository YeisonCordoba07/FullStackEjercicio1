// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@/service/prisma";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  user?: User[];
  nuevoUsuario?: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const user = await prisma.user.findMany();
    res.status(200).json({ user });
  }

  if (req.method === "POST") {
    const {email, roleId} = req.body;

    const nuevoUsuario = await prisma.user.create({
      data:{
        email,
        roleId,
      }
    });
    return res.status(201).json({nuevoUsuario});
  }
}
