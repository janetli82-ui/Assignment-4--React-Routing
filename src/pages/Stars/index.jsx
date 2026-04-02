import styles from "./stars.module.css"
import { starsName } from "../../data/data"
import StarCard from "../../components/StarCard";
import { Outlet } from "react-router-dom";


const Stars= () => {

 return (
    <> 
      <Outlet />
      <div className={styles.container}>
        {starsName.map((name, index) => (
          <StarCard key={index} name={name} />
        ))}
      </div>
    </>
  );
}

export default Stars