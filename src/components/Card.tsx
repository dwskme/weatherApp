import Icons from "./ui/Icons";
import "../App.css";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <span className="card-icons">
        <Icons imageName="sun.png" />
      </span>
      <div className="card-text-type">Weather</div>
      <div className="card-text-qtn">What's the Weather...</div>
      <h3 className="card-text-current-temp">22&deg;C</h3>
      <span className="card-badge card-min">11&deg;C</span>
      <h5 className="card-text-weather-details">Partly Cloudy</h5>
      <div className="card-info-grid">
        <div className="card-pressure">
          Pressure
          <span>800mb</span>
        </div>
        <div className="card-visibility">
          Visibility
          <span>800mb</span>
        </div>
        <div className="card-humidity">
          Humidity
          <span>800mb</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
