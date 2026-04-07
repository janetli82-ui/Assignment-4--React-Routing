import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  const handleClick = () => {
    setShowSwiper(!showSwiper);
  };

  return (
    <>
      <div className={styles.hero}>
        <h2 className={styles.subTitle}>Kung Fu · Culture · Legacy</h2>
        <p className={styles.description}>
          Step into the world of martial arts mastery. From the timeless grace
          of Bruce Lee, the disciplined artistry of Jackie Chan, to the powerful
          elegance of Jet Li and the rising spirit of Donnie Yen, Michelle Yeoh and Vincent Chiu — this channel
          honors the legends who defined kung fu cinema and the living heritage
          that continues to inspire across generations.
        </p>
        <button className={styles.button} onClick={handleClick}>
          Explore
        </button>
      </div>
      {showSwiper ? (
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/stars/Bruce Lee" className={styles.item_a}>
              <img src="./images/lee.jpg" alt="Bruce Lee" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/stars/Jackie Chan" className={styles.item_a}>
              <img src="./images/chan.jpg" alt="Jackie Chan" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/stars/Jet Li" className={styles.item_a}>
              <img src="./images/jet.jpg" alt="Jet Li" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/stars/Donnie Yen" className={styles.item_a}>
              <img src="./images/dan.jpg" alt="Donnie Yen" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/stars/Michelle Yeoh" className={styles.item_a}>
              <img src="./images/zi.jpg" alt="Michelle Yeoh" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/stars/Vincent Zhao" className={styles.item_a}>
              <img src="./images/zhuo.jpeg" alt="Vincent Zhao" />
            </Link>
          </SwiperSlide>
        </Swiper>
      ) : null}
    </>
  );
};

export default Home;
