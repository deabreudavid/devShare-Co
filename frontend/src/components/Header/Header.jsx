import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navRouter">
      <div className="LogoText">
        <img className="DevLogo" src="./src/assets/DevLogo.png" alt="DevLogo" />
      </div>
      <div className={`burger ${showLinks ? "showNav" : "hideNav"}`}>
        <ul className="buttonStyle">
          <li className="slideInRight">
            <NavLink to="/login" onClick={handleShowLinks}>
              Login
            </NavLink>
          </li>
          <span className="slideInRight-11" />
          <li className="slideInRight-2">
            <NavLink to="/" onClick={handleShowLinks}>
              Accueil
            </NavLink>
          </li>
          <span className="slideInRight-22" />
          <li className="slideInRight-3">
            <NavLink to="/project" onClick={handleShowLinks}>
              Projets
            </NavLink>
          </li>
          <span className="slideInRight-33" />
          <li className="slideInRight-4">
            <NavLink to="/FAQ" onClick={handleShowLinks}>
              FAQ
            </NavLink>
          </li>
          <span className="slideInRight-44" />
          <li className="slideInRight-5">
            <NavLink to="/Contact" onClick={handleShowLinks}>
              Contact
            </NavLink>
          </li>
        </ul>
        <button type="button" className="menuBurger" onClick={handleShowLinks}>
          <span className="navBurger" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
