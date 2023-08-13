'use client'
import { useState } from 'react';
import './index.css';
import { BsArrowDownShort } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
const Sidebar = () => {
    const [isShow, setIsShow] = useState(false);
    const handleDropdown = () => {
        setIsShow(!isShow);
    };

    const [isShow1, setIsShow1] = useState(false);
    const handleDropdown1 = () => {
        setIsShow1(!isShow1);
    };
    const [isShow2, setIsShow2] = useState(false);
    const handleDropdown2 = () => {
        setIsShow2(!isShow2);
    };
    const [isShow3, setIsShow3] = useState(false);
    const handleDropdown3 = () => {
        setIsShow3(!isShow3);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="item">
                        <a onClick={handleDropdown} className="a sub-btn dropdown">Status <BsArrowDownShort/></a>
                        {isShow && (
                            <div className="sub-menu">
                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                       On auction
                                    </label>
                                </div>

                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                        New
                                    </label>
                                </div>
                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                        Has offers
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="item">
                        <a onClick={handleDropdown1} className="a sub-btn dropdown">Cape <BsArrowDownShort/></a>
                        {isShow1 && (
                            <div className="sub-menu">
                                <div className=" sub-item d-flex">
                                    <div className="input-group mb-3 mt-1">
                                        <span className="input-group-text" id="basic-addon1"><BsSearch/></span>
                                        <input type="text" className="form-control" placeholder="Search"  />
                                    </div>

                                </div>
                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                        Human Latte
                                    </label>
                                </div>

                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                        Human Boda
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="item">
                        <a onClick={handleDropdown2} className="a sub-btn dropdown">Type <BsArrowDownShort/></a>
                        {isShow2 && (
                            <div className="sub-menu">
                                <div className=" sub-item d-flex">
                                    <div className="input-group mb-3 mt-1">
                                        <span className="input-group-text" id="basic-addon1"><BsSearch/></span>
                                        <input type="text" className="form-control" placeholder="Search"  />
                                    </div>

                                </div>
                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                        Bot
                                    </label>
                                </div>

                                <div className="a sub-item d-flex">
                                    <input className="" type="checkbox" />
                                    <label className="form-check-label ms-2" >
                                        Balloon
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="item">
                        <a onClick={handleDropdown3} className="a sub-btn dropdown">Ninja Outfit <BsArrowDownShort/></a>
                        {isShow3 && (
                            <div className="sub-menu">
                                <a href="" className="a sub-item">sub-item1</a>
                                <a href="" className="a sub-item">sub-item2</a>
                                <a href="" className=" a sub-item">sub-item3</a>
                            </div>
                        )}
                    </div>
                    <div className="item">
                        <a onClick={handleDropdown1} className="a sub-btn dropdown">Glasses <BsArrowDownShort/></a>
                        
                    </div>
                    <div className="item">
                        <a onClick={handleDropdown1} className="a sub-btn dropdown">Mask <BsArrowDownShort/></a>
                        
                    </div>
                    <div className="item">
                        <a onClick={handleDropdown1} className="a sub-btn dropdown">Tie <BsArrowDownShort/></a>
                        
                    </div>
                    <div className="item">
                        <a onClick={handleDropdown1} className="a sub-btn dropdown">Chain <BsArrowDownShort/></a>
                        
                    </div>
                </div>
                <div className="col-md-9 bg-secondary">ss</div>
            </div>
        </div>
    );
};

export default Sidebar;