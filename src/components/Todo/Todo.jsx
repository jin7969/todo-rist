import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const onChangeCheckbox = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const onClickDeleteButton = () => {
    onDelete(todo.id);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={onChangeCheckbox}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={onClickDeleteButton} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

export default Todo;
