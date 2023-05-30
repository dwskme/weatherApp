import styles from './Card.module.css'
import Icons from "./ui/Icons";
import MiniStats from './ui/MiniStats';
import Badge from './ui/Badge';

const Card = () => {
  return (
    <div className={`${styles.card}`}>
      <span className={`${styles.icon}`}>
        <Icons imageName="sun.png" heightValue='50px' widthValue='50px'/>
      </span>
      <div className={`${styles.title}`}>
        Weather
      </div>
      <div className={`${styles.overviewTitle}`}>
        The weather is chilly today...
      </div>
      <div className={`${styles.temperature}`}>
        22&deg;C
      </div>
      <div className={`${styles.minMax}`}>
        <Badge />
        <Badge />
      </div>
      <div className={`${styles.overviewDetails}`}>
        Partly Cloudy
      </div>
      <div className={`${styles.statsGrid}`}>
        <MiniStats />
        <MiniStats />
        <MiniStats />
      </div>
    </div>
  );
};

export default Card;
