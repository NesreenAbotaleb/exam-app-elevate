import { z } from "zod";

export const loginSchema = z.object({
    username: z.string('Invalid Username').nonempty("Username is required"),
    password: z.string('Invalid Password').nonempty("Password is required"),
}).strict();