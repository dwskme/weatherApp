import Icons from "./Icons";
import "../App.css";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div>
        <Icons iconName="test" />
        <div className="card-text">
          <div className="card-text-type">Weather</div>
          <div className="card-text-qtn">What's the Weather...</div>
        </div>
      </div>
      <div>
        <h3 className="card-text-current-temp">22 C</h3>
        <span className="card-text-min-temp">11 C</span>
        <h5 className="card-text-weather-details">Partly Cloudy</h5>
      </div>
      <div>Other Stats</div>
    </div>
  );
};

export default WeatherCard;
