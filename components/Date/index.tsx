import React, {useEffect, useState} from "react";
import {showtimeAPI} from '@/util/API/Showtime';
import {Pagination} from 'react-bootstrap';
import "./index.css";
import ShowTime from "../ShowTime";
import {BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';

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
    <>
      <div className="grid grid-cols-1 pb-2 border-b-2 border-red-950">
        <div className="flex sm:col-span-3 lg:col-span-12 md:col-span-6 col-span-3 mt-2 mx-auto">
          <button className="py-1 text-center flex-none" onClick={() => setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))}><BiLeftArrowAlt /></button>
          <div className="grow mx-2">
            {getWeekDates().map((date, index) => (
              <button key={index} className={`${dateClick === format(date) ? 'bg-red-950 text-white' : 'bg-white text-black'} lg:px-8 md:px-7 sm:px-6 sm:mx-2 py-1 my-2 rounded-lg text-center w-full sm:w-auto`} onClick={() => { setDateOnClick(date) }}>{format(date)}</button>
            ))}
          </div>
          <button className="py-1 text-center flex-none" onClick={() => setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))}><BiRightArrowAlt /></button>
        </div>
      </div>
      <ShowTime prop={showtimeDetail}>
        <Pagination className="flex gap-4 place-content-center">
          <button style={{ fontSize: "30px" }} onClick={() => { setCurrentPage(1) }} className="btn border-0 buttonPage text-white"><BiArrowToLeft style={{ alignItems: "center", height: "57" }} /></button>
          <button style={{ fontSize: "30px" }} onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }} className="btn border-0 me-1 buttonPage text-white"><BiLeftArrowAlt style={{ alignItems: "center", height: "57" }} /></button>
          {Array.from({ length: showtimeDetail.totalPages }, (_, index) => (
            <Pagination.Item
              className={`mt-4 ${currentPage === index + 1 ? "activePage" : ""}`}
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
    </>
  );
};

export default WeekDate;