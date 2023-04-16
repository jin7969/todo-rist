import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const getFilteredTodo = (todos, filter) => {
  if (filter === "all") return todos;

  return todos.filter((todo) => todo.status === filter);
};

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
    { id: "125", text: "코딩하기", status: "completed" },
  ]);
  const filteredTodos = getFilteredTodo(todos, filter);

  const handleAddTodo = (value) => setTodos((prev) => [...prev, value]);

  const handleUpdate = (value) =>
    setTodos(todos.map((todo) => (todo.id === value.id ? value : todo)));

  const handleDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((item) => (
          <Todo todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAddTodo} />
    </section>
  );
}
