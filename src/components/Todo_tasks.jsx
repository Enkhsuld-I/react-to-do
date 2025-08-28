"use client";
import { useState } from "react";
export const Todo_tasks = () => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const handleOnClick = () => {
    const newTodos = [...todos, inputvalue];
    setTodos(newTodos);
    setInputvalue("");

    const handleOnChange = (event) => {
      setInputvalue(event.target.value);
    };
  };
  return (
    <div>
      <ul>
        {todos.map((todos, index) => {
          return <li key={index}>{todos}</li>;
        })}
      </ul>
    </div>
  );
};
