import Form from "../../components/Form";
import Status from "../../assets/parts/Status";
import "./Login.scss"
const LogIn = () => {
  return (
    <div id="login-page-container" className="form-page">
      <Status />
      <div className="logo-heading">
        <div className="logo-left-line"></div>
        <div className="logo-container">
          <div className="logo-furniture"></div>
        </div>
        <div className="logo-right-line"></div>
      </div>
      <h3 id="login-h3" ><span>Hello!</span><br/> WELCOME BACK</h3>
      <div id="login-form-container" className="forms-container">
        <Form formType="Log In"
        mode='login' />
      </div>
      <div className="indicator"></div>

    </div>
  );
};

export default LogIn;
