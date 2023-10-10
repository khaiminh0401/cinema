'use client'

import {checkError} from "@/common/validation/error";
import {Validation} from "@/common/validation/page/registration";
import Input from "@/components/Input/page";
import {customerAPI} from "@/util/API/Customer";
import {errorNotification, successNotification} from "@/util/Notification";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Form} from 'antd';
import Navbar from "../../navbar";

/**
 * Object of Register
 */
type ChangePasswordProps = {
    password: string,
    newPassword: string,
    reNewPassword: string,
}

const ChangePassword = () => {
    const [flag, setFlag] = useState<boolean>();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<ChangePasswordProps>();
    const formData = new FormData();

    const onSubmit: SubmitHandler<ChangePasswordProps> = async (data) => {
        const account = {
            customerId: 1,
            ...data
        }

        if (data.newPassword !== data.reNewPassword) {
            return errorNotification("Mật khẩu không khớp, vui lòng thử lại !");
        }

        try {
            await customerAPI.updatePassword(account);
            reset();
            successNotification("Thay đổi mật khẩu thành công!")
        } catch (e: any) {
            errorNotification(checkError("Mật khẩu hiện tại", e.response.data.message) || "")
        }
    };

    return (
        <div className="flex flex-row">
            <div className="basis-1/4"><Navbar/></div>
            <div className="basis-2/4">
                <Form
                    name="basic"
                    labelCol={{span: 7}}
                    wrapperCol={{span: 17}}
                    labelAlign="left"
                    initialValues={{remember: true}}
                    onFinish={handleSubmit(onSubmit)}
                    onFinishFailed={() => {
                    }}
                    autoComplete="off"
                >
                    <h2 className="font-bold text-2xl mb-10 text-white text-left">Đổi mật khẩu</h2>

                    <Form.Item
                        label={<span className="text-white">Mật khẩu hiện tại</span>}
                        colon={false}
                    >
                        <Input
                            type="password"
                            className="w-full bg-inherit border border-stone-700 rounded-sm text-white"
                            register={register("password", Validation.password)}
                        />
                        <div className="text-red-600 mt-1">{errors.password?.message}</div>
                    </Form.Item>

                    <Form.Item
                        label={<span className="text-white">Mật khẩu mới</span>}
                        colon={false}
                    >
                        <Input
                            type="password"
                            className="w-full bg-inherit border border-stone-700 rounded-sm text-white"
                            register={register("newPassword", Validation.password)}
                        />
                        <div className="text-red-600 mt-1">{errors.password?.message}</div>
                    </Form.Item>

                    <Form.Item
                        label={<span className="text-white">Nhập lại mật khẩu</span>}
                        colon={false}
                    >
                        <Input
                            type="password"
                            className="w-full bg-inherit border border-stone-700 rounded-sm text-white"
                            register={register("reNewPassword", Validation.password)}
                        />
                        <div className="text-red-600 mt-1">{errors.password?.message}</div>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <button
                            disabled={flag}
                            className="w-1/3 py-2 rounded-md bg-red-500 text-white shadow-none
                        hover:scale-105 hover:shadow-none hover:bg-red-600 focus:scale-105
                        focus:shadow-none active:scale-100"
                        >
                            Thay đổi
                        </button>
                    </Form.Item>
                </Form>

                {/*<div className='text-center'>*/}
                {/*    <span className="text-white">*/}
                {/*        Bạn quên mật khẩu ư?*/}
                {/*        <Link href="/" className="text-cyan-400"> Nhấn vào đây</Link>*/}
                {/*    </span>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default ChangePassword;