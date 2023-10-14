import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  function increase() {
    return setCount(count + 1);
  }
  return (
    <div>
      <h1 onClick={increase}>{count}</h1>
    </div>
  );
}
