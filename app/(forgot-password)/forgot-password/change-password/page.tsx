'use client'

import { checkError } from "@/common/validation/error";
import { customerAPI } from "@/util/API/Customer";
import { errorNotification, successNotification } from "@/util/Notification";
import { Button, Card, Form, Input, Result } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ChangePassword = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userToken = searchParams.get("userToken");
    const email = searchParams.get("email");
    const [formCustomer] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        if (userToken != null && email != null) {
            const init = async () => {
                try {
                    const rs = await customerAPI.checkToken({ email: email || "0", userToken: userToken || "0" });
                } catch (e: any) {
                    if ((e.response.data.message && e.response.data.param)) {
                        setError(checkError(e.response.data.message, e.response.data.param))
                        errorNotification(checkError(e.response.data.message, e.response.data.param))
                    } else {
                        setError(e.response.data || "Something went wrong")
                        errorNotification(e.response.data || "Something went wrong")
                    }
                }
            }
            init();
        }
    }, [])
    const onFinish = async (values: { email: string, password: string, repassword: string }) => {
        try {
            const customer = await customerAPI.findByEmail(values.email);
            if (customer) {
                if(customer.token == userToken){
                    if (values.password === values.repassword) {
                        customer.password = values.password;
                        setLoading(true)
                        customerAPI.changePassword(customer).then(rs => {
                            setLoading(false)
                            successNotification("Đổi mật khẩu thành công!")
                            setTimeout(() => { router.push("/") }, 3000)
                        })
                    } else {
                        setLoading(false)
                        errorNotification("Mật khẩu không chính xác!");
                    }
                }else{
                    setLoading(false)
                    errorNotification("Token không hợp lệ!");
                }
            }
        } catch (error: any) {
            errorNotification(checkError(error.response.data.message, error.response.data.param) || "Sorry, Something went wrong.")
        }
    }
    const validateMessages = {
        required: '${label} là không được để trống!',
        types: {
            email: '${label} không phải là một email hợp lệ!',
            number: '${label} không phải là một con số hợp lệ!',
        },
        string: {
            range: '${label} phải ở giữa ${min} và ${max}!',
        },
    };
    return (
        <div className="mx-auto h-screen w-screen">
            {error === "" ?
                <Card className="border-0">
                    <h1 className="text-lg uppercase font-bold my-3">Đổi mật khẩu</h1>
                    <Form
                        form={formCustomer}
                        onFinish={onFinish}
                        layout={"vertical"}
                        style={{
                            maxWidth: 'none'
                        }}
                        size="middle"
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            required
                            name="email"
                            label="Email"
                            rules={[{ required: true }, { type: 'email' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            required
                            name="password"
                            label="Mật khẩu"
                            rules={[{ required: true }, { type: 'string', min: 8, max: 10 }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            required
                            name="repassword"
                            label="Xác nhận mật khẩu"
                            rules={[{ required: true }, { type: 'string', min: 8, max: 10 }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Button className="mr-3" loading={loading} onClick={() => formCustomer.submit()} size="middle">Xác nhận</Button>
                    </Form >
                </Card> :
                <Result status="error" title="Thông báo lỗi" subTitle={error} extra={[<Button onClick={() => { router.push("/") }} key="console">Trang chủ</Button>]} />
            }
        </div>
    );
}
export default ChangePassword;