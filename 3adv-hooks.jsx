//-------------------------- 43. HOOK RULES --------------------//

import { array } from "prop-types";
import { useEffect, useMemo, useReducer } from "react";

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

//another example 
export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

//The useCallback hook does not rerun your function when your dependencies changes.
// All it does is create a brand new function when the dependencies change. 
//If the dependencies don't change it will just return the same function as last time useCallback was called. 

//-------------------------- 48. Custom Hooks --------------------//
//custom hook is just a function that will use built-in hooks like useEffect, useCallback etc
//react knows that any hook will start with "use" in the beggining
//for custom hooks you can create any name after "use" keyword

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

//Custom Hook 
function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}

//custom hook
function useToogle(initialValue) {
  const [value, setValue] = useState(initialValue);

  //the function itself that will toogle the dark mode
  function toogle() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toogle];
}

// The difference between returning values from custom hooks as an object or an array.

//object
// Readability: Returning values as an object allows for more descriptive naming of the returned values, making it easier to understand the purpose of each value.
// Flexibility: Adding new values in the future is straightforward, as you can simply include them as additional properties in the returned object without affecting existing code.
// Destructuring: When consuming the custom hook, you can destructure the returned object easily, which can improve code readability.

//arrray
// Index-based Access: Returning values as an array may require consuming components to rely on index-based access to retrieve the desired values. This can lead to less readable code, especially when dealing with multiple values.
// Order Dependency: The order in which values are returned matters when using an array. Changing the order of returned values would require updating all consuming components to reflect the new order.
// No Descriptive Naming: With an array, the values are accessed based on their positions, which can make it harder to understand the purpose of each value without referring back to the custom hook implementation.

//returning values as an object from custom hooks is generally preferred due to its advantages in readability, flexibility, and ease of use. 

//-------------------------- 62. UseReducer Hook --------------------//
//hook to manage complex state logic in functional components.
// similar to 'usestate' but useful when managing state that involves multiple sub-values or when the next state depends on the previous one. 

//how useReducer works:
//1. You start by defining an initial state value, it can be a single value or an object representing the initial state of your component.
// const initialState = {
//   count: 0
// };

//2. Then define Reducer function, this is responsible for updating the state based on the dispatched actions
//this here is just an arrow function with switch logic inside, can also be normal function
const reducer = (state, action) => {
  //typically switch on 'action.type' to determine which action is being dispatched 
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// CODE ON MAIN FILE / Component
// CODE ON MAIN FILE / Component
function Counter() {
  // useReducer returns the current state and a dispatch function
  //this is a destructing assignment,state will hold the current state value, dispatch: This variable represents a function that you can call to dispatch actions to update the state.
  const [state, dispatch] = useReducer(reducer, initialState);
  // this lone above says "Call 'useReducer' with the provided reducer function and initialState, and then assign the first value returned by 'useReducer' to state and the second value to dispatch."

  return (
    <div>
      <h2>Count: {state.count}</h2>
      {/* The dispatch function internally calls the 'reducer' with the current state and the action object as arguments.  */}
      {/* on dispatch({ type: 'increment' }), the 'reducer' function receives the current state as the first argument and the action object for the second prop */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

//steps for using useREDUCER
//1. define initial state
const initialState = { count: 0 };
//2. Create Reducer Function
function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
  }
}
//3. create a variable for the UseReducer hook
const [count, dispatch] = useReducer(reducer, initialState)
//4. dispatch the actions created on reducer function
{<button onClick={() => {dispatch( {type: 'increment'})} }> + </button>}

//USE REDUCER CODE EXAMPLE FROM KYLE
//check src/components/CounterReducer.jsx

//-------------------------- 63. UseContext Hook --------------------//
//props drilling = nesting props across others components in order to the inner component get access to it.
//some of these components wont even use the prop, will only be a bridge
//use context hook is useful to fixt that

//1 first import the hook to create a context 
import { createContext } from "react";
//2 You start by creating a context, so create a export variable outside main App function to store hook (VARIABLE MUST START WITH CAPITAL LETTER)
export const ThemeContext = createContext();
//3 wrap all the code on main App that has the component and will need to access the props inside <VariableTag> </ VariableTag>
<ThemeContext.Provider value={'this value will usually be an object with whatever u wanna pass along in your context'}>
<h1>The Provider component is responsible for providing the context value to its descendant components. It accepts a value prop, which is the value that will be passed down the component tree to all descendants that are Consumers.
Typically, you wrap the root of your application or a specific part of your component tree with a Provider to make the context value available to all components within that subtree.</h1>
<div>Lets suppose there is a component here that has another component inside and this nested component will need to access props from here</div>
</ThemeContext.Provider>
//4 In the nested component the one that will actually use the props, import the USECONTEXT and the variable
import { useContext } from "react";
import {ThemeContext} from "./App"
//5 In this same nested componet call the useContext hook with the context variable created (endlich using the hook)
//can create a variable then access as variable.PropName or destruct and access it directly as the original prop name passed
const accssContext = useContext(ThemeContext) 
const {destructing, objects, passed} =  useContext(ThemeContext)
//6 this one line is what give access to a;; the props can declare inside any component that will need to use the props.

//TIP: try to only use with states that will be needed in many components on only on a really nested component
// or inside a section that will be using an specific state between components

//STEPS FOR USING USECONTEXT
//1.create a context variable
//2.determine the .Provider
//3. go to nested component and import hook + context 

//-------------------------- 64. UseContext Hook --------------------//





