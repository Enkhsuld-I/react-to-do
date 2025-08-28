"use client";
import { useState } from "react";

export const Medium_one = () => {
  const [i, setI] = useState("");
  const reRender = (event) => {
    setI(event.target.value);
  };
  return (
    <div>
      <p></p>
      <input
        value={i}
        onChange={reRender}
        type="text"
        className="bg-amber-50 text-black"
      />
      <p>Input text : {i.length}</p>
    </div>
  );
};
