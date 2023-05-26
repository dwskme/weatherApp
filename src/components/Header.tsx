import SeachBar from '../components/ui/SearchBar'
import styles from './Header.module.css'
const Header = () => {
  return (
      <div className={styles.header}>
          <h1 className="text">
            Weather App by <span>Samir KC.</span>
          </h1>
          <SeachBar/>
        </div>
  )
}

export default Header
