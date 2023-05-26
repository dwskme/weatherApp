import PredictionCard from "./PredictionCard"
import styles from "./WeatherPrediction.module.css"
const WeatherPrediction = () => {
  return (
    <div className={`${styles.WeatherPrediction}`}>
      <span>Weather Predictions</span>
      <PredictionCard/>
      <PredictionCard/>
      <PredictionCard/>
      <PredictionCard/>
      <PredictionCard/>
    </div>
  )
}

export default WeatherPrediction
