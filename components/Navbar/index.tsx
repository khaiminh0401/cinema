import Image from "next/image";
import "./index.css";
const Specical = () => {
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

const Default = () => {
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
                            <a className="nav-link " aria-current="page" href="#">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2" href="#">Phim</a>
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
                        <i className="bi bi-search nav-link mx-2"></i>
                        <i className="bi bi-basket2-fill nav-link mx-2"></i>
                    </ul>
                    <div className="overlap-group-wrapper ms-5">
                        <div className="overlap-group">
                            <div className="text-wrapper-6 text-light">Đăng nhập</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>




    );
}


export const Navbar = {
    Specical,
    Default
};