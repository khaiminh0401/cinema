import { Button, Result } from "antd";

const BookComplete = () => {
    return (
        <Result
            status="success"
            title="Thanh toán thành công"
            subTitle={<span className="text-white">Hoàn tất đơn hàng</span>}
            extra={[
                <Button type="primary" key="console">
                    Đi tới hóa đơn
                </Button>,
                <Button key="buy">Trở về trang chủ</Button>,
            ]}
        />
    )
}
export default BookComplete;