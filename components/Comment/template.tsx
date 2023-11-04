import { DateUtils } from "@/util/DateUtils";
import { Rate } from "antd";
type review = {
    rate: number
    review: string | null
    exportdate: string
    exporttime: string
    name: string
}
const Template = ({ ...props }: { data: review[] | undefined }) => {
    return (
        <>
            {props.data != undefined && props.data.length > 0
                ? <div>
                    {
                        props.data.map((value, index) => {
                            return (
                                <div className="py-4 flex items-center justify-center" key={index}>
                                    <div className="px-10 w-full">
                                        <div className="bg-white mx-auto w-full rounded-2xl px-10 py-1 shadow-lg hover:shadow-2xl transition duration-500">
                                            <div className="mt-4">
                                                <div className="flex mt-2">
                                                    <Rate value={value.rate} disabled />
                                                </div>
                                                <p className="mt-4 text-md text-gray-600" dangerouslySetInnerHTML={{ __html: value.review as string }}></p>
                                                <div className="flex justify-between items-center">
                                                    <div className="mt-4 flex items-center space-x-4 py-6">
                                                        <img className="w-12 h-12 rounded-full" src="https://i.pinimg.com/564x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg" alt="" />
                                                        <div className="text-black text-sm font-semibold">
                                                            {value.name}
                                                            <p className="font-normal">{value.exportdate}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                : <div className="text-center pt-2">Xin lỗi, chưa có đánh giá vào bộ phim này.</div>
            }
        </>
    )
}
export default Template;