//-------------------------- 43. HOOK RULES --------------------//

import { array } from "prop-types";
import { useEffect, useMemo } from "react";

//1. hooks canNOT be called conditionally or inside any if statements, for loop, blocks etc
if (true) {
  useEffect(() => {}, []);
}
//instead can put if statement inside the useEffect hook
useEffect(() => {
  if (true) {
    document.title = "hi";
  }
}, [count]);

//2.Hooks has to be on the top of the App function component or inside custom hooks
function App() {
  //useState, useEffect etc all here on the top
}

//-------------------------- 44. UseRef Hook --------------------//
//useRef hook is able to persist data between different render but not change the value of useState or prop itself, it's just a reference value
//if our useState or props change, the component will rerender but with props it won't rerender

//syntax for useRef('default value can be anything')
//code under is a useRef, "leticia" is the default value and "letiRef" is the object variable to access it
//all this code is doing is wrapping a particular value and putting inside the "letiRef" object
const letiRef = useRef("leticia");
//to access the value need to target as object with "current" key
console.log(letiRef); //{current: 'leticia'} returns an object
console.log(letiRef.current); //leticia

//changing the useRef value, this will not cause component to rerender
function App() {
  const letiRef = useRef("leticia");
  letiRef.current = "useRef value has been changed";
  console.log(letiRef.current); //useRef value has been changed
}

//even tho value is bring chamged to Math.randon and useEffect has a console.log of re-render the component will not rerender
//hook is useful when you want value to be tied to the component but not the rerendering
function App() {
  const letiRef = useRef("leticia");
  useEffect(() => {
    console.log("Re-rendered");
  });

  return (
    <>
      <button
        onClick={() => {
          letiRef.current = Math.random();
        }}
      >
        Click to change ref current value
      </button>
      <button
        onClick={() => {
          console.log(letiRef.current);
        }}
      >
        Click to print new Ref
      </button>
    </>
  );
}

//ACCESSING HTML ELEMENT
//usinguseRef to get reference from a html element
//every html element has a "ref" prop
function App() {
  const [name, setName] = useState();
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef.current); //<input type="text" value="">
    console.log(inputRef.current.value); //will log value inside input
  }, [name]);
  return (
    <input
      //setting the ref to be "inputRef"
      ref={inputRef}
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}

//-------------------------- 45. UseMemo Hook --------------------//
//syntax
useMemo(() => {
  //code to run if dependency array has changed
}, [dependencyArray]);
g;
//this is for performance gains and is all about memoization
//The useMemo Hook only runs when one of its dependencies update.

//1. Memoization
//When you have a computation that might be slow or time-consuming to compute, but its result only changes when certain inputs (dependencies) change, useMemo can be used to memoize that computation.
//for example if you have a very slow code to filter o map smt, this can de declared inside useMemo
//useMemo returns a memoized value

//2.Avoids Unnecessary Recalculation
//By using useMemo, unnecessary recalculations of values can be avoided, which can lead to smoother rendering and improved performance in React components.

function App() {
  const [count, setCount] = useState(0);

  // A function that doubles the count value (pretend is slow)
  const doubleCount = useMemo(() => {
    console.log("Recalculating doubleCount...");
    return count * 2;
  }, [count]); // Dependency: 'count'

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double the count (memoized): {doubleCount}</p>
      {/* when button is clicked the count will add +1 and since count changed, the useMemo will run too  */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

//-------------------------- 47. UseCallback Hook --------------------//
//The useMemo and useCallback Hooks are similar.
//Main difference is that useMemo returns a memoized value and useCallback returns a memoized function

//on this code, useEffect + useCallback will only run when the name changes, the age change won't trigger any of these
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  //you will declare useCallback as a variable with the function you want to memoize
  const printName = useCallback(() => {
    console.log(`Name: ${name}`);
  }, [name]); //The useCallback Hook only runs when one of its dependencies update.

  useEffect(() => {
    console.log("useEffect in Effect");
    printName();
  }, [printName]);

  return (
    <>
      {" "}
      <label>
        {" "}
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        {" "}
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </label>
    </>
  );
}

//-------------------------- 48. Custom Hooks --------------------//
//react knows that any hook will start with "use" in the beggining
//for custom hoos you can create any name after "use" keyword

function App() {
  //the value here is useInputValue the function
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

//-------------------------- 55. Form Basics--------------------//
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

//-------------------------- 56. One way Data Flow--------------------//
