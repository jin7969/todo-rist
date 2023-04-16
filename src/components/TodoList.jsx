import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  const handleAddTodo = (value) => setTodos((prev) => [...prev, value]);

  const handleUpdate = (value) =>
    setTodos(todos.map((todo) => (todo.id === value.id ? value : todo)));

  const handleDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAddTodo} />
    </section>
  );
}
