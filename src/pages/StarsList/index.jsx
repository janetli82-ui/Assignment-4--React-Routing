import styles from "./star-list.module.css";
import { useWikiFetch } from "../../hook/useWikiFetch";
import { useNavigate, useParams } from "react-router-dom";

const StarList = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const stars = useWikiFetch(name);
  return (
    <div className={styles.list}>
      {stars && (
        <div className={styles.container}>
          <h2>{stars.title}</h2>
          <p>{stars.extract}</p>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className={styles.button}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default StarList;
