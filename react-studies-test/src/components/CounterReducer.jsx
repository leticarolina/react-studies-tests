import { useReducer, useState } from "react";

//OPTIONAL: CREATE AN OBJECT FOR EVERY CASE SCENARIO TO AVOID MISPELLING via auto-complete
const ACTIONS = {
  RESET: "RESET",
};
//Calling the action via switch case ACTIONS.RESET:

// the reducer function and initial state are declared outside of the component.
//This promotes code organization, reusability, performance optimization, and easier testing.
function reducer(state, action) {
  // action will usually have a type
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
      break;
    case "INCREMENT":
      return state + action.payload;
      break;
    case ACTIONS.RESET:
      return (state = 0);
      break;
    case "ADD5":
      return state + action.payload.value;
    default:
      return state;
  }
}

export function CounterReducer({ initialCount = 0 }) {
  //the returned value from useReducer will always be an array.
  //The first element is the current state value, the second element is a dispatch function.
  const [count, dispatch] = useReducer(reducer, initialCount);

  //distach is kinda similar to setCount in a useState but it allows to perform other different actions
  // const [count, setCount] = useState(initialCount);

  return (
    <>
      {count}
      <button
        //a payload refers to the additional data that is passed along with the action type when dispatching an action.
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
      <button
        // standart way to handle the dispatch function,declare type for the action and payload for aditional data,here I declared the value will in another object
        onClick={() => {
          dispatch({ type: "ADD5", payload: { value: 5 } });
        }}
      >
        Add +5
      </button>
    </>
  );
}
