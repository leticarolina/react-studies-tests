//EXERCISE
// Create a new function component that has state for name and age
// Create a text input that when updated will update the name state
// Create a plus and minus button that will update the age state and display the state between the two buttons
// Display the string My name is {name} and I am {age} years old in your JSX

import { useEffect, useState } from "react";
export function NameAndAge() {
  const [name, setName] = useState("");
  const [year, setYear] = useState(1997);

  function addOne() {
    return setYear(year + 1);
  }

  useEffect(() => {
    document.title = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addOne}>+</button>
      {year}
      <button
        onClick={() => {
          setYear((currentYear) => currentYear - 1);
        }}
      >
        -
      </button>

      <h3>
        My name is {name} and I was born in {year}.
      </h3>
    </div>
  );
}
