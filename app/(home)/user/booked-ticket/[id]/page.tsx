'use client'

import Slidemenu from "@/app/(home)/user/slidemenu";
import {Button, Card, QRCode} from "antd";
import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import "./index.css"
import Ticket from "@/app/(home)/user/booked-ticket/[id]/ticket";
import {billAPI} from "@/util/API/Bill";
import {NumberUtils} from "@/util/NumberUtils";
import {useSession} from "next-auth/react";
import {errorNotification} from "@/util/Notification";
import Image from "next/image";
import {constants} from "@/common/constants";
import {DateUtils} from "@/util/DateUtils";

const STATUS = [
    {
        key: 0,
        element: <span className={"text-red-600"}>Thất bại</span>
    },
    {
        key: 1,
        element: <span className={"text-green-600"}>Thành công</span>
    },
    {
        key: 2,
        element: <span className={"text-yellow-600"}>Đang thanh toán</span>
    },
    {
        key: 3,
        element: <span className={"text-white"}>Thanh toán hết hạn</span>
    },
]

const TEXT_COLOR_BY_STATUS: string[] = ["red", "green", "yellow", "white"]

const BillDetail = () => {
    const param = useParams();
    const router = useRouter();
    const [billDetails, setBillDetails] = useState<billDetails>();
    let content: JSX.Element;
    const {data: session} = useSession();
    const customerId = Number(session?.user.id);

    useEffect(() => {
        if (session) {
            const init = async () => {
                const billFromAPI = await billAPI.getBillDetails(Number(param.id), Number(customerId));
                setBillDetails(billFromAPI);
            }

            init();
        }
    }, [session]);

    const paymentStatus = (status: number) => {
        return STATUS.find(value => value.key == status)?.element
    }

    return (
        <div className="col-span-2 sm:col-span-2 md:col-span-7">
            {
                billDetails && <div className="p-4">
                    {/* Thông tin khách hàng */}
                    <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                        <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin khách hàng</h2>
                        <div className={"text-gray-300"}>
                            <p className={"mb-1"}>Họ và tên
                                <span className={"float-right text-white"}>{billDetails.customerName}</span>
                            </p>
                            <p className={"mb-1"}>Số điện thoại
                                <span className={"float-right text-white"}>{billDetails.customerPhone}</span>
                            </p>
                            <p className={"mb-1"}>Email
                                <span className={"float-right text-white"}>{billDetails.customerEmail}</span>
                            </p>
                        </div>
                    </section>

                    {/* Thông tin phim */}
                    <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                        <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin phim</h2>
                        <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-5">
                            <div className="lg:col-span-1">
                                <Image
                                    src={`${constants.URL_IMAGES}${billDetails?.poster}`}
                                    className={"w-full h-full"}
                                    alt={`${billDetails?.movieName}`}
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                            <div className="lg:col-span-4">
                                <div className={""}>
                                    <h2 className={"font-bold text-xl mb-4"}>{billDetails.movieName}</h2>
                                    <p className={"text-gray-300"}>Đất nước:
                                        <span className={"text-white"}> {billDetails.country}</span>
                                    </p>
                                    <p className={"text-gray-300"}>Ngôn ngữ:
                                        <span className={"text-white"}> {billDetails.languageName}</span>
                                    </p>
                                    <p className={"text-gray-300"}>Năm sản xuất:
                                        <span className={"text-white"}> {billDetails.yearOfManufacture}</span>
                                    </p>
                                    <p className={"text-gray-300"}>Độ tuổi:
                                        <span
                                            className={"text-white"}> {billDetails.limitAge !== 0 ? billDetails.limitAge : 'Không giới hạn'}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                        {/* Thông tin vé */}
                        <div className={"mb-8"}>
                            <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin vé & lượt
                                chiếu</h2>
                            <Card
                                bordered={false}
                                className={"w-fit bg-inherit border-2 border-neutral-800 text-white my-5"}
                            >
                                <div className="grid grid-cols-3 gap-x-10">

                                    {
                                        (billDetails.qrCode !== null) ?
                                            <div className="text-center">
                                                <QRCode
                                                    value={`${billDetails.qrCode}`}
                                                    color={"black"}
                                                    bgColor={"white"}
                                                    size={150}
                                                    bordered={false}
                                                />
                                            </div>
                                            :
                                            <></>
                                    }
                                    <div className="col-span-2">
                                        <div className={"ms-4"}>
                                            <h2 className={"font-bold text-xl mb-4"}>Mã hóa
                                                đơn: {billDetails.id}</h2>
                                            <p className={"text-gray-300"}>Ghế:
                                                <span className={"text-white"}> {billDetails.seats}</span>
                                            </p>
                                            <p className={"text-gray-300"}>Tổng giá:
                                                <span
                                                    className={"text-white"}> {NumberUtils.formatCurrency(billDetails.ticketTotalPrice || 0)}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <div className={"text-gray-300"}>
                                <p className={"mb-1"}>Trạng thái
                                    <span
                                        className={`float-right text-${TEXT_COLOR_BY_STATUS[billDetails.exportStatus]}-500`}>{paymentStatus(Number(billDetails?.exportStatus))}
                                    </span>
                                </p>
                                <p className={"mb-1"}>Địa điểm: <span
                                    className={"text-white text-right break-words"}>{billDetails.branchName} - {billDetails.branchAddress}</span>
                                </p>
                                <p className={"mb-1"}>Phòng
                                    <span className={"float-right text-white"}>{billDetails.roomName}</span>
                                </p>
                                <p className={"mb-1"}>Thời gian:
                                    <span
                                        className={`float-right text-${TEXT_COLOR_BY_STATUS[billDetails.exportStatus]}-600`}>{`${billDetails.startTime} 
                                                    ${DateUtils.formatDate(new Date(billDetails.showDate))}`}
                                    </span>
                                </p>
                                <p className={"mb-1"}>Số lượng ghế
                                    <span
                                        className={"float-right text-white"}>{billDetails.tickets.length}</span>
                                </p>
                                <p className={"mb-1"}>Số ghế
                                    <span
                                        className={`float-right text-${TEXT_COLOR_BY_STATUS[billDetails.exportStatus]}-600`}>{billDetails.seats}</span>
                                </p>
                                <p className={"mb-1"}>Tổng giá vé
                                    <span
                                        className={"float-right"}>{NumberUtils.formatCurrency(billDetails?.ticketTotalPrice || 0)}</span>
                                </p>
                            </div>
                        </div>

                        <Ticket tickets={billDetails?.tickets || []}/>

                        {/* Thông tin topping */}
                        {/* Kiểm tra khách hàng có đặt thức ăn không */}
                        {!billDetails?.toppingName ? <></> :
                            <div>
                                <h2 className={"font-bold text-xl mb-4 text-white uppercase"}>Thông tin
                                    topping</h2>
                                <div className={"text-gray-300"}>
                                    <p className={"mb-1"}>Topping
                                        <span
                                            className={"float-right text-white"}>{billDetails.toppingName}</span>
                                    </p>
                                    <p className={"mb-1"}>Giá tiền
                                        <span
                                            className={"float-right text-white"}>{billDetails.toppingTotalPrice}</span>
                                    </p>
                                </div>
                            </div>
                        }
                    </section>

                    <Card
                        bordered={false}
                        className={"bg-neutral-800 text-white my-5"}
                    >
                        <div className={"text-gray-300"}>
                            <p className={"mb-1"}>Giá vé xem phim
                                <span
                                    className={"float-right text-white"}>{NumberUtils.formatCurrency(Number(billDetails?.ticketTotalPrice))}</span>
                            </p>

                            {/* Giá topping */}
                            {
                                !billDetails?.toppingName ? <></> :
                                    <p className={"mb-1"}>Giá topping
                                        <span
                                            className={"float-right text-white"}>{NumberUtils.formatCurrency(billDetails?.toppingTotalPrice)}</span>
                                    </p>
                            }
                            <p className={"mb-1"}>Phí thanh toán
                                <span className={"float-right text-white"}>
                                            {
                                                billDetails?.ticketTotalPrice || billDetails?.toppingTotalPrice ?
                                                    NumberUtils.formatCurrency(
                                                        (billDetails?.ticketTotalPrice + billDetails?.toppingTotalPrice)
                                                        * billDetails?.tickets[0].vat) : 0
                                            }
                                        </span>
                            </p>
                            <hr className={"my-1"}/>
                            <p className={"mb-1"}>Thanh toán với {billDetails?.paymentMethod}
                                <span className={"float-right text-white text-lg font-semibold"}>
                                {
                                    billDetails?.ticketTotalPrice || billDetails?.toppingTotalPrice ?
                                        NumberUtils.formatCurrency((billDetails?.ticketTotalPrice + billDetails?.toppingTotalPrice)
                                            +
                                            (billDetails?.ticketTotalPrice + billDetails?.toppingTotalPrice)
                                            * billDetails?.tickets[0].vat)
                                        : 0
                                }
                                        </span>
                            </p>
                        </div>
                    </Card>

                    {
                        billDetails.exportStatus === 2 ?
                            <Button
                                className={`bg-yellow-600 text-white w-full h-12 border-0 rounded mb-4
                            text-lg hover:!text-white hover:!text-xl
                        `}
                            >
                                Thanh toán lại
                            </Button> : <></>
                    }
                </div>
            }
        </div>
    );
}

export default BillDetail;