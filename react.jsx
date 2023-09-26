//to run Vite need to declare on terminal
//npm create vite@latest
//Done. Now run:
// cd vite-project
// npm install
// npm run dev
//to start vite after run
//npm run dev > will start vite

//--------------------- 9. THINKING IN COMPONENTS----------------//
//https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764768-basic-components/5598791-09-thinking-in-components

//-------------------------- 10. JSX BASICS --------------------//
//jsx is a different syntax of writing html code to your page

//DIFFERENCES BETWEEN HTML AND JSX SYNTAX
//1. everything will be CamelCase instead of using-dash, unless dealing with some data attributes or aria(?)

// 2. the word class is used for actually creating a class, we cant use the class keywork need to use ClassName instead
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
//4. whenever you have bracea inside jsx will execute javascript code
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
//if you're passing more than one element like case above with label/input it HAS to be wrapped on a <div> or You can wrap multiple children in <></> to avoid extra nodes like divs.
//things you can return from a component string, number, array
// undefined, null and false inside { } wont return anything on jsx, can be placeholder

//-------------------------- 11. CREATING COMPONENTS --------------------//
//components should start with capital letter and be CamelCase

/*function component 
1.create a new File, name the file the same as component name
2. function ComponentName () {
  return ()
}
3. need to export code from that file and import to the main one
4. put on the code as < ComponentName /> 


*/

//and class component
