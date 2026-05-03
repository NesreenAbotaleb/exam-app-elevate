import { z } from "zod";


export const passwordScheme = z
  .object({
    password: z.string().nonempty( "Password is required"),
    confirmPassword: z.string().nonempty( "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });