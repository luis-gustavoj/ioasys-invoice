import Head from "next/head";

import { Header } from "src/components/Header";
import { Hero } from "src/components/Hero";
import { AboutSection } from "src/components/About";
import { PeopleSection } from "src/components/PeopleSection";
import { ContactSection } from "src/components/Contact";
import { Footer } from "src/components/Footer";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>ioasys voice</title>
      </Head>
      <div className={styles.pageWrapper}>
        <Header />
        <Hero />
        <AboutSection />
        <PeopleSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
