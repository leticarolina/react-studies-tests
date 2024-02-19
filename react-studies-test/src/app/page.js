"use client"; // This is a client component  👈🏽
import { TodoComponent } from "@/components/TodoComponent";
import { UserList } from "@/components/UserList";
//1. import hook
import { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  function AddNewTodo() {
    setTodo((current) => [
      ...current,
      { name: "Vvv", id: crypto.randomUUID() },
    ]);
  }

  function deleteTodo(id) {
    setTodo((current) => {
      current.filter((t) => {
        return t != id;
      });
    });
  }
  return (
    <>
      <ul id="list">
        {todo != null &&
          todo.map((task) => {
            return (
              <TodoComponent
                key={task.name}
                todo={task.name}
                deleteTodo={deleteTodo(task.id)}
              />
            );
          })}
      </ul>
      <br></br>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={AddNewTodo}>Add Todo</button>
      </div>
    </>
  );
}
