import {
    FaFacebook, FaTwitter, FaGoogle, FaYoutube,
    FaArrowRight, FaLocationDot, FaEnvelope, FaPhone
}
    from "react-icons/fa6";

import "./index.css"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row pt-5">
                        <div className="footer-col col-md-3">
                            <ul className="list-menu mb-2">
                                <img className="img pt-4 pb-4" alt="Group" src="/assert/img/logo.png" width={150} />
                                <li className="li_menu">
                                    <a href="#">
                                        <FaLocationDot /> Artistic - Art &amp; Craft Store <br />
                                        507-Union Trade Centre France
                                    </a>
                                </li>
                                <li className="li_menu"> <a href="#"><FaEnvelope /> demo@example.com</a></li>
                                <li className="li_menu"> <a href="#"><FaPhone /> 000-000-000</a></li>
                                <li className="li_menu"></li>
                            </ul>

                            <div className="social-accounts d-flex justify-content-between mt-4">
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaGoogle /></a>
                                <a href=""><FaYoutube /></a>
                            </div>
                        </div>
                        <div className="footer-col col-md-3">
                            <ul className="list-menu">
                                <h3 className="text-danger">Giới thiệu</h3>
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Về chúng tôi</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Thỏa thuận sử dụng</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Quy chế hoạt động</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Chính sách bảo mật</a></li>
                                <p />
                            </ul>
                        </div>
                        <div className="footer-col col-md-3">

                            <ul className="list-menu">
                                <h3 className="text-danger">Hỗ trợ</h3>
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Góp ý</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Sale & services</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Rạp/ giá vé</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><FaArrowRight /> Tuyển dụng</a></li>
                                <p />
                            </ul>
                        </div>
                        <div className="footer-col col-md-3">
                            <ul className="list-menu">
                                <h3 className="text-danger">Đặt mua</h3>
                                <form className="">
                                    <span className="span"> Theo dõi bản tin của chúng tôi để nhận được cập nhật và tin tức sớm nhất. </span>
                                    <input className="form-control me-2 fox2 rounded-5 mt-4 p-3" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-danger bg-danger text-light fox2 mt-3 p-3 rounded-5" type="submit">Search</button>
                                </form>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fo mt-5 text-center pb-1">
                    <hr />
                    © Copyright 2021, All Rights Reserved
                </div>
            </footer>

        </>
    );

};
export default Footer;