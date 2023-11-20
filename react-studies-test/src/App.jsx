import { useState, useEffect, useRef, useMemo } from "react";
import { Counter } from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  // A function that doubles the count value
  const doubleCount = useMemo(() => {
    console.log("Recalculating doubleCount...");
    return count * 2;
  }, [count]); // Dependency: 'count'

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double the count (memoized): {doubleCount}</p>
      {/* when button is clicked the count will add +1 and since count changed the useMemo will run too  */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
