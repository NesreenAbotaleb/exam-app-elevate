"use client";

import { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { ResetPasswordFields } from "../../types/auth";
import useResetPassword from "@/features/auth/hooks/use-rest-password";

type PasswordStepProps = {
  form: UseFormReturn<ResetPasswordFields>;
  token: string;
  onSuccess: (message: string) => void;
};

// Reusable field with its own show/hide state
type PasswordFieldProps = {
  form: UseFormReturn<ResetPasswordFields>;
  name: "password" | "confirmPassword";
  label: string;
};

const PasswordField = ({ form, name, label }: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={!!fieldState.error}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

          <div className="relative">
            <Input
              {...field}
              id={field.name}
              type={show ? "text" : "password"}
              placeholder="********"
              autoComplete="new-password"
              aria-invalid={!!fieldState.error}
              className="pr-10"
            />

            <button
              type="button"
              onClick={() => setShow((prev) => !prev)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>

          {fieldState.error && (
            <FieldError className="text-sm text-red-500">
              {fieldState.error.message}
            </FieldError>
          )}
        </Field>
      )}
    />
  );
};

const PasswordStep = ({ form, token, onSuccess }: PasswordStepProps) => {
  const { mutate, isPending, isError, error } = useResetPassword();

  const handleSubmit = async () => {
  const isValid = await form.trigger(["password", "confirmPassword"]);
  if (!isValid) return;

  mutate(
    {
      token,
      newPassword: form.getValues("password"),
      confirmPassword: form.getValues("confirmPassword"),
    },
    { onSuccess: (message) => onSuccess(message || "Password updated!") },
  );
};

  return (
    <div className="flex flex-col gap-4">
      <FieldGroup>
        <h2 className="font-inter text-3xl font-bold text-gray-800">
          Create a New Password
        </h2>

        <FieldDescription className="text-[16px] text-gray-500">
          Create a new strong password for your account.
        </FieldDescription>

        <PasswordField form={form} name="password" label="New Password" />
        <PasswordField
          form={form}
          name="confirmPassword"
          label="Confirm New Password"
        />
      </FieldGroup>

      <Button
        type="button"
        onClick={handleSubmit}
        disabled={isPending}
        className="min-h-11.5 w-full bg-blue-600 px-4 py-3.5 text-sm font-medium text-white hover:bg-blue-700"
      >
        {isPending ? "Resetting..." : "Reset Password"}
      </Button>

      {isError && (
        <p className="text-sm text-red-600">
          {error?.message || "Something went wrong!"}
        </p>
      )}
    </div>
  );
};

export default PasswordStep;