import { useState, useCallback } from "react";

export function useArray(INITIAL_ARRAY) {
  const [array, setArray] = useState(INITIAL_ARRAY);

  const set = useCallback(() => {
    setArray([4, 5, 6]);
  }, []);

  const push = useCallback((number) => {
    setArray((currentArray) => [...currentArray, number]);
  }, []);

  const replace = useCallback((index, replacer) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        replacer,
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((currentArray) => {
      return currentArray.filter(callback);
    });
  });

  const remove = useCallback((index) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        ...currentArray.slice(index + 1),
      ];
    });
  });

  const clear = useCallback(() => {
    setArray([]);
  });

  const reset = useCallback(() => {
    setArray(INITIAL_ARRAY);
  });

  return { array, set, push, replace, filter, remove, clear, reset };
}

//code on main file
//code on main file
//code on main file

const INITIAL_ARRAY = [1, 2, 3];

export default function Home() {
  const { array, set, push, replace, filter, remove, clear, reset } =
    useArray(INITIAL_ARRAY);

  return (
    <>
      <div>{array.join(", ")}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "flex-start",
          marginTop: "1rem",
        }}
      >
        <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>
        <button onClick={() => push(4)}>Push 4</button>
        <button onClick={() => replace(1, 9)}>
          Replace the second element with 9
        </button>
        <button onClick={() => filter((n) => n < 3)}>
          Keep numbers less than 3
        </button>
        <button onClick={() => remove(1)}>Remove second element</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
