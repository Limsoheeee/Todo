import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import List from "../components/list/List";

const TodoList = () => {
  const [list, setList] = useState([]); //부모함수에서 리스트를 만들어줘서 큰 데이터를 관리
  return (
    <Layout>
      <Header />
      <Form list={list} setList={setList} />
      {/* 위에 만든 리스트와 셋리스트를 그대로 폼으로 넘겨준다. */}
      <List list={list} setList={setList} />
    </Layout>
  );
};

export default TodoList;
