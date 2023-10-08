//to run Vite need to declare on terminal
//npm create vite@latest
//Done. Now run:
// cd vite-project
// npm install
// npm run dev
//to start vite after run
//npm run dev > will start vite

import { render } from "react-dom";

//--------------------- 9. THINKING IN COMPONENTS----------------//
//https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764768-basic-components/5598791-09-thinking-in-components

//-------------------------- 10. JSX BASICS --------------------//
//jsx is a different syntax of writing html code to your page

//DIFFERENCES BETWEEN HTML AND JSX SYNTAX
//1. everything will be CamelCase instead of using-dash, unless dealing with some data attributes or aria(?)

// 2. the word class is used for actually creating a class, we cant use the class keyword need to use ClassName instead
function App() {
  return <h1 className="hi"> Hello World </h1>;
}
//3. the keyword for on label need to be declared as htmlFor
function App() {
  return <label htmlFor="label"> Hello World </label>;
}
//3. anything that is not a string will have to be in curly braces
//example css style are passed as object
<h1 style={{ background: "red" }}>hello World</h1>;
//4. whenever you have curly brackets inside jsx will execute javascript code
return <h1>{2 + 4}</h1>; //6
//in html some elements does't need a closing tag, in jsx every tag needs to be closed

//EXERCISE
//create a div with the class large and id largeDiv
return (
  <div className="large" id="largeDiv">
    {" "}
    hello World
  </div>
);
//remove the text and add a Label with the 'for' property , set to inputID
//add an input with id inputID, type number , value 3
return (
  <div className="large" id="largeDiv">
    <label htmlFor="inputID">Hello world</label>
    <input id="inputID" type="number" value={3} />
  </div>
);
//if you want value to change need to declare defaultValue instead of value

//TIP
//can declare js variable,  set the value to html code,  and then use the {variable}
const myInput = <input id="inputID" type="number" value={3} />;
return (
  <div className="large" id="largeDiv">
    <label htmlFor="inputID">Hello world</label>
    {myInput}
  </div>
);
//if you're passing more than one element like case above with label/input it HAS to be wrapped on smt like a <div> or You can wrap multiple children in <></> to avoid extra nodes like divs.
//things you can return from a component string, number, array
// undefined, null and false inside { } wont return ANYTHING on jsx, can be placeholder

//-------------------------- 11. CREATING COMPONENTS --------------------//
//components should start with capital letter and be CamelCase
/*function component 
1.create a new File,recommend to name the file the same as component name
2. code on the file: 
export function TodoList() {
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
    </ul>
  );
}
3. need to export code from that file and import to the main one using import 
4. how to use component code on the main file 
 return (
      <TodoList />
  )*/

//exercise create a component that render h1 with your name in it
//code on component file MyName
// export function MyName() {
//   return <h1>Leticia Azevedo</h1>;
// }
// //code on main file
// import { MyName } from "./MyName";
// function App() {
//   return <MyName />;
// }

/*class component works the same as fucntion component on main file
difference is on the component file
//code on component file 
import React from "react";
export class TodoListClass extends React.Component {
  render() {
    return <h1>Leticia Azevedo </h1>;
  }
}
*/

//TIP: components can be defined on the same file but for better practice create a new file
//TIP: when doing export the import will have curly brackets, when doing export deafult the import has no curly brackets

//-------------------------- 11. PROPS > PROPERTIES --------------------//
//Example of property
//creating properties on the imported code
function App() {
  return (
    <div>
      {/*this way can use the property component twice and give different info*/}
      <MyName name="leti" age={26} /> {/*Leti 26*/}
      <MyName name="luca" age={31} /> {/*Luca 31*/}
    </div>
  );
}
//to access these properties, the function needs a parameter and we access the parameter as we access object in javascript
export function MyName(props) {
  return (
    <h1>
      {props.name} {props.age}
    </h1>
  );
}

//for the property that goes into the function, it can be destructed to avoid writing props.something all the time
//can also pass a boolean , if no value will be set to true (?)
export function MyName({ name, age, isProgrammer }) {
  {
    console.log("Is programmer?", isProgrammer);
  } //will return true or false whatever we put on main file code
  return (
    <h1>
      {name} {age}
    </h1>
  );
}

//how to pass along a child
//on the component file  (HAS TO BE children, other prop name won't work)
export function MyName({ children }) {
  return <h1>{children}</h1>;
}
//main file
function App() {
  return (
    <div>
      <MyName>{"Leticia Azevedo"}</MyName>
    </div>
  );
}

