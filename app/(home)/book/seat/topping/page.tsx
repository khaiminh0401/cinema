"use client"
import {Steps} from "antd";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {toppingAPI} from "@/util/API/Topping";
import {InputNumber} from 'antd';
import {NumberUtils} from "@/util/NumberUtils";
import {useSession} from "next-auth/react";

type Topping = {
    id: string,
    name: string,
    logo: string,
    toppingofbranchid: number,
    branchid: string,
    quantity: number,
    price: number
}
const Topping = () => {
    const search = useSearchParams();
    const branchId = search.get("branchid");
    const [topping, setTopping] = useState<Topping[]>();
    const [total, setTotal] = useState<any[]>([]);
    const [tong, setTong] = useState<number>(0);
    const {data: session, update} = useSession();
    useEffect(() => {
        const init = async () => {
            const toppingofbranch = await toppingAPI.getToppingByBranch(branchId);
            setTopping(toppingofbranch)
            await update({
                ...session?.user,
                topping: total
            })
        }
        const cost = total.length > 0 ? total.map((s: any) => s.sum).reduce((a: number, b: number) => a + b) : tong
        setTong(cost)
        init();
    }, [branchId, tong, total]);
    const onChange = async (value: any, id: number, price: any, name: string) => {
        const newData = {id: id, name: name, quantity: value, sum: Number(value) * Number(price)};
        if (value === 0) {
            setTotal(prevData => prevData.filter(data => data.id !== id));
        } else {
            const isIdExist = total.some(data => data.id === id);
            if (!isIdExist) {
                setTotal(prevData => [...prevData, newData]);
            } else {
                setTotal(prevData => prevData.map(data => data.id === id ? newData : data));
            }
        }
    }

    return (
        <div className="md:mx-28 md:my-14 mx-10">
            <div className="w-1/2 mx-auto my-10">
                <Steps
                    current={0}
                    items={[
                        {
                            title: <span className="text-white">Chọn ghế</span>,
                            status: 'finish',
                        },
                        {
                            title: <span className="text-white">Chọn topping</span>,
                            status: 'process',
                        },
                        {
                            title: <span className="text-white">Thanh toán</span>,
                            status: 'wait',
                        },
                    ]}
                    className="text-white"
                />
            </div>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-inherit px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Đồ ăn/ Thức uống</h1>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-400 text-xs uppercase w-2/5">
                                Mặt hàng
                            </h3>
                            <h3 className="font-semibold text-gray-400 text-xs uppercase w-2/5 text-center">
                                Số lượng
                            </h3>
                            <h3 className="font-semibold  text-gray-400 text-xs uppercase w-2/5 text-center">
                                giá
                            </h3>
                        </div>
                        {topping && topping.map((topping, i) => (
                            <div className="flex items-center -mx-8 px-6 py-5" key={i}>
                                <div className="flex w-2/5">
                                    <div className="w-20">
                                        <img
                                            className="h-24"
                                            src="https://i.pinimg.com/564x/e0/29/cf/e029cf9fee5f3caa2f36c65660e2e146.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-lg">{topping.name}</span>
                                        <span
                                            className="text-red-500 text-sm">Số lượng còn: {topping.quantity}</span>
                                    </div>
                                </div>
                                <div className="flex justify-center w-2/5">
                                    <InputNumber min={0} max={10} defaultValue={0}
                                                 onChange={(v) => onChange(v, topping.toppingofbranchid, topping.price, topping.name)}/>
                                </div>
                                <span
                                    className="text-center w-2/5 font-semibold text-sm">{NumberUtils.formatCurrency(topping.price)}</span>
                            </div>
                        ))}

                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Hóa Đơn</h1>
                        {total?.map((t, i) => (
                            <div className="flex justify-between mt-10 mb-5" key={i}>
                                <span
                                    className="font-semibold text-sm uppercase">{t.name}</span>
                                <span
                                    className="font-semibold text-sm">{NumberUtils.formatCurrency(t.sum || 0)}</span>
                            </div>
                        ))}

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng</span>
                                <span>{total.length === 0 ? NumberUtils.formatCurrency(0) : NumberUtils.formatCurrency(tong)}</span>
                            </div>
                            <button
                                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                Thanh Toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topping;