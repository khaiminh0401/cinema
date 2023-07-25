'use client'
import { use, useEffect, useState } from 'react';
import { customerAPI } from "@/util/API/Customer";
import './index.css';
import Input from "@/components/Input/page";
const login = () => {
    const [inputs, setInputs] = useState({});


    // const handleSubmit = async (event: any) => {
    //     event.preventDefault();
    //     console.log(inputs);
    //     const data = await customerAPI.findByKey(inputs);
    //     console.log(data);
    //     if (data != null) {
    //         window.location.href = "http://localhost:3000";
    //     }
    // };
    // const handleChange = (event: any) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({ ...values, [name]: value }))
    // };
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
                                <div className='row'>
                                    <ul className="social-links col-8">
                                        <div className='row'>
                                            <li className="fab fa-google col-5"><a href=''  > Login with Google</a></li>
                                            <li className="fab fa-facebook-f col-5"><a href=''  > Login with Facebook</a></li>
                                        </div>
                                    </ul>
                                    <span className="signup-link col-4 fs-7 fw-bolder">Don't have an account? Sign up <a>here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default login;
