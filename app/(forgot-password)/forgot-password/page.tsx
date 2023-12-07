'use client'

import { checkError } from "@/common/validation/error";
import { customerAPI } from "@/util/API/Customer";
import { errorNotification, successNotification } from "@/util/Notification";
import { Button, Card, Form, Input } from "antd";
import { useState } from "react";

const ForgotPassword = () => {
    const [formForgot] = Form.useForm();
    const [loading, setLoading] = useState(false);
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

    const onFinish = (values: { email: string }) => {
        setLoading(true)
        customerAPI.forgotPassword(values.email).then(rs => {
            setLoading(false)
            successNotification("Gửi thành công vui lòng kiểm tra email!")
        }).catch(error => {
            setLoading(false)
            errorNotification(checkError(error.response.data.message, error.response.data.param) || "Sorry, Something went wrong.")
        })
    }
    return (
        <div className="mx-auto h-screen w-6/12">
            <Card className="border-0">
                <h1 className="text-lg uppercase font-bold my-3">Quên mật khẩu</h1>
                <Form
                    form={formForgot}
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
                    <Button className="mr-3" loading={loading} onClick={() => formForgot.submit()} size="middle">Xác nhận</Button>
                </Form >
            </Card>
        </div>
    );
}
export default ForgotPassword;