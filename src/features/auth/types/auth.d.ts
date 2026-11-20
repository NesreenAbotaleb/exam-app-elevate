import { User } from "./user";
import { z } from "zod";
import { loginSchema } from "../schemes/login.scheme";
import { registerSchema } from "../schemes/register.scheme";

//Login
export type LoginFields = z.infer<typeof loginSchema>;


//Register
export type RegisterFields = z.infer<typeof registerSchema>

//Payload response of the register
export type RegisterPayload = Omit<RegisterFields, "otp">

// types for individual steps
export type EmailStepFields = Pick<RegisterFields, "email">;

export type OTPVerificationFields = Pick<RegisterFields, "otp" | "email">;

// types for reset password
export type ResetPasswordFields = Pick<RegisterFields, "email" | "password" | "confirmPassword">;


// API response types
export interface LoginResponse  {
    user: User;
    token: string;
}


export interface RegisterResponse {
    user: User;
    token: string;
}

export interface EmailStepResponse {
    message: string;
    code: number;
}

export interface OTPVerificationResponse {
    message: string;
}

export interface ResetPasswordResponse {
    message: string;
    resetToken: string;
}

export interface ForgetPasswordBody {
    email: string;
    redirectUrl: string;
}

export interface ResetPasswordBody {
  token: string;
  newPassword: string;
  confirmPassword: string;
}