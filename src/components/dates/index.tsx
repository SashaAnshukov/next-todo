import { FC } from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";
import styles from "./styles.module.scss";

const Dates: FC = () => {
  function generateDates(count: number) {
    const startDates = [];
    const endDates = [];
    for (let i = 0; i < count; i++) {
      const startDate = faker.date.between({
        from: "2023-09-01T00:00:00.000Z",
        to: "2023-09-30T00:00:00.000Z",
      });
      const endDate = moment(startDate).add(7, "days");
      const formattedStartDate = moment(startDate).format("MMM DD, hh:mm A");
      const formattedEndDate = moment(endDate).format("MMM DD, hh:mm A");
      startDates.push(formattedStartDate);
      endDates.push(formattedEndDate);
    }
    return { startDates, endDates };
  }

  const randomDates = generateDates(200);
  const randomStartDates = randomDates.startDates;
  const randomEndDates = randomDates.endDates;

  return (
    <div className={styles.dateSection}>
      <p className={styles.date}>
        {randomStartDates[Math.floor(Math.random() * randomStartDates.length)]}
      </p>
      <p className={styles.date}>
        {randomEndDates[Math.floor(Math.random() * randomEndDates.length)]}
      </p>
    </div>
  );
};

export default Dates;
