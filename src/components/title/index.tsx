import { FC } from "react";
import { TodoTypes } from "@/types/types";
import styles from "./styles.module.scss";

interface TitleProps {
  todo: TodoTypes;
}

const Title: FC<TitleProps> = ({ todo }) => {
  return (
    <div className={styles.titleSection}>
      <label>
        <input
          name={todo.title}
          className={styles.checkbox}
          readOnly
          type="checkbox"
          checked={todo.completed ? true : false}
        />
        <span className={styles.customCheckbox} />
      </label>
      <p className={styles.title}>{todo.title}</p>
    </div>
  );
};

export default Title;
