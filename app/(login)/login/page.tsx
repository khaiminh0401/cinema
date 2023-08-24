'use client'
import { FacebookSignInButton, GoogleSignInButton } from '@/components/authButtons';
import './index.css';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
const Login = () => {
    const session = useSession();
    if(session.data) return redirect("/");
    
    return (
        <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="">
                        <div className="form-container row ">
                            <div className="left-content  col-4 col-sm-4 col-lg-4">
                            </div>
                            <div className="right-content  col-8 col-sm-8 col-lg-7">
                                <h3 className="form-title">Login</h3>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label>Username / Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <button className="btn signin">Login</button>
                                    <div className="remember-me">
                                        <input type="checkbox" className="checkbox" />
                                        <span className="check-label">Remember Me</span>
                                    </div>
                                    <a className="forgot">Forgot Password</a>
                                </form>
                                <span className="signup-link col-4 fs-7 fw-bolder">Không có tài khoản? đăng kí <a>ở đây</a></span>
                                <div className='signup-link fw-bolder'>hoặc</div>
                                <div className='row text-center'>
                                    <div className='row'>
                                        <GoogleSignInButton />
                                        <FacebookSignInButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default Login;
