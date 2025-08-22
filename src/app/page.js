"use client";
import { useState } from "react";
import { Input, Text, Button1, Button2 } from "@/components";

const Home = () => {
  return (
    <div id="body" className="flex justify-center pt-[140px] ">
      <div
        id="etseg-div"
        className="bg-white w-[377px] h-fit` pt-4 pb-4 px-6 justify-center"
      >
        <div className="flex justify-center pb-[20px]">
          <Text></Text>
        </div>

        <div className="flex gap-[10px]">
          <Input></Input>
          <Button1></Button1>
        </div>

        <div className="pt-[20px] pb-[32px flex gap-[6px]">
          <Button2
            backgroundColor="#3C82F6"
            title="All"
            color="white"
          ></Button2>
          <Button2
            backgroundColor="#F3F4F6"
            title="Active"
            color="#363636"
          ></Button2>
          <Button2
            backgroundColor="#F3F4F6"
            title="Completed"
            color="#363636"
          ></Button2>
        </div>
        <div className="flex justify-center text-[#6B7280] text-[14px] pb-[40px]">
          No tasks yet. Add one above!
        </div>
        <div className="flex justify-center text-[#6B7280] text-[14px]">
          Powered by <span className="text-[#3B73ED]">Pinecone Academy</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
