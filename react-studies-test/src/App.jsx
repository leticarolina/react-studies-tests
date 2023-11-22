import { useState, useEffect, useCallback } from "react";
// import { ToogleDarkMode } from "./ToogleDarkMode";

function App() {
  const nameInput = useInputValue("");
  //creating variable, the value is the function useToogle();
  const [isDarkMode, toogleDarkMode] = useToogle();

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "white",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Name:
        <input {...nameInput} />
      </label>
      <br />
      <br />
      {/* onclick will call toogleDarkMode to change isDarkMode variable */}
      <button onClick={toogleDarkMode}>Toogle Dark Mode</button>
    </div>
  );
}

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}
function useToogle(initialValue) {
  const [value, setValue] = useState(initialValue);

  //the function itself that will toogle the dark mode
  function toogle() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toogle];
}
export default App;
