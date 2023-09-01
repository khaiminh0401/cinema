'use client'
import { FacebookSignInButton, GoogleSignInButton } from '@/components/authButtons';
import './index.css';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Logo from './images/logo.png'
import Image from 'next/image';
import hinh from './images/MP01.png'
interface IFormInput {
    email: string;
    password: string;
}
const Login = () => {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();

    const session = useSession();
    if (session.data) return redirect("/");

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
            callbackUrl: '/'
        });
        if (result?.error) {
            setShow(true)
        }
    }
    return (
        <>
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
                                        <input type="text" className="input-field" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} placeholder='Email' />
                                        {errors?.email?.type === "pattern" && (
                                            <p className='text'>Không đúng định dạng email</p>
                                        )}
                                        {errors?.email?.type === "required" && (
                                            <p className='text'>Vui lòng nhập thông tin</p>
                                        )}
                                    </div>
                                    <div className="input-wrap">
                                        <input type="password" className="input-field" {...register('password', { required: true })} placeholder='Mật khẩu' />
                                        {errors?.password?.type === "required" && (
                                            <p className='text'>Vui lòng nhập thông tin</p>
                                        )}
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-2'>
                                            <input type="checkbox" />
                                        </div>
                                        <p className='text-white col-9'>Ghi nhớ đăng nhập?</p>
                                    </div>
                                    {show && (<>
                                        <p className='text'>Tài khoản và mật khẩu không đúng</p>
                                    </>)}

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
