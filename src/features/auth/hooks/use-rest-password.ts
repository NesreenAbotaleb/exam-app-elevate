import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/reset-password.api";
import { ResetPasswordBody } from "../types/auth";

export default function useResetPassword() {
  return useMutation<string, Error, ResetPasswordBody>({
    mutationFn: async (body) => {
      const response = await resetPassword(body);
      return response.message;
    },
  });
}