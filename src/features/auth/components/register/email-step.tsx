"use client";

import { Controller, UseFormReturn } from "react-hook-form";
import { RegisterFields } from "../../types/auth";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { ChevronRight, CircleX } from "lucide-react";
import { validateStep } from "@/shared/lib/utils/validate-step";
import { emailScheme } from "../../schemes/email.scheme";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import useRegisterEmail from "@/features/auth/hooks/use-register-email";

type Props = {
  form: UseFormReturn<RegisterFields>;
  onSuccess: () => void;
  setSuccessMessage: (message: string) => void;
};

const EmailStep = ({ form, onSuccess, setSuccessMessage }: Props) => {

  // Mutation for sending OTP to email
  const { mutate, isPending, error, isError , data} = useRegisterEmail();

  // Handle submit
  const handleSubmit = async () => {
    // Validate just this field before sending
    const isValid = await validateStep(form, emailScheme, ["email"]);
    if (!isValid) return;

    // Send OTP to email
    mutate(
      { email: form.getValues("email") },
      { onSuccess: () => {
          onSuccess();
          setSuccessMessage( data ||"Check your email for the OTP!");
        }
      },
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      
      <FieldGroup>
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
            </Field>
          )}
        />
      </FieldGroup>

      {/* submit button */}
      <Button
        type="button"
        onClick={handleSubmit}
        disabled={isPending}
        className="text-gray-800 bg-gray-50 border border-blue-600 text-sm font-medium min-h-11.5 px-4 py-2 "
      >
        Next
        <ChevronRight className="size-4 ml-2 text-gray-800" />
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
