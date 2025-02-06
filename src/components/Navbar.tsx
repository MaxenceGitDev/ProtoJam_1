import "../styles/navbar.css";
import Logo from "../assets/images/WildCastle_logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="WildCastle Logo" />
      </div>
      <ul>
        <li>
          <Link to={"#"}>Villes</Link>
        </li>
        <li>
          <Link to="/reservation">Réservations</Link>
        </li>
      </ul>
    </nav>
  );
}
