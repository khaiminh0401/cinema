import React, { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { showtimeAPI } from '@/util/API/Showtime';
import { Pagination } from 'react-bootstrap';
import "./index.css";
import ShowTime from "../ShowTime";
import { BiArrowToLeft, BiLeftArrowAlt, BiRightArrowAlt, BiArrowToRight } from 'react-icons/bi';

const WeekDate = (prop: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateClick, setDateClick] = useState("");
  const [showtimeDetail, setShowtimeDetail] = useState<any>([]);
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
  const date2 = new Date();
  const currentDateStart = date2.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  let setDateOnClick = (date: any) => {
    setDateClick(moment(date).format("YYYY-MM-DD"));
  };


  useEffect(() => {
    const init = async () => {
      if (!dateClick) {
        const showtime = await showtimeAPI.findShowtimeByMovieAndDate(moment(currentDateStart).format("YYYY-MM-DD"), prop.movieId, (currentPage - 1));
        setShowtimeDetail(showtime);
        setDateClick(moment(currentDateStart).format("YYYY-MM-DD"));
      } else {
        const showtime = await showtimeAPI.findShowtimeByMovieAndDate(dateClick, prop.movieId, (currentPage - 1));
        setShowtimeDetail(showtime);
      };
    }
    init();
  }, [dateClick, currentPage, currentDateStart]);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <table className="table table-dark">
        <tbody>
          <tr>
            <td><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))}><i className="bi bi-arrow-left-circle"></i></div></td>
            {getWeekDates().map((date) => (
              <td className="text-center pt-2" scope="col" key={date.toISOString()}><button className={`buttonDate ${dateClick === moment(date).format("YYYY-MM-DD") ? 'activeButton' : ''} btn `} onClick={() => { setDateOnClick(date) }}>{moment(date).format("DD/MM/YYYY")}</button></td>
            ))}
            <td><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))}><i className="bi bi-arrow-right-circle"></i></div></td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <ShowTime prop={showtimeDetail} >
          <Pagination >
            <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(1) }} className="btn border-0 buttonPage text-white"><BiArrowToLeft className="hoverIcon" style={{ alignItems: "center", height: "57" }} /></button>
            <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }} className="btn border-0 me-1 buttonPage text-white"><BiLeftArrowAlt className="hoverIcon" style={{ alignItems: "center", height: "57" }} /></button>
            {Array.from({ length: showtimeDetail.totalPages }, (_, index) => (
              <Pagination.Item
                className={`${currentPage === index + 1 ? "activePage" : ""}`}
                key={index}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </Pagination.Item>
            ))}
            <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage < showtimeDetail.totalPages) setCurrentPage(currentPage + 1) }} className="btn border-0 ms-1 buttonPage text-white"><BiRightArrowAlt className="hoverIcon" style={{ alignItems: "center", height: "57" }} /></button>
            <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(showtimeDetail.totalPages) }} className="btn border-0 buttonPage text-white"><BiArrowToRight style={{ alignItems: "center", height: "57" }} /></button>
          </Pagination>
        </ShowTime>
      </div>
    </div>
  );
};

export default WeekDate;