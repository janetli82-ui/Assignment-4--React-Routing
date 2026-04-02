import { useWikiFetch } from "../../hook/useWikiFetch";
import styles from "./star-card.module.css";
import { Link } from "react-router-dom";

const StarCard = ({ name }) => {
  const stars = useWikiFetch(name);
  return (
    <>
      {stars && (
        <Link to={`/stars/${name}`} className={styles.content}>
          <h2>{stars.title}</h2>
          <img src={stars.thumbnail.source} alt={stars.title} />
          <p>{stars.description}</p>
        </Link>
      )}
    </>
  );
};

export default StarCard;
