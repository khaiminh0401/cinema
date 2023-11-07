import { movieAPI } from "@/util/API/Movie";
import { Pagination, Rate } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Template = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [review, setReview] = useState<reviewType[]>();
    const searchParams = useSearchParams();
    const movieId = searchParams.get("id");

    // Số lượng mục trên mỗi trang và tổng số mục
    const itemsPerPage = 3;
    const totalItems = 30;

    // Xử lý sự kiện khi trang thay đổi
    const handlePageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        const init = async () => {
            const data = await movieAPI.getReviewByMovieId(movieId, itemsPerPage, currentPage);
            setReview(data)
        }
        init();
    }, [currentPage])
    return (
        <>
            {review != undefined && review.length > 0
                ? <div>
                    {
                        review.map((value, index) => {
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
                                                            <p className="font-normal">{value.exportdate + ""}</p></div>
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
            <Pagination className="text-center pt-2" responsive
                current={currentPage}
                pageSize={itemsPerPage}
                total={totalItems}
                onChange={handlePageChange}
            />
        </>
    )
}
export default Template;