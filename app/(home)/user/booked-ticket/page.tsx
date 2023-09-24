'use client'

import React from 'react';
import {Card, Form} from 'antd';
import Navbar from "../navbar";
import Link from "next/link";
import Input from "@components/Input/page";
import {Validation} from "@/common/validation/page/registration";

const BookedTicket = () => (
    <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
            {/* Cột 1: Navbar */}
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
                <div className="p-4">
                    <Navbar/>
                </div>
            </div>

            {/* Cột 2: Change password */}
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
                <div className="p-4">
                    <Card
                        bordered={false}
                        className={"w-full bg-gray-800 text-white mb-5"}
                    >
                        <div className="grid grid-cols-10 gap-2">
                            <div className="col-span-3 border-r-4 border-r-red-600 pe-1">
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
                                    <p>Rạp: Chi nhánh Quang Trung - Gò Vấp</p>
                                    <p>Phòng: [1], Ghế: A01, A02</p>
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
                </div>
            </div>
        </div>
    </div>
);

export default BookedTicket;