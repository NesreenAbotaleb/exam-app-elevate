import {
  ForgetPasswordApiEndpoints,
  HEADERS,
} from "@/shared/constants/api.constant";
import { EmailStepFields } from "../types/auth";

export const forgetPassword = async (email: EmailStepFields) => {
  // console.log(JSON.stringify( email ));

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${ForgetPasswordApiEndpoints.sendResetLink}`,
    {
      method: "POST",
      body: JSON.stringify(email),
      headers: { ...HEADERS.jsonBody },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    // console.log(data);
    throw new Error(
      data?.message || response.statusText || "Something went wrong",
    );
  }

  return data;
};
