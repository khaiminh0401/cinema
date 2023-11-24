'use client'

import {Button, Card} from "antd";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import VnpayIcon from "@/common/Icon/VnpayIcon";
import {RiBankCardFill, RiDeleteBin6Line} from "react-icons/ri";
import {tokenVnpayAPI} from "@/util/API/TokenVnpay";
import {useSession} from "next-auth/react";
import {useSearchParams} from "next/navigation";
import {vnpayAPI} from "@/util/API/Vnpay";
import {FaCcPaypal} from "react-icons/fa6";

const BankIntegration = () => {
    const [tokenVnpay, setTokenVnpay] = useState<TokenVnpay>();
    const searchParams = useSearchParams();
    const vnp_token = searchParams.get('vnp_token')
    const {data: session} = useSession();
    const customerId = session?.user.id;

    useEffect(() => {
        const init = async () => {
            try {
                const tokenVnpayFromAPI = await tokenVnpayAPI.findByCustomerId(customerId);
                setTokenVnpay(tokenVnpayFromAPI);
            } catch (error: any) {
                console.error("Bad request error:", error);
                setTokenVnpay(undefined);
            }

            if (vnp_token) {
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
                    vnp_token: vnp_token,
                    vnp_transaction_no: searchParams.get('vnp_transaction_no') as string,
                    vnp_transaction_status: searchParams.get('vnp_transaction_status') as string,
                    vnp_txn_desc: 'pay',
                    vnp_txn_ref: searchParams.get('vnp_txn_ref') as string,
                    vnp_secure_hash: searchParams.get('vnp_secure_hash') as string,
                }

                await vnpayAPI.saveToken(vnpayToken);
            }
        }

        init()
    }, [])

    const createTokenVNPay = async () => {
        const vnpayToken: VnpayToken = {
            vnp_app_user_id: customerId,
            vnp_card_type: searchParams.get('vnp_card_type') as string,
            vnp_bank_code: searchParams.get('vnp_bank_code') as string,
            vnp_txn_desc: 'create token',
        }

        await vnpayAPI.createToken(vnpayToken);
    }

    const removeToken = async () => {
        const vnpayToken: VnpayToken = {
            vnp_app_user_id: customerId,
            vnp_token: vnp_token as string,
            vnp_txn_desc: 'remove token',
        }

        await vnpayAPI.removeToken(vnpayToken);
    }

    return (
        <>
            <div className={"grid grid-cols-3 justify-center"}>
                <span className={"col-span-2 mt-3 mb-2 font-semibold"}>Thẻ của tôi</span>
                <span className={"col-span-1 flex justify-end"}>
                    {!tokenVnpay?.vnp_app_user_id ? <button onClick={createTokenVNPay}><VnpayIcon/></button> : <></>}
                    <FaCcPaypal className="my-auto mr-2"/>
                </span>
            </div>
            {
                tokenVnpay ?
                    <Card
                        bordered={false}
                        className={"w-full bg-neutral-700 text-white mb-5"}
                    >
                        <div className="xl:grid xl:grid-cols-10 xl:gap-2">
                            <div className="col-span-2 pe-1 ">
                                <div className="text-center">
                                    <Image
                                        src={`https://zuhot-cinema-images.s3.amazonaws.com/bank-card/${tokenVnpay.vnp_card_type}.png`}
                                        alt={"card"}
                                        height={100}
                                        width={200}
                                    />
                                </div>
                            </div>
                            <div className="col-span-8">
                                <div className={"ms-4"}>
                                    <Button
                                        className="float-right border-0 bottom-0 text-white"
                                        onClick={() => {
                                        }}
                                    >
                                        <RiDeleteBin6Line onClick={removeToken}/>
                                    </Button>
                                    <p>Ngân hàng: {tokenVnpay?.vnp_bank_code}</p>
                                    <p>Số thẻ: {tokenVnpay?.vnp_card_number}</p>
                                    <p>Loại thẻ: {tokenVnpay?.vnp_card_type == "01" ? 'Nội địa' : 'VISA'}</p>
                                    <p>Ngày tạo liên kết: {tokenVnpay?.vnp_create_date}</p>
                                    <span className={"float-right flex align-items"}>
                                <VnpayIcon/>
                                <span className={"text-red-600 font-semibold"}>VN</span>
                                <span className={"text-blue-600 font-semibold"}>Pay</span>
                            </span>
                                </div>
                            </div>
                        </div>
                    </Card> :
                    <></>
            }
        </>
    );
}

export default BankIntegration;