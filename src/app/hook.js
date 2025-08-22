"use client";
import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={setCount(count + 1)}>add</button>
    </div>
  );
};
export default Home;
