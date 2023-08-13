import { FaAngleDoubleDown, FaAngleDoubleRight, FaBox, FaChartBar, FaFireAlt, FaMoneyCheck, FaShoppingBag, FaUserAlt } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
            <a href="/" className="brand-link">
                <img src="/assert/img/logo.png" alt="Zuhot Cinema Logo" className="mx-auto d-block" style={{ height: 50, width: 100 }} />
            </a>

            <div className="sidebar-wrapper">
                <nav className="mt-2">
                    <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-icon position-absolute top-50 start-30 translate-middle">
                                    <FaChartBar />
                                </span>
                                <p className="ps-5">
                                    Dashboard
                                    <span className="nav-icon position-absolute top-50 end-0 translate-middle">
                                        <FaAngleDoubleDown />
                                    </span>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="./index.html" className="nav-link">
                                        <span className="nav-icon position-absolute top-50 start-40 translate-middle">
                                            <FaAngleDoubleRight />
                                        </span>
                                        <p className="ps-5">
                                            Dashboard v1
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./index2.html" className="nav-link">
                                        <span className="nav-icon position-absolute top-50 start-40 translate-middle">
                                            <FaAngleDoubleRight />
                                        </span>
                                        <p className="ps-5">
                                            Dashboard v2
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./index3.html" className="nav-link">
                                        <span className="nav-icon position-absolute top-50 start-40 translate-middle">
                                            <FaAngleDoubleRight />
                                        </span>
                                        <p className="ps-5">
                                            Dashboard v3
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-icon position-absolute top-50 start-30 translate-middle">
                                    <FaBox />
                                </span>
                                <p className="ps-5">
                                    Box
                                    <span className="nav-icon position-absolute top-50 end-0 translate-middle">
                                        <FaAngleDoubleDown />
                                    </span>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="./widgets/small-box.html" className="nav-link">
                                        <span className="nav-icon position-absolute top-50 start-40 translate-middle">
                                            <FaAngleDoubleRight />
                                        </span>
                                        <p className="ps-5">Small Box</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./widgets/info-box.html" className="nav-link">
                                        <span className="nav-icon position-absolute top-50 start-40 translate-middle">
                                            <FaAngleDoubleRight />
                                        </span>
                                        <p className="ps-5">
                                            info Box
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./widgets/cards.html" className="nav-link">
                                        <span className="nav-icon position-absolute top-50 start-40 translate-middle">
                                            <FaAngleDoubleRight />
                                        </span>
                                        <p className="ps-5">
                                            Cards
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-icon position-absolute top-50 start-30 translate-middle">
                                    <FaMoneyCheck />
                                </span>
                                <p className="ps-5">
                                    Payment
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-icon position-absolute top-50 start-30 translate-middle">
                                    <FaFireAlt />
                                </span>
                                <p className="ps-5">
                                    Product Hot
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-icon position-absolute top-50 start-30 translate-middle">
                                    <FaUserAlt />
                                </span>
                                <p className="ps-5">
                                    User
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="nav-icon position-absolute top-50 start-30 translate-middle">
                                    <FaShoppingBag />
                                </span>
                                <p className="ps-5">
                                    Orders
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
export default Sidebar;