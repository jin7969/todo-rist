import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <FilterList
        filters={filters}
        filter={filter}
        onChangeFilter={setFilter}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
