import {
  ForgetPasswordApiEndpoints,
  HEADERS,
} from "@/shared/constants/api.constant";
import { ForgetPasswordBody , ResetPasswordBody  } from "../types/auth";

export const forgetPassword = async (body: ForgetPasswordBody) => {
  console.log("body", body);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${ForgetPasswordApiEndpoints.sendResetLink}`,
    {
      method: "POST",
      body: JSON.stringify(body), 
      headers: { ...HEADERS.jsonBody },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || response.statusText || "Something went wrong",
    );
  }

  return data;
};


export const resetPassword = async (body: ResetPasswordBody) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${ForgetPasswordApiEndpoints.resetPassword}`, // "/api/auth/reset-password"
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { ...HEADERS.jsonBody },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || response.statusText || "Something went wrong",
    );
  }

  return data;
};