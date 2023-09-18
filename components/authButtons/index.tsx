'use client'
import { signIn, signOut } from "next-auth/react"
import { BiLogoFacebookCircle, BiLogoGoogle } from "react-icons/bi";

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button onClick={handleClick} className="flex select-none items-center bg-white text-gray-800 my-2 gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-8 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
            <BiLogoGoogle/>
            Đăng nhập bằng google
        </button>
    )
}
export function FacebookSignInButton() {
    const handleClick = () => {
        signIn("facebook");
    };

    return (
        <button onClick={handleClick} className="flex select-none items-center bg-white text-gray-800 my-2 gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
        <BiLogoFacebookCircle/>
        Đăng nhập bằng facebook
    </button>

    )
}

export function SignOutButton() {
    const handleClick = () => {
        signOut();
    };
    return (
        <p onClick={handleClick}
            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-400 hover:cursor-pointer"
        >
            Đăng xuất
        </p>
    )
}