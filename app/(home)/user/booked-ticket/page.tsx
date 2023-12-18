'use client'

import React, {useEffect, useState} from 'react';
import {Card, Form, Pagination} from 'antd';
import Link from "next/link";
import {billAPI} from "@/util/API/Bill";
import {useSession} from "next-auth/react";
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
        element: <span className={"white"}>Thanh toán hết hạn</span>
    },
]

const TEXT_COLOR_BY_STATUS: string[] = ["red", "green", "yellow", "white"]

const BookedTicket = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [billHistories, setBillHistories] = useState<billHistories>();
    let content: JSX.Element;
    const {data: session} = useSession();
    const customerId = Number(session?.user.id);
    const itemsPerPage = 4;

    useEffect(() => {
        if (session) {
            const init = async () => {
                const bh = await billAPI.getBillHistory(customerId, itemsPerPage, currentPage);
                setBillHistories(bh);
            }

            init();
        }
    }, [session, currentPage])

    const paymentStatus = (status: number) => {
        return STATUS.find(value => value.key == status)?.element
    }

    const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-4">
            {
                billHistories?.bills.map((billHistory, index) => {
                    return (
                        <Card
                            bordered={false}
                            className={"w-full bg-neutral-800 text-white mb-5"}
                            key={index}
                        >
                            <div className="grid grid-cols-10 gap-2">
                                <div
                                    className={`col-span-3 border-r-4 pe-1
                                        border-r-${TEXT_COLOR_BY_STATUS[billHistory.exportStatus]}-600`}
                                >
                                    <div className="text-center">
                                        <p>Thời gian chiếu</p>
                                        <p
                                            className={`font-semibold text-${TEXT_COLOR_BY_STATUS[billHistory.exportStatus]}-600`}
                                        >
                                            {`${billHistory.startTime}`}
                                        </p>
                                        <p>{DateUtils.formatDate(new Date(billHistory.showDate))}</p>
                                        <p className={"font-semibold"}>
                                            {paymentStatus(billHistory.exportStatus)}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-7">
                                    <div className={"ms-4"}>
                                        <p>
                                                        <span>Mã hóa đơn:
                                                            <span
                                                                className={`text-${TEXT_COLOR_BY_STATUS[billHistory.exportStatus]}-600`}
                                                            >
                                                                {billHistory.id}
                                                            </span>
                                                        </span>
                                            <span>, Phim: {billHistory.movieName}</span>
                                        </p>
                                        <p>Rạp: Chi nhánh {`${billHistory.branchName}`}</p>
                                        <p>{billHistory.roomName}, Ghế: {billHistory.seats}</p>
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
            {billHistories != undefined && billHistories.total_bill_count > itemsPerPage &&
                <Pagination className="text-center pt-2" responsive
                            current={currentPage}
                            pageSize={itemsPerPage}
                            total={billHistories.total_bill_count}
                            showSizeChanger={false}
                            onChange={handlePageChange}
                />
            }
        </div>
    );
}

export default BookedTicket;