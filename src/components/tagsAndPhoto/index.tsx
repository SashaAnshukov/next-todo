import { FC } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import styles from "./styles.module.scss";
import rectangle from "../../../public/Rectangle.svg";
import avatar from "../../../public/avatar.jpg";

const TagsAndPhoto: FC = () => {
  function generateCompanyNames(count: number) {
    const companys = [];
    for (let i = 0; i < count; i++) {
      const company = faker.company.name();
      const words = company.split(" ");
      if (words.length <= 2) {
        companys.push(company);
      }
    }
    return companys;
  }

  const randomCompanys = generateCompanyNames(200);

  function generateProffessions(count: number) {
    const proffessions = [];
    for (let i = 0; i < count; i++) {
      const proffession = faker.person.jobType();
      proffessions.push(proffession);
    }
    return proffessions;
  }

  const randomProffessions = generateProffessions(200);

  return (
    <div className={styles.tagsAndPhotoSection}>
      <div className={styles.tagSection}>
        <p className={styles.tagCompany}>
          {randomCompanys[Math.floor(Math.random() * randomCompanys.length)]}
        </p>
        <p className={styles.tagProfession}>
          {
            randomProffessions[
              Math.floor(Math.random() * randomProffessions.length)
            ]
          }
        </p>
        <Image
          className={styles.tagProfession_rect}
          src={rectangle}
          alt="rectangle"
          width={12}
          height={20}
          priority
        />
      </div>
      <Image
        className={styles.avatar}
        src={avatar}
        alt="avatar"
        width={24}
        height={24}
      />
    </div>
  );
};

export default TagsAndPhoto;
