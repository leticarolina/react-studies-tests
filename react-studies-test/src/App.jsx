import { useState, useEffect, useCallback, useRef } from "react";
import { IndividualTodo } from "./IndividualTodo";

function App() {
  const nameRef = useRef();
  // const [name, setName] = useState("");

  //component is rerendering everytime the input changes and we don't need that
  useEffect(() => {
    console.log("render");
  });
  function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    if (name === "") return;

    alert(`Name: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name: </label>
      <br />
      {/* uncontrolled input with useRef, wont cause component to rerender everytime */}
      <input type="text" ref={nameRef} id="name" />
      {/* controlled input causing component to rerender */}
      {/* <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      /> */}
      <br />
      <br />
      <button>Alert Name</button>
    </form>
  );
}
export default App;
