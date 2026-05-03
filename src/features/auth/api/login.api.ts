import 'server-only';
import { HEADERS } from "@/shared/constants/api.constant";
import { LoginFields, LoginResponse } from "../types/auth";
import { Response } from "@/shared/types/api";
import { LoginApiEndpoints } from "@/shared/constants/api.constant";

/**
 * Sends a login request to the authentication API.
 *
 * This function is **server-only** and must never be called from the client.
 *
 * @param loginFields - The user's login credentials (username & password).
 * @returns A promise that resolves to a {@link Response} wrapping a {@link LoginResponse}
 *          on success, or an {@link ErrorResponse} on failure.
 *
 * @example
 * const result = await login({ username: "john", password: "secret" });
 * if (result.status) {
 *   console.log(result.payload?.token);
 * }
 */
export const login = async (loginFields: LoginFields): Promise<Response<LoginResponse>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${LoginApiEndpoints}`, {
        method: "POST",
        headers: {
            ...HEADERS.jsonBody,
        },
        body: JSON.stringify(loginFields),
    });

    const payload: Response<LoginResponse> = await response.json();
    return payload;
};