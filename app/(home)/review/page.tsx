"use client"
import { Rate } from "antd";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { constants } from "@/common/constants";
import { useEffect, useState } from "react";
import { movieAPI } from "@/util/API/Movie";
import { Comment } from "@/components/Comment";
import Template from "@/components/Comment/template";
const ReviewPage = () => {
    // const search = useSearchParams();
    // const [data, setData] = useState<any>({
    //     movie: {}
    // })
    // const RATE_DEFAULT_VALUE = 2.5;
    // useEffect(() => {
    //     const init = async () => {
    //         const movie = await movieAPI.getByBill(id);
    //         setData({ ...data, movie: movie });
    //     }
    //     // init();
    // }, []);
    const data = [{
        rate: 3,
        comment: 'hehe',
        username: 'Thiên Ân',
        date: '01/11/2023'
    },
    {
        rate: 3,
        comment: 'hehe',
        username: 'Thiên Ân',
        date: '01/11/2023'
    }]
    return (
        <>
            <Template data={data} />
            {/* <section className="bg-white dark:bg-gray-900 mx-auto px-10 w-4/5 block">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Review phim: Hạ Cánh Nơi Anh</h1>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <Image alt="" className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl min-h-screen lg:h-96" width={1920} height={1080} src={`${constants.URL_IMAGES}MP01.png`} />
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-sm text-blue-500 uppercase">category</p>

                            <p className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                                All the features you want to know
                            </p>

                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                laudantium quia tempore delect
                            </p>
                            <Rate defaultValue={RATE_DEFAULT_VALUE} />

                        </div>
                    </div>
                    <p>Cảm ơn bạn đã tin tưởng gia đình Zuhot</p>
                    <p>Một phần đóng góp ý kiến của bạn sẽ giúp chúng tôi cải thiện hơn trong từng ngày.</p>
                    <Comment />
                </div>
            </section> */}
        </>
    );
}
export default ReviewPage;