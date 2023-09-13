import {
    FaFacebook,
    FaGoogle,
    FaTwitter,
    FaYoutube
} from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <hr />
            <footer className="bg-inherit">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <img src="/assert/img/logo.png" className="h-8 mr-3" alt="Zuhot Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zuhot</span>
                            </a><br />
                            <span className="text-gray-500"> Theo dõi bản tin của chúng tôi để nhận được cập nhật và tin tức sớm nhất. </span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Tài nguyên</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">Zuhot</a>
                                    </li>
                                    <li>
                                        <a href="/" className="hover:underline">Góp ý</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercasetext-white">Rạp & Phim</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Tuyển dụng</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Khuyến mãi</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercasetext-white">Security</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Thỏa thuận sử dụng</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Chính sách và bảo mật</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Zuhot™</a>. All Rights Reserved.
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