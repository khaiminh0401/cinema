'use client'

import { checkError } from "@/common/validation/error";
import { Validation } from "@/common/validation/page/registration";
import { checkStatus } from "@/common/validation/status";
import Input from "@/components/Input/page";
import { customerAPI } from "@/util/API/Customer";
import { errorNotification, successNotification } from "@/util/Notification";
import Link from 'next/link';
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from 'antd';
import Navbar from "../../navbar";

/**
 * Object of Register
 */
type RegisterProps = {
    currentPassword: string,
    password: string,
    repassword: string,
}

const ChangePassword = () => {
    const [flag, setFlag] = useState<boolean>();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterProps>();
    const formData = new FormData();

    const onSubmit: SubmitHandler<RegisterProps> = async (data) => {
        if (data.password !== data.repassword) {
            return errorNotification("Mật khẩu không khớp, vui lòng thử lại !");
        }

        try {
            formData.append('customerId', '1');
            formData.append('currentPassword', data.currentPassword);
            formData.append('newPassword', data.password);

            await customerAPI.updatePassword(formData);
            reset();
        } catch (e: any) {
            errorNotification(checkError(e.response.data.message, e.response.data.param) || "")
        }

    };

    return (
        <div className="flex flex-row">
            <div className="basis-1/4"><Navbar /></div>
            <div className="basis-2/4">
                <Form
                    name="basic"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 17 }}
                    labelAlign="left"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit(onSubmit)}
                    onFinishFailed={() => { }}
                    autoComplete="off"
                >
                    <h2 className="font-bold text-2xl mb-10 text-white text-left">Đổi mật khẩu</h2>

                    <Form.Item<RegisterProps>
                        label={<span className="text-white">Mật khẩu hiện tại</span>}
                        name="currentPassword"
                        colon={false}
                    >
                        <Input
                            type="password"
                            className="w-full bg-inherit border border-white rounded-sm text-white"
                            register={register("currentPassword", Validation.password)}
                        />
                        <div className="text-red-600 mt-1">{errors.password?.message}</div>
                    </Form.Item>

                    <Form.Item<RegisterProps>
                        label={<span className="text-white">Mật khẩu mới</span>}
                        name="password"
                        colon={false}
                    >
                        <Input
                            type="password"
                            className="w-full bg-inherit border border-white rounded-sm text-white"
                            register={register("password", Validation.password)}
                        />
                        <div className="text-red-600 mt-1">{errors.password?.message}</div>
                    </Form.Item>

                    <Form.Item<RegisterProps>
                        label={<span className="text-white">Nhập lại mật khẩu</span>}
                        name="repassword"
                        colon={false}
                    >
                        <Input
                            type="password"
                            className="w-full bg-inherit border border-white rounded-sm text-white"
                            register={register("repassword", Validation.password)}
                        />
                        <div className="text-red-600 mt-1">{errors.password?.message}</div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <button
                            disabled={flag}
                            className="w-1/3 py-2 rounded-md bg-blue-500 text-white shadow-none 
                        hover:scale-105 hover:shadow-none hover:bg-blue-600 focus:scale-105 
                        focus:shadow-none active:scale-100"
                        >
                            Thay đổi
                        </button>
                    </Form.Item>
                </Form>

                <div className='text-center'>
                    <span className="text-white">
                        Bạn quên mật khẩu ư?
                        <Link href="/" className="text-cyan-400"> Nhấn vào đây</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;