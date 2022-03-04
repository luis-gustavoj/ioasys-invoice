import { useWindowSize } from "src/hooks/useWindowSize";
import { PeopleCard } from "./PeopleCard";
import { PeopleCarrousel } from "./PeopleCarrousel";

import styles from "./styles.module.scss";

type PersonInfoType = {
  name: string;
  team: string;
  instagramLink: string;
  linkedinLink: string;
  imgSrc: string;
};

const peopleInfo: PersonInfoType[] = [
  {
    name: "Thiago Silveira",
    team: "Time de tecnologia",
    instagramLink: "",
    linkedinLink: "",
    imgSrc: "/person_1.png",
  },
  {
    name: "Lorem Ipsum",
    team: "Time de lorem ipsum",
    instagramLink: "",
    linkedinLink: "",
    imgSrc: "/person_2.png",
  },
  {
    name: "Lorem Ipsum",
    team: "Time de lorem ipsum",
    instagramLink: "",
    linkedinLink: "",
    imgSrc: "/person_3.png",
  },
  {
    name: "Lorem Ipsum",
    team: "Time de lorem ipsum",
    instagramLink: "",
    linkedinLink: "",
    imgSrc: "/person_4.png",
  },
  {
    name: "Daniele Azevedo",
    team: "Time de experiência",
    instagramLink: "",
    linkedinLink: "",
    imgSrc: "/person_5.png",
  },
];

export const PeopleSection = () => {
  const { width } = useWindowSize();

  return (
    <section className={styles.peopleSection}>
      {width > 768 ? (
        <PeopleCarrousel peopleInfo={peopleInfo} />
      ) : (
        <PeopleCard peopleInfo={peopleInfo} />
      )}
    </section>
  );
};
