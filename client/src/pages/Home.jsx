import "./Home.css";
import logo from "../assets/images/Logo-RWU.png";

function Home() {
  return (
    <div className="home-page">
      <a href="/">
      <img className="logoHome" src={logo} alt={logo} />  </a>
      <div className="Center-Page">
        <h2 className="alone">You are not alone</h2>
        <h1 className="ride">RIDE WITH US</h1>
        <a href="/search-destination">
          <button type="button" className="button-home">
            LETS RIDE !
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
