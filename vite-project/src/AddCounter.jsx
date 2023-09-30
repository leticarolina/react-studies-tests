import { useState } from "react";

export function AddCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((current) => current + 1);
  }
  return <h1 onClick={handleClick}>{counter}</h1>;
}
