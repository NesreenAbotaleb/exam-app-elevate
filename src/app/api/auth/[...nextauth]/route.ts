import NextAuth from "next-auth";
import { authOptions } from "@/auth";

/**
 * NextAuth route handler initialised with the application's {@link authOptions}.
 *
 * Exported as both `GET` and `POST` to satisfy the two HTTP methods NextAuth
 * requires for its `/api/auth/[...nextauth]` catch-all route:
 * - **GET** — handles redirects, sign-out, and session/CSRF token requests.
 * - **POST** — handles sign-in form submissions and provider callbacks.
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };