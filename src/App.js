import React, { useState } from "react";

import "./App.css";

import Form from "./Components/Form";
import Card from "./Components/Card";

const cardFake = [];

function App() {
  const [listTodo, setListTodo] = useState(cardFake);

  const renderTodo = listTodo.map((value, index) => (
    <Card title={value.title} body={value.body} key={index} index={index} />
  ));

  const addTodo = todo => {
    setListTodo([...listTodo, todo]);
  };

  // adicionei a div container-todo, pra fazer o wrappe nos cards, assim fazendo não quebra o layout
  return (
    <div className="App">
      <Form onSubmit={addTodo} />
      <div className="container-todo">{renderTodo}</div>
    </div>
  );
}

export default App;
