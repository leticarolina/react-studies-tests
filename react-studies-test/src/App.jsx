import { useState, useEffect, useCallback } from "react";
import { IndividualTodo } from "./IndividualTodo";

function App() {
  const [inputValue, setInputValue] = useState();

  function preventDefault(e) {
    // the onSubmit function called need to have the e.preventDefault() declared
    e.preventDefault();
  }

  return (
    <>
      {/* if using a form need to declare onSubmit={function here} */}
      <form onSubmit={preventDefault} id="new-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={inputValue}
          placeholder="Full Name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <br />

        {/* selecting the default value of options  <select value="2"> cannot change to another number*/}
        {/* to be uncontrolled the value cannot be changed, known declared as defaultValue="2" */}
        <label htmlFor="pick">Pick a number: </label>
        <select id="pick">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <br />
        <textarea
          placeholder="I am the placeholder of textarea"
          rows="3"
        ></textarea>
        <br />
        <br />
        {/* Defaultchecked will make checkbox already checked on load*/}
        <input id="agree" type="checkbox" defaultChecked />
        <label htmlFor="agree">Agree with conditions</label>
        <br />
        <br />
        <button>Add Todo</button>
      </form>
    </>
  );
}
export default App;
