import React from "react";
import { useState } from "react";
import moment from "moment";

const Weekly = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  return (
    <div>
      <table className="table table-dark">
        <tbody>
          <tr>
            <td><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000))}><i className="bi bi-arrow-left-circle"></i></div></td>
            {getWeekDates().map((date) => (
              <td className="text-center pt-2" scope="col" key={date.toISOString()}>{moment(date).format("DD/MM/YYYY")}</td>
            ))}
            <td><div className="fs-5 pb-1" onClick={() => setCurrentDate(new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000))}><i className="bi bi-arrow-right-circle"></i></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Weekly;