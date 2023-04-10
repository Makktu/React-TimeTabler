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
    // document.addEventListener("contextmenu", function (e) {
    //   e.preventDefault();
    //   addText(e);
    // });
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

  const rightClickHandler = (e) => {
    e.preventDefault();
    if (e.target.innerText) {
      e.target.innerText = "";
    } else {
      let newText = prompt("Add text");
      e.target.innerText = newText.toUpperCase();
    }
  };

  // *_*

  const handleClick = (e) => {
    console.log(e.target.value);
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
            {theDays.map((day, ind) => {
              return <th key={ind}>{day}</th>;
            })}
          </tr>
          {theHours.map((hour, ind) => {
            return (
              <tr>
                <th key={ind}>{hour}</th>
                <td
                  key={ind + hour}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
                <td
                  key={ind + hour + 1}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
                <td
                  key={ind + hour + 2}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
                <td
                  key={ind + hour + 3}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
                <td
                  key={ind + hour + 4}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
                <td
                  key={ind + hour + 5}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
                <td
                  key={ind + hour + 6}
                  onClick={handleClick}
                  onContextMenu={rightClickHandler}
                ></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TheTable;
