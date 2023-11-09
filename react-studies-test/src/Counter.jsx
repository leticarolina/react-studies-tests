import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(0);
  function incrementor() {
    setNumber((n) => {
      return n + 1;
    });
  }

  return <h1 onClick={incrementor}>{number}</h1>;
}
