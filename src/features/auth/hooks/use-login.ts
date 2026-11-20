// /src/app/features/auth/hooks/use-login.ts
import { useMutation } from "@tanstack/react-query";
import { LoginFields } from "../types/auth";
import { signIn } from "next-auth/react";

export default function useLogin() {
    return useMutation({
        mutationFn: async (fields: LoginFields) => {
            const response = await signIn("credentials", {
                username: fields.username,
                password: fields.password,
                redirect: false,
            });

            if (!response?.ok) {
                throw new Error(response?.error || "Something went wrong");
            }

            // After NextAuth sets its own session cookie, call our route
            // to write the raw token into a separate httpOnly cookie.
            const tokenRes = await fetch("/api/auth/set-token", {
                method: "POST",
            });

            if (!tokenRes.ok) {
                throw new Error("Failed to persist auth token");
            }

            return response;
        },
        onSuccess: () => {
            const callbackUrl =
                new URLSearchParams(location.search).get("callbackUrl") || "/";
            location.href = callbackUrl;
        },
    });
}