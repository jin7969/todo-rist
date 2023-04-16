import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) return;

    onAdd({ id: "1", text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
