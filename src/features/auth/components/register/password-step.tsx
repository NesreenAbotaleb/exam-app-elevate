import { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { RegisterFields, RegisterPayload } from "../../types/auth";

import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { validateStep } from "@/shared/lib/utils/validate-step";
import { passwordScheme } from "../../schemes/password.scheme";

export interface PasswordStepProps {
  form: UseFormReturn<RegisterFields>;

  onSubmit: (data: RegisterPayload) => void;
  isPending: boolean;
  // serverError: Error | null;

  onBack: () => void;
}

const PasswordStep = ({
  form,
  onSubmit,
  isPending,
  onBack,
}: PasswordStepProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (data: RegisterFields) => {
    const isValid = await validateStep(form, passwordScheme, [
      "password",
      "confirmPassword",
    ]);
    if (!isValid) return;

    const { otp, ...payload } = data;
    onSubmit(payload);
  };

  return (
    <div>
      {/* title */}
      <h2 className="text-2xl font-bold text-blue-600 font-inter">
        Create a strong password
      </h2>

      {/* password and confirm password fields */}
      <FieldGroup>
        {/* password */}
        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.error}>
              <FieldLabel htmlFor={field.name} aria-label="required">
                Password<span className="text-red-500">*</span>
              </FieldLabel>

              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
                autoComplete="current-password"
                aria-invalid={!!fieldState.error}
                className="pr-10"
              />

              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />

        {/* confirm password */}
        <Controller
          control={form.control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.error}>
              <FieldLabel htmlFor={field.name} aria-label="required">
                Confirm Password<span className="text-red-500">*</span>
              </FieldLabel>

              <Input
                {...field}
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="********"
                autoComplete="new-password"
                aria-invalid={!!fieldState.error}
                className="pr-10"
              />

              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      {/* submited button */}

      <Button
        type="button"
        className="w-full h-11.5 bg-blue-600 text-white text-sm font-medium mt-10"
        disabled={isPending}
        onClick={() => handleSubmit(form.getValues())}
      >
        Create Account
      </Button>
    </div>
  );
};

export default PasswordStep;
