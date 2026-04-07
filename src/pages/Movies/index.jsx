import MovieCard from "../../components/MovieCard"
import styles from "./movies.module.css"

const Movies = () => {
  return(
    <div className={styles.container}>
      <MovieCard />
    </div>
  )
}

export default Movies