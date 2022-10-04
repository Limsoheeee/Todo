import React from "react";
import "./style.css";

const Todo = ({list,title,content}) => {
  //TOdo
  
  return 
  <li>
    <h2>{title}</h2>
    <p>{content}</p>

  </li>

};

export default Todo;
