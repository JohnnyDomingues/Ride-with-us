import { useLocation } from "react-router-dom";
import "./DestinationHere.css";

function ResultDestination() {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  return (
    <div>
      {results.length > 0 ? (
        <div>
          <div>
            <h2 className="we-Found">We found them!!!</h2>
          </div>
          <div className="destination-div">
            <ul className="destination-here">
              {results.map((destination) => (
                <li
                  className="LIdestination"
                  key={`${destination.City}-${destination.Country}`}
                >
                  <img
                    src={destination.image}
                    alt={`${destination.Country} view`}
                    className="destination-image"
                  />
                  <div className="destination-details">
                    <h2>
                      {destination.City}, {destination.Country}
                    </h2>
                    <p>Average Temperature: {destination.AvgTemperature}°C</p>
                    <p>
                      Cost of Living Index: {destination.Cost_of_Living_Index}
                    </p>
                    <p>Average Hotel Price: ${destination.hotel_price_avg}</p>
                    <p>Budget for Transport: ${destination.budget_transport}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h2 className="we-Found">Oh no!</h2>
          </div>
          <div className="destination-div">
            <p className="NoResults">No results found</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultDestination;
