import { useMutation } from "@tanstack/react-query";
import { EmailStepFields } from "../types/auth";
import { emailVerficationStep } from "../api/register.api";

// for register step 1 : email verification

export default function useRegisterEmail() {

  const { mutate, isPending, isError, error , isSuccess , data} = useMutation({
    mutationFn: async (field: EmailStepFields) => {
      const response = await emailVerficationStep(field);

      if (!response?.status) {
        throw new Error(response?.message || "Something went wrong");
      }

      return response.message;
    },
    onSuccess: (data) => {
      console.log("OTP sent!", data);
    },
  });

  // ✅ Always return what components need
  return { mutate, isPending, isError, error , isSuccess , data};
}



