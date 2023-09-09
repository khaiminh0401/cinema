'use client'
import Image from "next/image";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import "./index.css";
import { useSession } from "next-auth/react";
import { SignOutButton } from "../authButtons";
import Link from "next/link";
const Navbar = () => {
    const { data: session } = useSession();
    const userImage = session?.user?.image ? (
        <Image
            className="Image Profile"
            src={session?.user?.image}
            width={200}
            height={200}
            alt={session?.user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" alt="Group" src="/assert/img/logo.png" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-1 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2" href="#">Phim</Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-2" href="#">Rạp</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-2" href="#">Ưu đãi</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-2" href="#">Hỗ trợ</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link mx-2" href="#">Giới thiệu</a>
                        </li>
                        <li className="nav-item mx-2 my-auto">
                            <FaSearch />
                        </li>
                        <li className="nav-item mx-2 my-auto">
                            <FaShoppingBasket />
                        </li>
                    </ul>
                    <div className="overlap-group-wrapper ms-5">
                        {session ? (<>
                            <p>{session?.user?.name}</p>
                            {userImage}
                            <SignOutButton />
                        </>) :
                            (<>
                                <div className="overlap-group">
                                    <Link href="/login" className="text-wrapper-6 text-decoration-none text-light">Đăng nhập</Link>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
