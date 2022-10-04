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

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTodo({
      ...toDo,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (toDo.title === "" || toDo.content === "") return;

    setList([...list, { ...toDo, id: list[list.length - 1]?.id + 1 || 0 }]);
    setTodo(mergy);
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
            value={toDo.title}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            className="add-input input-group"
            name="content"
            placeholder="내용"
            onChange={onChangeHandler}
            value={toDo.content}
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
