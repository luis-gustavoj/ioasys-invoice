import IoasysIcon from "@svg/ioasys-icon.svg";

import styles from "./styles.module.scss";

const socialMediasLinks = [
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "Facebook",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
  {
    name: "Medium",
    link: "#",
  },
  {
    name: "Youtube",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.colOne}>
          <div>
            <IoasysIcon />
          </div>
          <div>
            <p>ioasys.</p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
        <div className={styles.colTwo}>
          <div className={styles.infoContainer}>
            <p>Junte-se a nós!</p>
            <h2>+55 31 4141 5148</h2>
            <p>vagas@ioasys.com.br</p>
          </div>
          <div>
            <span>
              {socialMediasLinks.map((socialMedia, index) => (
                <>
                  <a href={socialMedia.link} key={socialMedia.name}>
                    {socialMedia.name}
                  </a>
                  {index !== socialMediasLinks.length - 1 && " | "}
                </>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
