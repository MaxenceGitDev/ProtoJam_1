import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/images/WildCastle_logo.png";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          className="villes"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link to="#">Villes</Link>
          {showDropdown && (
            <ul className="dropdown">
              <ul className="dropdown">
                <li>
                  <Link to="/choice/London" className="link">
                    London
                  </Link>
                </li>
                <li>
                  <Link to="/choice/Brighton" className="link">
                    Brighton
                  </Link>
                </li>
                <li>
                  <Link to="/choice/Liverpool" className="link">
                    Liverpool
                  </Link>
                </li>
                <li>
                  <Link to="/choice/Manchester" className="link">
                    Manchester
                  </Link>
                </li>
              </ul>
            </ul>
          )}
        </li>
      </ul>

      <Link to={"/"}>
        <div className="logo">
          <img src={Logo} alt="WildCastle Logo" />
        </div>
      </Link>

      <ul className="nav-links">
        <li className="reservations">
          <Link to="#">Réservations</Link>
        </li>
      </ul>
    </nav>
  );
}
