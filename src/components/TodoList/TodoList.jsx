import { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const getFilteredTodo = (todos, filter) => {
  if (filter === "all") return todos;

  return todos.filter((todo) => todo.status === filter);
};

const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(getTodosFromLocalStorage);
  const filteredTodos = getFilteredTodo(todos, filter);

  const handleAddTodo = (value) => {
    setTodos((prev) => [...prev, value]);
  };

  const handleUpdate = (value) =>
    setTodos(todos.map((todo) => (todo.id === value.id ? value : todo)));

  const handleDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAddTodo} />
    </section>
  );
}
