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
                <button className="btn btn-danger">Đăng nhập</button>
            </section>
        </nav>
    );
}

const Default = () => {
    return (
        <div className="navbar">
            <div className="group-wrapper">
                <div className="group">
                    <div className="navbar">
                        <i className="bi bi-search layer"></i>
                        <div className="text-wrapper">Trang chủ</div>
                        <div className="div">Phim</div>
                        <div className="text-wrapper-2">Rạp </div>
                        <div className="text-wrapper-3">Ưu đãi</div>
                        <div className="text-wrapper-4">Hỗ trợ</div>
                        <div className="text-wrapper-5">Giới thiệu</div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                <div className="text-wrapper-6">Đăng nhập</div>
                            </div>
                        </div>
                    </div>
                    <img className="img" alt="Group" src="/assert/img/logo.png" />
                </div>
            </div>
        </div>
    );
}


export const Navbar = {
    Specical,
    Default
};