import { use, useEffect, useState } from 'react';
import { customerAPI } from "@/util/API/Customer";
import { log } from 'console';
import './index.css';
const MainLogin = () => {
    const [inputs, setInputs] = useState({});


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(inputs);
        const data = await customerAPI.findByKey(inputs);
        console.log(data);
        if (data != null) {
            window.location.href = "http://localhost:3000";
        }
    };
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };


    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="signup-content">
                        <form method="" id="signup-form" className="signup-form">
                            <h2>Đăng nhập</h2>
                            <p className="desc">
                                to get discount 10% when pre - order <span>“Batman Beyond”</span>
                            </p>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-input"
                                    name="email"
                                    id="email"
                                    placeholder="Username"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-input"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <span className="bi bi-eye"></span>
                            </div>
                            <a href="/"> Forgot password</a>
                            <p>Dont have a account <a href="/">Register here</a></p>
                            <div className="form-group">
                                <button onClick={handleSubmit} className="submit-link submit">
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MainLogin;