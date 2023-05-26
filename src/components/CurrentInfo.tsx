import styles from './CurrentInfo.module.css';

const CurrentInfo = () => {
  return (
    <div className={`${styles.currentinfo}`}>
    <div className={`${styles.currentday}`}>
      Sunday
      </div>
      <div className={`${styles.currentCity}`}>
        Tansen, Palpa
      </div>
      <div className={`${styles.currentTemp}`}>
        22&deg;C
      </div>
    </div>
  )
}

export default CurrentInfo
