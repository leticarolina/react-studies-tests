import { useState } from "react";

//possibility of rendering elements that are inside an array
export function List() {
  //this is a usestate that holds an array of objects
  //crypto.randomUUID() generate a random unique ID
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "First Item" },
    { id: crypto.randomUUID(), name: "Second Item" },
  ]);
  const [text, setText] = useState("");

  //function to create new object and append to useState
  //and return prev objects plus the new one created

  function addItem() {
    setItems((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), name: text }];
    });
  }

  return (
    <div>
      <input
        className="bg-blue-300 mx-2"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addItem} className="bg-slate-300">
        Add New Item
      </button>
      {/* mapping the items and returning name + input of each object
        each item HAS to have a key, in order to input be tied to that item only */}
      <ol>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
}
