"use client";

import { useForm } from "react-hook-form";
import { RegisterFields, RegisterPayload } from "../../types/auth";
import { registerScheme } from "../../schemes/register.scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// components

import EmailStep from "./email-step";
import { Stepper } from "./stepper";
import OTPStep from "./otp-step";
import UserInfoStep from "./user-info-step";
import PasswordStep from "./password-step";
import useRegister from "../../hooks/use-register";
import { Check, CircleX } from "lucide-react";

const RegisterForm = () => {
  // mutation
  const { mutate: register, isPending, error } = useRegister();

  // states
  const [currentStep, setCurrentStep] = useState(0);

  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerScheme),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      phone: "",
      otp: "",
    },
  });


  // functions

  
  const goNext = () => setCurrentStep((prev) => prev + 1);
  const goBack = () => setCurrentStep((prev) => prev - 1);

  // submit handler for the final step to submit the registration data to the server

  const handleSubmit = (data: RegisterPayload) => {
    register(data, {
      onSuccess: () => {
        setSuccessMessage(data.message || "Registration successful!");
        goNext();
      },
      onError: () => goBack(),
    });
  };



  return (
    <form className="flex w-full max-w-113  flex-col  gap-4">

      {/* Stepper  */}

      {currentStep > 0 && <Stepper current={currentStep + 1} />}

      {/* Title */}

      <h1 className=" w-fulltext-gray-800 font-bold text-3xl font-inter">
        Create Account
      </h1>

      {/* Register Form */}

      {/* email step*/}
      {currentStep === 0 && (
        <EmailStep
          form={form}
          onSuccess={goNext}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {/* otp step */}
      {currentStep === 1 && (
        <OTPStep
          email={form.getValues("email")}
          onSuccess={goNext}
          onBack={goBack}
          form={form}
        />
      )}

      {/* user info step*/}
      {currentStep === 2 && (
        <UserInfoStep form={form} onSuccess={goNext} serverError={error} />
      )}

      {/* password step*/}
      {currentStep === 3 && (
        <PasswordStep
          form={form}
          onSubmit={handleSubmit}
          isPending={isPending}
          // serverError={error}
          onBack={goBack}
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
    </form>
  );
};

export default RegisterForm;
