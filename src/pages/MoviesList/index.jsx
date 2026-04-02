import styles from "./movie-list.module.css"
import {useOmdbFetch} from "../../hook/useOmdbFetch"
import { useParams, useNavigate } from "react-router-dom"


const MoviesList = () => {
  const navigate = useNavigate()
  const {title, year} = useParams()
  const omdbData = useOmdbFetch(title, year)
  return(
    <>
     <div className={styles.details}>
       {omdbData && 
        <div className={styles.more}>
           <h2 className={styles.movie_name}>{omdbData.Title}</h2>
           <img src={omdbData.Poster} className={styles.poster} />
           <button onClick={()=>{navigate(-1)}} className={styles.button}>Back</button>
           <p className={styles.genre}><span>Genre:</span> {omdbData.Genre}</p>
           <p className={styles.actor}><span>Actors:</span> {omdbData.Actors}</p>
           <p className={styles.rank}><span>ImdbRating:</span> {omdbData.imdbRating}</p>
           <p className={styles.plot}><span>Plot:</span> {omdbData.Plot}</p>
         </div>
       }
     </div>
    </>
  )
}

export default MoviesList