import Button from "./Button";

import "../styles/Navbar.css";

const Navbar = () => {
  const clickHandler = () => {
    alert("CLICKED");
  };

  return (
    <>
      <Button buttonText="SAVE" />
      <Button style="export-btn" buttonText="EXPORT" />
      <Button buttonText="NEW WEEK" />
      <Button style="timer-btn" buttonText="TIMER" onClick={clickHandler} />
      <label className="navLabel">Cell Color: </label>
      <span className="pick-orangered"></span>
      <span className="pick-yellow"></span>
      <span className="pick-cyan"></span>
      <span className="pick-gray"></span>
      <Button style="settings-btn" buttonText="SETTINGS" />
    </>
  );
};

export default Navbar;
