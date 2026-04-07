import styles from "./movie-card.module.css";
import { actors } from "../../data/data";
import { Link } from "react-router-dom";


const MovieCard = () => {
  return (
    <>
      {actors.map((actor, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.name}>{actor.name}'s Major Movies</h2>
          {actor.movies.map((movie, index) => (
            <div key={index} className={styles.release}>
              <Link to={movie.trailer} className={styles.trailer}>Play: </Link>
              <span></span>
              <Link to={`/movies/${movie.title}/${movie.year}`} className={styles.movieTitle}>{movie.title}</Link>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default MovieCard;
