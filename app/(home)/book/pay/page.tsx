"use client"

import { Badge, RadioChangeEvent } from "antd";
import dynamic from "next/dynamic";
import RadioPayment from "./radio-payment";
import RadioDiscount from "./radio-discount";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import SelectWallet from "./select-wallet";
import { useSession } from "next-auth/react";
import { NumberUtils } from "@/util/NumberUtils";
import { constants } from "@/common/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { DateUtils } from "@/util/DateUtils";
import { paymentAPI } from "@/util/API/Payment";
import { listOrder } from "@/util/Props/PaypalProps";
import PaypalButton from "./paypal";
import { billAPI } from "@/util/API/Bill";

const Card = dynamic(() => import("antd").then((s) => s.Card), {
    ssr: false,
    loading: () => <p className="text-center" style={{ width: 300 }}>Loading...</p>,
});

const Steps = dynamic(() => import("antd").then((s) => s.Steps), {
    ssr: false,
    loading: () => <p className="text-center" style={{ width: 300 }}>Loading...</p>,
});

const movieStatus = ['Sắp công chiếu', 'Đang công chiếu', 'Đã công chiếu']

const PayPage = () => {
    const searchParams = useSearchParams();
    const billId = searchParams.get("billId");
    const router = useRouter();
    const [billDetails, setBillDetails] = useState<BillDetailsDto>()
    const search = useSearchParams();
    const { data: session, update } = useSession();
    const data = session?.user;
    const customerId = session?.user.id;

    useEffect(() => {
        const init = async () => {
            if (billId !== null && customerId !== undefined) {
                const billDetailsFromAPI = await billAPI.checkout(parseInt(billId), customerId);
                setBillDetails(billDetailsFromAPI);
            }
        }

        init();
    }, [data])

    const [value, setValue] = useState({
        payment: 1,
        wallet: 'jack'
    });
    const handleChangeSelect = useMemo(() => {
        return (s: string) => {
            setValue({ ...value, wallet: s });
        }
    }, [value]);
    const handleChangeRadio = (e: RadioChangeEvent) => {
        setValue({ ...value, payment: e.target.value });
    }

    const price = {
        temp: billDetails?.ticketTotalPrice || 0,
        vat: billDetails?.ticketVat || 0,
        topping: billDetails?.toppingTotalPrice || 0,
        discount: 0 as number
    }
    const submit = async () => {
        const data = await paymentAPI.createPayment({
            vnp_Amount: price.temp+price.vat+price.topping-price.discount,
            vnp_OrderInfo: "Pay"
        });
        console.log(data);
        // window.location.href = data;
        router.push(`/book/complete?billId=${billId}`);
    }
    // PAYPAL
    const item: listOrder[] = []
    item.push({
            name: `Vé: ${billDetails?.seats}`,
            description: "Vé xem phim tại Zuhot Cinema",
            quantity: '1',
            unit_amount: { currency_code: "USD", value: NumberUtils.ConvertToUSD(billDetails?.ticketTotalPrice || 0) }
        },
        {
            name: `${billDetails?.toppingName}`,
            description: "Topping tại Zuhot Cinema",
            quantity: "1",
            unit_amount: { currency_code: "USD", value: NumberUtils.ConvertToUSD(billDetails?.toppingTotalPrice || 0) }
        },
        {
            name: "Thuế",
            description: "Thuế 5% tại Zuhot Cinema",
            quantity: '1',
            unit_amount: { currency_code: "USD", value: NumberUtils.ConvertToUSD(billDetails?.ticketVat || 0) }
        })
    let amount = price.temp + price.vat + price.topping - price.discount;
    return (
        <>
            <div className="w-1/2 mx-auto my-5">
                <Suspense fallback={<p>loading...</p>}>
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
                </Suspense>
            </div>
            <div className="w-4/5 mx-auto grid grid-cols-3 gap-5">
                <div className="col-span-2 grid">
                    <Card bodyStyle={{ backgroundColor: "white", color: "black" }}>
                        {billDetails &&  <div className="grid grid-cols-3 gap-10">
                            <img src={`${constants.URL_IMAGES}${billDetails?.poster}`} className=""
                                alt="Photo film" />
                            <div className="col-span-2">
                                <h3 className="text-lg font-bold">{billDetails.movieName}</h3>
                                <h3>Xuất
                                    chiếu: {DateUtils.formatDate(new Date(
                                        (billDetails.showDate !== undefined) ? billDetails.showDate : ''
                                    )) + " " + billDetails.startTime}
                                </h3>
                                <h3>Địa điểm: {`${billDetails?.branchName} - ${billDetails.branchAddress}`}</h3>
                                <h3>Ghế: {billDetails.seats}</h3>
                                <span
                                    className="mt-3 inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"><Badge
                                        color={"green"}
                                        text={<span className="text-green-600">{movieStatus[billDetails.movieStatus]}</span>} />
                                </span>
                                <Card title="Phương thức thanh toán" bordered={false}
                                    bodyStyle={{ backgroundColor: "white", color: "black", border: "none" }}>
                                    <RadioPayment value={value.payment} onChange={handleChangeRadio}
                                        component={<SelectWallet value={value.wallet}
                                            setWallet={handleChangeSelect} />} />
                                </Card>
                                <Card title="Voucher" bordered={false} extra={"0đ"}
                                    bodyStyle={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
                                    <RadioDiscount />
                                </Card>
                            </div>
                        </div>}
                    </Card>
                </div>
                <div className="">
                    <Card title="Thông tin hóa đơn" bodyStyle={{ backgroundColor: "white", color: "black" }}>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td>Tiền vé:</td>
                                    <td className="text-right">{NumberUtils.formatCurrency(price.temp)}</td>
                                </tr>
                                <tr>
                                    <td>Thuế (5%):</td>
                                    <td className="text-right">{NumberUtils.formatCurrency(Number(price.vat))}</td>
                                </tr>
                                <tr>
                                    <td>Topping:</td>
                                    <td className="text-right">{NumberUtils.formatCurrency(price.topping)}</td>
                                </tr>
                                <tr>
                                    <td>Voucher giảm giá:</td>
                                    <td className="text-right">{NumberUtils.formatCurrency(price.discount)}</td>
                                </tr>
                                <tr>
                                    <td>Tổng cộng:</td>
                                    <td className="text-right">{NumberUtils.formatCurrency(Number(price.temp + price.topping + price.vat - price.discount))}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="p-5">
                                        {value.payment != 2 ? (<button onClick={submit} className="bg-black text-white w-full p-5">Thanh toán</button>) : (<PaypalButton amount={NumberUtils.ConvertToUSD(amount)} item={item} />)}
                                    </td>
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