
import SideBarSection from "@/features/auth/components/side-bar-section/side-bar-section";


export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="min-h-screen grid grid-cols-2 justify-center items-center ">
            {/* Side Bar Section */}
            <SideBarSection />

            {/* Auth Routes */}
            {children}

        </div>
    )
}