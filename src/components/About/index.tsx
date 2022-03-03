import Image from "next/image";

import styles from "./styles.module.scss";

import SealImage from "@svg/seal.svg";

export const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.sealWrapper}>
        <SealImage />
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/about-image.png"
            alt="Ioasys sobre"
            height={487}
            width={487}
          />
        </div>
        <div className={styles.textWrapper}>
          <h1>
            O que é o <b>ioasys</b> voice
          </h1>
          <p>
            Um podcast quinzenal sobre tecnologia, inovação, design e
            comunicação. No ioasys voices, nossos participantes comentam sobre
            suas experiências, trazendo conteúdos inovadores e diferentes
            pontos-de-vista sobre cada tema.
          </p>
        </div>
      </div>
    </section>
  );
};
