import React, { useEffect } from "react";
import { useState } from "react";
import { showtimeAPI } from '@/util/API/Showtime';
import { Pagination } from 'react-bootstrap';
import "./index.css";
import ShowTime from "../ShowTime";
import { BiArrowToLeft, BiLeftArrowAlt, BiRightArrowAlt, BiArrowToRight } from 'react-icons/bi';

let format = (data: any) => {
  return data.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

const WeekDate = (prop: any) => {
  const [dateClick, setDateClick] = useState(format(new Date()));
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showtimeDetail, setShowtimeDetail] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const getWeekDates = () => {


    const dates = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date(currentDate)
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };



  let setDateOnClick = (date: any) => {
    setDateClick(format(date));
  };

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const init = async () => {
      const showtime = await showtimeAPI.findShowtimeByMovieAndDate(dateClick, prop.movieId, (currentPage - 1));
      setShowtimeDetail(showtime);
    }
    init();
  }, [dateClick, currentPage]);



  return (
    <div>
      <table className="table table-dark">
        <tbody>
          <tr>
            <th><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))}><BiLeftArrowAlt /></div></th>
            {getWeekDates().map((date, index) => (
              <th className="text-center pt-2" scope="col" key={index}><button className={`buttonDate ${dateClick === format(date) ? 'activeButton' : ''} btn `} onClick={() => { setDateOnClick(date) }}>{format(date)}</button></th>
            ))}
            <th><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))}><BiRightArrowAlt /></div></th>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <ShowTime prop={showtimeDetail} >
          <Pagination >
            <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(1) }} className="btn border-0 buttonPage text-white"><BiArrowToLeft style={{ alignItems: "center", height: "57" }} /></button>
            <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }} className="btn border-0 me-1 buttonPage text-white"><BiLeftArrowAlt style={{ alignItems: "center", height: "57" }} /></button>
            {Array.from({ length: showtimeDetail.totalPages }, (_, index) => (
              <Pagination.Item
                className={`${currentPage === index + 1 ? "activePage" : ""}`}
                key={index}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage < showtimeDetail.totalPages) setCurrentPage(currentPage + 1) }} className="btn border-0 ms-1 buttonPage text-white"><BiRightArrowAlt style={{ alignItems: "center", height: "57" }} /></button>
            <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(showtimeDetail.totalPages) }} className="btn border-0 buttonPage text-white"><BiArrowToRight style={{ alignItems: "center", height: "57" }} /></button>
          </Pagination>
        </ShowTime>
      </div>
    </div>
  );
};

export default WeekDate;