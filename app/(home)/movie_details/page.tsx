const MovieDetails = () => {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-6 col-lg-8 bg-dark text-white p-4">
                        <h4>Trang chủ &gt; Đặt vé &gt; NGƯỢC DÒNG THỜI GIAN ĐỂ YÊU ANH</h4>
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
                            <img src="https://file.rendit.io/n/ge4LEHeBsZEHUmDHkTPJ.png" className="mr-3" style={{ width: 250 }} alt="Movie Poster" />
                            <div className="ms-4 flex-grow-1">
                                <h2 className="mb-3">NGƯỢC DÒNG THỜI GIAN ĐỂ YÊU ANH</h2>
                                <p><strong>Tên tiếng Anh:</strong> Love Destiny The Movie</p>
                                <p><strong>Thể loại:</strong> tình cảm, hài</p>
                                <p><strong>Đạo diễn:</strong> Adisorn Tresirikasem</p>
                                <p><strong>Diễn viên:</strong> Thanavat Vatthanaputi, Ranee Campen, Paris Intarakomalyasu</p>
                                <p><strong>Phát hành:</strong> CJ HK Entertainment</p>
                                <p><strong>Khởi chiếu:</strong> 09.09.2022</p>
                            </div>
                        </div>
                        <h4 className="mt-4"><span className="border-2 border-bottom border-danger">NỘI DUNG PHIM</span></h4>
                        <p>
                            Bhop – một kỹ sư tài năng luôn nghĩ rằng cô gái thường xuất hiện trong giấc mơ của anh
                            suốt nhiều năm qua chính là tri kỷ mà anh luôn tìm kiếm. Khi gặp Gaysorn – vị tiểu thư
                            có gương mặt giống hệt “người trong mộng” – Bhop quyết tâm giành lấy trái tim cô.
                            Tuy nhiên, Gaysorn lại không hề tin vào vận mệnh và luôn tỏ thái độ khước từ Bhop.
                            Cặp đôi sẽ trải qua một hành trình dài để đến được với nhau, đồng thời phải đối mặt với
                            những thử thách và biến cố xảy ra trong thời đại của mình.
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
                            <img src="https://file.rendit.io/n/P7ROKNFTVZjTYGnUGYjK.png" className="w-100" alt="Now Showing" />
                            <h3 className="text-white mt-2">Ngược Dòng Thời Gian Để Yêu Anh</h3>
                        </div>
                    </div>
                </div>
                <div className="row px-3 mb-4">
                    <div className="col-md-8 bg-dark text-white">
                        <h4><span className="border-2 border-bottom border-danger">LỊCH CHIẾU</span></h4>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails