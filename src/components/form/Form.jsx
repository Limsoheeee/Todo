import React, { useState } from "react";
import "./style.css";

const Form = () => {
  
  const [formValue,setValue] = useState([]);     //폼밸류 배열처리 온클릭시 처리
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
 
   const onChangeHandlerTitle = (e) =>{   //타이틀 밸류 받아오기
    const inputTitle = e.target.value;
    setTitle(inputTitle)
   };

   const onChangeHandlerContent = (e) =>{  //콘텐트 밸류 받아오기
    const inputContent = e.target.value; 
    setContent(inputContent)
   };

    const onClickAddList = () => {  //버튼추가하면 폼밸류생성
      if(title&&content){
        setValue([...formValue,{id:formValue.length+1,title,content,isDone:false}])
      }
      // else if(title=""||content=""){
      //   alert('제목과 내용을 입력해주세요.')
      // }
   }

  return (
    <form className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input type="text" className="add-input input-group" name="title" onChange={onChangeHandlerTitle} value = {value} />
        <label className="form-label">내용</label>
        <input type="text" className="add-input input-group" name="content" onChange={onChangeHandlerContent} value = {value}/>
        <button className="add-button" onClick={onClickAddList}>추가</button>
      </div>
    </form>
  );
};

export default Form;