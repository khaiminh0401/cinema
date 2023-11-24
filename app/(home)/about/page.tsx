const About = () => {
    return (
        <>
            <div className="bg-fixed bg-cover" style={{ backgroundImage: `url('https://i.pinimg.com/originals/00/9e/5a/009e5a183303fe4cad23d8e236407c9a.jpg')` }}>
                <div className="h-fit py-10 flex items-center">
                    <section className="mx-auto w-full py-32 backdrop-blur-md rounded-lg">
                        <div className="mx-auto w-4/5 text-center">
                            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold mb-6">Welcome to Zuhot Cinema</h1>
                            <p className="text-md mb-12">&quot;Chào mừng bạn đến với Zuhot Cinema - Nơi bạn có thể tận hưởng những bộ phim và chương trình truyền hình chất lượng cao với mức giá phải chăng.&quot;</p>
                            <p className="leading-6"><strong className="text-lg mb-5">Tại sao chọn Zuhot Cinema?</strong><br />
                                <p className="leading-10"><i>Trải Nghiệm Điện Ảnh Chất Lượng Cao</i>: Hệ thống âm thanh vòm và hình ảnh sắc nét để bạn thưởng thức mọi chi tiết của bộ phim.</p>
                                <p className="leading-10"><i>Đa Dạng Phim và Suất Chiếu</i>: Một loạt các phim từ các thể loại khác nhau và lịch trình chiếu phong phú, đảm bảo có điều gì đó cho mọi người.</p>

                                <p className="leading-10"><i>Tiện Ích Đẳng Cấp</i>: Rạp có quầy bar, cửa hàng đồ ăn nhẹ và các tiện ích khác để tạo thêm trải nghiệm thoải mái và thú vị.</p>

                                <p className="leading-10">Hãy đến và trải nghiệm không gian điện ảnh tuyệt vời tại Zuhot Cinema! Đảm bảo bạn sẽ tận hưởng mỗi khoảnh khắc tại đây.</p>
                            </p>
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}
export default About;