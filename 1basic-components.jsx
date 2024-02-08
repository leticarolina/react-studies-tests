//--------------------- 8. VITE REACT APP---------------//
//to run Vite need to declare on terminal
//npm create vite@latest
//Done. Now run:
// cd vite-project
// npm install
// npm run dev

//to start vite after run
//npm run dev > will start vite

// import { render } from "react-dom";

// Hotfix
//ERROR when rerunning vite app

//1.delete node-modules folder
//2.run command > cd "path for vite folder with package.json inside"
//3. run command >  npm install
//4. run command> npm run dev

//start project on  next after
// pwd
// cd path
//npm run dev

//--------------------- 9. THINKING IN COMPONENTS----------------//
//https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764768-basic-components/5598791-09-thinking-in-components
//if you change style of thing and want other similar elements to change UI too then it should be on a component
//example list items from a UL
//cards

//-------------------------- 10. JSX BASICS --------------------//
//jsx is a different syntax of writing html code to your page

//DIFFERENCES BETWEEN HTML AND JSX SYNTAX
//1. everything declared in the html/react element will be CamelCase instead of using-dash, unless dealing with some data attributes or aria(?)
// html
<label for="favorite-drink"> Gin Tonic</label>;
//react
<h1 htmlFor="favoriteDrink"> Gin Tonic</h1>;

// 2. to declare a class inside an element, we cant use the class keyword need to use ClassName instead
function App() {
  return <h1 className="hi"> Hello World </h1>;
}

//3. the keyword for on label need to be declared as htmlFor
function App() {
  return <label htmlFor="label"> Hello World </label>;
}
//3. anything that is not a string will have to be in curly brackets
//example css style are passed as object
<h1 style={{ background: "red" }}>hello World</h1>;
//background-color again will have to refer to camelCase
<h1 style={{ backgroundColor: "red" }}>hello World</h1>;

//4. whenever you have curly brackets inside jsx, it will execute javascript code
return <h1>{2 + 4}</h1>; //6

//5. in html some elements does't need a closing tag, in jsx every element needs to be closed even img , input
//with exception of components

//6. undefined, null and false inside { } wont return ANYTHING on jsx, can be placeholder

//7.things you can return from a component string, number, array

//8. JavaScript code is typically written within the body of the function component before the return statement.
//However, you can also write some JavaScript code after the return statement if you enclose it within curly braces {}.

//9. (IMPORTANT) After the return statement in a React component, you cannot write arbitrary JavaScript statements or code blocks.
//Examples CANNOT do after return: declare a function, block statements (if/else, for loop, while loop), assign a variable {myVar = 42}, declare objects or array,
//In general, you should only include JSX expressions, JavaScript expressions, or function calls inside the return. Any complex JavaScript logic, such as conditionals or loops, should be performed outside of the return statement.

//EXERCISE
//create a div with the class large and id largeDiv
// add a Label with the 'for' property , set to inputID
//add an input with id inputID, type number , value 3
function App() {
  return (
    <div className="large" id="largeDiv">
      <label htmlFor="inputID">
        Label
        <input type="number" id="inputID" value={3} />
      </label>
    </div>
  );
}
//value in the code above cannot be changed, if you want value to change need to declare defaultValue instead of value

//very use case for react, create variables for html
//can declare js variable,  set the value to html code,  and then use the {variable}
const myInput = <input id="inputID" type="number" value={3} />;
return (
  <div className="large" id="largeDiv">
    <label htmlFor="inputID">Hello world</label>
    {myInput}
  </div>
);
//if passing more than one element like case above with label/input it HAS to be wrapped on smt like a <div> or You can wrap multiple children in <></> to avoid extra nodes like divs.

//the way it works for main function and others components
function App() {
  // JavaScript code is not placed after the return statement
  // here goes all the javascript code
  return;
  //here goes all html / components return
}
//-------------------------- 11. CREATING COMPONENTS --------------------//
//components should start with capital letter and be eg.: CamelCase
//good practice name of the component file be the same as function name

