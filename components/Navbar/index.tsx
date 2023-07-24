import Image from "next/image";


const Navbar = () => {
    return (
        <nav className="navbar bg-opacity justify-content-around">
            <Image src="/assert/img/logo.png" width={"150"} height={"50"} alt="" />
            <section className="d-flex justify-content-between align-items-center w-50">
                <a className="nav-link fw-bold">Phim</a>
                <a className="nav-link fw-bold">Lịch chiếu</a>
                <a className="nav-link fw-bold">Liên hệ</a>
                <a className="nav-link fw-bold">Về chúng tôi</a>
                <button className="btn btn-danger"><a href="http://localhost:3000/login">Đăng nhập</a></button>
            </section>
        </nav>
    );
}
export default Navbar;