import styles from "./stars.module.css"
import { actors } from "../../data/data"
import StarCard from "../../components/StarCard";
import { Outlet } from "react-router-dom";


const Stars= () => {

 return (
    <> 
      <Outlet />
      <div className={styles.container}>
        {actors.map((actor, index) => (
          <StarCard key={index} name={actor.name} />
        ))}
      </div>
    </>
  );
}

export default Stars