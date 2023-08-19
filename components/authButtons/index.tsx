'use client'
import "./index.css"
import Image from "next/image"
import googleLogo from "@/public/assert/img/provider/google.png"
import facebookLogo from "@/public/assert/img/provider/facebook.png"
import { signIn, signOut,SignOutResponse } from "next-auth/react"

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button
            onClick={handleClick}
            className="login-button"
        >
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <span className="ml-4">Đăng nhập bằng Google</span>
        </button>

    )
}
export function FacebookSignInButton() {
    const handleClick = () => {
        signIn("facebook");
    };

    return (
        <button
            onClick={handleClick}
            className="login-button"
        >
            <Image src={facebookLogo} alt="FaceBook Logo" width={20} height={20} />
            <span className="ml-4">Đăng nhập bằng Facebook</span>
        </button>

    )
}

export function SignOutButton() {
    const handleClick = () => {
        signOut();
    };
    return (
        <button onClick={handleClick}
            className="logout-button"
        >
        <span className="ml-4">Đăng xuất</span>
        </button>
    )
}