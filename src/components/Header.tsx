import SeachBar from '../components/ui/SearchBar'
import styles from './Header.module.css'
const Header = () => {
  return (
      <div className={`${styles.header}`}>
            Weather App by <span>Samir KC.</span>
          <SeachBar/>
        </div>
  )
}

export default Header
