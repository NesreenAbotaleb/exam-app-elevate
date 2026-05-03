import LoginForm from "@/features/auth/components/login/login-form";
import Link from "next/link";


export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  gap-10 ">

       <div className="w-full max-w-113 flex flex-col  gap-10 ">
         {/* Title */}

        <h1 className="font-inter text-3xl font-bold text-gray-800 justify-self-start self-start">
            Login
        </h1>

        {/* Login Form */}

        <LoginForm />

        {/* Don't have an account? */}
        <p className="text-sm text-gray-500 font-medium self-center justify-between">
            Don't have an account?
            <Link href="/register" className="text-blue-600">
               {" "}
                Create yours
            </Link>
        </p>

       </div>

    </main>
  )
}
