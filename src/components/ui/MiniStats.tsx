import styles from './MiniStats.module.css'

const MiniStats = () => {
  return (
  <div className={`${styles.miniCard}`}>
      Pressure
    <div className={`${styles.miniStats}`} >
      800mb
    </div>
  </div>
  )
}

export default MiniStats
