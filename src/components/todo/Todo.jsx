import React from "react";
import "./style.css";

const Todo = (props) => {    //워킹박스
 const {children}=props
   return (
    <div>
      <h3>Working</h3>
    <div>{children}</div>
    </div>
  );
};

export default Todo;
