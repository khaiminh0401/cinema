"use client"
import QR from "@/components/QR";
import { billAPI } from "@/util/API/Bill";
import { successNotification } from "@/util/Notification";
import { Button, Result } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const BookComplete = () => {
    const searchParams = useSearchParams();
    const billId = searchParams.get("billId")
    useEffect(() => {
        billAPI.updateExportStatus(Number(billId), 1).then(() => { successNotification("Thanh toán thành công !") }).catch(e => {});
    }, [])
    const router = useRouter();
    return (
        <Result
            status="success"
            title="Thanh toán thành công"
            subTitle={<Link href={`/review?id=${billId}`} className="text-white">Hoàn tất đơn hàng</Link>}
            extra={[
                <Button onClick={() => router.push("/")} key="buy">Trở về trang chủ</Button>,
            ]}
        />
    )
}
export default BookComplete;