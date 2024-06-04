import { useState, useEffect } from "react";

export function FetchingUsers() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  let content;

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error("Failed to fetch");
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    content = "Loading...";
  } else if (error != null) {
    content = "The error I have set: " + error;
  } else {
    content = JSON.stringify(users);
  }

  return <h3>{content}</h3>;
}
