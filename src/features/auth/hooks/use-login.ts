import { useMutation } from "@tanstack/react-query";
import { LoginFields } from "../types/auth";
import { signIn } from "next-auth/react";

export default function useLogin( ){

    // vars
    

    // Mutations
    return useMutation({
        mutationFn: async (fields: LoginFields) => {
            const response = await signIn('credentials', {
                username: fields.username,
                password: fields.password,
                redirect: false,
            });

            console.log(response)

            if (!response?.ok){
                throw new Error(response?.error|| 'Something went wrong')
            }

            return response;
        },
        onSuccess: () =>{
           const callbackUrl = new URLSearchParams(location.search).get('callbackUrl') || '/'
           location.href = callbackUrl
        }

    })

}