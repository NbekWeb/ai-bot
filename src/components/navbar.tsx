'use client'

import Home from "./icons/home"
import History from "./icons/history"
import User from './icons/user'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { href: '/dashboard/main', icon: <Home /> },
    { href: '/dashboard/main/history', icon: <History /> },
    { href: '/dashboard/main/profile', icon: <User /> },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="fixed bg-white-700 z-10 border-t border-gray-900 bottom-0 left-0 w-full h-18 px-10 flex items-center justify-between">
            {navItems.map(({ href, icon }) => (
                <Link href={href} key={href}>
                    <div className={`${pathname === href ? 'text-dark-100' : 'text-gray-900'} flex flex-col gap-2.5 text-2xl items-center`}>
                        {icon}
                        <span
                            className={`${pathname === href ? '' : 'opacity-0'} flex min-h-1.5 w-1.5 rounded bg-dark-100`}
                        ></span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
