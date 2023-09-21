import React, { useState, useEffect } from 'react';

const ShowTime = ({ children, prop }: any) => {

    return (
        <>
            {typeof prop === 'string' ? <div className="text-center pt-2">Xin lỗi, không có xuất chiếu vào ngày này, hãy chọn một ngày khác.</div> :
                <>
                    <div className='grid grid-cols-12'>
                        {prop.content?.map((showtime: any) => {
                            return <div key={showtime.id} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mx-2 mt-3 border-1 border-bottom border-light border-opacity-25 col-lg-6 pb-2">
                                <div className="col-lg-12 border border-1 rounded-2 justify-content-center d-flex p-2">
                                    <div className="item1 col-lg-8">
                                        <div className="card border border-1 bg-transparent text-white border-0">
                                            <div className="card-body">
                                                <h5 className="card-title py-1 border-1 border-bottom border-light">Tên chi nhánh: <span className="text-danger fw-bolder">{showtime.branchName}</span></h5>
                                                <p className="card-text fw-light">Địa chỉ: <span className="text-danger fw-bolder">{showtime.branchAddress}</span></p>
                                                <p className="card-text fw-light">Phòng: <span className="text-danger fw-bolder">{showtime.roomName}</span></p>
                                                <p className="card-text fw-light">Thời gian: <span className="text-danger fw-bolder">{showtime.startTime}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item2 col-lg-4 mt-5 me-2">
                                        <div className="bg-danger text-center p-2 rounded-1 mb-2">{showtime.dimensionName}</div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="flex justify-center">
                        {children}
                    </div>
                </>
            }
        </>

    );
}
export default ShowTime;