import { useState } from "react";
import { render } from "react-dom";
import { ToDoList } from "./ToDoList";

//EXERCISE - create TodoListItem Componenet
//props: will be children with name, isComplete boolean
//render out checkbox, (checked if complete)
//label will be (children value)

function App() {
  return (
    <>
      <ToDoList isComplete>Leticia</ToDoList>
      <ToDoList>Hi</ToDoList>
    </>
  );
}

export default App;
