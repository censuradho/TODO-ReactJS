import React, { useState } from "react";

import "./styles.css";

function Form({ onSubmit }) {
  const [todo, setTodo] = useState({ title: "", body: "" });

  const handleChange = element => {
    const { value, name } = element.target;

    setTodo({
      ...todo,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(todo);
    setTodo({ title: "", body: "" });
  };

  return (
    <form className="add-todo-form" onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Titulo"
        value={todo.title}
        name="title"
        onChange={element => handleChange(element)}
      />
      <input
        type="text"
        placeholder="Corpo"
        value={todo.body}
        name="body"
        onChange={element => handleChange(element)}
      />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default Form;
