import "./Navbar.css";
import logo_navbar from "../Assets/Mesa_de_trabajo_1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__items">
          <li>
            <Link className="navbar__link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/about">
              ABOUT US
            </Link>
          </li>
        </ul>
        <Link className="navbar__link" to="/">
          <img src={logo_navbar} alt="Logo" />
        </Link>
        <ul className="navbar__items">
          <li>
            <Link className="navbar__link" to="/store">
              STORE
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
