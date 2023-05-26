import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.search}>
    <input type="text" name="search" placeholder="Search your City..." />
    <button type="submit">
      <label htmlFor="search">search</label>
      <div className="search-icon" />
    </button>
  </div>
  )
}

export default SearchBar
