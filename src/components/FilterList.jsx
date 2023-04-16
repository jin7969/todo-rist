import React from "react";

function FilterList({ filters, filter, onChangeFilter }) {
  return (
    <ul>
      {filters.map((filter, index) => (
        <li key={index}>
          <button onClick={() => onChangeFilter(filter)}>{filter}</button>
        </li>
      ))}
    </ul>
  );
}

export default FilterList;
