import { MoveLeft } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export interface EmailConfirmationProps {
  email: string;
  onBack?: () => void;
}

const EmailConfirmation = ({ email, onBack }: EmailConfirmationProps) => {
  return (
    <div className="flex flex-col items-center justify-left gap-10">
      {onBack && (
        <Button
          variant="ghost"
          size="lg"
          onClick={onBack}
          className="self-start text-gray-500 hover:text-gray-700"
        >
          <MoveLeft className="mr-2 h-6 w-6 text-gray-800 self-center" />
        </Button>
      )}
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-inter text-3xl font-bold text-gray-800 self-start">
          Password Reset Sent
        </h2>
        <p className="text-[16px] text-gray-800 flex flex-col items-left gap-2 self-start">
          We have sent a password reset link to:
          <span className="font-medium text-blue-600">{email}</span>
        </p>
        <p className="text-[16px] text-gray-800 flex flex-col items-left gap-2">
          Please check your inbox and follow the instructions to reset your
          password.
        </p>
        <p className="text-[16px] text-gray-500 flex flex-col items-left gap-2">
          If you don’t see the email within a few minutes, check your spam or
          junk folder.
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
