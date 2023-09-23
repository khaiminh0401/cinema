"use client"
import { useSearchParams } from "next/navigation";
import "./index.css";
import SeatItem from "@/components/SeatItem";
import dynamic from "next/dynamic";
import { RingLoader } from "react-spinners";
import { useState } from "react"
const Card = dynamic(() => import("antd").then((s) => s.Card), {
    ssr: false,
    loading: () => <p className="text-center" style={{ width: 300 }}>Loading...</p>,

});
import SeatRow from "./SeatRow";
import { useEffect } from "react";
import { seatAPI } from "@/util/API/Seat";
import Image from "next/image";
import SeatIcon from "@/common/Icon/SeatIcon";
import { Steps } from "antd";

interface SeatPageProps {
    seat: Object[],
    movie: any
}



const Seat = () => {
    // key of show time id
    const SHOWTIME_ID = "stid";
    const search = useSearchParams();
    const [data, setData] = useState<SeatPageProps>();
    useEffect(() => {
        const init = async () => {
            const showTimeId = search.get(SHOWTIME_ID);
            setData(await seatAPI.getSeatHasCheckTicket(showTimeId));
        }
        init();
    }, []);

    return (
        <div className="mx-28 my-14">

            {data ? <> <div className="w-1/2 mx-auto my-10">
                <Steps
                    current={0}
                    items={[
                        {
                            title: <span className="text-white">Chọn ghế</span>,
                            status: 'process',
                            // colorPrimary: "black"
                        },
                        {
                            title: <span className="text-white">Chọn topping</span>,
                            status: 'wait',
                        },
                        {
                            title: <span className="text-white">Thanh toán</span>,
                            status: 'wait',

                        },
                    ]}
                    className="text-white"
                />
            </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="col-start-1 col-span-2">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="photo col-auto">
                                <img src={`/assert/home/MP01.png`} alt="" />
                            </div>
                            <div className="information col-start-2 col-span-2">
                                <h3 className="text-red-700 font-bold py-2" style={{ fontSize: "larger" }}>{data?.movie?.name}</h3>
                                <h6 className="py-2">Ngày chiếu:{ }</h6>
                                <h6 className="py-2">Xuất chiếu: 16:10</h6>
                                <h6 className="py-2">Thời lượng: 93 phút</h6>
                                <p className="py-2 text-justify">Nội dung: {data?.movie?.describe}</p>
                            </div>
                        </div>
                        <div className="w-full mx-auto my-10">
                            <h4 className="text-center">Chú thích</h4>
                            <div className="flex justify-around gap-40">
                                <div className="flex items-center">
                                    <SeatIcon.ItemChoose />
                                    <span className="p-5">Ghế được chọn</span>
                                </div>
                                <div className="flex items-center">
                                    <SeatIcon.ItemDefault />
                                    <span className="p-5">Ghế chưa chọn</span>
                                </div>
                                <div className="flex items-center">
                                    <SeatIcon.ItemHasBooked />
                                    <span className="p-5">Ghế đã có người mua</span>
                                </div>
                            </div>
                            {
                                data.seat.map((s: any) => {
                                    return <SeatRow key={s.row}>
                                        {
                                            s.seats.map((x: any, i: number) => {
                                                return <SeatItem key={i} state={x.booked}>{x.name}</SeatItem>
                                            })
                                        }
                                    </SeatRow>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-end-4">
                        <Card title="Thông tin đặt chỗ" className="book-information-sticky" headStyle={{ textAlign: "center" }} style={{ width: 300 }}>
                            <table className="w-full">
                                <tbody>
                                    <tr className="w-full">
                                        <td colSpan={2}>Hàng ghế:</td>
                                        <td className="text-right">A</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Thứ tự ghế:</td>
                                        <td className="text-right">1</td>
                                    </tr>
                                    <tr className="border-t-2 border-spacing-3 border-black">
                                        <td colSpan={2}>Tạm tính:</td>
                                        <td className="text-right">35.000 VNĐ</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="w-full bg-black text-white rounded border-black border-2 hover:bg-black hover:text-white p-3">Đi tiếp</button>
                        </Card>

                    </div>
                </div></>
                : <div className="flex justify-center"><RingLoader color="rgba(255, 78, 0, 1)" /></div>}
        </div>
    );
}
export default Seat;