/*function component steps
1.create a new File,name the file the same as function name will be
2.the code on the component file need to return smt from the function otherwise the component won't return anything when called.
// example code on the component file: 
//all this code is doing is returning a html logic for a list of items 
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
3. this function component need to be exported, and then imported to the main file using 'import'
//import { TodoList } from "@/components/ToDoList";
4. how to use component imported on the main file 
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

//TIP: components can be defined on the same file but for better practice create a new file
//IMPORT SYNTAX: when doing export the import will have curly brackets, when doing export deafult the import has no curly brackets

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

//-------------------------- 11. PROPS > PROPERTIES --------------------//
//Example of property

//1. creating properties means the component function will take a parameter(s) and we access this parameter as we access object in javascript
//example on the component file
export function MyName(props) {
  // props is a property crated, indicates the function component will have props
  return (
    <h1>
      {/* can choose any name for prop holding value, .name .age will be the key to access value on main file as name="prop" */}
      {props.name} {props.year}
    </h1>
  );
}
//2. acessing properties on the imported component main file
function App() {
  return (
    <div>
      {/*this way can use the property component twice and give different info*/}
      <MyName name="leti" year={1997} /> {/*Leti 1997 */}
      <MyName name="luca" year={1992} /> {/*Luca 1992 */}
    </div>
  );
}

//another example
export function TodoList(prop) {
  return (
    <>
      <h1>{prop.title}</h1>
      <h2> {prop.subtitle}</h2>
    </>
  );
}
//code on the main file App.jsx
function App() {
  return <TodoList title="alo" subtitle="sub" />; //will render "alo" as h1 and "sub" as h2
}

//getting into the props
//for the property that goes into the function, it can be destructed to avoid writing props.something all the time
//this will have same exact output as previous example
export function TodoList({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2> {subtitle}</h2>
    </>
  );
}
//code on main file
function App() {
  return <TodoList title="alo" subtitle="sub" />;
}

//can also create a boolean , if no value passed to the prop when it's called, it will be set to TRUE as default
//component file
export function MyName({ name, age, isProgrammer }) {
  {
    console.log("Is programmer?", isProgrammer); //for now undefined, bcs it's not defined as boolean yet
  }
  //props waiting to be declared when called compo on main file code
  return (
    <h1>
      {name} {age}
    </h1>
  );
}
//main file
function App() {
  return <MyName name="leti" age={36} isProgrammer />; //leti 36 // Console = Is programmer? true ,  no value set will be true
}

//how to pass along a children
//children is a special prop that means being able to set value <>inside</>  of the component when calling it
//on the component file prop (HAS TO BE children, other prop name won't work)
export function MyName({ children }) {
  return <h1>{children}</h1>;
}
//main file
function App() {
  return (
    <div>
      {/* on the children prop you will change it's value like syntax below, the h1 element could have also been declared here but children must be wrapped on smt on the component */}
      <MyName>Leticia Azevedo</MyName>
    </div>
  );
}

//EXERCISE - create TodoListItem Componenet
//props will be: children with name, isComplete boolean
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
function App() {
  return (
    <div>
      <TodoList isComplete>todo item 1</TodoList>
      {/* checkbox here wont be checked bcs was manually declared as false*/}
      <TodoList isComplete={false}>todo item 2</TodoList>
    </div>
  );
}
//logic behind props: anything you want to change value can be defined on the props,
//and anything you want to keep the same can be defined on the component
//TIP: props can have a default value eg: TodoList({ children, isComplete = false }), so if you don't declare value on main file it will be auto set to false

//with class components , the differences
// render() {
//   return (
//     <div>
//       <label>{this.props.children}</label> //this.props. will access the
//       <input type="checkbox" checked={this.props.isComplete}></input>
//     </div>
//   );
// }

//-------------------------- 39. SPREAD PROPS --------------------//
//spread props is a way to get multiple prop keys of an object without having to write one by one

//Most often if you spread an object it is because you want to pass most or all of it to the component and not just one or two props.
//IMPORTANT: can only take primary keys of objects, if nested key, cannot be taken by spread props need to declare separetely

//for the code under there is an API file with users, these users contain object keys of id, name, phone,etc
//example component file, creating component+props
export function Component({ name, phone }) {
  return (
    <li>
      {/* if you declare a prop here that doesnt exist as a key on the API it just wont be returned */}
      {name}, {phone}
    </li>
  );
}
//original app file
import { Component } from "./Component"; //importing the component function
import users from "./users.json"; //importing the users API

function App() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((person) => {
          //mapping all the users into separate person
          console.log(person);
          return <Component key={person.id} {...person} />; // {...person} tells to match every prop the Component is returning with the keys "person" object mapped has.
          //essentially by spreading {...person} it takes every single property that matchs with users API and pass it to User Componenet
        })}
      </ul>
    </>
  );
}

