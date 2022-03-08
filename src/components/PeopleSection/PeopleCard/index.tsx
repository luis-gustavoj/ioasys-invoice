import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LeftArrowIcon from "@svg/left-arrow.svg";
import RightArrowIcon from "@svg/right-arrow.svg";

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

interface PeopleCardProps {
  peopleInfo: PersonInfoType[];
}

export const PeopleCard = ({ peopleInfo }: PeopleCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= peopleInfo.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handleUpdateIndexButton = (newIndex) => {
    updateIndex(newIndex);
  };

  return (
    <div className={styles.peopleCard}>
      <div className={styles.imgSlider}>
        {peopleInfo.map((person) => (
          <div
            key={person.imgSrc}
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            <Image
              src={person.imgSrc}
              alt={person.name}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.textSlider}>
          {peopleInfo.map((person) => (
            <div
              key={Math.random()}
              className={styles.textContainer}
              style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
              <h1>{person.name}</h1>
              <p>{person.team}</p>
            </div>
          ))}
        </div>
        <span className={styles.socialMediaContainer}>
          <Link href="#">
            <a>
              <LinkedinIcon />
            </a>
          </Link>
          <Link href="#">
            <a>
              <InstagramIcon />
            </a>
          </Link>
        </span>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            onClick={() => {
              handleUpdateIndexButton(activeIndex - 1);
            }}
          >
            <LeftArrowIcon />
          </button>
          <button
            type="button"
            onClick={() => {
              handleUpdateIndexButton(activeIndex + 1);
            }}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
