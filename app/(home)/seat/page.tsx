"use client"
import { useSearchParams } from "next/navigation";
import SeatItem from "@/components/SeatItem";
import { useState } from "react"
import { Card } from "antd";
import SeatRow from "./SeatRow";
import { useEffect } from "react";
import { seatAPI } from "@/util/API/Seat";
import Image from "next/image";

interface SeatPageProps {
    seat: Object[],
    movie: any
}


const Seat = () => {
    const search = useSearchParams();
    const [data, setData] = useState<SeatPageProps>();
    useEffect(() => {
        const init = async () => {
            const showTimeId = await search.get("showTimeId");
            setData(await seatAPI.getSeatHasCheckTicket(showTimeId));
        }
        init();
    }, []);
    return (
        <div className="mx-28 my-14">
            <div className="grid grid-cols-2">
                <div className="col-start-1 col-span-2">
                    <div className="grid grid-cols-3 gap-5">
                        <div className="photo col-auto">
                            <img src={`/assert/home/MP01.png`} alt="" />
                        </div>
                        <div className="information col-start-2 col-span-2">
                            <h6>{data?.movie?.name}</h6>
                            <h6>Xuất chiếu: 16:10</h6>
                            <h6>Thời lượng: 93 phút</h6>
                        </div>
                    </div>
                    <div className="w-full mx-auto my-5">
                        {
                            data?.seat?.map((s: any) => {
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
                    <Card title="Thông tin" headStyle={{ textAlign: "center" }} style={{ width: 300 }}>
                        <table className="w-full">
                            <tr className="w-full">
                                <td colSpan={2}>Hàng ghế:</td>
                                <td className="text-right">A</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Hàng ghế:</td>
                                <td className="text-right">A</td>
                            </tr>
                            <tr className="border-t-2 border-spacing-3 border-black">
                                <td colSpan={2}>Tạm tính:</td>
                                <td className="text-right">35.000.VNĐ</td>
                            </tr>
                        </table>
                        <button className="w-full bg-black text-white rounded border-black border-2 hover:bg-black hover:text-white p-3">Đi tiếp</button>
                    </Card>
                </div>
            </div>

        </div>
    );
}
export default Seat;