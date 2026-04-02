import styles from "./about.module.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h2>
          "Martial arts is not about fighting. It's about building character." — Bruce Lee
        </h2>
        <p className={styles.content}>
          The Kung Fu Stars Channel celebrates the artistry, philosophy, and
          legacy of martial arts cinema—from the golden age of Hong Kong to
          today's global phenomenon. Whether you're a lifelong fan or just
          discovering the genre, this is your space to explore the stories,
          stars, and spirit that make kung fu timeless.
        </p>
        <div className={styles.tag}>
          🎬 Classic Films • ⭐ Legendary Stars • 🥋 Martial Arts Philosophy •
          🎞️ Chinese Cinema
        </div>
        <p>
          Have a favorite kung fu film or star you'd like to see featured? Drop
          us a line.
        </p>
        <div className={styles.contact}>📧 kungfustars@example.com</div>
        <div className={styles.social}>
          Follow: <FaSquareXTwitter size={20}/> <FaInstagramSquare size={20}/> <FaYoutube size={20}/>
        </div>
      </div>
    </>
  );
};

export default About;
