"use client";
import { useState } from "react";
const Home = () => {
  let [arr = ["bataa", "chimgee"], setArr] = useState(0);

  return (
    <div>
      ---------- {arr}---------
      <button onClick={() => setArr(arr[0])}>add</button>
    </div>
  );
};
export default Home;
