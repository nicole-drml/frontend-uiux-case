import "./Button.scss";

const Button = (props) => {
  return (
    <>
      <button className="main" >
        <span>{props.buttonText}</span>
      </button>
    </>
  );
};

export default Button;
