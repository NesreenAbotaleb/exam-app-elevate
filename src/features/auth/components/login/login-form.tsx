"use client";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginFields } from "../../types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./../../schemes/login.scheme";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/shared/components/ui/field";
import { CircleX } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { Input } from "@/shared/components/ui/input";
import useLogin from "@/features/auth/hooks/use-login";


const LoginForm = () => {

  const {mutate: login, isPending, error} = useLogin();

  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });



  const hasErrors = form.formState.isSubmitted && (
  Object.keys(form.formState.errors).length > 0 || !!error
);

  // TODO: handle form submission
  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    login(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full  flex-col ">

      {/* Username Field */}

      <FieldGroup className="mt-4">
        <Controller
          name="username"
          control={form.control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.error}>
              {/* label */}
              <FieldLabel htmlFor={field.name}>Username</FieldLabel>

              {/* field input */}
              <Input
                {...field}
                type="text"
                id="username"
                placeholder="user123"
                autoComplete="username"
                aria-invalid={!!fieldState.error}
              />

              {/* error message */}
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        ></Controller>
      </FieldGroup>

      {/* Password Field */}

      <FieldGroup className="mt-4">
        <Controller
          name="password"
          control={form.control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Field data-invalid={!!fieldState.error}>
              {/* label */}
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>

              {/* field input */}
              <Input
                {...field}
                type="password"
                id="password"
                placeholder="********"
                autoComplete="current-password"
                aria-invalid={!!fieldState.error}
              />

              {/* error message */}
              {fieldState.error && (
                <FieldError>{fieldState.error.message}</FieldError>
              )}
            </Field>
          )}
        ></Controller>
      </FieldGroup>

      {/* forget password */}
      <Link
        href="/reset-password"
        className="mt-2.5 text-sm text-blue-600 font-medium self-end"
      >
        Forget password?
      </Link>

      {/* feedback message */}
      {hasErrors && (
        <div className="relative flex flex-col items-center border border-red-500 bg-red-50 px-4 pb-4 pt-6 mt-10">
          {/* icon */}
          <div className="absolute -top-3 bg-red-50 px-1">
            <CircleX className="size-5 text-red-500" />
          </div>
          {/* message */}
          {error?.message && (
            <p className="text-sm text-red-600 font-normal">
            {error?.message || " Something went wrong!"}
          </p>
          )}
        </div>
      )}

      {/* Submit Button */}

      <Button
        type="submit"
          className="w-full h-11.5 bg-blue-600 text-white text-sm font-medium mt-10"
          disabled={isPending || (form.formState.isSubmitted || !form.formState.isValid)}
      >
        Login
      </Button>
    </form>
  );
};
export default LoginForm;
