'use client'
import TopNavigator from "@/components/topNavigator";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-9  px-4 ">
            <TopNavigator />
            <div></div>
            <div>{children}</div>
        </div>
    );
}
