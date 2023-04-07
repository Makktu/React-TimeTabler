import Button from "./Button";

import "../styles/Navbar.css";

const Navbar = (props) => {
  const handleColorChangeClick = (newColor) => {
    // console.log(e.target.className.split("-")[1]);
    props.setCurrentCellColor(newColor);
  };

  const clickHandler = (e) => {
    if (e.target.className === "timer-btn") {
      alert("Timer functionality coming in a later version");
    }
    if (e.target.className === "save-btn") {
      alert("Save functionality coming in this version, soon.");
    }
  };

  return (
    <>
      <Button style="save-btn" buttonText="SAVE" onClick={clickHandler} />
      <Button style="export-btn" buttonText="EXPORT" />
      <Button buttonText="NEW WEEK" />
      <Button style="timer-btn" buttonText="TIMER" onClick={clickHandler} />
      <label className="navLabel">Cell Color: </label>
      <span
        onClick={() => handleColorChangeClick("orangered")}
        className="pick-orangered"
      ></span>
      <span
        onClick={() => handleColorChangeClick("yellow")}
        className="pick-yellow"
      ></span>
      <span
        onClick={() => handleColorChangeClick("cyan")}
        className="pick-cyan"
      ></span>
      <span
        onClick={() => handleColorChangeClick("gray")}
        className="pick-gray"
      ></span>
      <Button style="settings-btn" buttonText="SETTINGS" />
    </>
  );
};

export default Navbar;
