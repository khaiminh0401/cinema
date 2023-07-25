import "./index.css"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row pt-5">
                        <div className="footer-col col-md-3">
                            <ul className="list-menu">
                                <img className="img pt-4 pb-4" alt="Group" src="/assert/img/logo.png" width={150} />
                                <li className="li_menu"> <a href="#"><i className="bi bi-geo-alt-fill">
                                </i>Artistic - Art &amp; Craft Store <br /> 507-Union Trade Centre France</a></li>
                                <li className="li_menu"> <a href="#"><i className="bi bi-envelope-open" />
                                    demo@example.com</a></li>
                                <li className="li_menu"> <a href="#"><i className="bi bi-printer-fill" /> 000-000-000</a>
                                </li>
                                <li className="li_menu "><div className="social-accounts d-flex ">
                                    <a href=""><i className="bi bi-facebook in" /></a>
                                    <a href=""><i className="bi bi-twitter in" /></a>
                                    <a href=""><i className="bi bi-google in " /></a>
                                    <a href=""><i className="bi bi-youtube in" /></a>
                                </div></li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-3">
                            <ul className="list-menu">
                                <h3 className="text-danger">Giới thiệu</h3>
                                <p>
                                </p><li className="li_menu"> <a href="#"><i className="bi bi-arrow-right" /> Về chúng tôi</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><i className="bi bi-arrow-right" /> Thỏa thuận sử dụng</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"> <i className="bi bi-arrow-right" /> Quy chế hoạt động</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"> <i className="bi bi-arrow-right" /> Chính sách bảo mật</a></li>
                                <p />
                            </ul>
                        </div>
                        <div className="footer-col col-md-3">

                            <ul className="list-menu">
                                <h3 className="text-danger">Hỗ trợ</h3>
                                <p>
                                </p><li className="li_menu"> <a href="#"><i className="bi bi-arrow-right" /> Góp ý</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><i className="bi bi-arrow-right" /> Sale & services</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"><i className="bi bi-arrow-right" /> Rạp/ giá vé</a></li>
                                <p />
                                <p>
                                </p><li className="li_menu"> <a href="#"> <i className="bi bi-arrow-right" /> Tuyển dụng</a></li>
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