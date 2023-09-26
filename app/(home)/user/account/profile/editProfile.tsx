import {Validation} from "@/common/validation/page/registration";
import Input from "@/components/Input/page";
import {customerAPI} from "@/util/API/Customer";
import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Form, Select} from 'antd';
import {useSession} from "next-auth/react";
import {checkStatus} from "@/common/validation/status";
import {errorNotification, successNotification} from "@/util/Notification";
import {Option} from "rc-select";

/**
 * Object of Register
 */
type EditProfileProps = {
    name: string,
    email: string,
    phone: string,
    gender: boolean
}
const EditProfile = ({...props}: customer) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<EditProfileProps>();

    const {data: session} = useSession();

    const [customer, setCustomer] = useState<customer>();

    const [gender, setGender] = useState<boolean>()

    useEffect(() => {
        async function fetchData() {
            try {
                await customerAPI.findId(4).then((response) => {
                    setCustomer(response);
                }).catch(() => {
                    errorNotification("Kết nối bất ổn. Thử lại sau nhé")
                });

            } catch (error) {
                console.error("Error fetching customer:", error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        console.log(customer)
        if (customer) {
            setValue("name", customer.name)
            setValue("phone", customer.phone)
            setGender(customer.gender)
        }
    }, [customer]);

    const onSubmit: SubmitHandler<EditProfileProps> = async (data) => {
        const newCustomer = {
            id: 4,
            ...data
        }

        if (checkStatus(await customerAPI.editProfile(newCustomer))) {
            successNotification("Cập nhật thành công!");
        }
    };

    return (
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
            <section className="mb-10 text-white text-left">
                <h2 className="font-bold text-2xl">Hồ Sơ Của Tôi</h2>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </section>

            <Form.Item
                label={<span className="text-white">Email</span>}
                colon={false}
            >
                <input
                    type="email"
                    className="w-full bg-inherit border-none rounded-sm text-white"
                    disabled={true}
                    value={customer?.email}
                />
            </Form.Item>

            <Form.Item
                label={<span className="text-white">Tên</span>}
                colon={false}
            >
                <Input
                    type="text"
                    className="w-full bg-inherit border-none rounded-sm text-white"
                    register={register("name", Validation.name)}
                    defaultValue={customer?.name}
                />
                <div className="text-red-600 mt-1">{errors.name?.message}</div>
            </Form.Item>

            <Form.Item
                label={<span className="text-white">Số điện thoại</span>}
                colon={false}
            >
                <Input
                    type="text"
                    className="w-full bg-inherit border-none rounded-sm text-white"
                    register={register("phone", Validation.phone)}
                />
                <div className="text-red-600 mt-1">{errors.phone?.message}</div>
            </Form.Item>

            <Form.Item
                label={<span className="text-white">Giới tính</span>}
                // name="gender"
                colon={false}
            >
                {/*<div className="flex space-x-4">*/}
                {/*    <div className="flex items-center">*/}
                {/*        <Input*/}
                {/*            className=""*/}
                {/*            defaultValue='true'*/}
                {/*            type="radio"*/}
                {/*            register={register("gender", Validation.gender)}*/}
                {/*            name="inlineRadioOptions"*/}
                {/*            id="inlineRadio1"*/}
                {/*            defaultChecked={customer?.gender === false}*/}
                {/*        />*/}
                {/*        <label className="text-white" htmlFor="inlineRadio1">*/}
                {/*            Nam*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center">*/}
                {/*        <Input*/}
                {/*            className=""*/}
                {/*            defaultValue='false'*/}
                {/*            type="radio"*/}
                {/*            register={register("gender", Validation.gender)}*/}
                {/*            name="inlineRadioOptions"*/}
                {/*            id="inlineRadio2"*/}
                {/*            defaultChecked={customer?.gender === true}*/}
                {/*        />*/}
                {/*        <label className="text-white" htmlFor="inlineRadio2">*/}
                {/*            Nữ*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Select
                    defaultValue={`${customer?.gender}`}
                >
                    <Option value="true">Nam</Option>
                    <Option value="false">Nữ</Option>
                </Select>
                <div className="text-red-600 mt-1">{errors.gender?.message}</div>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <button
                    className="w-1/3 py-2 rounded-md bg-red-500 text-white shadow-none
                        hover:scale-105 hover:shadow-none hover:bg-red-600 focus:scale-105
                        focus:shadow-none active:scale-100"
                >
                    Cập nhật
                </button>
            </Form.Item>
        </Form>
    );
}

export default EditProfile;