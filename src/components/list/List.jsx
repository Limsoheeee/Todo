import React from "react";
import "./style.css";

const List =(props) =>{
  const {list} = props;  //폼밸류를 프롭스로 받아옴
  return(
    <>
   <div className="todo-container" name="list">  
   {/* todo박스 생성, 폼의 타이틀과 콘텐트를 보여준다. map돌려 값넣어주기*/}
  {
    list.map(   //맵은 리턴이 있어야고 업데이트 시킬때는 리턴으로 시킨다.키값넣기
      (item) => {
        const{id,title,content}  = item;
        return <li key={id}>
         {`title:${title}</h4> content:${content}`}
         </li> 
      }
    )
  } 
   </div>
   </>
  )
}

export default List;