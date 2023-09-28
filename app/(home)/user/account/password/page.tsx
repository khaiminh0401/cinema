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
import {useSession} from "next-auth/react";
import {checkStatus} from "@/common/validation/status";

/**
 * Object of Register
 */
type ChangePasswordProps = {
    password: string,
    newPassword: string,
    reNewPassword: string,
}

const ChangePassword = () => {
    // const [flag, setFlag] = useState<boolean>();
    const {data: session} = useSession();

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<ChangePasswordProps>();
    const formData = new FormData();

    const userId = session?.user.id;

    const onSubmit: SubmitHandler<ChangePasswordProps> = async (data) => {
        const account = {
            customerId: userId,
            ...data
        }

        if (data.newPassword !== data.reNewPassword) {
            return errorNotification("Mật khẩu không khớp, vui lòng thử lại !");
        }

        // await customerAPI.updatePassword(account).then(() => {
        //     setTimeout(() => {
        //         reset();
        //         successNotification("Thay đổi mật khẩu thành công!");
        //     }, 0);
        // }).catch((e) => {
        //     errorNotification("Mập khau")
        // });
        if (checkStatus(await customerAPI.updatePassword(account))) {
            successNotification("Thay đổi mật khẩu thành công!");
        }

        reset({
            password: "",
            newPassword: "",
            reNewPassword: ""
        });
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
                {/* Cột 1: Navbar */}
                <div className="md:col-span-1">
                    <div className="p-4">
                        <Navbar/>
                    </div>
                </div>

                {/* Cột 2: Change password */}
                <div className="sm:col-span-1 md:col-span-2">
                    <div className="p-4">
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
                                name={"password"}
                                colon={false}
                            >
                                <Input
                                    type="password"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    register={register("reNewPassword", Validation.password)}
                                />
                                <div className="text-red-600 mt-1">{errors.password?.message}</div>
                            </Form.Item>

                            <Form.Item wrapperCol={{offset: 8, span: 16}} className={"mt-8"}>
                                <button
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
  <span
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Thay đổi mật khẩu
  </span>
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;