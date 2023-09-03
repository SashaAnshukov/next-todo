import { makeAutoObservable } from "mobx";
import axios from "axios";
import { TodoTypes } from "@/types/types";

class Todo {
  todos: TodoTypes[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    this.isLoading = true;
    try {
      const response = await axios.get<TodoTypes[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.todos = response.data;
    } catch (error) {
      console.error("error:", error);
    } finally {
      this.isLoading = false;
    }
  };
}

export default new Todo();
