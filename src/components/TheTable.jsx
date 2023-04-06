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
    // const allCells = document.getElementsByTagName("td");
    // [...allCells].forEach((cell, ind) => {
    //   cell.classList.add("active-timetable-cell");
    //   cell.classList.add(`unique-cell${ind}`);
    //   cell.addEventListener("click", () => {
    //     if (cell.classList[1].split("-")[1] == "cell0") {
    //       console.log("cell zero stay away");
    //       return;
    //     }
    //     console.log("CLICKED");
    //   });
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

  // *_*

  const handleCellClick = (e) => {
    console.log(props.currentCellColor);
    if (!props.currentCellColor) {
      props.setCurrentCellColor(props.currentCellColor);
      console.log(props.currentCellColor);
    } else {
      props.setCurrentCellColor("");
    }
  };

  const addCells = () => {
    let newRow = [];
    for (let a = 1; a < 7; a++) {
      newRow.push(`<td onClick={() => console.log("clicked!")}></td>`);
    }
    return newRow;
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
                {addCells}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <table>
        
        <tbody>
          <tr>
            <td></td>
            <th>Mon</th>
            <th>Tues</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
          <tr id="row1">
            <th>10:00</th>
            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>
            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>

            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>
            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>
            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>
            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>
            <td
              onClick={handleCellClick}
              className={props.currentCellColor}
            ></td>
          </tr>
          <tr>
            <th>11:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>12:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>13:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>14:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>15:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>16:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>17:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>18:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>19:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>20:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>21:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>22:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>23:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>00:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>01:00</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default TheTable;
