import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Link from "next/link";

import { FaCirclePlay } from "react-icons/fa6";
const OrderDetail = () => {
    return (
        <>
            <Card className="w-96 bg-inherit text-white relative">
                <CardHeader shadow={false} floated={false} className="h-full rounded-md ">
                    <img
                        src="https://wallpapercave.com/wp/wp2095000.jpg"
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>


                <CardBody className="mt-28 w-full">
                    <Typography className="mb-2 font-bold">
                        GHẾ ĐÃ CHỌN
                    </Typography>

                    <div className="mb-2 flex items-center justify-between">
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            Hàng F Ghế 1:
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            5.000 VND
                        </Typography>
                    </div>

                    <div className="mb-2 flex items-center justify-between">
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            Hàng F Ghế 2:
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            5.000 VND
                        </Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            Hàng F Ghế 3:
                        </Typography>
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                        >
                            5.000 VND
                        </Typography>
                    </div>
                </CardBody>
                <hr />
                <CardFooter className="mt-7 pt-0 w-full">
                    <div className="mb-2 flex items-center justify-between">
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal"
                        >
                            Tổng tiền
                        </Typography>
                        <Typography
                            variant="small"
                            color="light-blue"
                            className="font-bold"
                        >
                            10.000 VND
                        </Typography>
                    </div>
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="mt-4 h-12 bg-blue-500 text-white shadow-none 
                        hover:scale-105 hover:shadow-none hover:bg-blue-600 focus:scale-105 
                        focus:shadow-none active:scale-100"
                    >
                        Tiếp tục thanh toán
                    </Button>
                </CardFooter>

                <section className="absolute w-full" style={{ top: "403px" }}>
                    <Link
                        href="#"
                    >
                        <FaCirclePlay 
                        className="flex justify-center mx-auto mb-3 text-blue-500 
                        text-7xl hover:scale-105 hover:text-blue-600 focus:scale-105 active:scale-100" />
                    </Link>

                    <Link
                        href="#"
                    >
                        <Typography className="mx-auto w-fit text-center hover:scale-105">
                            Xem Trailer
                        </Typography>
                    </Link>
                </section>
            </Card>
        </>
    );
}

export default OrderDetail;