"use client"

import { Badge, RadioChangeEvent, Steps } from "antd";
import dynamic from "next/dynamic";
import RadioPayment from "./radio-payment";
import RadioDiscount from "./radio-discount";
import React, { useMemo, useState } from "react";
import SelectWallet from "./select-wallet";
import { useSession } from "next-auth/react";
import { NumberUtils } from "@/util/NumberUtils";
import { constants } from "@/common/constants";
import { useRouter } from "next/navigation";
import { DateUtils } from "@/util/DateUtils";

const Card = dynamic(() => import("antd").then((s) => s.Card), {
    ssr: false,
    loading: () => <p className="text-center" style={{ width: 300 }}>Loading...</p>,
});



const PayPage = () => {
    const router = useRouter();
    const { data: session, update } = useSession();
    const data = session?.user;
    console.log(session)
    const [value, setValue] = useState({
        payment: 1,
        wallet: 'jack'
    });
    const handleChangeSelect = useMemo(() => {
        return (s: string) => {
            setValue({ ...value, wallet: s });
        }
    }, [value.wallet]);
    const handleChangeRadio = (e: RadioChangeEvent) => {
        setValue({ ...value, payment: e.target.value });
    }
    
    const submit = () =>{
        router.push("/book/complete");
    }
    return (
        <>
            <div className="w-1/2 mx-auto my-5">
                <Steps
                    current={0}
                    items={[
                        {
                            title: <span className="text-white">Chọn ghế</span>,
                            status: 'finish',
                        },
                        {
                            title: <span className="text-white">Chọn topping</span>,
                            status: 'finish',
                        },
                        {
                            title: <span className="text-white">Thanh toán</span>,
                            status: 'process',

                        },
                    ]}
                    className="text-white my-20"
                />
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-3 gap-5">
                <div className="col-span-2 grid grid-rows-3 gap-5">
                    <Card bodyStyle={{ backgroundColor: "white", color: "black" }}>
                        <div className="grid grid-cols-3 gap-10">
                            <img src={`${constants.URL_IMAGES}${data?.showtime.movie.poster}`} className="" alt="Photo film" />
                            <div className="col-span-2">
                                <h3 className="text-lg font-bold">{data?.showtime.movie.name}</h3>
                                <h3>Xuất chiếu: {DateUtils.formatDate(new Date(data?.showtime.showtime.showDate)) + " " + data?.showtime.showtime.startTime}</h3>
                                <h3>Địa điểm: {data?.showtime.showtime.branchAddress}</h3>
                                <h3>Ghế: {data?.seat.name_seat}</h3>
                                <span className="mt-3 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"><Badge color={"green"} text={<span className="text-green-600">Đang công chiếu</span>} /></span>
                                <Card title="Phương thức thanh toán" bordered={false} bodyStyle={{ backgroundColor: "white", color: "black", border:"none" }}>
                                    <RadioPayment value={value.payment} onChange={handleChangeRadio} component={<SelectWallet value={value.wallet} setWallet={handleChangeSelect} />} />
                                </Card>
                                <Card title="Voucher" bordered={false} extra={"- 15.000đ"} bodyStyle={{ backgroundColor: "white", color: "black", boxShadow:"none" }}>
                                    <RadioDiscount />
                                </Card>
                            </div>
                        </div>

                    </Card>
                </div>
                <div className="">
                    <Card title="Thông tin hóa đơn" bodyStyle={{ backgroundColor: "white", color: "black" }}>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td>Tiền vé:</td>
                                    <td className="text-right">{NumberUtils.formatCurrency(data?.seat?.cost || 0)}</td>
                                </tr>
                                <tr>
                                    <td>Thuế (5%):</td>
                                    <td className="text-right">+ 3.000đ</td>
                                </tr>
                                <tr>
                                    <td>Topping:</td>
                                    <td className="text-right"></td>
                                </tr>
                                <tr>
                                    <td>Voucher giảm giá:</td>
                                    <td className="text-right">- 15.000đ</td>
                                </tr>
                                <tr>
                                    <td>Tổng cộng:</td>
                                    <td className="text-right">100.000đ</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="p-5"><button onClick={submit} className="bg-black text-white w-full p-5">Thanh toán</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </>

    );
}
export default PayPage;