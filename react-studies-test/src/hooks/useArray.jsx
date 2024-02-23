import { useState, useCallback } from "react";

export function useArray(INITIAL_ARRAY) {
  const [array, setArray] = useState(INITIAL_ARRAY);

  const set = useCallback(() => {
    setArray([4, 5, 6]);
  }, []);

  const push = useCallback((number) => {
    setArray((currentArray) => [...currentArray, number]);
  }, []);

  function replace(index, replacer) {
    setArray((currentArray) => {
      currentArray.map((element) => {
        element[index] = replacer;
        return element;
      });
    });
  }
  function filter(callback) {
    setArray((currentArray) => {
      return currentArray.filter(callback);
    });
  }

  function remove(index) {
    setArray((currentArray) => {
      return currentArray[index].remove();
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_ARRAY);
  }

  return { array, set, push, replace, filter, remove, clear, reset };
}
