"use client";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Controller, UseFormReturn } from "react-hook-form";
import { ResetPasswordFields } from "../../types/auth";
import { Button } from "@/shared/components/ui/button";
import { ChevronRight, CircleX } from "lucide-react";
import useResetPasswordEmail from "../../hooks/use-reset-password-email";
import { emailScheme } from "../../schemes/email.scheme";
import { validateStep } from "@/shared/lib/utils/validate-step";

type EmailStepProps = {
  form: UseFormReturn<ResetPasswordFields>;
  onSuccess: () => void;
  setSuccessMessage: (message: string) => void;
  getRedirectUrl: (email: string) => string; // was: redirectUrl: string
};

const EmailStep = ({
  form,
  onSuccess,
  setSuccessMessage,
  getRedirectUrl,
}: EmailStepProps) => {
  // Mutation for sending Link to email
  const { mutate, isPending, error, isError } = useResetPasswordEmail();

  const handleSubmit = async () => {
    const isValid = await validateStep(form, emailScheme, ["email"]);
    if (!isValid) return;

    const email = form.getValues("email");

    mutate(
      { email, redirectUrl: getRedirectUrl(email) },
      {
        onSuccess: (data) => {
          setSuccessMessage(data || "Reset password link sent!");
          onSuccess();
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <FieldGroup>
        {/* Forget Password title */}

        <h2 className="font-inter text-3xl font-bold text-gray-800">
          Forgot password
        </h2>

        {/* description */}
        <FieldDescription className="text-[16px] text-gray-500">
          Don’t worry, we will help you recover your account.
        </FieldDescription>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field>
              {/* title */}
              <FieldLabel htmlFor={field.name} aria-label="required">
                Email
              </FieldLabel>

              {/* input */}
              <Input
                // name="email"
                {...form.register("email")}
                type="email"
                placeholder="user@example.com"
                className="border rounded px-3 py-2"
              />

              {/* error message */}
              {fieldState.error && (
                <FieldError className="text-red-500 text-sm">
                  {fieldState.error.message}
                </FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      {/* submit button */}
      <Button
        type="button"
        onClick={handleSubmit}
        disabled={isPending}
        className="text-white bg-blue-600 border text-sm font-medium min-h-11.5 px-4 py-3.5 "
      >
        Next
        <ChevronRight className="size-4 ml-2 text-blue-600" />
      </Button>

      {/* Error Message */}

      {isError && (
        <div className="relative flex flex-col items-center border border-red-500 bg-red-50 px-4 pb-4 pt-6 mt-10">
          {/* icon */}
          <div className="absolute -top-3 bg-red-50 px-1">
            <CircleX className="size-5 text-red-500" />
          </div>
          {/* message */}

          <p className="text-sm text-red-600 font-normal">
            {error?.message || " Something went wrong!"}
          </p>
        </div>
      )}
    </div>
  );
};
export default EmailStep;
