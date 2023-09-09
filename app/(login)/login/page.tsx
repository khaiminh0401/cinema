'use client'
import './index.css';
import { FacebookSignInButton, GoogleSignInButton } from '@/components/authButtons';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Logo from './images/logo.png'
import Image from 'next/image';
import hinh from './images/MP01.png'
import { Validation } from '@/common/Validation/LoginValidation';
import { Error } from '@/common/Validation/error';
import { notification } from 'antd';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [api, contextHolder] = notification.useNotification();
    const session = useSession();
    if (session.data) return redirect("/");
    const onSubmit = async (data: any) => {
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
        });
        if (result?.error) {
            if (result?.error === Error.WRONG.code)
                api.error({ message: "Thông báo lỗi", description: Error.WRONG.message + "mật khẩu. Vui lòng thử lại!" })
            else if (result?.error === Error.NOT_EXISTS.code) {
                api.error({ message: "Thông báo lỗi", description: "Email" + Error.NOT_EXISTS.message })
            }
        }

    }
    return (
        <>
            {contextHolder}
            <div className='container'>
                <div className='box'>
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                                <div >
                                    <Image src={Logo} alt='' width={100} height={100} />
                                </div>
                                <div className="heading">
                                    <h2>Chào mừng</h2>
                                    <h6>Chưa có tài khoản? </h6>
                                    <a href='#' className='toggle'>Đăng ký</a>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <input type="email" className="input-field" {...register('email', Validation.email)} placeholder='Email' />

                                        <p className='text mt-1'>{errors.email?.message as string}</p>

                                    </div>
                                    <div className="input-wrap">
                                        <input type="password" className="input-field" {...register('password', Validation.password)} placeholder='Mật khẩu' />
                                        <p className='text mt-1'>{errors.password?.message as string}</p>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-2'>
                                            <input type="checkbox" />
                                        </div>
                                        <p className='text-white col-9'>Ghi nhớ đăng nhập?</p>
                                    </div>


                                    <input type="submit" value="Đăng nhập" className='sign-btn' />
                                </div>


                                <hr />
                                <div className='row'>
                                    <GoogleSignInButton />
                                    <FacebookSignInButton />
                                </div>
                            </form>
                        </div>

                        <div className="carousel">
                            <div className="images-wrapper">
                                <Image src={hinh} alt='' className='image img-1' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;
