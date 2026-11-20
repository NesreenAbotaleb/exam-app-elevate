"use client";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

import { ResetPasswordFields } from "../../types/auth";
import { resetPasswordScheme } from "../../schemes/reset-passwrod.scheme";
import EmailStep from "./email-step";
import EmailConfirmation from "./email-confirmation";
import PasswordStep from "./reset-password";

const STEPS = ["email", "verify", "reset"] as const;
type Step = (typeof STEPS)[number];

const isStep = (value: string | null): value is Step =>
  STEPS.includes(value as Step);

const ResetPasswordForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ---- current step comes from the URL (fallback: "email")
  const stepParam = searchParams.get("step");
  const currentStep: Step = isStep(stepParam) ? stepParam : "email";

  // email can be restored from the URL (e.g. user opened the link from the mail)
  const emailParam = searchParams.get("email") ?? "";

  const [successMessage, setSuccessMessage] = useState("");

  const token = searchParams.get("token") ?? "";

  // Guard: reset step needs a token
  useEffect(() => {
    if (currentStep === "reset" && !token) {
      router.replace(pathname); // back to the email step
    }
  }, [currentStep, token, pathname, router]);

  const form = useForm<ResetPasswordFields>({
    resolver: zodResolver(resetPasswordScheme),
    defaultValues: {
      email: emailParam,
      password: "",
      confirmPassword: "",
    },
  });

  // ---- navigation helpers
  const goToStep = (step: Step, extra: Record<string, string> = {}) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", step);
    Object.entries(extra).forEach(([key, value]) => params.set(key, value));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const getRedirectUrl = (email: string) => {
    const params = new URLSearchParams({ step: "reset", email });
    return `${window.location.origin}${pathname}?${params.toString()}`;
  };

  // Guard: reset step needs an email
  if (currentStep === "reset" && !emailParam) {
    // user opened ?step=reset directly without an email -> restart
    goToStep("email");
  }

  return (
    <form className="flex w-full max-w-113 flex-col gap-4">
      {/* Email Step */}
      {currentStep === "email" && (
        <EmailStep
          form={form}
          getRedirectUrl={getRedirectUrl}
          setSuccessMessage={setSuccessMessage}
          onSuccess={() =>
            goToStep("verify", { email: form.getValues("email") })
          }
        />
      )}

      {/* Reset Step (new password + confirm) */}
      {currentStep === "reset" && (
        <PasswordStep
          form={form}
          token={token}
          onSuccess={(message) => {
            setSuccessMessage(message);
            setTimeout(() => router.push("/login"), 1500);
          }}
        />
      )}

      {/* Success Message */}
      {successMessage && currentStep === "verify" && (
        <EmailConfirmation
          email={emailParam}
          onBack={() => goToStep("email")}
        />
      )}
    </form>
  );
};

export default ResetPasswordForm;
