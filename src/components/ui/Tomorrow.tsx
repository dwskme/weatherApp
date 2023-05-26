import styles from './Tomorrow.module.css'
const Tomorrow = () => {
  return (
    <div className={`${styles.cardTomorrow}`} >
      <div className={`${styles.title}`}>Tomorrow</div>
      <div className={`${styles.stats}`}>
        20&deg;C
        <span>Rainny</span>
      </div>
    </div>
  );
}

export default Tomorrow
