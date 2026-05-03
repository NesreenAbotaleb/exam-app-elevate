// import 'server-only';
import { HEADERS } from "@/shared/constants/api.constant";
import { EmailStepFields,  OTPVerificationFields, OTPVerificationResponse  ,  RegisterPayload, RegisterResponse} from "../types/auth";
import { Response } from "@/shared/types/api";
import { RegisterApiEndpoints } from "@/shared/constants/api.constant";

// verifing the Email  for register step 1

export const emailVerficationStep = async (field: EmailStepFields) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${RegisterApiEndpoints.emailStep}`, {
    method: "POST",
    body: JSON.stringify(field),
    headers: {...HEADERS.jsonBody},
  });

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    throw new Error(data?.message || response.statusText || "Something went wrong");
  }

  return data;
};

// verifing the OTP code for register step 2
 
export const otpStep = async (otpField: OTPVerificationFields): Promise<Response<OTPVerificationResponse>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${RegisterApiEndpoints.otpStep}`, {
        method: "POST",
        headers: {
            ...HEADERS.jsonBody,
        },
        body: JSON.stringify({ email: otpField.email, code: otpField.otp }),
    });

   const payload: Response<OTPVerificationResponse> = await response.json();


    return payload;
}


// registering the user for register step 3

export const registerStep = async (registerField: RegisterPayload): Promise<Response<RegisterResponse>> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${RegisterApiEndpoints.registerStep}`, {
        method: "POST",
        headers: {
            ...HEADERS.jsonBody,
        },
        body: JSON.stringify(registerField),
    });

   const payload: Response<RegisterResponse> = await response.json();

    return payload;

}