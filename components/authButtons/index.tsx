'use client'
import "./index.css"
import { signIn, signOut } from "next-auth/react"

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button
            onClick={handleClick}
            className="login-button"
        >
            
            <i className="bi bi-google fs-6 me-1 text-primary"></i>
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
            <i className="bi bi-facebook fs-6 me-1 text-primary"></i>
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