//EXERCISE - create TodoListItem Componenet
//props: will be children with name, isComplete boolean
//render out checkbox, (checked if complete)
//label will be (children value)
export function TodoList({ children, isComplete }) {
  return (
    <div>
      <label>{children}</label>
      <input type="checkbox" checked={isComplete}></input>
    </div>
  );
}
//main file
function NewApp() {
  return (
    <div>
      <TodoList isComplete>todo item 1</TodoList>
      <TodoList isComplete={false}>todo item 2</TodoList>
    </div>
  );
}
//with class components , the differences
// render() {
//   return (
//     <div>
//       <label>{this.props.children}</label> //this.props. will access the
//       <input type="checkbox" checked={this.props.isComplete}></input>
//     </div>
//   );
// }

//logic behind props: anything you want to change can be defined on the props, and anything you want tokeep the same can be defined on the component
//-------------------------- 13. DECLARATIVE VS IMPERATIVE --------------------//
/*imperative --> focused on HOW it is to be done; 
declarative --> specifying what you want.
A good analogy is imagine you go to a restaurant with your partner. 
An imperative interaction with the waiter would be "I see that table over there by the Fish tank is empty. 
My girlfriend and I are going to walk towards the bar, take a right at the bathroom, walk past the two tables, then sit down",
declarative interaction "Table for 2 please".
 
HTML and CSS are also declarative software --> you're not concerned with how the web browser parses elements, 
or how exactly elements are being styled under the hood, you're just expressing what element you want on the page
or what style to add to an element. React works in the same manner. 
*/

//-------------------------- 14. IMPORTING NON-JS FILE --------------------//
//how to import thing that aren't normal javascript or jsx
//on the main file of your code (App.jsx) can use keyword

//impoting CSS
// import "./styles.css"  (it won't be imported on html head)
//importing Json
//import user from "./user.json" (then need to declare in order to use {JSON.stringfy{user}}  )
//importing image
//import img from "./NameOfFile.png"

//-------------------------- 17. useState Hooks --------------------//
//state is data that can change over time, will be updated, and whenever that data changes you wanna re-render your component
//hooks will always be placed first on the code above the return

//breaking out a useState
function App() {
  //declaring the state as a varible but name of the variable is like an array
  //setAge index we will use to update the age value, it can be any variable name but standart start with set
  const [age, setAge] = useState(26); //default value to be 26
  console.log("current", age); // current 26
  //function to update the value, setting setAge to 27, will override default value
  function newAge() {
    setAge(27);
  }
  //onclick age will turn to 27, when update state variable it reruns the entire componenet with the new value set
  return <h2 onClick={newAge}> Next age {age} </h2>; //Next age 27
}

//more complex things of useState

//if you a pass a function to useState instead of a value, it gets the value of the function and then never run it again
function App() {
  const [age, setAge] = useState(() => {
    return 26;
  });
}
//or pass the function, not call it with ()
function slowGetter() {
  console.log("slow code"); //this code will run only once since it's slow
  return 26;
}
const [age, setAge] = useState(slowGetter); //if using slowGetter() it will call the function every time it re-renders

//changing 2 values at the same time using useState
function App() {
  const [age, setAge] = useState(26);
  const [name, setName] = useState("leti ");

  function newAge() {
    setAge(27);
    setName("azevedo ");
  }

  return (
    //onclick will change to azevedo 27
    <h2 onClick={newAge}>
      {" "}
      {name} {age}{" "}
    </h2>
  );
}

//if you are setting a value that depends on the previous or the current value of the state
// need to use the function version of set state
// in other words: anytime you need the current state to update the new state you should always use the function version.
//However, in case you don't care or new value is not dependent on the prev value, can set normally without fucntion
function newAge() {
  //this won't work
  setAge(age + 1);
  setAge(age + 1);
  //values will have to be set as functions
  setAge((current) => {
    return current + 1;
  });
  setAge((current) => {
    return current + 1;
  });
}

//EXERCISE: create component called Counter
//have a state for a counter that starts with 0
//when you click the number increments by 1
//this works all on same file
function App() {
  const [counter, setCounter] = useState(0);
  function addCounter() {
    setCounter(counter + 1);
  }
  return <h1 onClick={addCounter}>{counter}</h1>;
}
//creating a separate file for the component
import { useState } from "react";
export function AddCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((current) => current + 1);
  }
  return <h1 onClick={handleClick}>{counter}</h1>;
}

//original file
import { AddCounter } from "./AddCounter";
function App() {
  return <AddCounter />;
}

