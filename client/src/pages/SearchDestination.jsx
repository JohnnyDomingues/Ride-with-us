import { useState } from "react";
import "../Styles/SearchDestination.css";
import logo from "../assets/images/Logo-RWU.png";
import DestinationData from "../components/DestinationData";

function SearchDestination() {
  const [criteria, setCriteria] = useState({
    temperatureMin: "",
    costOfLivingMin: "",
    hotelPriceMax: "",
    budgetTransportMax: "", // New criteria for budget transport
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setCriteria({
      ...criteria,
      [e.target.name]: e.target.value,
    });
  };

  const filterDestinations = () =>
    DestinationData.filter((destination) => {
      const {
        temperatureMin,
        costOfLivingMin,
        hotelPriceMax,
        budgetTransportMax,
      } = criteria;

      const matchesTemperature =
        !temperatureMin ||
        parseFloat(destination.AvgTemperature) >= parseFloat(temperatureMin);
      const matchesCostOfLiving =
        !costOfLivingMin ||
        parseFloat(destination.Cost_of_Living_Index) >=
          parseFloat(costOfLivingMin);
      const matchesHotelPrice =
        !hotelPriceMax ||
        parseFloat(destination.hotel_price_avg) <= parseFloat(hotelPriceMax);
      const matchesBudgetTransport =
        !budgetTransportMax ||
        parseFloat(destination.budget_transport) <=
          parseFloat(budgetTransportMax);

      return (
        matchesTemperature &&
        matchesCostOfLiving &&
        matchesHotelPrice &&
        matchesBudgetTransport
      );
    });

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = filterDestinations();
    setResults(filteredResults);
  };

  return (
    <div className="search-destination">
      <img src={logo} alt="Logo" className="logo" />
      <div className="form-container">
        <h1>Find your new adventure now</h1>
        <form onSubmit={handleSearch}>
          <div className="criteria-grid">
            <div className="criteria-item">
              <label htmlFor="temperatureMin">Minimum Temperature (°C)</label>
              <select
                id="temperatureMin"
                name="temperatureMin"
                value={criteria.temperatureMin}
                onChange={handleChange}
              >
                <option value="">Select minimum temperature</option>
                <option value="10">10°C</option>
                <option value="15">15°C</option>
                <option value="20">20°C</option>
                <option value="25">25°C</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="costOfLivingMin">
                Minimum Cost of Living Index
              </label>
              <select
                id="costOfLivingMin"
                name="costOfLivingMin"
                value={criteria.costOfLivingMin}
                onChange={handleChange}
              >
                <option value="">Select minimum cost of living</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="hotelPriceMax">Maximum Hotel Price (Avg)</label>
              <select
                id="hotelPriceMax"
                name="hotelPriceMax"
                value={criteria.hotelPriceMax}
                onChange={handleChange}
              >
                <option value="">Select maximum hotel price</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
              </select>
            </div>
            <div className="criteria-item">
              <label htmlFor="budgetTransportMax">
                Maximum Budget for Transport
              </label>
              <select
                id="budgetTransportMax"
                name="budgetTransportMax"
                value={criteria.budgetTransportMax}
                onChange={handleChange}
              >
                <option value="">Select maximum transport budget</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="70">70</option>
                <option value="90">90</option>
              </select>
            </div>
          </div>
          <button type="submit" className="search-button">
            Go !
          </button>
        </form>
        <div className="results">
          {results.length > 0 ? (
            <ul>
              {results.map((destination) => (
                <li key={`${destination.City}-${destination.Country}`}>
                  {destination.City}, {destination.Country}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchDestination;
