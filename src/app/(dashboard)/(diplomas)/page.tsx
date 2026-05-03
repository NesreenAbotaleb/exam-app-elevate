import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
          Welcome to{" Exam App"}
        </h1>
        <Link href="/login" className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </Link>
          
      </main>
    </div>
  );
}
