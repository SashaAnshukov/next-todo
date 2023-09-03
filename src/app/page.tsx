"use client";

import { FC, useEffect } from "react";
import Header from "@/components/header";
import Title from "@/components/title";
import Description from "@/components/description";
import Dates from "@/components/dates";
import TagsAndPhoto from "@/components/tagsAndPhoto";
import todosStore from "../store/todo";
import { observer } from "mobx-react";
import styles from "./styles.module.scss";

const TodoComponent: FC = observer(() => {
  useEffect(() => {
    todosStore.fetchTodos();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      {todosStore.isLoading === true ? (
        <div>the data is loading, please wait...</div>
      ) : (
        <div className={styles.containerForScroll}>
          {todosStore.todos.map((todo) => (
            <div className={styles.card} key={todo.id}>
              <div className={styles.dataCardBorder}>
                <div className={styles.dataCard}>
                  <Title todo={todo} />
                  <Description />
                  <Dates />
                  <TagsAndPhoto />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default TodoComponent;
