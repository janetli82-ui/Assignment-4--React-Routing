import styles from "./navigation.module.css"
import { navMenu } from "../../data/data"
import { NavLink } from "react-router-dom"


const Navigation = ({updateFunction, mobileSize}) => {
  return(
    <>
      <div className={styles.nav}>
        <img src="/images/menu.png" className={styles.img} onClick={updateFunction}/>
        <div className={`${mobileSize ? styles.item : ""} ${styles.navItems}`}>
          {navMenu.map((menu, index)=>
            <NavLink to={menu.toLocaleLowerCase() === "home" ? '' : `/${menu.toLocaleLowerCase()}`} key={index} className={({isActive})=> isActive? styles.active : styles.menu}>{menu}</NavLink>
          )}
        </div>
      </div>
    </>
  )
}

export default Navigation