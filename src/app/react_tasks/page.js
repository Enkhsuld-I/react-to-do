"use client";
import { useState } from "react";
import {
  Easy_one,
  Easy_three,
  Easy_two,
  Medium_one,
  Medium_two,
} from "@/react-tasks-components";
const Home = () => {
  return (
    <div className="flex items-center flex-col">
      <Easy_one></Easy_one>
      -----------------------------------------------------
      <Easy_two></Easy_two>
      -----------------------------------------------------
      <Easy_three></Easy_three>
      -----------------------------------------------------
      <Medium_one></Medium_one>
      -----------------------------------------------------
      <Medium_two></Medium_two>
    </div>
  );
};
export default Home;
