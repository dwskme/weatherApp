import CurrentInfo from "./CurrentInfo";
import UVCard from "./UVCard";
import WeatherPrediction from "./WeatherPrediction";
const SideSection = () => {
  return (<div className="side-section">
    <CurrentInfo />
    <UVCard/>
    <WeatherPrediction/>  
  </div>);
};

export default SideSection;
