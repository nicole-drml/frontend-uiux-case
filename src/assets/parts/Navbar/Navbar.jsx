import { Link } from "react-router-dom";

import "./Navbar.scss"
import { HiHome } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";

const Navbar = () => {
  return (
    <div id="navbar-component-container">
        <div id="links-container">
        <Link to={"/home"}>
        {" "}
        <HiHome className="navbar-icon" />
      </Link>
      <Link to={"/favorite"}>
        <BiBookmark className="navbar-icon" />{" "}
      </Link>
      <Link  to={"/notifications"}>
        <FiBell className="navbar-icon"/>{" "}
      </Link>
      <Link to={"/cart"}>
        <RxPerson className="navbar-icon"/>
      </Link>
        </div>

    </div>
  );
};

export default Navbar;
