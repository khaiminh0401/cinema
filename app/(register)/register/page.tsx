'use client'
import { use, useEffect, useState } from 'react';
import { customerAPI } from "@/util/API/Customer";
import './index.css';
import Input from "@/components/Input/page";
import Link from 'next/link';
const Register = () => {
    const [inputs, setInputs] = useState({});

    return (
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className=" form-container row ">
                            <div className="left-content d-none d-lg-block col-auto col-lg-4 me-3">
                            </div>
                            <div className="right-content col-12 col-lg-7 rounded p-4">
                                <h3 className="form-title">Đăng ký</h3>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label>Tên</label>
                                        <Input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <Input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <Input type="password" className="form-control" />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-8">
                                            <label>Ngày sinh</label>
                                            <Input type="date" className="form-control" />
                                        </div>
                                        <div className="form-group col-4 text-center">
                                            <label>Giới tính</label>
                                            <div className="mt-3">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <button className="btn signup">Đăng ký</button>
                                    <div className="remember-me">
                                        <Input type="checkbox" className="checkbox" />
                                        <span className="check-label ms-2">Nhớ mật khẩu</span>
                                    </div>
                                    {/* <a className="forgot">Forgot Password</a> */}
                                </form>
                                <div className='row'>
                                    <span className="signup-link col-12 fs-7 fw-bolder">Đã có tài khoản? Đăng nhập <Link href="/login">
                                        tại đây</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Register;