//-------------------------- 13. DECLARATIVE VS IMPERATIVE --------------------//
//React is declarative //JS im imperative
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
//how to import things that aren't normal javascript or jsx
//on the main file of your code can use keyword 'import'

//example for impoting CSS , css need to be imported on the Main file where the restrictMode is
// import "./styles.css"  (it won't be imported on html head)

//example for importing Json
//import user from "./user.json"
//(then need to declare further if want to use the string eg. {JSON.stringfy{user}}  )

//example for importing image
//import img from "./NameOfFile.png"
//using the image
{
  /* <img src={img}></img>; */
}

//-------------------------- 17. useState Hooks --------------------//
//state hook is data that can change over time, will be updated, and whenever that data changes you wanna re-render your component
//-- hooks will always be placed first on the code above the return
//remember to import hook in order to use it import {use}

//breaking down a useState
function App() {
  //declaring the useState as a variable - name of the variable is like an array with 2 values
  //the second index, setAge is the one to update the age value, it can be any variable name but standart is the update variable start with keyword set
  const [age, setAge] = useState(30); //default value is set to 30
  console.log("current", age); // current 30
  //function to update the value, setting age to 31 using setAge, this will override default value
  function newAge() {
    setAge(31);
  }
  //onclick age will turn to 27, when update state variable it reruns the entire componenet > function App() with the new value set
  //calling newAge function does NOT need the curly brackets otherwise will set value of onClick to what newAge returns.
  return <h2 onClick={newAge}> Next age {age} </h2>; //Next age 31
}

//changing 2 values at the same time using useState
function App() {
  const [name, setName] = useState("Leticia");
  const [year, setYear] = useState(); //no default value
  const [hobby, setHobby] = useState();

  function changeName() {
    setName("Leti");
    setYear(1997);
    setHobby("swimming");
  }
  return (
    <h1 onClick={changeName}>
      {" "}
      My nickname is: {name}, I was born in {year}, my hobby is: {hobby}
      {/* age and hobby values will not show up on page until h1 is clicked, because they do NOT have a default value*/}
    </h1>
  );
}

//more complex things of useState

//if passing useState value as function to return this value can slow down app
function App() {
  const [age, setAge] = useState(getter());
  function getter() {
    //really slow code
    console.log("I will run every time the component re-renders");
    return 30;
  }
  //function will slow down the app since everytime state changes the getter will be called with all slow code inside
}

//if you a pass a function to useState instead of a value, it gets the value of the function once and then never run it again
function App() {
  const [age, setAge] = useState(() => {
    return 30;
  });
}
//same if pass a function as value of useState and not call it with ()
function App() {
  const [age, setAge] = useState(getter); // //if using getter() it will call the function every time it re-renders
  function getter() {
    console.log("hi"); //will log only on mount bcs no ()
    return 30; //default age is only on mount
  }

  function newAge() {
    console.log("mudei"); //will log everytime age is clicked
    return setAge(28);
  }
  return (
    <>
      <h2 onClick={newAge}>{age}</h2> {/* 28  */}
    </>
  );
}

//if you are setting a value that depends on the previous or the setAge value to change, need to use the function version of set useState
// in other words: anytime you need the NEW state to update based on the current setState you should always use the function version.
//However, in case you don't care about it or new value is not dependent on the previous value, can set value normally without function
function newAge() {
  //this won't work
  setAge(age + 1); // here it works , will make age + 1
  setAge(age + 1); // trying to set a value that depends on the previous change to add +1 (this won't work)

  //values will have to be set as functions
  //function will take the current value and add one more
  setAge((current) => {
    return current + 1;
  });
  //this function will take the current latest value and add one more
  setAge((current) => {
    return current + 1;
  });
}

//understanding how the useState is being updated
//*The new value from useState doesn't take effect unitl next render
function Home() {
  const [count, setCount] = useState(0);
  function counter() {
    //function running
    console.log(count); //0
    setCount(count + 1); //updated count variable, actually updating value only for the next render
    console.log(count); //0
    //the reason for 0 twice is the new value won't be assigned to the State variable yet
    //it updates the next value for the next time the component runs
    //until the next time component re-renders value will stay the same even tho it has changed on the interface
  }
  return <div onClick={counter}>{count}</div>;
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

//creating a component with the entire logic and useState
import { useState } from "react";
export function AddCounter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((current) => current + 1);
    //orrr
    // return setCounter(count + 1); //same result
  }

  return <h1 onClick={handleClick}>{counter}</h1>;
}
//only rendering on the original file
import { AddCounter } from "./AddCounter";
function App() {
  return <AddCounter />;
}

