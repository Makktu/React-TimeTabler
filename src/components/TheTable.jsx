import { useEffect, useState } from "react";

import "../styles/TheTable.css";

const TheTable = (props) => {
  const theHours = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
    "01:00",
  ];
  const theDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    // identify day of the week and highlight it
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let today = new Date();
    let thisDay = weekday[today.getDay()];
    let todayColumn = document.getElementById(thisDay);
    todayColumn.classList.add("today");
  }, []);

  // *_*

  const handleClick = (e) => {
    if (!e.target.bgColor) {
      e.target.bgColor = props.currentCellColor;
    } else {
      e.target.bgColor = "";
    }
  };

  return (
    <>
      <table>
        <colgroup>
          <col />
          <col id="Monday" />
          <col id="Tuesday" />
          <col id="Wednesday" />
          <col id="Thursday" />
          <col id="Friday" />
          <col id="Saturday" />
          <col id="Sunday" />
        </colgroup>
        <tbody>
          <tr>
            <td></td>
            {theDays.map((day) => {
              return <th>{day}</th>;
            })}
          </tr>
          {theHours.map((hour) => {
            return (
              <tr>
                <th>{hour}</th>
                <td onClick={handleClick}></td>
                <td onClick={handleClick}></td>
                <td onClick={handleClick}></td>
                <td onClick={handleClick}></td>
                <td onClick={handleClick}></td>
                <td onClick={handleClick}></td>
                <td onClick={handleClick}></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TheTable;
