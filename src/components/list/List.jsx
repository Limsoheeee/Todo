import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const List = ({ list, setList}) => {

  return (
    <div>
      <h2>🔥Working🔥</h2>
      <ul className="todo-container">
      {list.map((item) => {
          if (item.isDone === false) {
            return (
              <Todo key={item.id} {...item} list={list} setList={setList} />
            );
          } else {
            return null;
          }
        })}
      </ul>
      <h2>🍔Done🫶🏻</h2>
      <ul className="todo-container">
      {list.map((item) => {
          if (item.isDone === true) {
            return (
              <Todo key={item.id} {...item} list={list} setList={setList} />
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default List;
