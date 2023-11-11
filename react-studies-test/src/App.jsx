import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return <div>{width}</div>;
}

//EXERCISE: create component called Counter
//have a state for a counter that starts with 0
//when you click the number increments by 1

export default App;
