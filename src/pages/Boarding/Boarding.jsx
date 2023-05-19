import "./Boarding.scss";
import Button from "../../components/Button";
import Status from "../../assets/parts/Status";
import { Link } from "react-router-dom";

const Boarding = () => {
  return (
    <div class="boarding-container">
      <div className="boarding-upper-half-container">
        <Status />
        <div className="boarding-upper-half-texts">
          <h3>MAKE YOUR <br /> HOME BEAUTIFUL</h3>
          <p>
            The best simple place where you <br></br> discover most wonderful furnitures
            and make your home beautiful
          </p>
        </div>
      </div>
      <div className="boarding-lower-half-container">
        <Link 
        to="/login"
        >
        <Button buttonText="Get Started" />
        </Link>
        <div className="indicator"></div>

      </div>
    </div>
  );
};

export default Boarding;
