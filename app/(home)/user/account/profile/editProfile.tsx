import { Validation } from "@/common/validation/page/registration";
import Input from "@/components/Input/page";
import { customerAPI } from "@/util/API/Customer";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from 'antd';

/**
 * Object of Register
 */
type EditProfileProps = {
    name: string,
    email: string,
    phone: string,
    gender: boolean
}

const EditProfile = ({...props} : customer) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<EditProfileProps>();

    const onSubmit: SubmitHandler<EditProfileProps> = async (data) => {
        const newCustomer = {
            id: 1,
            ...data
        }

        await customerAPI.editProfile(newCustomer);

        reset();
    };

    return (
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
            <section className="mb-10 text-white text-left">
                <h2 className="font-bold text-2xl">Hồ Sơ Của Tôi</h2>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </section>

            <Form.Item<EditProfileProps>
                label={<span className="text-white">Tên</span>}
                name="name"
                colon={false}
            >
                <Input
                    type="text"
                    className="w-full bg-inherit border border-white rounded-sm text-white"
                    register={register("name", Validation.name)}
                />
                <div className="text-red-600 mt-1">{errors.name?.message}</div>
            </Form.Item>

            <Form.Item<EditProfileProps>
                label={<span className="text-white">Số điện thoại</span>}
                name="phone"
                colon={false}
            >
                <Input
                    type="text"
                    className="w-full bg-inherit border border-white rounded-sm text-white"
                    register={register("phone", Validation.phone)}
                />
                <div className="text-red-600 mt-1">{errors.phone?.message}</div>
            </Form.Item>

            <Form.Item<EditProfileProps>
                label={<span className="text-white">Email</span>}
                name="email"
                colon={false}
            >
                <Input
                    type="email"
                    className="w-full bg-inherit border border-white rounded-sm text-white"
                    register={register("email", Validation.email)}
                />
                <div className="text-red-600 mt-1">{errors.email?.message}</div>
            </Form.Item>

            <Form.Item
                label={<span className="text-white">Giới tính</span>}
                name="gender"
                colon={false}
            >
                <div className="flex space-x-4">
                    <div className="flex items-center">
                        <Input
                            className=""
                            value='true'
                            type="radio"
                            register={register("gender", Validation.gender)}
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                        />
                        <label className="text-white" htmlFor="inlineRadio1">
                            Nam
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Input
                            className=""
                            value='false'
                            type="radio"
                            register={register("gender", Validation.gender)}
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                        />
                        <label className="text-white" htmlFor="inlineRadio2">
                            Nữ
                        </label>
                    </div>
                </div>
                <div className="text-red-600 mt-1">{errors.gender?.message}</div>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <button
                    className="w-1/3 py-2 rounded-md bg-blue-500 text-white shadow-none 
                        hover:scale-105 hover:shadow-none hover:bg-blue-600 focus:scale-105 
                        focus:shadow-none active:scale-100"
                >
                    Cập nhật
                </button>
            </Form.Item>
        </Form>
    );
}

export default EditProfile;