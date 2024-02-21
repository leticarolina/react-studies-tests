//-------------------------- 43. HOOK RULES --------------------//

import { array } from "prop-types";
import { useEffect, useMemo } from "react";

//1. hooks canNOT be called conditionally or inside any if statements, for loop, blocks etc
if (true) {
  useEffect(() => {}, []);
}
//instead can put if statement inside the useEffect hook or after it
useEffect(() => {
  if (true) {
    document.title = "hi";
  }
}, [dependency]);

if (true) {
  document.title = "hi";
}

//2.Hooks has to be on the top of the App/Home function component
//reason is bcs hooks cannot be called conditionally
function App() {
  //useState, useEffect etc all here on the top
}

//3.hooks can only be used inside the function component or custom hooks

//-------------------------- 44. UseRef Hook --------------------//
//useRef hook is able to persist data between different render but not change the value of useState or prop itself, it's just a reference value
//if our useState or props change, the component will rerender but with useRef it won't rerender

//syntax for useRef('default value can be anything')

//code under is a useRef, "leticia" is the default value set and "letiRef" is the object variable to access it
//all this code is doing is wrapping a particular value and putting inside the "letiRef" object variable
const letiRef = useRef("leticia");
const storeRef = useRef(3)
//to access the value need to target as object with "variable.current" key
console.log(letiRef); //{current: 'leticia'} returns an object
console.log(letiRef.current); //leticia

//changing the useRef value, this will not cause component to rerender
function App() {
  const letiRef = useRef("leticia");
  letiRef.current = "useRef value has been changed";
  console.log(letiRef.current); //useRef value has been changed
}

//about next code: even tho value of useRef is being changed to Math.randon and useEffect has a console.log the component will not rerender
//hook is useful when you want value to be tied to the component but not the rerendering
export default function Home() {
  const letiRef = useRef("leticia");

  useEffect(() => {
    console.log("Re-rendered");
  });

  return (
    <>
      {/* on every click the letiRef value will change but component will no rerender */}
      <button
        onClick={() => {
          letiRef.current = Math.random();
        }}
      >
        Click to change ref current value
      </button>
      <br></br>
      <button
        onClick={() => {
          console.log(letiRef.current);
        }}
      >
        Click to log current Ref
      </button>
    </>
  );
}

//ACCESSING HTML DOM ELEMENTS
//using useRef to get reference from a html element and value of an input
//every html element has a "ref" prop, If you attach a ref to a DOM element like <input>, <div> etc.
// React will assign the DOM node to the current property of the ref object once the component mounts.
export default function Home() {
  const [name, setName] = useState();
  const inputRef = useRef();

  useEffect(() => {
    //<input> is the DOM node, on next render value will be dinamically changing on node too
    console.log(inputRef.current); //<input type="text" class="bg-blue-500 m-3" value="">
    console.log(inputRef.current.value); //will log value inside input
  }, [name]);

  return (
    <input
      //setting the ref to be "inputRef"
      ref={inputRef}
      type="text"
      className="bg-blue-500 m-3"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}

//another example
export default function Home() {
  const inputRef = useRef(null); // when you create a useRef object, it's initialized with an null initial value by default.
  //useRef is not available until after the component mount 

  useEffect(() => {
    // After component mounts, inputRef.current will hold the reference to the input element
    console.log(inputRef.current); //  <input  />
    inputRef.current.focus(); //will automatically give focus to  the input on mount
  }, []);
  return <input ref={inputRef} />;
}

//-------------------------- 45. UseMemo Hook --------------------//
//syntax similar to useEffect but need to declare as variable
const variable = useMemo(() => {
  //code to run if dependency array has changed
}, [dependencyArray]);

//this is a hook for performance gains and is all about memoization
//The useMemo Hook only runs when one of its dependencies update.

//1. Memoization
//When you have a computation that might be slow or time-consuming , with useMemo its result only changes when certain inputs (dependencies) change
//for example if you have a very slow code to filter or map smt, this can de declared inside useMemo
//useMemo returns a memoized value

//2.Avoids Unnecessary Recalculation
//By using useMemo, unnecessary recalculations of values can be avoided, which can lead to smoother rendering and improved performance in React components.

function App() {
  const [count, setCount] = useState(0);

  // A function that doubles the count value (pretend its slow)
  //whateber we return from this function will be the value of variable 'doubleCount'
  const doubleCount = useMemo(() => {
    console.log("Recalculating doubleCount...");
    //in case some slow code here makes sense to use useMemo, otherwise just set vatiable normally
    return count * 2;
  }, [count]); // Dependency: 'count'

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double the count (memoized): {doubleCount}</p>
      {/* when button is clicked the count will add +1 and since count changed, the useMemo will run too */}
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
  }, [name]); // useCallback Hook only runs when one of its dependencies update.

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

//The useCallback hook does not rerun your function when your dependencies changes.
// All it does is create a brand new function when the dependencies change. 
//If the dependencies don't change it will just return the same function as last time useCallback was called. 

//-------------------------- 48. Custom Hooks --------------------//
//custom hook is a stateful function that will use bjilt-in hooks like useEffect, useCallback etc
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
