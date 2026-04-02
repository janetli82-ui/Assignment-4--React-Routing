import styles from "./movie-card.module.css";
import { actorMovies, starsName } from "../../data/data";
import { Link } from "react-router-dom";

 

const MovieCard = () => {

  return (
    <div className={styles.container}>
      {starsName.map((star, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.name}>{star}'s Major Movies</h2>
          {actorMovies[star].map((movie, index) => (
            <div key={index} className={styles.release}>
              <Link to={movie.trailer} className={styles.trailer}>Play: </Link>
              <span></span>
              <Link to={`/movies/${movie.title}/${movie.year}`} className={styles.movieTitle}>{movie.title}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
