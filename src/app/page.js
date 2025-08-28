"use client";
import { useState } from "react";
import { Input, Text, Button1, Button2 } from "@/components";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState("");
  const [filter, setFilter] = useState("All");

  const handleOnClick = () => {
    if (inputvalue !== "") {
      const newTodos = [
        ...todos,
        { title: inputvalue, check: false, id: uuidv4() },
      ];
      setTodos(newTodos);
      setInputvalue("");
    } else {
      alert("hooson bn yum bich");
    }
  };

  const handleOnChange = (event) => {
    setInputvalue(event.target.value);
  };

  const handleFilterStatus = (status) => {
    setFilter(status);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.check;
    return todo.check;
  });

  const handleOnDelete = () => {};

  return (
    <div className="bg-white w-full h-screen flex justify-center py-[140px]">
      <div className="w-[377px] h-fit bg-white flex flex-col shadow-[0_0_12px_0_rgba(0,0,0,0.16)] pt-6 pb-6 pr-4 pl-4">
        <div className="flex justify-center">
          <Text></Text>
        </div>

        <div className="flex gap-[6px] py-5">
          <Input onChange={handleOnChange} value={inputvalue}></Input>
          <Button1 onClick={handleOnClick}></Button1>
        </div>

        <div className="flex gap-[6px] pb-[10px]">
          <button
            onClick={() => {
              handleFilterStatus("All");
            }}
            className={
              " bg-[#F3F4F6] text-[#363636] py-1 px-3 rounded-[6px]" +
              `${filter === "All" ? " !bg-[#3C82F6] text-white" : ""}`
            }
          >
            All
          </button>
          <button
            onClick={() => {
              handleFilterStatus("Active");
            }}
            className={
              " bg-[#F3F4F6] text-[#363636] py-1 px-3 rounded-[6px]" +
              `${filter === "Active" ? " !bg-[#3C82F6] text-white" : ""}`
            }
          >
            Active
          </button>
          <button
            onClick={() => {
              handleFilterStatus("Completed");
            }}
            className={
              " bg-[#F3F4F6] text-[#363636] py-1 px-3 rounded-[6px]" +
              `${filter === "Completed" ? " !bg-[#3C82F6] text-white" : ""}`
            }
          >
            Completed
          </button>
        </div>

        <div>
          <ul>
            {filteredTodos.map((todo, index) => {
              const handlecheck = (event) => {
                setTodos((prev) =>
                  prev.map((el, i) => {
                    if (el.id === todo.id) {
                      el.check = event.target.checked;
                    }
                    return el;
                  })
                );
              };
              const deletebutton = () => {
                const newTodos = todos.filter((el) => el.id !== todo.id);
                setTodos(newTodos);
              };
              return (
                <div
                  className="bg-[#F3F4F6] rounded-[6px] w-[345px] h-[62px] flex items-center gap-4"
                  key={todo.id}
                >
                  <input
                    type="checkbox"
                    className="w-[20px]  h-[20px]"
                    checked={todo.check}
                    onChange={handlecheck}
                  />

                  {todo.check ? (
                    <p className="text-black line-through">{todo.title}</p>
                  ) : (
                    <p className="text-black">{todo.title}</p>
                  )}
                  {todo.check && (
                    <button
                      className="text-[#EF4444] py-[6px] px-[12px] bg-[#FEF2F2] rounded-[6px]"
                      onClick={deletebutton}
                    >
                      Delete
                    </button>
                  )}
                </div>
              );
            })}
          </ul>
        </div>

        <p className="text-center text-[#6B7280]">
          No tasks yet. Add one above!
        </p>
        <p className="text-[#6B7280] text-center">
          Powered by <a className="text-[#3B73ED]">Pinecone academy</a>
        </p>
      </div>
    </div>
  );
};
export default Home;
