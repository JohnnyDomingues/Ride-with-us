import { Link } from "react-router-dom";

import logo from "../assets/images/Logo-RWU.png";
import "../Styles/resultDestination.css";
import DestinationHere from "../components/DestinationHere";

function ResultDestination() {
  return (
    <div>
      <nav className="navigation-bar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/search-destination">
          <button type="button" className="button-return">
            RETURN
          </button>
        </Link>
      </nav>
      <DestinationHere />
    </div>
  );
}

export default ResultDestination;
