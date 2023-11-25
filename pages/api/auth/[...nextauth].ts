import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/service/prisma";
import { User } from "@prisma/client";


export const authOptions: NextAuthOptions = {
    callbacks:{
        async session({session, user}){
            const role = await prisma.role.findUnique({
                where:{
                    id: (user as User).roleId ?? "",
                },
            });

            return {
                ...session,
                user:{
                    ...session.user,
                    id: (user as User).id,
                    role,
                },
            };
        },
    },

    adapter: PrismaAdapter(prisma),
    providers:[
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID || '',
            clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
            issuer: process.env.AUTH0_ISSUER|| '',
        }),
    ],
    secret: '1030',
}

export default NextAuth(authOptions);