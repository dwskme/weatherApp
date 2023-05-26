import CurrentInfo from "./CurrentInfo";
import UVCard from "./ui/UVCard";
import WeatherPrediction from "./WeatherPrediction";
import styles from "./SideSection.module.css"
import SunMoon from "./ui/SunMoon"
const SideSection = () => {
  return (
  <div className={`${styles.sidesection}`}>
    <CurrentInfo />
    <SunMoon/>
    <UVCard/>
    <WeatherPrediction/>
  </div>);
};

export default SideSection;
