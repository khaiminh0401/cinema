"use client"
import { billAPI } from "@/util/API/Bill";
import { paypalAPI } from "@/util/API/Paypal";
import { successNotification } from "@/util/Notification";
import { Button, Result } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const BookComplete = () => {
    const searchParams = useSearchParams();
    const billId = searchParams.get("billId")
    const { data: session, update } = useSession();
    const customerId = session?.user.id;
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [billDetails, setBillDetails] = useState<billDetails>();
    const [error, setError] = useState(false);
    useEffect(() => {
        if (customerId != undefined && billId != undefined && loading) {
            if (billDetails == undefined) {
                billAPI.getBillDetails(Number(billId), customerId).then(rs => {
                    setBillDetails(rs)
                })
            }
            if (billDetails != undefined) {
                var PaymentMethodDetails: PaymentDetails = {
                    payMethodId: 'PM5',
                    billId: Number(billId),
                    status: 2,
                    amout: billDetails?.totalPrice,
                    customerId: customerId
                }
                paypalAPI.createPaymentMethodDetails(PaymentMethodDetails).then(() => {
                    var sendOrder: sendOrderModel = {
                        info: {
                            username: billDetails?.customerName,
                            email: billDetails?.customerEmail,
                            phone: billDetails?.customerPhone
                        },
                        listTicket: [],
                        bill: {
                            id: billDetails?.id,
                            totalPrice: billDetails?.totalPrice + "",
                            exportDate: billDetails?.exportDate + "",
                            customerId: customerId,
                            qrCode: billDetails?.qrCode
                        },
                        paymentMethod: billDetails?.paymentMethod
                    };
                    sendOrder.listTicket.push(
                        {
                            name: billDetails?.seats,
                            quantity: billDetails?.seats.split(", ").length,
                            amount: billDetails?.ticketTotalPrice + ""
                        }
                    )
                    billDetails?.toppingName.length > 0 ? sendOrder.listTicket.push(
                        {
                            name: billDetails?.toppingName,
                            quantity: billDetails?.toppingQuantity,
                            amount: billDetails?.toppingTotalPrice + ""
                        }
                    ) : null
                    sendOrder.listTicket.push({
                        name: "Thuế VAT (5%)",
                        quantity: 1,
                        amount: billDetails?.ticketVat
                    })
                    billAPI.sendOrder(sendOrder).then(() => {
                        successNotification("Thanh toán thành công !")
                        setLoading(false)
                    }).catch((e) => { setError(true); setLoading(false) })
                }).catch((e) => { setError(true); setLoading(false) })
            }
        }
    }, [customerId, billId, billDetails])
    
    return (
        <>
            {loading ? (
                <div className="flex justify-center min-h-screen items-center">
                    <RingLoader size={50} color="#ff0000" />
                </div>
            ) :
                error ? <Result status={"error"}
                    title="Thanh toán thất bại"
                    extra={[
                        <Button onClick={() => router.push("/")} key="buy">Trở về trang chủ</Button>,
                    ]}
                /> : (<Result
                    status="success"
                    title="Thanh toán thành công"
                    subTitle={<Link href={`/review?id=${billId}`} className="text-white">Hoàn tất đơn hàng</Link>}
                    extra={[
                        <Button onClick={() => router.push("/")} key="buy">Trở về trang chủ</Button>,
                    ]}
                />)}
        </>
    )
}
export default BookComplete;