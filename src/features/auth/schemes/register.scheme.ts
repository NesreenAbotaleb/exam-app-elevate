import { z } from "zod";


// email validation schema

import { emailScheme } from "./email.scheme";

// password validation schema
import { passwordScheme } from "./password.scheme";


//   otp validation schema
export const otpScheme = z.object({
  otp: z
    .string()
    .nonempty("OTP is required")
    .regex(/^\d{6}$/, "OTP must be a 6-digit number"),
});

//   personal info validation schema

export const personalInfoScheme = z.object({
  firstName: z
    .string()
    .nonempty( "First Name is required")
    .regex(/^[A-Za-z]+$/, "First Name must contain only letters"),

  lastName: z
    .string()
    .nonempty( "Last Name is required")
    .regex(/^[A-Za-z]+$/, "Last Name must contain only letters"),

  username: z
    .string()
    .nonempty( "Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),

  phone: z
    .string()
    .nonempty( "Phone Number is required")
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
});




// registration validation schema
export const registerScheme = emailScheme
  .merge(otpScheme)
  .merge(personalInfoScheme)
  .merge(passwordScheme)
  .strict();
