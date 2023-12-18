"use client"
import QR from "@/components/QR";
import {Button, Result, Modal} from "antd";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {vnpayAPI} from "@/util/API/Vnpay";
import {useSession} from "next-auth/react";
import {Integer} from "asn1js";
import {tokenVnpayAPI} from "@/util/API/TokenVnpay";
import {FaRegCheckCircle} from "react-icons/fa";
import {billAPI} from "@/util/API/Bill";
import {response} from "express";
import {successNotification} from "@/util/Notification";

const BookComplete = () => {
    const [open, setOpen] = useState(false);
    const searchParams = useSearchParams();
    const billId = searchParams.get("billId")
    const paymentMethod = Number(searchParams.get("paymentMethod"))
    const vnp_command = searchParams.get("vnp_command")
    const router = useRouter();
    const {data: session, update} = useSession();
    const customerId = session?.user.id;
    const paymentMethodHasBeenPaid = ["Tiền mặt", "Paypal", "Ví VNPay"]

    const vnpayToken: VnpayToken = {
        vnp_amount: parseInt(searchParams.get('vnp_amount') as string),
        vnp_app_user_id: customerId,
        vnp_bank_code: searchParams.get('vnp_bank_code') as string,
        vnp_bank_tran_no: searchParams.get('vnp_bank_tran_no') as string,
        vnp_card_number: searchParams.get('vnp_card_number') as string,
        vnp_card_type: searchParams.get('vnp_card_type') as string,
        vnp_command: searchParams.get('vnp_command') as string,
        vnp_curr_code: searchParams.get('vnp_curr_code') as string,
        vnp_pay_date: searchParams.get('vnp_pay_date') as string,
        vnp_response_code: searchParams.get('vnp_response_code') as string,
        vnp_tmn_code: searchParams.get('vnp_tmn_code') as string,
        vnp_token: searchParams.get("vnp_token") as string,
        vnp_transaction_no: searchParams.get('vnp_transaction_no') as string,
        vnp_transaction_status: searchParams.get('vnp_transaction_status') as string,
        vnp_txn_desc: 'pay',
        vnp_txn_ref: searchParams.get('vnp_txn_ref') as string,
        vnp_secure_hash: searchParams.get('vnp_secure_hash') as string,
    }

    useEffect(() => {
        const init = async () => {
            if (!customerId) return;

            if (billId != null) {
                if (paymentMethod === 3) {
                    if (vnpayToken.vnp_token) {
                        if (vnp_command?.includes("pay_and_create"))
                            vnpayAPI.paymentAndTokenCreated(vnpayToken, Number.parseInt(billId)).then(() => {
                                sendEmail();
                            });
                        else if (vnp_command?.includes("token_pay"))
                            vnpayAPI.paymentByTokenStage(vnpayToken, Number.parseInt(billId)).then(() => {
                                sendEmail();
                            });

                    } else if (!vnpayToken.vnp_token) {
                        const vnpayResult: VnpayResultDto = {
                            vnp_Amount: parseInt(searchParams.get('vnp_Amount') as string),
                            vnp_BankCode: searchParams.get('vnp_BankCode') as string,
                            vnp_BankTranNo: searchParams.get('vnp_BankTranNo') as string,
                            vnp_CardType: searchParams.get('vnp_CardType') as string,
                            vnp_OrderInfo: searchParams.get('vnp_OrderInfo') as string,
                            vnp_PayDate: searchParams.get('vnp_PayDate') as string,
                            vnp_ResponseCode: searchParams.get('vnp_ResponseCode') as string,
                            vnp_TmnCode: searchParams.get('vnp_TmnCode') as string,
                            vnp_TransactionNo: searchParams.get('vnp_TransactionNo') as string,
                            vnp_TransactionStatus: searchParams.get('vnp_TransactionStatus') as string,
                            vnp_TxnRef: searchParams.get('vnp_TxnRef') as string,
                            vnp_SecureHash: searchParams.get('vnp_SecureHash') as string
                        }

                        vnpayAPI.paymentInformation(vnpayResult, Number.parseInt(billId)).then(() => {
                            sendEmail();
                        });
                    }
                }
            }
        }


        init();
    }, [customerId, vnp_command]);

    const sendEmail = () => {
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
            billAPI.sendOrder(sendOrder).then(() =>
                successNotification("Kiểm đơn hàng qua email"));
        })
    }

    return (
        <>
            <h1 className={"mt-7 text-center text-xl font-extrabold"}>
                Bạn đã thanh toán thành công thông qua {paymentMethodHasBeenPaid[paymentMethod - 1]}
            </h1>
            <p className={"mt-2 text-center text-sm"}>(Mã QR kiểm tra đơn hàng tại quầy trước khi vào rạp)</p>
            <Result
                status="success"
                title={
                    <p className={"flex justify-center"}>
                        Thanh toán thành công
                        <FaRegCheckCircle className={"text-green-500 my-auto ms-2"}/>
                    </p>
                }
                subTitle={<Link href={`/review?id=${billId}`} className="text-white">Hoàn tất đơn hàng</Link>}
                icon={<QR value="https://dev"/>}
                extra={[
                    <Button onClick={() => router.push("/user/booked-ticket")} type="primary" key="console">
                        Đi tới hóa đơn
                    </Button>,
                    <Button onClick={() => router.push("/")} key="buy">Trở về trang chủ</Button>,
                ]}
            />
        </>
    )
}
export default BookComplete;