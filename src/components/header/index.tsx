import { FC } from "react";
import addbtn from "../../../public/add_btn.svg";
import Image from "next/image";
import todosStore from "../../store/todo";
import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <p className={styles.date}>Today</p>
      <div className={styles.squares}>
        <button className={styles.button} type="button">
          <Image
            className={styles.imgBtn}
            src={addbtn}
            alt="Add button"
            width={20}
            height={20}
            priority
          />
        </button>
        <div className={styles.square}>
          <p className={styles.squareNumber}>{todosStore.todos.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
