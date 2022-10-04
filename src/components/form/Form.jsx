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
  const [toDo, setTodo] = useState([mergy]);
  // const [content, setContent] = useState("");
  const { title, content } = toDo; //비구조화할당
  console.log(toDo)
  const onChangeHandler = (e) => {
    //타이틀 밸류 받아오기
    const {title,content} = e.target;
     setTodo({
      ...toDo,
      [title]:title,
      [content]:content,
     });
  };
  // const onChangeHandlerContent = (e) => {
  //   //콘텐트 밸류 받아오기
  //   const inputContent = e.target.value;
  //   setContent(inputContent);
  // };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //버튼추가하면 폼밸류생성
    if (setTodo!=="") { //제목과 내용을 둘다 받아야지만 배열에 정보가 들어감
      setList([
        ...list,
        {...toDo,id:list.length+1 ,title,content},
        // { id: formValue.length + 1, title, content, isDone: false },
      ]);
      setTodo("");   //제목과 내용을 추가 누른 후 값을 초기화

    }
    else{
      alert('제목과 내용을 모두 입력해주세요.')
      setTodo("")
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
          placeholder="제목"
          onChange={onChangeHandler}
          value={title}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          className="add-input input-group"
          name="content"
          placeholder="내용"
          onChange={onChangeHandler}
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
