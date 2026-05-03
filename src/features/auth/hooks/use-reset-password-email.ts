import { useMutation } from "@tanstack/react-query";
import { EmailStepFields } from "../types/auth";
import { forgetPassword } from "../api/reset-password.api";

export default function useResetPasswordEmail() {

  const { mutate, isPending, isError, error , data} = useMutation({
    mutationFn: async (field: EmailStepFields) => {
      const response = await forgetPassword(field);

      if (!response?.status) {
        // console.log(response);
        throw new Error(response?.message || "Something went wrong");
      }

      // console.log(response);

      return response.message;
    },
    onSuccess: (data) => {
      console.log("Reset password link sent!", data);
    },
  });

  
  return { mutate, isPending, isError, error ,  data};
}
