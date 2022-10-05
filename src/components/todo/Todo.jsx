import React from "react";
import "./style.css";

const Todo = ({ title, content,List, setList }) => {

  return (
    <li className="todo-item">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="button-set">
      <button className="remove-button">삭제하기</button>
      <button className="check-button">완료</button>
      </div>
         </li>
  );
};

export default Todo;
