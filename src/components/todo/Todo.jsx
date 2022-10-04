import React from "react";
import "./style.css";

const Todo = ({ title, content }) => {

  return (
    <li className="todo-item">
      <h2>{title}</h2>
      <p>{content}</p>
    </li>
  );
};

export default Todo;
