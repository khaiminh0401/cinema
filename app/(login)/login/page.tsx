'use client'
import { FacebookSignInButton, GoogleSignInButton } from '@/components/authButtons';
import './index.css';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';
import Logo from './images/logo.png'
import hinh from './images/MP01.png'
const Login = () => {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const session = useSession();
    if (session.data) return redirect("/");

    const onSubmit = async (e: any) => {
        const result = await signIn("credentials", {
            email: e.email,
            password: e.password,
            redirect: false,
            callbackUrl: '/'
        });
        if (result?.error) {
            setShow(true)
        }
    }
    return (
        <>
            <main>
                <div className='box'>
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="logo">
                                    <Image src={Logo} alt='' width={100} height={100} />
                                </div>
                                <div className="heading">
                                    <h2>Xin chào</h2>
                                    <h6>Chưa có tài khoản?</h6>
                                    <a href='#' className='toggle'>Đăng ký</a>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <input type="email" className="input-field" {...register('email', { required: true })} placeholder='Email' />
                                    </div>
                                    <div className="input-wrap">
                                        <input type="password" className="input-field" {...register('password', { required: true })} placeholder='Mật khẩu' />
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
            </main>
        </>
    );
}
export default Login;
