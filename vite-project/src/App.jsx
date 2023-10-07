import { useState, useEffect } from "react";

function App() {
  //this is an array
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  //fucntion to create new object
  function addItem() {
    setItems((currentItems) => {
      //and return prev objects plus the new one created
      return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems];
    });
  }
  return (
    <>
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
    </>
  );
}

export default App;
