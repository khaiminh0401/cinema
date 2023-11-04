"use client"
import { constants } from "@/common/constants";
import { Comment } from "@/components/Comment";
import { movieAPI } from "@/util/API/Movie";
import { Rate } from "antd";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const ReviewPage = () => {
    const search = useSearchParams();
    const [rate, setRate] = useState(1);
    const id = search.get('id');
    const [data, setData] = useState<any>({
        movie: {}
    })
    useEffect(() => {
        const init = async () => {
            const movie = await movieAPI.getByBill(id);
            setData({ ...data, movie: movie });
        }
        init();
    }, []);
    console.log(data);
    
    return (
        <section className="bg-white dark:bg-gray-900 mx-auto px-10 w-4/5 block">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Review phim: {data.movie.name}</h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <Image alt="" className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl min-h-screen lg:h-96" width={1920} height={1080} src={`${constants.URL_IMAGES}${data.movie.poster}`} />
                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                            {data.movie.name}
                        </p>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            {data.movie.describe}
                        </p>
                        <Rate value={rate} onChange={setRate} />
                    </div>
                </div>
                <p>Cảm ơn bạn đã tin tưởng gia đình Zuhot</p>
                <p>Một phần đóng góp ý kiến của bạn sẽ giúp chúng tôi cải thiện hơn trong từng ngày.</p>
                <Comment rate={rate} />
            </div>
        </section>
    );
}
export default ReviewPage;