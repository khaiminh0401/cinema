'use client'
import { Button, Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SignOutButton } from "../authButtons";
const Navbar = () => {
    const [openNav, setOpennav] = useState(false);
    const [openUser, setOpenUser] = useState(false);
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
    const navList = (
        <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="lead"
                color="white"
                className="p-1 font-normal"
            >
                <Link href="#" className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80">
                    Phim
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="lead"
                color="white"
                className="p-1 font-normal"
            >
                <Link href="#" className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80">
                    Rạp
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="lead"
                color="white"
                className="p-1 font-normal"
            >
                <Link href="#" className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80">
                    Khuyến mãi
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="lead"
                color="white"
                className="p-1 font-normal"
            >
                <Link href="#" className="flex items-center hover:text-red-500 focus:text-red-500 focus:opacity-80">
                    Giới thiệu
                </Link>
            </Typography>
        </ul>
    );
    return (
        <nav className="w-3/4 bg-inherit py-3 mx-auto">
            <div className="mx-auto max-w-full px-2 sm:px-8 lg:px-5">
                <div className="relative flex h-16 items-center justify-evenly">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => setOpennav(!openNav)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <FaBars />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <a href="/" className="flex items-center">
                                <img className="h-8 w-auto float-right" src="/assert/img/logo.png" alt="Your Company" />
                            </a>
                        </div>
                        <div className="hidden md:block mx-auto">
                            <div className="flex space-x-4">
                                {navList}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {session ?
                            (
                                <div className="relative ml-3">
                                    <div>
                                        <button type="button" onClick={() => setOpenUser(!openUser)} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="absolute -inset-1.5" />
                                            {userImage}
                                        </button>
                                    </div>
                                    {openUser &&
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
                                <div className="md:flex flex-row hidden ">
                                    <Button variant="gradient" size="sm" color="gray" className="mr-1">
                                        <Link href="/login">Đăng nhập</Link>
                                    </Button>
                                    <Button variant="gradient" size="sm" color="red">
                                        <Link href="/register">Đăng kí</Link>
                                    </Button>

                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                {openNav && (<div className="space-y-1 px-2 pb-3 pt-2">
                    {navList}
                    {!session && (
                        <div className="md:flex flex-row">
                            <Button variant="gradient" size="sm">
                                <Link href="/login">Đăng nhập</Link>
                            </Button>
                        </div>)}
                </div>)}

            </div>
        </nav >
    );
}


export default Navbar;
