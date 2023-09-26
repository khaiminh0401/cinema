'use client'

import React, {useEffect, useState} from 'react';
import {Card, Form} from 'antd';
import Navbar from "../navbar";
import Link from "next/link";
import Input from "@components/Input/page";
import {Validation} from "@/common/validation/page/registration";
import {billAPI} from "@/util/API/Bill";

const BookedTicket = () => {
    const [billHistories, setBillHistories] = useState<billHistory[]>();
    let content: JSX.Element;

    useEffect(() => {
        const init = async () => {
            const bh = await billAPI.getBillHistory(5);
            setBillHistories(bh);
        }

        init();
    }, [])

    const paymentStatus = (status: number) => {
        if (status === 0) {
            return content = <span className={"text-red-600"}>Thất bại</span>;
        } else if (status === 1) {
            return content = <span className={"text-green-600"}>Thành công</span>;
        } else if (status === 2) {
            return content = <span className={"text-yellow-600"}>Đang thanh toán</span>;
        } else {
            return content = <span className={"text-yellow-600"}>Thanh toán hết hạn</span>;
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
                {/* Cột 1: Navbar */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <div className="p-4">
                        <Navbar/>
                    </div>
                </div>

                {/* Cột 2: Bill History */}
                <div className="col-span-1 sm:col-span-1 md:col-span-2">
                    <div className="p-4">
                        {
                            billHistories?.map((billHistory, index) => {
                                return (
                                    <Card
                                        bordered={false}
                                        className={"w-full bg-neutral-800 text-white mb-5"}
                                        key={index}
                                    >
                                        <div className="grid grid-cols-10 gap-2">
                                            <div className="col-span-3 border-r-4 border-r-red-600 pe-1">
                                                <div className="text-center">
                                                    <p>Thời gian chiếu</p>
                                                    <p className={"text-red-600 font-semibold"}>{`${billHistory.startTime}`}</p>
                                                    <p>{`${billHistory.showDate}`}</p>
                                                    <p className={"font-semibold"}>
                                                        {paymentStatus(billHistory.exportStatus)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-7">
                                                <div className={"ms-4"}>
                                                    <p>
                                                        <span>Mã hóa đơn: <span
                                                            className={"text-red-600"}>{billHistory.id}</span></span>
                                                        <span>, Phim: {billHistory.movieName}</span>
                                                    </p>
                                                    <p>Rạp: Chi nhánh {`${billHistory.branchName}`}</p>
                                                    <p>{billHistory.roomName}, Ghế: {billHistory.seat}</p>
                                                    <p>
                                                        <span>Thời lượng phim: {billHistory.movieTime} phút</span>
                                                        <span className={"float-right"}>
                                        <Link
                                            href={`/user/booked-ticket/${billHistory.id}`}
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookedTicket;