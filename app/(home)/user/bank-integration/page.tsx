'use client'

import {Button, Card, Modal, Radio, RadioChangeEvent} from "antd";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import VnpayIcon from "@/common/Icon/VnpayIcon";
import {RiBankCardFill, RiDeleteBin6Line} from "react-icons/ri";
import {tokenVnpayAPI} from "@/util/API/TokenVnpay";
import {useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import {vnpayAPI} from "@/util/API/Vnpay";
import {FaCcPaypal} from "react-icons/fa6";
import {constants} from "@/common/constants";
import {response} from "express";
import {IoMdAddCircle} from "react-icons/io";

const BankIntegration = () => {
    const router = useRouter();
    const [tokenVnpay, setTokenVnpay] = useState<TokenVnpay>();
    const [tokenCreated, setTokenCreated] = useState();
    const [tokenRemoved, setTokenRemoved] = useState();
    const [removeTokenReturnUrl, setRemoveTokenReturnUrl] = useState("");
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [isModalRemoveOpen, setIsModalRemoveOpen] = useState(false);
    const [cardType, setCardType] = useState("01");
    const searchParams = useSearchParams();
    const vnp_token = searchParams.get('vnp_token')
    const vnp_command = searchParams.get('vnp_command')
    const {data: session} = useSession();
    const customerId = session?.user.id;

    useEffect(() => {
        if (customerId != undefined) {
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
                        vnp_app_user_id: Number(searchParams.get('vnp_app_user_id') as string),
                        vnp_bank_code: searchParams.get('vnp_bank_code') as string,
                        vnp_card_number: searchParams.get('vnp_card_number') as string,
                        vnp_card_type: searchParams.get('vnp_card_type') as string,
                        vnp_pay_date: searchParams.get('vnp_pay_date') as string,
                        vnp_response_code: searchParams.get('vnp_response_code') as string,
                        vnp_token: vnp_token
                    }

                    if (vnp_command?.includes("create")) {
                        try {
                            const tokenCreatedFromAPI = await vnpayAPI.saveToken(vnpayToken);
                            setTokenCreated(tokenCreatedFromAPI);
                        } catch (error: any) {
                        }
                    } else if (vnp_command?.includes("remove")) {
                        if (!tokenVnpay?.id) return;

                        try {
                            const tokenRemovedFromAPI =
                                await vnpayAPI.removedToken(tokenVnpay.id);
                            setTokenRemoved(tokenRemovedFromAPI);
                        } catch (error: any) {
                        }
                    }
                }
            }

            init()
        }
    }, [customerId, tokenCreated, tokenRemoved, removeTokenReturnUrl, vnp_command])

    const createTokenVNPay = async (cardType: string) => {
        if (!customerId) return;

        const vnpayToken: VnpayToken = {
            vnp_app_user_id: customerId,
            vnp_card_type: cardType,
            vnp_txn_desc: 'create token',
        }

        const createTokenURL = await vnpayAPI.createToken(vnpayToken);
        router.push(createTokenURL);
    }

    const removeToken = async () => {
        if (!tokenVnpay) return;

        const vnpayToken: VnpayToken = {
            vnp_app_user_id: tokenVnpay.vnp_app_user_id,
            vnp_token: tokenVnpay.vnp_token,
            vnp_txn_desc: 'remove token',
        }

        const removeTokenURL = await vnpayAPI.removeToken(vnpayToken);
        const returnURL = removeTokenURL.replace(
            "https://sandbox.vnpayment.vn/token_ui/remove-token.html",
            `${constants.ROOT_FE}/user/bank-integration`);

        setRemoveTokenReturnUrl(returnURL);
        router.push(returnURL);
    }

    const showModalCreate = () => {
        setIsModalCreateOpen(true);
    };

    const showModalRemove = () => {
        setIsModalRemoveOpen(true);
    };

    const handleCreateOk = () => {
        setIsModalCreateOpen(false);
        createTokenVNPay(cardType);
    };

    const handleCreateCancel = () => {
        setIsModalCreateOpen(false);
    };

    const handleRemoveOk = () => {
        setIsModalRemoveOpen(false);
        removeToken();
    };

    const handleRemoveCancel = () => {
        setIsModalRemoveOpen(false);
    };

    const changeCardType = (e: RadioChangeEvent) => {
        setCardType(e.target.value);
    };

    return (
        <>
            <Modal
                title="Xóa liên kết"
                open={isModalRemoveOpen}
                onOk={handleRemoveOk}
                onCancel={handleRemoveCancel}
                okText={"Xóa"}
                cancelText={"Hủy"}
            >
                <p>Bạn chắc chắn muốn xóa chứ?</p>
            </Modal>

            <Modal
                title="Tạo liên kết ngân hàng thông qua ví VNPay"
                open={isModalCreateOpen}
                onOk={handleCreateOk}
                onCancel={handleCreateCancel}
                okText={"Tạo"}
                cancelText={"Hủy"}
            >
                <p>Chọn loại thẻ phủ hợp</p>
                <Radio.Group
                    onChange={changeCardType}
                    value={cardType}
                >
                    <Radio className={"text-black"} value={"01"}>Nội địa</Radio>
                    <Radio className={"text-black"} value={"02"}>VISA</Radio>
                </Radio.Group>
            </Modal>

            <div className={"grid grid-cols-3 justify-center"}>
                <span className={"col-span-1 mt-3 mb-2 font-semibold"}>Thẻ của tôi</span>
                <span className={"col-span-2 flex justify-end"}>
                    <IoMdAddCircle className={"my-auto me-1"} />
                    <p className={"my-auto text-sm font-light me-3"}>Thêm liên kết: </p>
                    {
                        !tokenVnpay?.vnp_app_user_id ?
                            <button onClick={showModalCreate}>
                                <span className={"flex align-items"}>
                                    <VnpayIcon color={'#ffffff'}/>
                                    <span className={"text-red-600 font-semibold"}>VN</span>
                                    <span className={"text-blue-600 font-semibold"}>Pay</span>
                                </span>
                            </button> :
                            <></>
                    }
                    <FaCcPaypal className="ms-2 my-auto mr-2"/>
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
                                        <RiDeleteBin6Line onClick={showModalRemove}/>
                                    </Button>
                                    <p>Ngân hàng: {tokenVnpay?.vnp_bank_code}</p>
                                    <p>Số thẻ: {tokenVnpay?.vnp_card_number}</p>
                                    <p>Loại thẻ: {tokenVnpay?.vnp_card_type == "01" ? 'Nội địa' : 'VISA'}</p>
                                    <p>Ngày tạo liên kết: {tokenVnpay?.vnp_create_date}</p>
                                    <span className={"float-right flex align-items"}>
                                <VnpayIcon color={'#ffffff'}/>
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