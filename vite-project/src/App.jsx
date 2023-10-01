import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [name, setName] = useState("Leticia");
  console.log({ setName });
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default App;
