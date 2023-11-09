import { useState } from "react";

function App() {
  const [person, setPerson] = useState("leticia ");

  return (
    <input
      type="text"
      value={person}
      onChange={(e) => {
        setPerson(e.target.value);
      }}
    ></input>
  );
}

//EXERCISE: create component called Counter
//have a state for a counter that starts with 0
//when you click the number increments by 1

export default App;
