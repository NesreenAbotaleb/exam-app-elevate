import { PhoneNumberInput } from "@/shared/components/ui/phone-input";
import { type Value } from "react-phone-number-input";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Controller, UseFormReturn } from "react-hook-form";
import { RegisterFields } from "../../types/auth";
import { Button } from "@/shared/components/ui/button";
import { ChevronRight, CircleX } from "lucide-react";

interface UserInfoStepProps {
  form: UseFormReturn<RegisterFields>;
  onSuccess: () => void;
  serverError: Error | null;
}

const UserInfoStep = ({ form, onSuccess, serverError }: UserInfoStepProps) => {
  // Next function
  const handleNext = async () => {
    const isValid = await form.trigger([
      "firstName",
      "lastName",
      "username",
      "phone",
    ]);
    if (isValid) onSuccess();
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* title */}
      <h2 className="text-2xl font-bold text-blue-600 font-inter">
        Tell us more about you
      </h2>

      {/* form fields */}
      <FieldGroup>
        {/* Name */}
        <FieldGroup className="flex flex-row ">
          {/* firstname */}
          <Controller
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <Field data-invalid={!!fieldState.error}>
                {/* label */}
                <FieldLabel htmlFor={field.name} aria-label="required">
                  First Name<span className="text-red-500">*</span>
                </FieldLabel>

                {/* field input */}
                <Input
                  {...field}
                  type="text"
                  id="firstName"
                  placeholder="Ahmed"
                  autoComplete="given-name"
                  aria-invalid={!!fieldState.error}
                />

                {/* error message */}
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />
          {/* lastname */}
          <Controller
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <Field data-invalid={!!fieldState.error}>
                {/* label */}
                <FieldLabel htmlFor={field.name} aria-label="required">
                  Last Name<span className="text-red-500">*</span>
                </FieldLabel>

                {/* field input */}
                <Input
                  {...field}
                  type="text"
                  id="lastName"
                  placeholder="Abdullah"
                  autoComplete="family-name"
                  aria-invalid={!!fieldState.error}
                />

                {/* error message */}
                {fieldState.error && (
                  <FieldError>{fieldState.error.message}</FieldError>
                )}
              </Field>
            )}
          />
        </FieldGroup>

        {/* username */}

        <Controller
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.error}>
              {/* label */}
              <FieldLabel htmlFor={field.name} aria-label="required">
                Username<span className="text-red-500">*</span>
              </FieldLabel>

              {/* field input */}
              <Input
                {...field}
                type="text"
                id="username"
                placeholder="user12"
                autoComplete="username"
                aria-invalid={!!fieldState.error}
              />

              {/* error message */}
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />

        {/* phone number */}

        <Controller
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.error}>
              {/* label */}
              <FieldLabel htmlFor={field.name} aria-label="required">
                Phone
              </FieldLabel>

              {/* field input */}
              <PhoneNumberInput
                id="phonenumber"
                value={field.value as Value}
                onChange={(val) => field.onChange(val ?? "")}
                aria-invalid={!!fieldState.error}
                placeholder="1012345678"
              />

              {/* error message */}
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      {/* Next Button */}

      <Button
        type="button"
        onClick={handleNext}
        // disabled={isPending}
        className="text-gray-800 bg-gray-50 border border-blue-600 text-sm font-medium min-h-11.5 px-4 py-2 mt-10"
      >
        Next
        <ChevronRight className="size-4 ml-2 text-gray-800" />
      </Button>

      {/* error message */}

      {serverError && (
        <div className="relative flex flex-col items-center border border-red-500 bg-red-50 px-4 pb-4 pt-6 mt-10">
          {/* icon */}
          <div className="absolute -top-3 bg-red-50 px-1">
            <CircleX className="size-5 text-red-500" />
          </div>
          {/* message */}

          <p className="text-sm text-red-600 font-normal">
            {serverError?.message || " Something went wrong!"}
          </p>
        </div>
      )}
    </div>
  );
};
export default UserInfoStep;
