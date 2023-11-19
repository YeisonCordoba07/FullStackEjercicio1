import prisma from '@/service/prisma';

//import { checkProtectedApi } from '@/utils/checkServerSession';
import { User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  user?: User;
  message?: string;
}

const userApi = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  //await checkProtectedApi(req, res, 'ADMIN');

  if (req.method === 'PUT') {
    const userId = req.query.id as string;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: req.body.email,
        roleId: req.body.roleId,
      },
    });

    return res.status(200).json({ user: updatedUser });
  }


  return res.status(405).json({ message: 'Method not allowed' });
};

export default userApi;