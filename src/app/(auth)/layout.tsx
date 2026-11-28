import SideBarSection from "@/features/auth/components/side-bar-section/side-bar-section";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
      {/* Side Bar Section: hidden on phones and small screens */}
      <div className="hidden lg:block h-full">
        <SideBarSection />
      </div>

      {/* Auth Routes */}
      <main className="w-full">{children}</main>
    </div>
  );
}