//can also pass an object inside useState
export default function Home() {
  const [person, setPerson] = useState({
    name: "Leticia",
    year: 1997,
    nationality: "Brazilian",
  });

  function change() {
    //need to create a brand new object to change values
    setPerson({ name: "Fernanda", year: 1993 });
    // if you don't redeclare the object key here, it wont be returned anything
    //because this syntax is creating a brand new object

    //returning the 'same' object and changing only some keys
    setPerson((currentobj) => {
      return { ...currentobj, name: "Fernanda", year: 1993 };
    });
  }
  return (
    <h1 onClick={change}>
      Hello my name is {person.name}, I am {person.nationality} and was born in{" "}
      {person.year}.
    </h1>
  );
}

//-------------------------- 19. INPUT EVENT LISTENERS --------------------//
//event listeners on the input
//need to always use along syntax onChange={(e) => setName(e.target.value)} so react has control of the input

//onChange event fires after you type any caracter in the input
function App() {
  const [name, setName] = useState("Leticia");
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    // onclick, the setName will be the e.target.value so that will also be new value={name}
  );
}
//if you want to skip code "onChange" can set a defaultValue, however it won't be updated on the state variable (react has no control)

//-------------------------- 24.COMPONENT LIFECYCLE --------------------//
//Terminology
//1.mountain
//2.rerender = when anything changes on code
//3. unmountain = when something is removed from code

//note: the only way a component can be re-rendered is when the state of that component or it's parent changes.

//-------------------------- 25.useEffect Hook --------------------//
//useEffect is a function that takes a function and will run every time the App rerenders if no dependency array declared
//example of use effect with no dependency array
function App() {
  useEffect(() => {
    console.log("here");
  });
} //every refresh logs "here"

//the second parameter that function useEffect takes is an array with value [variable],anytime value of variable declared on this array changes then it will rerun useEffect
//dependency array can take more than one value, if dependency array is empty it will run only on mount
function App() {
  const [name, setName] = useState("Leticia");
  useEffect(() => {
    console.log("here");
  }, [name]); //will log here everytime [name] is updated

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

//EXERCISE: useEffect will fire everytime only the age has changed,console.log useEffect + value changed
function App() {
  const [name, setName] = useState("Leticia");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age has changed", age); //age = logging out the current value already updated
  }, [age]); // [age] saying what change of value will trigger useEffect to rerun

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
  console.log("mount");
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
//example removing the event listener everytime time the useEffect reruns
//result: it won't log every little change on an input but final result when user click outside input
//essentially removing the last run and updating it with most recent run
//to achieve this need to set return function inside useEffect after 1st function
function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };

    document.addEventListener("click", handler);

    //on rerun return will run first before code above,this is considered the cleanup function
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [name]);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

//-------------------------- 31. STRICT MODE --------------------//
//strict mode is good for detecting and checking hidden bugs
// using strict mode, the component will
//1. mount
//2.unmount simulation
//3. then mount it again
//this is only a development tool to try detect hidden bugs on the code
//when deplying the site strict mode will not run

//recommended to keep strict mode enable
//it is possible to remove the second log from strcit mode
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
//example simple fetching the API
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((APIresponse) => APIresponse.json())
    .then((data) => console.log(data)); //
}, []); //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

