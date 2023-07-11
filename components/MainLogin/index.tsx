import { use, useEffect, useState } from 'react';
import { customerAPI } from "@/util/API/Customer";
import { log } from 'console';
const MainLogin = () => {
    const [inputs, setInputs] = useState({});


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(inputs);
        const data = await customerAPI.findByKey(inputs);
        console.log(data);
    };
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };
    return (<form action="">
        <div className="form-row">
            <div className="col-lg-7">
                <input type="email" name="email" placeholder="Username" onChange={handleChange} className="form-control my-3 p-2" defaultValue="" title="" />
            </div>
            <div className="col-lg-7">
                <input type="password" name="password" placeholder="***********" onChange={handleChange} className="form-control my-3 p-2" defaultValue="" title="" />
            </div>
        </div>
        <div className="form-row">
            <div className="col-lg-7">
                <button type="button" className="btn1 my-3 p-2 mb-5" onClick={handleSubmit}> Login</button>
            </div>
        </div>
        <a href="/"> Forgot password</a>
        <p>Dont have a account <a href="/">Register here</a>
        </p>
    </form>);
}
export default MainLogin;