import React from "react";
import "./style.css"

export const Gitgraph = ({
    data = [],
    color = "#39d353",
    showMonthNames = true,
    seperateMonths = false,
  }) => {
    const getDay = (dateString) => new Date(dateString).getDate() - 1;
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      <div className="c-graph">
        {daysInMonths.map((days, index) => (
          <div
            key={index}
            className="month"
            style={{ margin: seperateMonths ? "3px" : "0px" }}
          >
            {showMonthNames && <div>{monthNames[index]}</div>}
            <div className="panel">
              {Array.from({ length: days }, () => 0).map((_, dayIndex) => {
                const dayData = data.find(
                  (d) =>
                    new Date(d.date).getMonth() === index &&
                    getDay(d.date) === dayIndex
                );
                const tileColor = dayData && dayData.checked ? color : "";
                return (
                  <div
                    key={dayIndex}
                    className="day"
                    style={{ backgroundColor: tileColor }}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };
  