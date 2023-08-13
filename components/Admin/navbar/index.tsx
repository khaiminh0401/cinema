import { FaBell, FaComment, FaHome, FaList, FaPhone, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="app-header navbar navbar-expand bg-body">
            {/*begin::Container*/}
            <div className="container-fluid">
                {/*begin::Start Navbar Links*/}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                            <FaList />
                        </a>
                    </li>
                    {/* home */}
                    <li className="nav-item d-none d-md-block">
                        <a href="/" className="nav-link"><FaHome /></a>
                    </li>
                    {/* end home */}
                    {/* contact */}
                    <li className="nav-item d-none d-md-block">
                        <a href="#" className="nav-link"><FaPhone /></a>
                    </li>
                    {/* end contact */}
                </ul>
                {/*end::Start Navbar Links*/}

                {/*begin::End Navbar Links*/}
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <FaSearch />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaComment />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <FaBell />
                        </a>
                    </li>
                    <li className="nav-item user-menu">
                        <a href="#" className="nav-link">
                            <img src="/assert/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User Image" />
                            <span className="d-none d-md-inline">Alexander Pierce</span>
                        </a>
                    </li>
                </ul>
                {/*end::End Navbar Links*/}
            </div>
            {/*end::Container*/}
        </nav>
    );
}

export default Navbar;