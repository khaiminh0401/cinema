'use client'
import { checkError } from "@/common/validation/error";
import { Validation } from "@/common/validation/page/registration";
import { checkStatus } from "@/common/validation/status";
import Button from "@/components/Button/page";
import Input from "@/components/Input/page";
import { customerAPI } from "@/util/API/Customer";
import { errorNotification, successNotification } from "@/util/Notification";
import Link from 'next/link';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import './index.css';

/**
 * Object of Register
 */
type RegisterProps = {
    name: string,
    password: string,
    repassword: string,
    email: string,
    phone: string,
    gender: boolean
}
const Register = () => {
    const [flag, setFlag] = useState<boolean>();
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>();

    const onSubmit: SubmitHandler<RegisterProps> = async (inputs) => {
        setFlag(true);
        if (inputs.password === inputs.repassword) {
            try {
                if (checkStatus(await customerAPI.registration(inputs))) {
                    successNotification("Đăng ký tài khoản thành công, vui lòng kiểm tra email để kích hoạt tài khoản !")
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 3000);
                }
            } catch (e: any) {
                errorNotification(checkError(e.response.data.message, e.response.data.param) || "")
                setFlag(false)
            }
        } else {
            errorNotification("Mật khẩu không khớp, vui lòng thử lại !");
            setFlag(false)
        }
    };
    return (
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="form-container row">
                            <div className="left-content d-none d-lg-block col-auto col-lg-4 me-3">
                            </div>
                            <div className="right-content col-12 col-lg-7 rounded p-4">
                                <h3 className="form-title">Đăng ký</h3>
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Tên</label>
                                        <Input type="text" className="form-control" register={register("name", Validation.name)} />
                                        <div className="text-danger mt-1">{errors.name?.message}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <Input type="text" className="form-control" register={register("phone", Validation.phone)} />
                                        <div className="text-danger mt-1">{errors.phone?.message}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Input type="email" className="form-control" register={register("email", Validation.email)} />
                                        <div className="text-danger mt-1">{errors.email?.message}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <Input type="password" className="form-control" register={register("password", Validation.password)} />
                                        <div className="text-danger mt-1">{errors.password?.message}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Nhập lại mật khẩu</label>
                                        <Input type="password" className="form-control" register={register("repassword", Validation.password)} />
                                        <div className="text-danger mt-1">{errors.repassword?.message}</div>
                                    </div>

                                    <div className="form-group">
                                        <label>Giới tính</label>
                                        <div className="mt-3">
                                            <div className="form-check form-check-inline">
                                                <Input className="form-check-input" value='true' type="radio" register={register("gender", Validation.gender)}
                                                    name="inlineRadioOptions" id="inlineRadio1" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <Input className="form-check-input" value='false' type="radio" register={register("gender", Validation.gender)}
                                                    name="inlineRadioOptions" id="inlineRadio2" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                                            </div>
                                            <div className="text-danger mt-1">{errors.gender?.message}</div>
                                        </div>
                                    </div>
                                    <Button disabled={flag} text={"Đăng ký"} bgColor="#daa5206c" textColor="white" className="btn w-100" />
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
