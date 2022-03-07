import { AboutSection } from "src/components/About";
import { ContactSection } from "src/components/Contact";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import { PeopleSection } from "src/components/PeopleSection";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Hero />
      <AboutSection />
      <PeopleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
