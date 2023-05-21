import { useState } from "react";
import Status from "../../assets/parts/Status";
import Form from "../../components/Form";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div id="signup-page-container" className="form-page">
      <Status />
      <div className="logo-heading">
        <div className="logo-left-line"></div>
        <div className="logo-container">
          <div className="logo-furniture"></div>
        </div>
        <div className="logo-right-line"></div>
      </div>
      <h3>WELCOME</h3>
      <div id="signup-form-container" className="forms-container">
        <Form 
        formType="Sign up"
        signup={true} 
        login={false}
        mode='signup'
        />
      </div>

      <div className="indicator"></div>
    </div>
  );
};

export default SignUp;
