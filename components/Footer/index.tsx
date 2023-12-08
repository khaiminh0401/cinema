import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <hr className="mt-5" />
            <footer className="bg-inherit">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <section className="text-gray-500">

                                <div className="mb-8">
                                    <div className="mb-4">
                                        <p className="font-bold">Zuhot Cinema - Hưng Thịnh</p>
                                        <p>Địa Chỉ: [Địa Chỉ Chi Nhánh A]</p>
                                        <p>Điện Thoại: [Số Điện Thoại Liên Hệ]</p>
                                    </div>

                                    <div className="mb-4">
                                        <p className="font-bold">Zuhot Cinema - Tân Bình</p>
                                        <p>Địa Chỉ: [Địa Chỉ Chi Nhánh B]</p>
                                        <p>Điện Thoại: [Số Điện Thoại Liên Hệ]</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white">Tài nguyên</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <span>Zuhot</span>
                                    </li>
                                    <li>
                                        <span>Góp ý</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercasetext-white">Rạp & Phim</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <span>Tuyển dụng</span>
                                    </li>
                                    <li>
                                        <span>Khuyến mãi</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercasetext-white">Liên hệ</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <span className="break-words">Email: info@zuhotcinema.com</span>
                                    </li>
                                    <li>
                                        <span className="break-words">Facebook: ZuhotCinemaOfficial</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercasetext-white">Bảo mật</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <span>Thỏa thuận sử dụng</span>
                                    </li>
                                    <li>
                                        <span>Chính sách và bảo mật</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/"
                            className="hover:underline">Zuhot™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-red-900 dark:hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-900 dark:hover:text-white">
                                <FaGoogle />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-900 dark:hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-900 dark:hover:text-white">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;