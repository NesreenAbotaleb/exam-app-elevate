
import { useMutation } from "@tanstack/react-query";
import { OTPVerificationFields } from "../types/auth";
import { otpStep } from "../api/register.api";

export default function useOTPVerification() {

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: async (field: OTPVerificationFields) => {
            const response = await otpStep(field);
    
            if (!response?.status) {
                throw new Error(response?.message || "Something went wrong");
            }
    
            return response.message;
        },
        onSuccess: (data) => {
            console.log("OTP verified!", data);
        },
    });
    
   
    return { mutate, isPending, isError, error };
}
