'use client'
import Navbar from "@/components/navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full    bg-white-700  ">
            <div className="pb-18">
                {children}
            </div>
            <Navbar />
        </div>
    );
}
