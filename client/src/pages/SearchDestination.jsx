import "../Styles/SearchDestination.css"; // Assure-toi d'importer le fichier CSS
import logo from "../assets/images/Logo-RWU.png"; // Assure-toi de bien donner le chemin vers ton logo

function SearchDestination() {
  return (
    <div className="search-destination">
      <img src={logo} alt="Logo" className="logo" />
      <div className="form-container">
        <h1>Find your new adventure now</h1>
        <form>
          <div className="criteria-grid">
            <div className="criteria-item">
              <label htmlFor="criteria1">Critère 1</label>
              <select id="criteria1" name="criteria1">
                <option>Densité de population</option>
                <option>Coût de la vie</option>
                <option>Température</option>
                <option>Prix du transport</option>
                <option>Prix de la nourriture</option>
                <option>Prix de l'essence</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="criteria2">Critère 2</label>
              <select id="criteria2" name="criteria2">
                <option>Densité de population</option>
                <option>Coût de la vie</option>
                <option>Température</option>
                <option>Prix du transport</option>
                <option>Prix de la nourriture</option>
                <option>Prix de l'essence</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="criteria3">Critère 3</label>
              <select id="criteria3" name="criteria3">
                <option>Densité de population</option>
                <option>Coût de la vie</option>
                <option>Température</option>
                <option>Prix du transport</option>
                <option>Prix de la nourriture</option>
                <option>Prix de l'essence</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="criteria4">Critère 4</label>
              <select id="criteria4" name="criteria4">
                <option>Densité de population</option>
                <option>Coût de la vie</option>
                <option>Température</option>
                <option>Prix du transport</option>
                <option>Prix de la nourriture</option>
                <option>Prix de l'essence</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="criteria5">Critère 5</label>
              <select id="criteria5" name="criteria5">
                <option>Densité de population</option>
                <option>Coût de la vie</option>
                <option>Température</option>
                <option>Prix du transport</option>
                <option>Prix de la nourriture</option>
                <option>Prix de l'essence</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="criteria6">Critère 6</label>
              <select id="criteria6" name="criteria5">
                <option>Densité de population</option>
                <option>Coût de la vie</option>
                <option>Température</option>
                <option>Prix du transport</option>
                <option>Prix de la nourriture</option>
                <option>Prix de l'essence</option>
              </select>
            </div>
          </div>
          <button type="submit" className="search-button">
            Go !
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchDestination;
