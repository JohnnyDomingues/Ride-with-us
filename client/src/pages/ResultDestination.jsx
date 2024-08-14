
import { Link } from "react-router-dom";

import logo from "../assets/images/Logo-RWU.png";
import "../Styles/resultDestination.css"
import DestinationHere from "../components/DestinationHere";

function ResultDestination() {
  return (
    <div>
      <nav className="navigation-bar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </nav>
      <div>
        <h2 className="we-Found">Did we find something ?</h2>
      </div>
      <DestinationHere/>
    </div>
  );
}

export default ResultDestination;