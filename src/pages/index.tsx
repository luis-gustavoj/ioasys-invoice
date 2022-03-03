import { AboutSection } from "src/components/About";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Hero />
      <AboutSection />
    </div>
  );
}
