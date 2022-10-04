import React, { useState } from "react";
import "./style.css";

const Form = ({ list, setList }) => {
  const mergy ={
    id:0,
    title:"",
    content:"",
    isDone: false,
  };
  // const [formValue, setValue] = useState([mergy]); //폼밸류 배열처리 온클릭시 처리
  // //폼밸류와 셋밸류가 투두리스트의 리스트가되지만, 여기서 작성안하고 투두리스트에서 작성
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeHandlerTitle = (e) => {
    //타이틀 밸류 받아오기
    const inputTitle = e.target.value;
    setTitle(inputTitle);
  };

  const onChangeHandlerContent = (e) => {
    //콘텐트 밸류 받아오기
    const inputContent = e.target.value;
    setContent(inputContent);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //버튼추가하면 폼밸류생성
    if (title && content) { //제목과 내용을 둘다 받아야지만 배열에 정보가 들어감
      setList([
        ...list,
        {...mergy,id:list.length+1 ,title,content},
        // { id: formValue.length + 1, title, content, isDone: false },
      ]);
      setTitle("");   //제목과 내용을 추가 누른 후 값을 초기화
      setContent("");

    }
    else{
      alert('제목과 내용을 모두 입력해주세요.')
    }
  };


  return (
   <>
    <form className="add-form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          className="add-input input-group"
          name="title"
          onChange={onChangeHandlerTitle}
          value={title}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          className="add-input input-group"
          name="content"
          onChange={onChangeHandlerContent}
          value={content}
        />
        <button type="submit" className="add-button" >
          추가
        </button>
      </div>
      </form>
    </>

  );
};



export default Form;
