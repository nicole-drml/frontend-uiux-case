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
    const { username, email, password, confirmPassword } = formData;

    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (props.mode == "signup") {
      if (!username.trim()) {
        isValid = false;
        newErrors.username = "Name is required";
      }
      if (!confirmPassword.trim()) {
        isValid = false;
        newErrors.confirmPassword = "Password confirmation is required";
      } else if (confirmPassword != password) {
        isValid = false;
        newErrors.confirmPassword = "Passwords do not match";
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
      setRedirect(true);
    }
    console.log("newErrors", newErrors);
  };

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect]);

  return (
    <div className="form-component-container">
      {props.mode == "signup" && (
        <div className="input-with-info-container">
          <div className="input-with-label">
            <label className="input-label">Name</label>
            <input
              type="name"
              id="name-input"
              // list="names"

              name="username"
              value={FormData.username}
              onChange={handleChange}
            />
          </div>
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

            <input
              type="password"
              id="password-confirmation-input"
              name="confirmPassword"
              value={FormData.confirmPassword}
              onChange={handleChange}
            />
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
