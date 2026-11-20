import { useMutation } from "@tanstack/react-query";
import { ForgetPasswordBody } from "../types/auth";
import { forgetPassword } from "../api/reset-password.api";

export default function useResetPasswordEmail() {
  const { mutate, isPending, isError, error, data } = useMutation<
    string,
    Error,
    ForgetPasswordBody
  >({
    mutationFn: async (body) => {
      const response = await forgetPassword(body);

      if (!response?.status) {
        throw new Error(response?.message || "Something went wrong");
      }

      return response.message;
    },
  });

  return { mutate, isPending, isError, error, data };
}