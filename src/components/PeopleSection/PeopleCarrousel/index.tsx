import { CarrouselItem } from "./CarrouselItem";

import styles from "./styles.module.scss";

type PersonInfoType = {
  name: string;
  team: string;
  instagramLink: string;
  linkedinLink: string;
  imgSrc: string;
};

interface PeopleCarrouselProps {
  peopleInfo: PersonInfoType[];
}

export const PeopleCarrousel = ({ peopleInfo }: PeopleCarrouselProps) => {
  return (
    <div className={styles.carrouselContainer}>
      {peopleInfo.map((personInfo) => (
        <CarrouselItem personInfo={personInfo} key={personInfo.imgSrc} />
      ))}
    </div>
  );
};
