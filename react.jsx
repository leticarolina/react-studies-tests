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
// undefined, null and false inside { } wont return anything on jsx, can be placeholder

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
