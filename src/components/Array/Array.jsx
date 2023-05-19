import "./Array.scss";

import Status from "../../assets/parts/Status";

import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Array = (props) => {
  return (
    <div className="array-pages-container">
      <Status />

      <div className="array-title-and-button">
        <Link to="/home">
          <MdArrowBackIos />
        </Link>
        <p className="array-page-title">{props.page}</p>
      </div>
    </div>
  );
};

export default Array;
