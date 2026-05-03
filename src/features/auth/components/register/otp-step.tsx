import { Button } from "@/shared/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import { cn } from "@/shared/lib/utils/tailwind-cn";
import { RegisterFields } from "../../types/auth";
import { UseFormReturn } from "react-hook-form";
import { useEffect, useState } from "react";
import useRegisterEmail from "@/features/auth/hooks/use-register-email";
import useOTPVerification from "../../hooks/use-otp-verfication";
import { validateStep } from "@/shared/lib/utils/validate-step";
import { otpScheme } from "../../schemes/register.scheme";

export interface OTPStepProps {
  form: UseFormReturn<RegisterFields>;
  email: string;
  onSuccess: () => void;
  onBack: () => void;
}

const OTPStep = ({ email, onSuccess, onBack, form }: OTPStepProps) => {
  const { setValue } = form;

  const [otpValue, setOtpValue] = useState("");
  const [seconds, setSeconds] = useState(60);

  const {
    mutate: resendEmail,
    isPending: isResending,
    isError,
    error,
  } = useRegisterEmail();
  const { mutate, isPending } = useOTPVerification();

  useEffect(() => {
    if (seconds === 0) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const handleSubmit = async () => {
    const isValid = await validateStep(form, otpScheme, ["otp"]);
    if (!isValid) return;

    mutate(
      { otp: otpValue, email },
      {
        onSuccess: () => onSuccess(),
        onError: (error) => {
          form.setError("otp", {
            message: error?.message ?? "Invalid OTP. Please try again.",
          });
        },
      },
    );
  };

  const handleResend = () => {
    resendEmail({ email }, { onSuccess: () => setSeconds(60) });
  };

  const handleChange = (val: string) => {
    setOtpValue(val);
    setValue("otp", val);
  };

  const handleComplete = (val: string) => {
    setOtpValue(val);
    setValue("otp", val);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 font-inter">
        Verify OTP
      </h2>

      <p className="text-gray-600 text-[1rem] font-medium mt-4">
        Please enter the 6-digits code we have sent to:
      </p>

      <span className="text-gray-800 text-[1rem] font-medium">
        {email}
        <Button
          variant="link"
          size="sm"
          onClick={onBack}
          className="text-blue-600 underline text-[1rem] font-medium"
        >
          Edit
        </Button>
      </span>

      <div className="flex flex-col gap-4 items-center justify-center">
        <InputOTP
          maxLength={6}
          value={otpValue}
          onChange={handleChange}
          onComplete={handleComplete}
        >
          <InputOTPGroup className="gap-3 mt-6.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className={cn(
                  "size-14 text-base font-medium border border-input",
                  "first:border-l",
                  "data-[active=true]:border-blue-600 data-[active=true]:ring-1 data-[active=true]:ring-blue-600",
                )}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {isError && (
          <p className="text-sm text-red-600 font-normal">
            {error?.message || " Something went wrong!"}
          </p>
        )}

        {form.formState.errors.otp && (
          <p className="text-sm text-destructive">
            {form.formState.errors.otp.message}
          </p>
        )}

        {/* resend section */}
        <div className="mt-6">
          {/* countdown timmer */}
          {seconds > 0 ? (
            <p className="text-sm text-gray-500 font-medium">
              You can request another code in: <span>{seconds}s</span>
            </p>
          ) : (
            <div className="flex items-center gap-1">
              <p className="text-sm text-gray-500 font-medium">
                Didn't receive the code?
              </p>

              {/* resend button */}
              <Button
                type="button"
                variant="link"
                size="sm"
                onClick={handleResend}
                disabled={isResending}
                className="text-blue-600 underline text-sm font-medium p-0 h-auto"
              >
                {isResending ? "Resending..." : "Resend"}
              </Button>
            </div>
          )}
        </div>

        {/* sumitting button */}
        <Button
          type="button"
          variant="link"
          className="text-gray-800 text-sm font-medium mt-4 p-0 h-auto"
          onClick={handleSubmit}
          disabled={isPending || otpValue.length < 6}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        >
          {isPending ? "Verifying..." : "Verify Code"}
        </Button>
      </div>
    </div>
  );
};

export default OTPStep;
