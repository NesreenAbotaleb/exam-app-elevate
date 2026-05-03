import { Brain, BookOpenCheck, RectangleEllipsis } from "lucide-react";

// features of the app

export const FEATURES = [
  {
    icon: Brain,
    title: "Tailored Diplomas",
    description: "Choose from specialized tracks like Frontend, Backend, and Mobile Development.",
  },
  {
    icon: BookOpenCheck,
    title: "Focused Exams",
    description: "Access topic-specific tests including HTML, CSS, JavaScript, and more.",
  },
  {
    icon: RectangleEllipsis,
    title: "Smart Multi-Step Forms",
    description: "Choose from specialized tracks like Frontend, Backend, and Mobile Development.",
  },
] as const;

// schemas for each step of the registration process

export const stepSchemas = [
  ["email"],                                       
  ["firstName", "lastName", "username", "phonenumber"], 
  ["otp"],                                          
  ["password", "confirmPassword"],                 
] as const;