//-------------------------- 19. INPUT EVENT LISTENERS --------------------//
//event listeners on the input
//need to always use  onChange={(e) => setName(e.target.value)} so react has control of the input
//onChange event fires after you type any caracter in the input
function App() {
  const [name, setName] = useState("Leticia");
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
//if you wsnt to skip code "onChange" can set a defaultValue, however it won't be updated any state variable (react has no control)

//-------------------------- 24.COMPONENT LIFECYCLE --------------------//
//Terminology
//1.mountain = rerender>unmountain

//-------------------------- 25.useEffect Hook --------------------//
//useEffect takes a function and will run every time the App rerenders if only function declared
function App() {
  useEffect(() => {
    console.log("here");
  });
} //every refresh logs "here"

//second parameter of function useEffect takes is an array with value [name],anytime values in the array changes then it will run useEffect
//dependency array can take more than one value
function App() {
  const [name, setName] = useState("Leticia");
  useEffect(() => {
    console.log("here");
  }, [name]); //second parameter is called the dependency array

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

//EXERCISE: useEffect will fire everytime only the age has changed,console.log useEffect + value changed
function App() {
  const [name, setName] = useState("Leticia");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age has changed", age); //age logging out the value
  }, [age]); // [age] saying what change of value will trigger

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}

//if you pass empty array on the depedency array, it will run only on mountain stage
useEffect(() => {
  console.log("mount"); //age logging out the value
}, []);

//use case
//code below: everytime the window rezise it will show its width
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return <div>{width}</div>;
}

//use case
//removing the event listener everytime time the useEffect reruns
//result: it won't log every little change on an input but finalresult when user click outside input
//essentially removing the last run and updating it with most recent run
//return function inside useEffect after 1st function
function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [name]);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

//-------------------------- 31. STRICT MODE --------------------//
//strict mode is good for detecting and checking things
//when using strict mode, the component will
//1. mount
//2.unmount simulation
//3. then mount it again
//this is only development tool to try detect hidden bugs on the code
//when deplying the site strict mode will not run

//recommend keep strict mode enable
//can remove the second log from strcit mode
//1.go to settings into react dev tools
//2. enable "hide logs during second render strict mode"

{
  /*
The reason StrictMode double renders is because the way React renders components and handles
things for you it does not guarantee that your component will only run once per render. For example,
if something happened that caused your component to need to re-render in the middle of it already trying
to re-render (or if React decides to cancel and restart a re-render because of something that happens)
it could cause yor variables to become out of sync if you write them like globalVar. This is because if your 
component runs twice but only renders once (like in the case of StrictMode) it will cause your state to be out of sync.
*/
}

//-------------------------- 32.FETCHING DATA FROM API --------------------//
//having the fetch inside a useEffect is better practice , so it runs only on mount
//fetching the API
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((APIresponse) => APIresponse.json())
    .then((data) => console.log(data)); //
}, []); //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

//IMPORTANT!!!!  Waiting response from fetch to log API, catching an error and avoiding double mount due to strict mode
//when fetching need to make sure you have a loading state to track the API fetch
// otherwise it can return undefined if API hasn't completely returned yet
function App() {
  //Setting the api data inside a state
  const [users, setUsers] = useState();
  //creating the loading to track API return and avoid undefined return
  const [loading, setLoading] = useState(true);
  //creating the error useState
  const [error, setError] = useState();

  //fetching the API
  useEffect(() => {
    //loading set to true before fetching
    setLoading(true);
    setError(undefined); //can declare this to make sure error is empty before
    const controller = new AbortController(); // object that allows you to abort one or more Web requests as and when desired.

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 200) {
          //checking to see if response is true, .status === 200 means successful
          return response.json(); //parsing/creating a json from API link response if successful
        } else {
          return Promise.reject(response); //if not successfull, we reject as an Error
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        if (err?.name === "AbortError") return; //checking if error is not related to the abort of double mounting due to strict mode
        setError(err); //error is being caught here on .catch, then set error will have a value and wont be null
      })
      .finally(() => {
        setLoading(false); //loading set to false after done fetching
      });

    return () => {
      controller.abort();
    };
  }, []);

  //variable that will store data from API
  let usersRender;

  if (loading) {
    usersRender = <h2>Loading...</h2>;
  } else if (error != null) {
    //if the error useState is not emprty, means there was an error passed
    usersRender = <h2>There was an error fetching the API</h2>;
  } else {
    //passing from .json into an string
    usersRender = JSON.stringify(users);
  }

  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {usersRender}
    </div>
  );
}

//SAME way to fetch but using a async / await | try / catch approach
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error(`API call was not ok (${response.status})`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  //from down here same code as previous example
}
