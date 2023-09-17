"use client"
import { useSearchParams } from "next/navigation";
import SeatItem from "@/components/SeatItem";
import { useState } from "react"
import { Card } from "antd";
import SeatRow from "./SeatRow";
import { useEffect } from "react";
import { seatAPI } from "@/util/API/Seat";


const Seat = () => {
    const search = useSearchParams();
    const [data, setData] = useState<Object[]>();
    useEffect(() => {
        const init = async () => {
            const showTimeId = await search.get("showTimeId");
            setData(await seatAPI.getSeatHasCheckTicket(showTimeId));
        }
        init();
    }, []);
    return (
        <div className="m-28">
            <div className="grid grid-cols-2">

                <div className="col-start-1 col-span-2">
                    <div className="information-film">
                        <h1>Chỗ ngồi</h1>
                        <h6>Bộ phim: Hạ cánh nơi anh</h6>
                        <h6>Xuất chiếu: 16:10</h6>
                    </div>
                </div>
                <div className="col-end-4">
                    <Card title="Thông tin" headStyle={{ textAlign: "center" }} style={{ width: 300 }}>
                        <p>Hàng ghế: A</p>
                        <p>Số thứ tự: 1</p>
                        <p>Tạm tính : 35.000 VNĐ</p>
                        <button className="w-full bg-transparent hover:bg-black hover:text-white p-5">Đi tiếp</button>
                    </Card>
                </div>
            </div>
            <div className="w-4/5 mx-auto my-5">
                <SeatRow>
                    {
                        data?.map((s:any)=>{
                            return <SeatItem key={s.id} state={s.state}>{s.name}</SeatItem>
                        })
                    }
                </SeatRow>
            </div>
        </div>
    );
}
export default Seat;