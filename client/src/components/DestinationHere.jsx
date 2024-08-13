import { useLocation } from 'react-router-dom';
import "./DestinationHere.css";


function ResultDestination() {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  return (
    <div className="destination-div">
      {results.length > 0 ? (
        <ul className="destination-here">
          {results.map((destination) => (
            <li className='LIdestination' key={`${destination.City}-${destination.Country}`}>
              <img src={destination.image} alt={`${destination.Country} view`} className='destination-image' />
              <div className='destination-details'>
                <h2>{destination.City}, {destination.Country}</h2>
                <p>Average Temperature: {destination.AvgTemperature}°C</p>
                <p>Cost of Living Index: {destination.Cost_of_Living_Index}</p>
                <p>Average Hotel Price: ${destination.hotel_price_avg}</p>
                <p>Budget for Transport: ${destination.budget_transport}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='NoResults'>No results found</p>
      )}
    </div>
  );
}

export default ResultDestination;
