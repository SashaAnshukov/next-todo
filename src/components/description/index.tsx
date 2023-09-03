import { FC } from "react";
import { faker } from "@faker-js/faker";
import styles from "./styles.module.scss";

const Description: FC = () => {
  function generateSentences(count: number) {
    const sentences = [];
    for (let i = 0; i < count; i++) {
      const sentence = faker.lorem.sentence();
      sentences.push(sentence);
    }
    return sentences;
  }

  const sentences = generateSentences(200);

  return (
    <p className={styles.description}>
      {sentences[Math.floor(Math.random() * sentences.length)]}
    </p>
  );
};

export default Description;
