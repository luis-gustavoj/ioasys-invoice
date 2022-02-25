import IoasysLogo from "@svg/ioasys-logo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <IoasysLogo />
    </header>
  );
};
