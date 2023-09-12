'use client'
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { SignOutButton } from "../authButtons";
import Link from "next/link";
const Navbar = () => {
    const [setting, setSetting] = useState(false);
    const [menu, setMenu] = useState(false);
    const { data: session } = useSession();
    const userImage = session?.user?.image ? (
        <Image
            className="h-8 w-8 rounded-full"
            src={session?.user?.image}
            width={200}
            height={200}
            alt={session?.user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null
    const handleUser = () => {
        if (setting) {
            setSetting(false)
        } else setSetting(true)

    }
    const handleMenu = () => {

        if (menu) {
            setMenu(false)
        } else setMenu(true)
    }
    return (
        <nav className="bg-gray-900 py-3">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button type="button" onClick={handleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5" />
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="/" className="flex items-center">
                                <img className="h-8 w-auto float-right" src="/assert/img/logo.png" alt="Your Company" />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white  focus:text-red-500 focus:opacity-80 rounded-md px-3 py-2 text-lg font-medium">Phim</Link>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white  focus:text-red-500 focus:opacity-80 rounded-md px-3 py-2 text-lg font-medium">Rạp</Link>
                                <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white  focus:text-red-500 focus:opacity-80 rounded-md px-3 py-2 text-lg font-medium">Khuyến mãi</Link>
                                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white  focus:text-red-500 focus:opacity-80 rounded-md px-3 py-2 text-lg font-medium">Giới thiệu</Link>
                                <FaSearch className="text-gray-300  hover:bg-gray-700 hover:text-white  focus:text-red-500 focus:opacity-80 rounded-md px-3 py-2 text-lg font-medium" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {session ? 
                        (
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" onClick={handleUser} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5" />
                                        {userImage}
                                    </button>
                                </div>
                                {setting && 
                                (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">{session?.user?.name}</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{session?.user?.email}</span>
                                    </div>
                                    <hr />
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Thông tin cá nhân</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">cài đặt</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">đơn hàng</a>
                                    <SignOutButton />
                                </div>
                                )}
                            </div>
                        ) :
                            (
                                <button className="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-red-700 to-red-800 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
                                    <Link href="/login">Đăng nhập</Link>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className="sm:hidden" id="mobile-menu">
                {menu && (<div className="space-y-1 px-2 pb-3 pt-2">
                    <Link href="#" className="text-gray-300 block hover:bg-gray-700 hover:text-white focus:bg-gray-0 focus:text-red-500 focus:bg-gray-700 rounded-md px-3 py-2 text-base font-medium">Phim</Link>
                    <Link href="#" className="text-gray-300 block hover:bg-gray-700 hover:text-white focus:bg-gray-0 focus:text-red-500 focus:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium">Rạp</Link>
                    <Link href="#" className="text-gray-300 block hover:bg-gray-700 hover:text-white focus:bg-gray-0 focus:text-red-500 focus:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium">Khuyến mãi</Link>
                    <Link href="#" className="text-gray-300 block hover:bg-gray-700 hover:text-white focus:bg-gray-0 focus:text-red-500 focus:bg-gray-700 rounded-md px-3 py-2 text-lg font-medium">Giới thiệu</Link>
                </div>)}
            </div>
        </nav >

    );
}


export default Navbar;
