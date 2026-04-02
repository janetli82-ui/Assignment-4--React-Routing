import styles from "./header.module.css"
import Navigation from "../Navigation"
import { useState } from "react"


const Header=()=>{
  const [mobileSize, setMobileSize] = useState(false)
  const handleClick = () => {
    setMobileSize(!mobileSize)
  }

  return(
    <>
      <div className={styles.header}>
        <img src="/images/logo.jpg" className={styles.img} />
        <h1 className={styles.title}>Welcome to the Kung Fu Stars Channel</h1>
      </div>
      <Navigation updateFunction={handleClick} mobileSize={mobileSize}/>
    </>
  )
}

export default Header