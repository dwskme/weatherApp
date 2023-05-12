import Icons from "./Icons";
import "../App.css";

const AirCard = () => {
  return (
    <div className="air-card">
      <div>
        <Icons iconName="test" />
        <h4>Air Quality</h4>
        <h4>Main Pollution: PM 2.5</h4>
      </div>
      <div>
        <h3>390</h3>
        <span>AQI</span>
        <h5>West Wind</h5>
      </div>
      <div>Air Quality Meter.</div>
    </div>
  );
};

export default AirCard;
