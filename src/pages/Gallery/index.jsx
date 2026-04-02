import styles from "./gallery.module.css"
import { getImageURL } from "../../utils/function"
import { collects } from "../../data/data"

const Gallery = () => {
  return(
    <div className={styles.gallery}>
      <div className={styles.scroll}>
        <div className={styles.collection}>
          {collects.map((item, index)=>
            <img src={getImageURL(item)} key={index} />
          )}
        </div>
        <div className={styles.collection}>
          {collects.map((item, index)=>
            <img src={getImageURL(item)} key={index} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery