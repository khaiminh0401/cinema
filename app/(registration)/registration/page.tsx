"use client"

import "./page.css";
import Input from "@/components/Input/page"
import Button from "@/components/Button/page"

const Registration = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <p className="text-danger"></p>
          <div className="signup-content">
            <form method="POST" id="signup-form" className="signup-form">
              <h2 className="heading">Đăng ký </h2>
              <div className="form-group">
                <Input type="text" className="form-input" name="name" id="name" placeholder="Họ và tên" />
              </div>
              <div className="form-group">
                <Input type="text" className="form-input" name="phone" id="phone" placeholder="Số điện thoại" />
              </div>
              <div className="form-group">
                <Input type="email" className="form-input" name="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <Input type="text" className="form-input" name="password" id="password" placeholder="Mật khẩu" />
              </div>
              <div className="form-group">
                <Input type="date" className="form-input" name="birthday" id="birthday" />
              </div>
              <div className="form-group">
                <div className="form-group-radio">
                  <label className="ok">Gender</label>
                  <div className="ok haha">
                    <Input type="radio" className="form-input-radio-gender" id="male" name="gender"></Input>
                    <label className="label-radio" htmlFor="male">Male</label>
                  </div>
                  <div className="ok haha">
                    <Input type="radio" className="form-input-radio-gender" id="female" name="gender"></Input>
                    <label className="label-radio" htmlFor="female">Female</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <Input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  I agree all statements in{" "}
                  <a href="#" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group">
                <Input type="submit" name="submit" id="submit" className="form-submit submit" defaultValue="Sign up" />
                <a href="#" className="submit-link submit">
                  Đăng nhập
                </a>
                {/* <Button key={1} ></Button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration;