
import { Role } from "@prisma/client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth/next";

declare module "next-auth"{
    /**
     * Returned by useSession
     */
    interface Session{
        user:{
            role: Role?;
        };
    }
}