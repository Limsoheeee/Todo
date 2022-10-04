import React, { useState } from "react";
import "./style.css";

const Form = ({ list, setList }) => {
  const mergy = {
    id: 0,
    title: "",
    content: "",
    isDone: false,
  };
  const [toDo, setTodo] = useState(mergy);
   console.log(toDo)
  const onChangeHandler = (e) => {
    //타이틀,콘텐트  밸류 받아오기
    const { name, value } = e.target;
    setTodo({
      ...toDo,
      [name]: value,
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
    if (toDo.title === "" || toDo.content === "") 
    return;
      setList([
        ...list,
        { ...toDo, id: list.length + 1 }
        // { id: formValue.length + 1, title, content, isDone: false },
      ]);
      setTodo(mergy); //제목과 내용을 추가 누른 후 값을 초기화
    } 

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
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            className="add-input input-group"
            name="content"
            placeholder="내용"
            onChange={onChangeHandler}
          />
          <button type="submit" className="add-button">
            추가
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