//basic useEffect fetch without catching errors
//IMPORTANT!!!!  Wait response from fetch to log API, catching an error and avoiding double mount due to strict mode
//when fetching need to make sure you have a loading state to track the API fetch
// otherwise it can return undefined if API hasn't completely returned yet
function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((u) => JSON.stringify(u))
      .then((data) => setUsers(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let jsx;
  if (loading) {
    jsx = <div> Loading...</div>;
  } else {
    jsx = users;
  }
  return (
    <div>
      <h1>Users</h1>
      <h3> {jsx}</h3>
    </div>
  );
}

//fetching API and catching errors
function App() {
  //Setting useState to put the api data inside this variable
  const [users, setUsers] = useState();
  //creating the loading to track API return and avoid undefined return
  const [loading, setLoading] = useState(true);
  //creating the error useState
  const [error, setError] = useState();

  //fetching the API
  useEffect(() => {
    setLoading(true); //loading set to true before fetching (because it starts loading)
    setError(undefined); //can declare this to make sure error is initially empty
    const controller = new AbortController(); // object that allows you to abort one or more Web requests when desired.

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 200) {
          //checking to see if response is true, .status === 200 means the request was successful
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
//-----------------------------------------------------------
//SAME way to fetch but using a async / await | try / catch approach
// code from course
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
    //cleanup to abort fetch request and avoid fetching twice
    return () => {
      controller.abort();
    };
  }, []);

  //from down here same code as previous example
}

//-------------------------- 33. REACT DEV TOOLS --------------------//
//https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764771-advanced-components/5836199-33-react-dev-tools

//-------------------------- 34. CONDITIONAL RENDERING --------------------//
//rendering something based on other type of input
//using ternary operator instead of if statement

//if statement
let favoriteNumber = 16;
let jsx;
if (favoriteNumber !== null) {
  jsx = `My number is ${favoriteNumber}`;
}
//short circuiting, will return the last thing inside statement if last statement is true
//basically saying if there is a value(true) for favoriteNumber continue, if not(false) then it returns
{
  favoriteNumber !== null && `My number is ${favoriteNumber}`;
}
{
  return favoriteNumber < 5 && `My favorite number is ${favoriteNumber}`;
}

//can also declare based on favoriteNumber value, inline if statement (ternary operator)
//syntax --- variable/statement to check ? code if true : code if false
export function numberChecker({ favoriteNumber }) {
  favoriteNumber != null
    ? (favoriteNumber = <h1>my favorite number is {favoriteNumber}</h1>)
    : (favoriteNumber = null);

  return favoriteNumber;
}

//another example
{
  favoriteNumber > 5
    ? `My fav number big ${favoriteNumber}`
    : `My fav number small ${favoriteNumber}`;
}
//can return anything doesnt necessary has to be a string, reccomended to not get too complex code inside
{
  favoriteNumber > 5 ? (
    <div>
      This is <h1>big</h1>
    </div>
  ) : (
    `My fav number small ${favoriteNumber}`
  );
}

//-------------------------- 35. RENDERING LISTS--------------------//
//possibility of rendering elements that are inside an array
function App() {
  //this is a usestate that holds an array of objects
  //crypto.randomUUID() generate a random unique ID
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  //function to create new object and append to useState
  function addItem() {
    setItems((currentItems) => {
      //and return prev objects plus the new one created
      return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems];
    });
  }
  return (
    <div>
      <button onClick={addItem}>Add new Item</button>{" "}
      {items.map((item) => {
        //mapping the items and returning name + input of each object
        //each item HAS to have a key, in order to input be tied to that item only
        return (
          <div key={item.id}>
            {item.name}
            <input type="text" />
          </div>
        );
      })}
    </div>
  );
}

//TIP: if new Item + input is a separate component to be imported, the key has to be set when calling the component to render
{
  items.map((item) => {
    return (
      <div>
        <ComponentItem key={item.id} />
      </div>
    );
  });
}

//-------------------------- 36. FRAGMENTS --------------------//
//a way react implemented to return multiple elements without having to wrap them inside html element like a div
//fragment is an empty element that allows to wrap multiple elements inside
{
  <div>
    <button>Click</button>
    <input type="text"></input>
  </div>;
}
//using fragments
{
  <>
    <button>Click</button>
    <input type="text"></input>
  </>;
}

//if you need to declare a key like previous lesson  key={item.id} the empty fragment cannot take it
//need to use element as React.Fragment and import "React" on file
// can also write only Fragment and import Fragment
{
  <React.Fragment key={item.id}>
    <button>Click</button>
    <input type="text"></input>
  </React.Fragment>;
}
s;
//----------------------- 40. RENDER RAW HTML --------------------//
//a way to render html that is on a string format inside react

//html in a string to be rendered
const CUSTOM_URL = `<h1>Leticia Carolina Azevedo</h1>
<div>this is my name</div>`;

function App() {
  //syntax dangerouslySetInnerHTML={{ __html: variable }}
  return <div dangerouslySetInnerHTML={{ __html: CUSTOM_URL }}> </div>;
}

//NOTES: this is not very common to use
//syntax is dangerous bcs if you have any user input on the stringified html you open room for "cross site scripting" and the site to be hacked
