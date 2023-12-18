"use client"
import { billAPI } from "@/util/API/Bill";
import { paypalAPI } from "@/util/API/Paypal";
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
    const [error, setError] = useState<boolean>();
    useEffect(() => {
        if (customerId != null && billId != null && loading) {
            billAPI.getBillDetails(Number(billId), customerId).then(rs => {
                var PaymentMethodDetails: PaymentDetails = {
                    payMethodId: 'PM5',
                    billId: Number(billId),
                    status: 2,
                    amout: rs.totalPrice,
                    customerId: customerId
                }
                paypalAPI.createPaymentMethodDetails(PaymentMethodDetails).then(() => {
                    billAPI.getBillDetails(Number(billId), customerId).then(rs => {
                        var sendOrder: sendOrderModel = {
                            info: {
                                username: rs.customerName,
                                email: rs.customerEmail,
                                phone: rs.customerPhone
                            },
                            listTicket: [],
                            bill: {
                                id: rs.id,
                                totalPrice: rs.totalPrice + "",
                                exportDate: rs.exportDate + "",
                                customerId: customerId,
                                qrCode: rs.qrCode
                            },
                            paymentMethod: rs.paymentMethod
                        };
                        sendOrder.listTicket.push(
                            {
                                name: rs.seats,
                                quantity: rs.seats.split(", ").length,
                                amount: rs.ticketTotalPrice + ""
                            }
                        )
                        rs.toppingName.length > 0 ? sendOrder.listTicket.push(
                            {
                                name: rs.toppingName,
                                quantity: rs.toppingQuantity,
                                amount: rs.toppingTotalPrice + ""
                            }
                        ) : null
                        sendOrder.listTicket.push({
                            name: "Thuế VAT (5%)",
                            quantity: 1,
                            amount: rs.ticketVat
                        })
                        billAPI.sendOrder(sendOrder).then(() => {
                            setLoading(false)
                            setError(false)
                        }).catch((e) => { setError(true); setLoading(false) })
                    })
                }).catch((e) => { setError(true); setLoading(false) })
            })

        }
    }, [customerId, billId])

    return (
        <>
            {loading && (
                <div className="flex justify-center min-h-screen items-center">
                    <RingLoader size={50} color="#ff0000" />
                </div>
            )}
            {error && <Result status={"error"}
                title="Thanh toán thất bại"
                extra={[
                    <Button onClick={() => router.push("/")} key="buy">Trở về trang chủ</Button>,
                ]}
            />}
            {error == false && <Result
                status="success"
                title="Thanh toán thành công"
                subTitle={<Link href={`/review?id=${billId}`} className="text-white">Hoàn tất đơn hàng</Link>}
                extra={[
                    <Button onClick={() => router.push("/")} key="buy">Trở về trang chủ</Button>,
                ]}
            />}
        </>
    )
}
export default BookComplete;