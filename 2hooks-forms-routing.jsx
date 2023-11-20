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

//-------------------------- 44. UseMemo Hook --------------------//
//syntax
useMemo(() => {
  //code to run if dependency array has changed
}, [dependencyArray]);

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
