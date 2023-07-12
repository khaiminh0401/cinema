const Footer = () => {
    return (
        <>
            <footer className="footer section border-top" >
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3">
                            <div className="logo footer-logo">
                                <a href="index.html" title="Logo">You<span className="text-primary">video.</span></a>
                            </div>
                            <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been
                                the </p>
                            <ul className="d-flex justify-content-between m-0 p-0 w-50" style={{ listStyle: "none" }}>
                                <li><a className="nav-link" href="#"><i className="bi bi-facebook" /></a></li>
                                <li><a className="nav-link" href="#"><i className="bi bi-twitter" /></a></li>
                                <li><a className="nav-link" href="#"><i className="bi bi-linkedin" /></a></li>
                                <li><a className="nav-link" href="#"><i className="bi bi-telegram" /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h4>Movies</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="footer-list p-0" style={{ listStyle: "none" }}>
                                        <li><a className="nav-link" href="#">Drama</a></li>
                                        <li><a className="nav-link" href="#">Action</a></li>
                                        <li><a className="nav-link" href="#">Animation</a></li>
                                        <li><a className="nav-link" href="#">Comedy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h4>Tv Shows</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="footer-list p-0" style={{ listStyle: "none" }}>
                                        <li><a className="nav-link" href="#">Breaking Bad</a></li>
                                        <li><a className="nav-link" href="#">Grimm</a></li>
                                        <li><a className="nav-link" href="#">Friends</a></li>
                                        <li><a className="nav-link" href="#">Supergirl</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h4>My Account</h4>
                            <ul className="footer-list p-0" style={{ listStyle: "none" }}>
                                <li><a className="nav-link" href="#">My Account</a></li>
                                <li><a className="nav-link" href="#">Plan</a></li>
                                <li><a className="nav-link" href="#">Premium</a></li>
                                <li><a className="nav-link" href="#">Faq</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyrigh">
                <p className="text-center pt-3 border-top">Zuhot - © 2023 All Rights Reserved</p>
            </div>
        </>
    );

};
export default Footer;