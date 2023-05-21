import { useState, useEffect } from "react";
import { Link, useNavigate, Redirect } from "react-router-dom";
import Button from "../Button";
import "./Form.scss";

const Form = (props) => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleForgotPassword = () => {
    // Open the forgot password popup window
    window.open("https://www.google.com", "_blank");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    };

    if (props.mode == "signup") {
      if (!username.trim()) {
        isValid = false;
        newErrors.name = "Name is required";
      }
    }

    if (!email.trim()) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      isValid = false;
      newErrors.password = "Password is required";
    } else if (
      // props.mode === 'signup' &&
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*()]/.test(password) ||
      /\*/.test(password)
    ) {
      isValid = false;
      newErrors.password = "Invalid password";
    }

    setErrors(newErrors);

    if (isValid) {
      if (props.mode == "login") {
        setRedirect(true);
      }
    }

    // if (redirect) {
    //   navigate("/home");
    // }
  
    console.log("newErrors", newErrors);
  };

  useEffect(() => {
    if (redirect) {
      navigate("/home");

    }
  }, [redirect])

  return (
    <div className="form-component-container">
       {/* {redirect && (
        <Redirect to="/main-page" />
      ) } */}
      {/* {errors && <span>{errors}</span>} */}
      {props.mode == "signup" && (
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
          <input
            type="email"
            id="email-input"
            name="email"
            value={FormData.email}
            onChange={handleChange}
          />
        </div>
        {/* {errors.email && <p>{errors.email}</p> } */}
      </div>

      <div className="input-with-info-container">
        <div className="input-with-label">
          <label className="input-label">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            value={FormData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      {props.mode == "signup" && (
        <div className="input-with-info-container">
          <div className="input-with-label">
            <label className="input-label">Password Confirmation</label>

            <input type="password" id="password-confirmation-input" />
          </div>
        </div>
      )}
      {props.mode == "login" && (
        <button onClick={handleForgotPassword} id="forgot-password-button">
          Forgot Password
        </button>
      )}
      <button className="main" onClick={handleSubmit}>
        {" "}
        {props.formType}
      </button>
      {props.mode == "login" && <Link to="/signup">Sign up</Link>}
      {props.mode == "signup" && (
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
