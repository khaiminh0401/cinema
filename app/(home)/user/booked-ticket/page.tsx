'use client'

import React from 'react';
import {Card} from 'antd';
import Navbar from "../navbar";
import Link from "next/link";

const BookedTicket = () => (
    <>
        <div className="flex flex-row">
            <div className="basis-1/4"><Navbar/></div>
            <h1 className="basis-3/4 px-4">
                <Card
                    bordered={false}
                    className={"w-full bg-gray-800 text-white mb-5"}
                >
                    <div className="grid grid-cols-10 gap-2">
                        <div className="col-span-3 border-r-4 border-r-red-600">
                            <div className="text-center">
                                <p>Thời gian chiếu</p>
                                <p className={"text-red-600 font-semibold"}>08:00</p>
                                <p>07-09-2023</p>
                                <p className={"text-red-600 font-semibold"}>Thất bại</p>
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className={"ms-4"}>
                                <p>Mã vé: <span className={"text-red-600"}>EC2KAKE</span></p>
                                <p>
                                    <span className={"me-6"}>Rạp: Chi nhánh Quang Trung - Gò Vấp</span>
                                    <span>Phòng [1]</span>
                                </p>
                                <p>Ghế: A01, A02</p>
                                <p>
                                    <span>Thời lượng phim: 180p</span>
                                    <span className={"float-right"}>
                                        <Link
                                            href={"/"}
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card
                    bordered={false}
                    className={"w-full bg-gray-800 text-white mb-5"}
                >
                    <div className="grid grid-cols-10 gap-2">
                        <div className="col-span-3 border-r-4 border-r-red-600">
                            <div className="text-center">
                                <p>Thời gian chiếu</p>
                                <p className={"text-red-600 font-semibold"}>08:00</p>
                                <p>07-09-2023</p>
                                <p className={"text-green-500 font-semibold"}>Thành công</p>
                            </div>
                        </div>
                        <div className="col-span-7">
                            <div className={"ms-4"}>
                                <p>Mã vé: <span className={"text-red-600"}>A11BAEZ</span></p>
                                <p>
                                    <span className={"me-6"}>Rạp: Chi nhánh Quang Trung - Gò Vấp</span>
                                    <span>Phòng [3]</span>
                                </p>
                                <p>Ghế: A01, A02</p>
                                <p>
                                    <span>Thời lượng phim: 180p</span>
                                    <span className={"float-right"}>
                                        <Link
                                            href={"/"}
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </h1>
        </div>
    </>
);

export default BookedTicket;