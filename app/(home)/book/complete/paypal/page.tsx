"use client"
import QR from "@/components/QR";
import { Button, Result } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const BookComplete = () => {
    const searchParams = useSearchParams();
    const billId = searchParams.get("billId")
    const router = useRouter();
    return (
        <Result
            status="success"
            title="Thanh toán thành công"
            subTitle={<Link href={`/review?id=${billId}`} className="text-white">Hoàn tất đơn hàng</Link>}
            extra={[
                <Button onClick={()=>router.push("/")} key="buy">Trở về trang chủ</Button>,
            ]}
        />
    )
}
export default BookComplete;