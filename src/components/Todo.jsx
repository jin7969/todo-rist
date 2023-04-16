import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Todo({ todo, onUpdate, onDelete }) {
  const onChangeCheckbox = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        id="checkbox"
        checked={todo.status === "completed"}
        onChange={onChangeCheckbox}
      />
      <label htmlFor="checkbox">{todo.text}</label>
      <button onClick={onClickDeleteButton}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

export default Todo;
