import Link from "next/link";
import { useRef } from "react";

import InstagramIcon from "@svg/instagram-icon.svg";
import LinkedinIcon from "@svg/linkedin-icon.svg";

import styles from "./styles.module.scss";

type PersonInfoType = {
  name: string;
  team: string;
  instagramLink: string;
  linkedinLink: string;
  imgSrc: string;
};

interface CarrouselItemProps {
  personInfo: PersonInfoType;
}

export const CarrouselItem = ({ personInfo }: CarrouselItemProps) => {
  const carrouselItemRef = useRef(null);
  const innerContentRef = useRef(null);

  const onMouseEnter = () => {
    const currentWidth = carrouselItemRef.current.offsetWidth;
    const newWidth = currentWidth + 64;

    innerContentRef.current.style.opacity = "1";

    carrouselItemRef.current.style.width = `${newWidth}px`;
  };

  const onMouseLeave = () => {
    innerContentRef.current.style.opacity = "0";
    carrouselItemRef.current.style.width = `20%`;
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={carrouselItemRef}
      className={styles.carrouselItem}
      style={{
        backgroundImage: `url("${personInfo.imgSrc}")`,
      }}
    >
      <div className={styles.innerContainer} ref={innerContentRef}>
        <b>{personInfo.name}</b>
        <p>{personInfo.team}</p>
        <span className={styles.socialMediaContainer}>
          <Link href={personInfo.instagramLink}>
            <a>
              <InstagramIcon />
            </a>
          </Link>
          <Link href={personInfo.linkedinLink}>
            <a>
              <LinkedinIcon />
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};
