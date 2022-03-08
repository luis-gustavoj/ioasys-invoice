import React from "react";
import styles from "./styles.module.scss";

export const ContactSection = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      "Talvez algum dia você vá começar a receber os materiais por e-mail 😂"
    );
  };

  return (
    <section className={styles.contactContainer}>
      <form className={styles.innerContainer} onSubmit={onSubmit}>
        <h1>Quer receber o próximo podcast?</h1>
        <p>Digite seu e-mail e receba o material dos podcasts</p>
        <input type="email" />
        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
};
