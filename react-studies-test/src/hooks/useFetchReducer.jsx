import { actionAsyncStorage } from "next/dist/client/components/action-async-storage.external";
import { useEffect, useReducer, useState } from "react";

//my custom hook to fetch
//code on main file const { data, isLoading, isError } = useFetch(url);
//using useReducer instead of useState

//creating variable to help defining actions
const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        isError: false,
        isLoading: true,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        data: action.payload,
        isError: false,
        isLoading: false,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

export function useFetchReducer(url, options) {
  const [state, dispatch] = useReducer(reducer, {
    isError: false,
    isLoading: true,
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_START });
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
      })
      .catch((e) => {
        // In case the error caught is due to the Abort controller,do not set Error to true
        if (e.name === "AbortError") return;
        dispatch({ type: ACTIONS.FETCH_ERROR });
      });

    //creating return to abort a request when another fetch is requested on top
    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}

// CODE ON THE MAIN FILE FOR HOOK
// CODE ON THE MAIN FILE
// CODE ON THE MAIN FILE
const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/usersddd",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};

export default function Home() {
  //creating a useState to store the urls, on input click the url will change
  const [url, setUrl] = useState(URLS.USERS);

  //calling the hook on main file, all these values are the ones custom hook will return
  const { data, isLoading, isError } = useFetchReducer(url);

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error Fail to Fetch</h1>
      ) : (
        <div>{JSON.stringify(data, null, 2)}</div>
      )}
    </>
  );
}
