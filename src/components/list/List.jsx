import React from "react";
import "./style.css";

const List = ({list,setList}) => {
  return (
        <ul className="todo-container" name="list">
        {/* todo박스 생성, 폼의 타이틀과 콘텐트를 보여준다. map돌려 값넣어주기*/}
        {list.map(
          //맵은 리턴이 있어야고 업데이트 시킬때는 리턴으로 시킨다.키값넣기
           (item) => {
            return(
            // const { id, title, content } = item;
            <li key={item.id}>
              <h3>{item.title}</h3>
              <h5>{item.content}</h5>
              {/* {`title:${title} content:${content}`} */}
            </li>
            );
          }
        )}
      </ul>
     );
};


export default List;
