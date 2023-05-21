import { Link } from "react-router-dom";
import Button from "../Button";
import "./Form.scss";

const Form = (props) => {
  console.log("props.login", props.login);


  const handleForgotPassword = () => {
    // Open the forgot password popup window
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="form-component-container">
      {props.signup && (
        <div className="input-with-info-container">
          <div className="input-with-label">
            <label className="input-label">Name</label>
            <input type="name" id="name-input" list="names" />
            <datalist id="names">
              <option value="Nicole"></option>
              <option value="Nikki"></option>
              <option value="Nikkikins"></option>
              <option value="Niks"></option>
            </datalist>
          </div>
          {/* <div className="input-icon"></div> */}
        </div>
      )}
      <div className="input-with-info-container">
        <div className="input-with-label">
          <label className="input-label">Email</label>
          <input type="email" id="email-input" />
        </div>
      </div>

      <div className="input-with-info-container">
        <div className="input-with-label">
          <label className="input-label">Password</label>
          <input type="password" id="password-input" />
        </div>
      </div>
      {props.signup && (
        <div className="input-with-info-container">
          <div className="input-with-label">
            <label className="input-label">Password Confirmation</label>

            <input type="password" id="password-confirmation-input" />
          </div>
        </div>
      )}
         {props.login && 
      // <Link
      // to="/forgot-password"
      // id="forgot-password-link"
      // >
        <button onClick={

handleForgotPassword
}
id="forgot-password-button"
>

Forgot Password
        </button>
      // {/* </Link> */}
      }
      <Button buttonText={props.formType} 
      />
      {props.login && 
      <Link
      to="/signup"
      >
      Sign up
      </Link>
      }

      {props.signup && (
        <p id="already-have-account-p">
          Already have an account?
          <Link to="/login">
            <span>Sign In</span>{" "}
          </Link>
        </p>
      )}
    </div>
  );
};

export default Form;
