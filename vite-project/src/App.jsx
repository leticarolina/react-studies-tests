import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div>
      <TodoList isComplete>Leticia Azevedo</TodoList>
      <TodoList isComplete={false}>Fernanda Santos</TodoList>
    </div>
  );
}
export default App;
