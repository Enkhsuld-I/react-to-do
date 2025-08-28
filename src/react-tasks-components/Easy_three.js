"use client";
import { useState } from "react";

export const Easy_three = () => {
  const [visible, setVisible] = useState(true);
  const handleOnChange = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button className="bg-amber-50 text-black" onClick={handleOnChange}>
        Show/hide
      </button>
      {visible ? <p>Toggle me</p> : ""}
    </div>
  );
};
