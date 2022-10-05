import React from "react";
import "./style.css";

const Todo = ({ id, title, content, isDone, list, setList }) => {
  const checkHandler = () => {
    const result = list.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });

    setList(result);
  };

  const deleteHandler = () => {
    const result = list.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setList(result);
  };

  return (
    <li className="todo-item">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="button-set">
        <button className="remove-button" onClick={deleteHandler}>
          삭제하기
        </button>
        <button className="check-button" onClick={checkHandler}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
};

export default Todo;
