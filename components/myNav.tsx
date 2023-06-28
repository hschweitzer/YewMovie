'use client';

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export const MyNav = () => {
    const pathname = usePathname();
    const active = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
    const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center">
                        <Link href="/" className="flex flex-shrink-0 items-center">
                            <Image className="block h-8 w-auto"
                                   width={50}
                                   height={50}
                                   src="/images/YM.svg"
                                   alt="YM" />
                        </Link>
                        <div className="ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className={pathname == "/" ? active : inactive} aria-current="page">Home</Link>
                                <Link href="/editor" className={pathname == "/editor" ? active : inactive}>Editor</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};