import { z } from "zod";

// email validation schema

import { emailScheme } from "./email.scheme";
// password validation schema
import { passwordScheme } from "./password.scheme";

// reset password validation schema
export const resetPasswordScheme = emailScheme.merge(passwordScheme).strict();