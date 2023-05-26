import Badge from "./Badge"
import Icons from "./Icons"
import styles from './UVCard.module.css'

const UVCard = () => {
  return (
    <div className={`${styles.uvcard}`}>
      <span className={`${styles.icon}`}>
      <Icons imageName="sun.png"/>
      </span>
      <div className={`${styles.data}`}>
        20 UVI
      </div>
      <span className={`${styles.badge}`}>
      <Badge/>
      </span>
      <div className={`${styles.details}`}>
        Moderate Risk from UV Rays.
      </div>
    </div>
  )
}

export default UVCard
