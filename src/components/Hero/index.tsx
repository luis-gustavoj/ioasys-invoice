import Image from "next/image";
import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>ioasys voice</h1>
        <h2>O comportamento do usuario em plataformas digitais</h2>
      </div>
      <div className={styles.imageContainer}>
        <div>
          <Image
            src="/hero-image.png"
            height={507}
            width={634}
            alt="Hero image"
          />
        </div>
        <div className={styles.smokyBackgroundImage}>
          <Image
            src="/smoky-bg.png"
            height={628}
            width={839}
            alt="Background image"
            priority
          />
        </div>
      </div>
    </section>
  );
};
