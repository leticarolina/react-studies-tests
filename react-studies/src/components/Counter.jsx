//EXERCISE: create component called Counter
//have a state for a counter that starts with 0
//when you click the number increments by 1

import { useState } from "react";

export function Counter(a) {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  return <h1 onClick={add}>{count}</h1>;
}
