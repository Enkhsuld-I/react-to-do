"use client";
import { useState } from "react";
export const Easy_one = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button className="bg-gray-700 rounded-[4px]" onClick={handleOnClick}>
        Add
      </button>
      <p>Count : {count} </p>
    </div>
  );
};
