'use client'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-5  bg-white-700 px-4 min-h-screen flex flex-col">
            {children}
        </div>
    );
}
