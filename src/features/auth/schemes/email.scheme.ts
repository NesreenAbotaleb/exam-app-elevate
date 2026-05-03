import { z } from "zod";

// email validation schema

export const emailScheme = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
});