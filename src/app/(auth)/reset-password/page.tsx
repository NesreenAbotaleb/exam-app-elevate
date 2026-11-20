import { Suspense } from "react";

import ResetPasswordForm from "@/features/auth/components/forget-password/reset-password-form";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  gap-10 ">

      <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
       {/* Don't have an account? */}
        <p className="text-sm text-gray-500 font-medium self-center justify-between">
            Don't have an account?
            <Link href="/register" className="text-blue-600">
               {" "}
                Create yours
            </Link>
        </p>
      </Suspense>

    </main>
  )
}
