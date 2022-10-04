import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const List = ({ list, setList }) => {
  return (
    <ul className="todo-container" name="list">
      {/* todo박스 생성, 폼의 타이틀과 콘텐트를 보여준다. map돌려 값넣어주기*/}
      {list.map(
        //맵은 리턴이 있어야고 업데이트 시킬때는 리턴으로 시킨다.키값넣기
        (item) => {
          return <Todo {...item} />;
        }
      )}
    </ul>
  );
};

export default List;
