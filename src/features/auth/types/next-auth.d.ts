import NextAuth from "next-auth"
import { UserRole } from "./user"
import {User as UserType} from "./user"
import { User } from "next-auth"
import { JWT } from "next-auth/jwt"



declare module "next-auth" {

/**
 * The shape of the user object returned in the OAuth providers' `profile` callback,
 * or the second parameter of the `session` callback, when using a database.
 */
interface User {
    user: UserType;
    token: token
}
 

    type Session = UserType
}



declare module "next-auth/jwt" {
//   interface JWT extends User {
//     token: token;
//   }

    type JWT = User
}