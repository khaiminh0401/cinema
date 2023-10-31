import { Rate } from "antd";
type TemplateProps = {
    rate: number
    comment: string
    username: string
    date: string
}
const Template = ({ ...props }: { data: TemplateProps[] }) => {
    return (
        <>
            {
                props.data.map((value, index) => {
                    return (
                        <div className="py-4 bg-gray-100 flex items-center justify-center" key={index}>
                            <div className="px-10 w-screen">
                                <div className="bg-white mx-auto max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                                    <div className="mt-4">
                                        <div className="flex mt-2">
                                            <Rate defaultValue={value.rate} disabled />
                                        </div>
                                        <p className="mt-4 text-md text-gray-600">{value.comment}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="mt-4 flex items-center space-x-4 py-6">
                                                <img className="w-12 h-12 rounded-full" src="https://i.pinimg.com/564x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg" alt="" />
                                                <div className="text-black text-sm font-semibold">{value.username} • <span className="font-normal">{value.date}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Template;