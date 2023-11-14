import { useState, useEffect } from "react";
import { Counter } from "./Counter";

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

//EXERCISE: create component called Counter
//have a state for a counter that starts with 0
//when you click the number increments by 1

export default App;
