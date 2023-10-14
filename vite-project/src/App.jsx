import { useState, useEffect } from "react";
import { render } from "react-dom";
import { Counter } from "./Counter";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };

    document.addEventListener("click", handler);
    // return () => {
    //   document.removeEventListener("click", handler);
    // };
  }, [name]);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default App;
