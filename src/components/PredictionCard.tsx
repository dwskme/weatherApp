import Icons from "./ui/Icons"
import styles from './PredictionCard.module.css'
const PredictionCard = () => {
  return (
    <div className={`${styles.predictionCard}`}>
      <span className={`${styles.icon}`}>
        <Icons imageName="sun.png"/>
      </span>
      <div className={`${styles.date}`}>
        November 10
      </div>
      <div className={`${styles.weather}`}>
        Sunny
      </div>
      <div className={`${styles.temperature}`}>
        26&deg;C / 22&deg;C
      </div>
    </div>
  )
}

export default PredictionCard
