import { useState, useEffect } from "react";
import { render } from "react-dom";
import { Component } from "./Component";
import users from "./users.json";

function App() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((person) => {
          console.log(person);
          return <Component key={person.id} {...person} />;
        })}
      </ul>
    </>
  );
}

export default App;
