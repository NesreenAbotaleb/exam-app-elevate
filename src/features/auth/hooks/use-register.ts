import { useMutation } from "@tanstack/react-query";
import { RegisterPayload } from "../types/auth";
import { registerStep } from "../api/register.api";

export default function useRegister() {
  return useMutation({
    mutationFn: async (field: RegisterPayload) => {
      const response = await registerStep(field);

      if (!response?.status) {
        console.log(response);
        throw new Error(response?.message || "Something went wrong");
      }

      return response.message;
    },
    onSuccess: (data) => {
    
      const callbackUrl = new URLSearchParams(window.location.search).get("callbackUrl") || "/";
      location.href = callbackUrl;

      console.log("Account Created", data);
    }
  });
}