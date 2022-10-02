import React, { useState } from "react";
import "./style.css";

const Form = () => {

  const InitValue = {id:0, title:"title", content:"",};
  const [value,setValue] = useState(InitValue);
   const onChangeHandler = (e) =>{
    const inputValue = e.target.value;
    console.log(e)
    setValue(inputValue)
   };

  return (
    <form className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input type="text" className="add-input input-group" name="title" onChange={onChangeHandler} value = {value} />
        <label className="form-label">내용</label>
        <input type="text" className="add-input input-group" />
        <button className="add-button">추가</button>
      </div>
    </form>
  );
};

export default Form;
