import "./index.css"
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="group-wrapper my-5">
                    <div className="group py-3">
                        <img className="img" alt="Group" src="/assert/img/logo.png" />
                        <h1 className="gi-i-thi-u-v-ch-ng-t">
                            <span className="text-wrapper">
                                Giới thiệu
                                <br />
                            </span>
                            <span className="span">
                                Về chúng tôi
                                <br />
                                Thoả thuận sử dụng
                                <br />
                                Quy chế hoạt động
                                <br />
                                Chính sách bảo mật
                            </span>
                        </h1>
                        <p className="h-tr-g-p-sale">
                            <span className="text-wrapper">
                                Hỗ trợ <br />
                            </span>
                            <span className="span">
                                Góp ý<br />
                                Sale &amp; services
                                <br />
                                Rạp/ giá vé
                                <br />
                                Tuyển dụng
                            </span>
                        </p>
                        <p className="t-mua-theo-d-i-b-n">
                            <span className="text-wrapper">
                                Đặt mua <br />
                            </span>
                            <span className="span">
                                Theo dõi bản tin của chúng tôi để nhận được cập nhật và tin tức sớm nhất.
                                <br />
                            </span>
                        </p>
                        <div className="overlap-group">
                            <div className="div">Enter Email</div>
                        </div>
                        <div className="overlap">
                            <div className="text-wrapper-2">Đặt mua</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default Footer;