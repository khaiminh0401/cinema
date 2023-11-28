"use client"

import {Badge, Radio, RadioChangeEvent, Steps, Switch} from "antd";
import dynamic from "next/dynamic";
import RadioPayment from "./radio-payment";
import React, {Suspense, useEffect, useMemo, useState} from "react";
import SelectWallet from "./select-wallet";
import {useSession} from "next-auth/react";
import {NumberUtils} from "@/util/NumberUtils";
import {constants} from "@/common/constants";
import {useRouter, useSearchParams} from "next/navigation";
import {DateUtils} from "@/util/DateUtils";
import {vnpayAPI} from "@/util/API/Vnpay";
import {listOrder} from "@/util/Props/PaypalProps";
import PaypalButton from "./paypal";
import {billAPI} from "@/util/API/Bill";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {tokenVnpayAPI} from "@/util/API/TokenVnpay";

const Card = dynamic(() => import("antd").then((s) => s.Card), {
    ssr: false,
    loading: () => <p className="text-center" style={{width: 300}}>Loading...</p>,
});


const movieStatus = ['Sắp công chiếu', 'Đang công chiếu', 'Đã công chiếu']

const PayPage = () => {
    const [checkInsertCard, setCheckInsertCard] = useState(false);
    const [cardType, setCardType] = useState("01");
    const searchParams = useSearchParams();
    const billId = searchParams.get("billId");
    const router = useRouter();
    const [billDetails, setBillDetails] = useState<BillDetailsDto>()
    const [tokenVnpay, setTokenVnpay] = useState<TokenVnpay>()
    const {data: session, update} = useSession();
    const data = session?.user;
    const customerId = session?.user.id;

    useEffect(() => {
        const init = async () => {
            if (billId !== null && customerId !== undefined) {
                const billDetailsFromAPI = await billAPI.checkout(parseInt(billId), customerId);
                setBillDetails(billDetailsFromAPI);

                console.log(billDetailsFromAPI)
            }

            if (customerId != undefined) {
                try {
                    const tokenVnpayFromAPI = await tokenVnpayAPI.findByCustomerId(customerId);
                    setTokenVnpay(tokenVnpayFromAPI);
                } catch (error: any) {
                    console.error("Bad request error:", error);
                    setTokenVnpay(undefined);
                }

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
            setValue({...value, wallet: s});
        }
    }, [value]);
    const handleChangeRadio = (e: RadioChangeEvent) => {
        setValue({...value, payment: e.target.value});
    }

    const price = {
        temp: billDetails?.ticketTotalPrice || 0,
        vat: billDetails?.ticketVat || 0,
        topping: billDetails?.toppingTotalPrice || 0,
        discount: 0 as number
    }

    const payment = async (paymentMethod: number) => {
        if (billId != null) {
            if (paymentMethod === 3) {
                let urlPaymentByVnpay;

                if (tokenVnpay != undefined) {
                    const vnpayToken: VnpayToken = {
                        vnp_amount: billDetails?.totalPrice,
                        vnp_app_user_id: tokenVnpay.vnp_app_user_id,
                        vnp_txn_desc: "pay by token",
                        vnp_token: tokenVnpay.vnp_token
                    }

                    urlPaymentByVnpay = await vnpayAPI.paymentByToken(vnpayToken, billId.toString(), value.payment.toString());
                } else {
                    if (checkInsertCard) {
                        const vnpayToken: VnpayToken = {
                            vnp_amount: billDetails?.totalPrice,
                            vnp_app_user_id: customerId,
                            vnp_card_type: cardType,
                            vnp_txn_desc: "pay and create token"
                        }

                        urlPaymentByVnpay = await vnpayAPI.paymentAndCreateToken(vnpayToken, billId.toString(), value.payment.toString());
                    } else {
                        const vnpayPaymentDto: VnpayPaymentDto = {
                            vnp_Amount: billDetails?.totalPrice,
                            vnp_OrderInfo: "pay"
                        }

                        urlPaymentByVnpay = await vnpayAPI.createVnpayPayment(vnpayPaymentDto, billId.toString(), value.payment.toString());
                    }
                }

                router.push(urlPaymentByVnpay);
            }
        }
    }

    const submit = () => {
        payment(value.payment);
    }

    const changeInsertCard = (checked: boolean) => {
        setCheckInsertCard(checked);
    }

    const changeCardType = (e: RadioChangeEvent) => {
        setCardType(e.target.value);
    };

    // PAYPAL
    let amount = 0
    const item: listOrder[] = []
    item.push({ name: `${billDetails?.seats}`, description: "Vé xem phim tại Zuhot Cinema", quantity: "1", unit_amount: { currency_code: "USD", value: NumberUtils.ConvertToUSD(billDetails?.ticketTotalPrice || 0) } })
    billDetails?.toppingName ? item.push({name: `${billDetails?.toppingName}`,description: "Topping tại Zuhot Cinema",quantity: "1",unit_amount: { currency_code: "USD", value: NumberUtils.ConvertToUSD(billDetails?.toppingTotalPrice || 0) }}) : null
    item.push({ name: "Thuế", description: "Thuế 5% tại Zuhot Cinema", quantity: '1', unit_amount: { currency_code: "USD", value: NumberUtils.ConvertToUSD(billDetails?.ticketVat || 0) } })
    item.forEach(value => { amount += Number(value.unit_amount.value) });
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
                    <Card bodyStyle={{backgroundColor: "white", color: "black"}}>
                        {billDetails && <div className="grid grid-cols-3 gap-10">
                            <img src={`${constants.URL_IMAGES}${billDetails?.poster}`} className=""
                                alt="Photo film"/>
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
                                        text={<span
                                            className="text-green-600">{movieStatus[billDetails.movieStatus]}</span>}/>
                                </span>
                                <Card title="Phương thức thanh toán" bordered={false}
                                    bodyStyle={{backgroundColor: "white", color: "black", border: "none"}}>
                                    <RadioPayment value={value.payment} onChange={handleChangeRadio}
                                        component={<SelectWallet value={value.wallet}
                                            setWallet={handleChangeSelect}/>}/>
                                </Card>
                            </div>
                        </div>}
                    </Card>
                </div>
                <div className="">
                    <Card title="Thông tin hóa đơn" bodyStyle={{backgroundColor: "white", color: "black"}}>
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
                                {
                                    (value.payment === 3 && tokenVnpay == undefined) ?
                                        <>
                                            <tr>
                                                <td className={"text-center"}>
                                                    <Switch
                                                        className={"bg-gray-800"}
                                                        checkedChildren={<CheckOutlined/>}
                                                        unCheckedChildren={<CloseOutlined/>}
                                                        checked={checkInsertCard}
                                                        onChange={changeInsertCard}
                                                    />
                                                </td>
                                                <td>Bạn muốn lưu liên kết ví?</td>
                                            </tr>
                                            <tr className={"text-center"}>
                                                {
                                                    checkInsertCard ?
                                                        <td>
                                                            <Radio.Group
                                                                onChange={changeCardType}
                                                                value={cardType}
                                                            >
                                                                <Radio className={"text-black"} value={"01"}>Nội địa</Radio>
                                                                <Radio className={"text-black"} value={"02"}>VISA</Radio>
                                                            </Radio.Group>
                                                        </td> :
                                                        <></>
                                                }
                                            </tr>
                                        </> :
                                        <></>
                                }
                                <tr>
                                    <td colSpan={2} className="p-5">
                                        {value.payment != 2 ? (
                                            <button onClick={submit} className="bg-black text-white w-full p-5">Thanh
                                                toán</button>) : (
                                            <PaypalButton amount={`${amount.toFixed(2)}`} item={item}/>)}
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