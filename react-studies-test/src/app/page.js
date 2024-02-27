"use client"; // This is a client component  👈🏽
import {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import { useFetchReducer } from "@/hooks/useFetchReducer";

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
