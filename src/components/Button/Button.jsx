import "./Button.scss";

const Button = (props) => {
  console.log("props", props.text);
  return (
    <>
      <button className="main" >
        <span>{props.buttonText}</span>
      </button>
    </>
  );
};

export default Button;
