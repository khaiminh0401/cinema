'use client'

import Navbar from "@/app/(home)/user/navbar";
import Link from "next/link";
import {Button, Card, QRCode} from "antd";
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";

const BillDetail = () => {
    const param = useParams();
    const [billDetail, setBillDetail] = useState();
    let content: JSX.Element;

    useEffect(() => {
        const init = async () => {
            // const billDetailFromAPI = await billDetailAPI(param.id)

        }

        init();
    }, []);

    const paymentStatus = (status: number) => {
        if (status === 0) {
            return content = <></>;
        } else if (status === 1) {
            return content = <></>;
        } else if (status === 2) {
            return content =
                <Button
                    className={"w-full h-14 text-white bg-red-600 border-none"}
                >
                    Thanh toán lại
                </Button>;
        } else {
            return content = <span className={"text-yellow-600"}>Thanh toán hết hạn</span>;
        }
    }

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
                    {/* Cột 1: Navbar */}
                    <div className="md:col-span-1">
                        <div className="p-4">
                            <Navbar/>
                        </div>
                    </div>

                    {/* Cột 2: Change password */}
                    <div className="md:col-span-2">
                        <div className="p-4">
                            {/* Thông tin khách hàng */}
                            <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                                <h2 className={"font-bold text-xl mb-4"}>Thông tin khách hàng</h2>
                                <div className={"text-gray-300"}>
                                    <p className={"mb-1"}>Họ và tên
                                        <span className={"float-right text-white"}>Hồ Hoàng Khang</span>
                                    </p>
                                    <p className={"mb-1"}>Số điện thoại
                                        <span className={"float-right text-white"}>0858442505</span>
                                    </p>
                                    <p className={"mb-1"}>Email
                                        <span className={"float-right text-white"}>hohoangkhang18@gmail.com</span>
                                    </p>
                                </div>
                            </section>

                            <section className={"bg-neutral-900 rounded p-4 mb-4"}>
                                {/* Thông tin lượt chiếu */}
                                <div className={"mb-8"}>
                                    <h2 className={"font-bold text-green-600 text-xl mb-4"}>Thông tin lượt chiếu</h2>
                                    <Card
                                        bordered={false}
                                        className={"w-fit bg-inherit border border-2 border-neutral-800 text-white my-5"}
                                    >
                                        <div className="grid grid-cols-10 gap-x-4">
                                            <div className="col-span-3">
                                                <div className="text-center">
                                                    <QRCode
                                                        value={"localhost:3000/user/booked-ticket/1"}
                                                        color={"white"}
                                                        size={100}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-7">
                                                <div className={"ms-4"}>
                                                    <h2 className={"font-bold text-xl mb-4"}>18001421</h2>
                                                    <p className={"text-gray-300"}>Ghế:
                                                        <span className={"text-white"}> A11, A12</span>
                                                    </p>
                                                    <p className={"text-gray-300"}>Tổng giá:
                                                        <span className={"text-white"}> 180.000đ</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className={"text-gray-300"}>
                                        <p className={"mb-1"}>Trạng thái
                                            <span className={"float-right text-green-500"}>Thành công</span>
                                        </p>
                                        <p className={"mb-1"}>Rạp
                                            <span className={"float-right text-white"}>Chi nhánh Quang Trung - Gò Vấp</span>
                                        </p>
                                        <p className={"mb-1"}>Phòng
                                            <span className={"float-right text-white"}>01</span>
                                        </p>
                                        <p className={"mb-1"}>Thời gian:
                                            <span className={"float-right text-green-600"}>08:00 07-09-2023</span>
                                        </p>
                                        <p className={"mb-1"}>Số lượng ghế
                                            <span className={"float-right text-white"}>2</span>
                                        </p>
                                        <p className={"mb-1"}>Số ghế
                                            <span className={"float-right text-green-600"}>A11, A12</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Thông tin topping */}
                                <div>
                                    <h2 className={"font-bold text-green-600 text-xl mb-4"}>Thông tin topping</h2>
                                    <div className={"text-gray-300"}>
                                        <p className={"mb-1"}>Topping
                                            <span className={"float-right text-white"}>2 pepsi, 1 bắp</span>
                                        </p>
                                        <p className={"mb-1"}>Giá tiền
                                            <span className={"float-right text-white"}>70.000đ</span>
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <Card
                                bordered={false}
                                className={"bg-neutral-800 text-white my-5"}
                            >
                                <div className={"text-gray-300"}>
                                    <p className={"mb-1"}>Tổng giá vé xem phim
                                        <span className={"float-right text-white"}>250.000đ</span>
                                    </p>
                                    <p className={"mb-1"}>Phí thanh toán
                                        <span className={"float-right text-white"}>0đ</span>
                                    </p>
                                    <hr className={"my-1"}/>
                                    <p className={"mb-1"}>Thanh toán với Momo
                                        <span className={"float-right text-white text-lg font-semibold"}>250.000đ</span>
                                    </p>
                                </div>
                            </Card>

                            {/* Thanh toán lại */}
                            <section>
                                {paymentStatus(2)}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BillDetail;