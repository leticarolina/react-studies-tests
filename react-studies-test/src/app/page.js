"use client"; // This is a client component  👈🏽

import { UserList } from "@/components/UserList";
//1. import hook
import { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState([]);

  function AddNewTodo() {
    setTodo((current) => [...current, { name: todo.name }]);
  }
  return (
    <>
      <ul id="list">
        {todo.map((task) => {
          return (
            <li class="list-item">
              <label className="list-item-label">
                <input type="checkbox" data-list-item-checkbox />
                <span data-list-item-text>{todo}</span>
              </label>
              <button data-button-delete>Delete</button>
            </li>
          );
        })}
      </ul>
      <br></br>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={AddNewTodo}>Add Todo</button>
      </div>
    </>
  );
}
