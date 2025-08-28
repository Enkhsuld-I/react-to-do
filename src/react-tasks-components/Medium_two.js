"use client";
import { use, useState } from "react";

export const Medium_two = () => {
  const [todo, setTodo] = useState([]);
  const hadnleOnchange = (event) => {
    setInputvalue(event.target.value);
  };
  const [inputvalue, setInputvalue] = useState("");
  const handleonclick = () => {
    const newtodo = [...todo, inputvalue];
    setTodo(newtodo);
    setInputvalue("");
  };
};
return (
  <div className="">
    <input
      type="text"
      className="bg-white text-black"
      value={inputvalue}
      onChange={hadnleOnchange}
    />
    <button className="bg-amber-50 text-black" onClick={handleonclick}>
      Add Todo
    </button>
    <ul className="flex flex-col">
      {todo.map((todo, index) => {
        return (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  </div>
);
