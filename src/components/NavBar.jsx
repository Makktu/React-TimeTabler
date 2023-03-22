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
      <Button style="settings-btn" buttonText="SETTINGS" />
    </>
  );
};

export default Navbar;
