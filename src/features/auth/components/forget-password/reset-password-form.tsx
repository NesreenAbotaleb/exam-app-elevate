"use client";
import { useForm } from "react-hook-form";
import { ResetPasswordFields } from "../../types/auth";
import { resetPasswordScheme } from "../../schemes/reset-passwrod.scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailStep from "./email-step";
import { useState } from "react";
import { Check } from "lucide-react";

const ResetPasswordForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => setCurrentStep((prev) => prev + 1);
  const goBack = () => setCurrentStep((prev) => prev - 1);

  const [successMessage, setSuccessMessage] = useState("");
  // form state
  const form = useForm<ResetPasswordFields>({
    resolver: zodResolver(resetPasswordScheme),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <form className="flex w-full max-w-113  flex-col  gap-4">
        
      {/* Email Step */}
      {currentStep === 0 && (
        <EmailStep
          form={form}
          onSuccess={() => goNext()}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="relative flex flex-row items-center bg-gray-800 text-white px-4 pb-4 pt-6 mt-10">
          {/* icon */}
          <Check className="size-4  text-emerald-600 " />
          {/* message */}

          <p className="text-sm text-white font-normal">{successMessage}</p>
        </div>
      )}

      {currentStep === 1 && <div></div>}
    </form>
  );
};

export default ResetPasswordForm;
