import styles from "./footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <p>&copy; 2026 KungFu Stars </p>
      <div className={styles.links}>
        <Link to="/" className={styles.item}>Home</Link>
        <Link to="/stars" className={styles.item}>Stars</Link>
        <Link to="/movies" className={styles.item}>Movies</Link>
      </div>
      <p className={styles.credit}>
        Data from Wikipedia and OMDb API
      </p>
    </footer>
  )
}

export default Footer