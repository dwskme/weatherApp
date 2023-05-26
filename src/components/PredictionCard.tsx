import Icons from "./ui/Icons"
const PredictionCard = () => {
  return (
    <div className="prediction-card">
      <span className="prediction-icon">
        <Icons imageName="sun.png"/>
      </span>
      <div className="prediction-date">
        November 10
      </div>
      <div className="prediction-weather">
        Sunny
      </div>
      <div className="prediction-temp">
        26&deg;C / 22&deg;C
      </div>
    </div>
  )
}

export default PredictionCard
