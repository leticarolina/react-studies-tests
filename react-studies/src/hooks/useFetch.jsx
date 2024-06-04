import { useEffect, useState } from "react";

//my custom hook to fetch, code on main file
// const { data, isLoading, isError } = useFetch(url);
//now I can create a logic for each of these values and then return them { data, isLoading, isError }

export function useFetch(url, options) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        // In case the error caught is due to the Abort controller,do not set Error to true
        if (e.name === "AbortError") return;
        setIsError(true);
      })
      .finally(() => {
        // in case the fetch was aborted, do not set IsLoading to false
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    //creating return to abort a request when another fetch is requested on top
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
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
  const { data, isLoading, isError } = useFetch(url);

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
