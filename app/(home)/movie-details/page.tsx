
"use client"

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";
import "./index.css";

import dynamic from 'next/dynamic'
import { movieDetailPageAPI } from '@/util/API/MovieDetailPage';
import { movieAPI } from '@/util/API/Movie';

const DynamicHeader = dynamic(() => import('react-multi-carousel'), {
    ssr: false
})

const MovieDetails = () => {
    const [movieDetailPage, setMovieDetailPage] = useState<movieDetailPage>();
    const [moviesNowShowing, setMoviesNowShowing] = useState<movie[]>();
    const searchParams = useSearchParams();
    const movieId = searchParams.get("id");

    const currentDate = useState(new Date());

    const showdate = [
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003",
        "20/07/2003"
    ];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const responsiveShowdate = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    useEffect(() => {
        const init = async () => {
            if (movieId != null) {
                const movie = await movieDetailPageAPI.findMovieDetailPage(movieId);
                setMovieDetailPage(movie);
                console.log(movie)
            }

            // Đang test nên để findAll, vì findMoviesNowShowing không có data trong database
            const moviesNowShowing = await movieAPI.findAll();
            setMoviesNowShowing(moviesNowShowing);
            console.log(moviesNowShowing)
        };

        init();
    }, [movieId])

    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-6 col-lg-8 bg-dark text-white p-4">
                        <h4>Trang chủ &gt; Đặt vé &gt; {movieDetailPage?.name}</h4>
                        {/* Rest of the content for this section */}
                    </div>
                    <div className="col-md-6 col-lg-4 bg-dark text-white p-4">
                        <div className="p-2 text-center">
                            <h4 className="text-white"><span className="border-2 border-bottom border-danger">NHẬN KHUYẾN MÃI</span></h4>
                        </div>
                        {/* Rest of the content for this section */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 bg-dark text-white p-4">
                        <div className="d-flex">
                            <img src={`./assert/img/movie/${movieDetailPage?.poster}`} className="mr-3" style={{ width: 250 }} alt="Movie Poster" />
                            <div className="ms-4 flex-grow-1">
                                <h2 className="mb-3">{movieDetailPage?.name}</h2>
                                <p><strong>Thể loại:</strong> {movieDetailPage?.movieTypeName}</p>
                                <p><strong>Đạo diễn:</strong> {movieDetailPage?.directorsName}</p>
                                <p><strong>Diễn viên:</strong> {movieDetailPage?.actorsName}</p>
                                <p><strong>Ngôn ngữ:</strong> {movieDetailPage?.languagesName}</p>
                                <p><strong>Thời gian chiếu:</strong> {movieDetailPage?.time} phút</p>
                                <p><strong>Đất nước:</strong> {movieDetailPage?.countryName}</p>
                                <p><strong>Năm phát hành:</strong> {movieDetailPage?.yearofmanufacture}</p>
                            </div>
                        </div>
                        <h4 className="mt-4"><span className="border-2 border-bottom border-danger">NỘI DUNG PHIM</span></h4>
                        <p>
                            {movieDetailPage?.describe}
                        </p>
                    </div>
                    <div className="col-md-4 bg-dark text-white p-4">
                        <div className="border border-white p-2 text-center mb-4">
                            <h4 className="text-white">EMAIL</h4>
                        </div>
                        <div className="bg-danger p-2 text-center mb-4">
                            <h4 className="text-white">ĐĂNG KÍ</h4>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-white">PHIM ĐANG CHIẾU</h3>
                            <img src={`./assert/home/${movieDetailPage?.poster}`} className="w-100" alt="Now Showing" />
                            <h3 className="text-white mt-2"> {movieDetailPage?.name}</h3>
                        </div>
                    </div>
                </div>
                <div className="row px-3 mb-5">
                    <div className="col-md-18 bg-dark text-white">
                        <h4 className="text-center border-2 border-bottom border-danger py-2">VUI LÒNG CHỌN THÔNG TIN VÉ</h4>
                        {/* <div className="bg-danger p-5"></div> */}
                        <Carousel
                            responsive={responsiveShowdate}
                            ssr
                            slidesToSlide={1}
                            infinite
                            itemClass="image-item"
                            deviceType={''}
                        >
                            {showdate.map((s, index) => (
                                    <div key={index} style={{ textAlign: 'center' }}>
                                            <Link
                                                key={index}
                                                className={`text-wrapper text-decoration-none text-light fw-bold`} id={`nowShowing_${index}`}
                                                href={{
                                                    pathname: ``,
                                                    query: { id: s }
                                                }}
                                            >
                                                {s}
                                            </Link>
                                    </div>
                                ))
                            }
                        </Carousel>
                        <div className="grid-container mt-3 border-1 border-bottom border-light border-opacity-25">
                            <div className="item1">
                                <div className="card bg-transparent text-white border-0">
                                    <div className="card-body">
                                        <h5 className="card-title py-1 border-1 border-bottom border-light">Tên chi nhánh</h5>
                                        <p className="card-text fw-light">Địa chỉ................</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item2">
                                <div className="bg-danger text-center p-2 rounded-1">2D Sub</div>
                            </div>
                            <div className="item3">
                                <div className="text-center border border-1 p-2 border-light rounded-1">2D</div>
                            </div>
                            <div className="item4">
                                <button type="button" className="btn btn-dark">Secondary</button>
                            </div>
                        </div>
                        <div className="grid-container mt-3 border-1 border-bottom border-light border-opacity-25">
                            <div className="item1">
                                <div className="card bg-transparent text-white border-0">
                                    <div className="card-body">
                                        <h5 className="card-title py-1 border-1 border-bottom border-light">Tên chi nhánh</h5>
                                        <p className="card-text fw-light">Địa chỉ................</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item2">
                                <div className="bg-danger text-center p-2 rounded-1">2D Sub</div>
                            </div>
                            <div className="item3">
                                <div className="text-center border border-1 p-2 border-light rounded-1">2D</div>
                            </div>
                            <div className="item4">
                                <button type="button" className="btn btn-dark">Secondary</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row px-3 mb-4">
                    <div className="col-md-18 bg-dark text-white">
                        <h4 className="text-center  py-2">NHỮNG PHIM ĐANG CHIẾU</h4>

                        <Carousel
                            responsive={responsive}
                            ssr
                            slidesToSlide={1}
                            infinite
                            containerClass="container-with-dots"
                            itemClass="image-item"
                            deviceType={''}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                        >
                            {moviesNowShowing && moviesNowShowing.length > 0 ? (
                                moviesNowShowing.map((mv, index) => (
                                    <div key={index} style={{ textAlign: 'center' }}>
                                            <Link
                                                key={mv.id}
                                                className={`text-wrapper text-decoration-none text-light fw-bold`} id={`nowShowing_${index}`}
                                                href={{
                                                    pathname: ``,
                                                    query: { id: mv.id }
                                                }}
                                            >
                                                <img
                                                    src={`./assert/img/movie/${mv.poster}`}
                                                    alt={`aga`}
                                                    style={{ width: '250px', height: '350px' }}
                                                />
                                            </Link>
                                    </div>
                                ))
                            ) : (
                                <p>No movies currently showing.</p>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails