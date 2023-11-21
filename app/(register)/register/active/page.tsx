'use client'
import {checkError} from "@/common/validation/error";
import {checkStatus} from "@/common/validation/status";
import {customerAPI} from "@/util/API/Customer";
import {errorNotification, successNotification} from "@/util/Notification";
import {Button, Result} from "antd";
import { useRouter,useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

const Active = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const userToken = searchParams.get("userToken");
    const [error, setError] = useState("");
    useEffect(() => {
        if (userToken != null) {
            const init = async () => {
                try {
                    if (checkStatus(await customerAPI.registrationConfirm(userToken))) {
                        successNotification("Kích hoạt tài khoản thành công !")
                    }
                } catch (e: any) {
                    setError(checkError(e.response.data.message, e.response.data.param) || "")
                    errorNotification(checkError(e.response.data.message, e.response.data.param) || "")
                }
            }
            init();
        }
    }, [])
    return (
        <div className="min-h-screen min-w-full bg-white">
            {error === "" ? <Result status="success" title="Thông báo:" subTitle="Kích hoạt tài khoản thành công !" extra={[<Button onClick={() => { router.push("/") }} key="console">Trang chủ</Button>]} /> : <Result status="error" title="Thông báo lỗi" subTitle={error} extra={[<Button onClick={() => { router.push("/") }} type="primary" key="console">Trang chủ</Button>, <Button key="buy" onClick={() => { router.push("/register") }}>Đăng ký lại</Button>]} />}
        </div>
    );
}
export default Active;