import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [formValue, setValue] = useState([]); //폼밸류 배열처리 온클릭시 처리
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
      setValue([
        ...formValue,
        { id: formValue.length + 1, title, content, isDone: false },
      ]);
      setTitle("");   //제목과 내용을 추가 누른 후 값을 초기화
      setContent("");
    }
    else{
      alert('제목과 내용을 모두 입력해주세요.')
    }
  };
console.log(formValue)
  return (
    <div>
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
      <br></br>

      <div className="todo-container">  
      {/* todo박스 생성, 폼의 타이틀과 콘텐트를 보여준다. */}
      <h2>{setValue.title}</h2><br />
      <p>{setValue.content}</p>
      </div>
   
    </div>
  );
};

export default Form;
