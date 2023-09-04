import React, { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { showtimeAPI } from '@/util/API/Showtime';
import { Pagination } from 'react-bootstrap';

const Showtime = (prop: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [showtimeDetail, setShowtimeDetail] = useState<any[]>([]);
  const [isShow, setIsShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const getWeekDates = () => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      dates.push(date);
    }
    return dates;
  };
  let setDateClick = (date: any) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  useEffect(() => {
    const init = async () => {
      if (!date) {
        console.log("Không có dữ liệu");
      } else {
        const showtime = await showtimeAPI.findShowtimeByMovieAndDate(date, prop.movieId);
        setShowtimeDetail(showtime);
        console.log(showtime);

      };
    }
    init();
  }, [date]);

  const ITEMS_PER_PAGE = 4;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;

  const itemsToDisplay = showtimeDetail.slice(startIndex, endIndex);

  const totalPages = Math.ceil(showtimeDetail.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  let showtime = null;
  if (isShow) {
    showtime = (<>
      {typeof itemsToDisplay === 'string' ? <div className="text-center">{showtimeDetail}</div> :
        <>
          {itemsToDisplay.map((showtime: any) => {
            return <div key={showtime.id} className="mt-3 border-1 border-bottom border-light border-opacity-25 col-lg-6 pb-2">
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
          <div className="mt-4">
            <div className="justify-content-center d-flex">
              <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index}
                    active={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </div>
        </>
      }

    </>
    );
  } else {
    showtime = (<></>);
  }

  return (
    <div>
      <table className="table table-dark">
        <tbody>
          <tr>
            <td><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))}><i className="bi bi-arrow-left-circle"></i></div></td>
            {getWeekDates().map((date) => (
              <td className="text-center pt-2" scope="col" key={date.toISOString()}><button className=" text-light border-0 " style={{ background: "#212529" }} onClick={() => { setDateClick(date), setIsShow(!isShow) }}>{moment(date).format("DD/MM/YYYY")}</button></td>
            ))}
            <td><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))}><i className="bi bi-arrow-right-circle"></i></div></td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        {showtime}
      </div>
    </div>
  );
};

export default Showtime;