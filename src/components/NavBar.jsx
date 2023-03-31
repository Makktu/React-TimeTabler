import Button from "./Button";

import "../styles/Navbar.css";

const Navbar = () => {
  const clickHandler = (e) => {
    console.log(e.target.className);
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
      <span className="pick-orangered"></span>
      <span className="pick-yellow"></span>
      <span className="pick-cyan"></span>
      <span className="pick-gray"></span>
      <Button style="settings-btn" buttonText="SETTINGS" />
    </>
  );
};

export default Navbar;
