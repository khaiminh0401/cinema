import "./index.css"

const FormSignUp = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="signup-content">
                        <form method="POST" id="signup-form" className="signup-form">
                            <h2>Đăng ký </h2>
                            <p className="desc">
                                to get discount 10% when pre - order <span>“Batman Beyond”</span>
                            </p>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    name="name"
                                    id="name"
                                    placeholder="Họ và tên"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    name="phone"
                                    id="phone"
                                    placeholder="Số điện thoại"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-input"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    name="password"
                                    id="password"
                                    placeholder="Mật khẩu"
                                />
                                <span className="bi bi-eye"></span>
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="agree-term"
                                    id="agree-term"
                                    className="agree-term"
                                />
                                <label htmlFor="agree-term" className="label-agree-term">
                                    <span>
                                        <span />
                                    </span>
                                    I agree all statements in{" "}
                                    <a href="#" className="term-service">
                                        Terms of service
                                    </a>
                                </label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    className="form-submit submit"
                                    defaultValue="Sign up"
                                />
                                <a href="#" className="submit-link submit">
                                    Đăng nhập
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FormSignUp;