import { useState } from "react";

const Title = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>You pressed {count} times</h1>
      <button onClick={(e) => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Title;
