import "../styles/Button.css";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={props.style}>
        {props.buttonText}
      </button>
    </>
  );
};

Button.defaultProps = {
  buttonText: "BUTTON",
  style: "",
};

export default Button;
