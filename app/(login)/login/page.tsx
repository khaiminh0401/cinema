'use client'
import { Validation } from '@/common/validation/page/login';
import Input from '@/components/Input/page';
import { FacebookSignInButton, GoogleSignInButton } from '@/components/authButtons';
import Logo from '@/public/assert/img/logo.png';
import { errorNotification } from '@/util/Notification';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import './index.css';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const session = useSession();
    if (session.data) return redirect("/");
    const onSubmit = async (data: any) => {
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        });
        if (result?.error) {
            errorNotification(result.error)
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
                                    <Link href='/register' className='toggle'>Đăng ký</Link>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <Input type="email" className="input-field" register={register('email', Validation.email)} placeholder='Email' />

                                        <p className='text mt-1'>{errors.email?.message as string}</p>

                                    </div>
                                    <div className="input-wrap">
                                        <Input type="password" className="input-field" register={register('password', Validation.password)} placeholder='Mật khẩu' />
                                        <p className='text mt-1'>{errors.password?.message as string}</p>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className='col-2'>
                                            <Input type="checkbox" />
                                        </div>
                                        <p className='text-white col-9'>Ghi nhớ đăng nhập?</p>
                                    </div>


                                    <button type="submit" className='sign-btn'>Đăng nhập</button>
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
                                <Image src="" alt='Carousel' className='image img-1' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;
