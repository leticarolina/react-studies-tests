//1. import hook

import { userAgent } from "next/server";

export function UserList({ name, email, phone, username }) {
  return (
    <li>
      {name}, {email}, {phone}, {username}
    </li>
  );
}

// only the user was the component
//code on main file
export default function Home() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data); //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        setUsers(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-pink-400">User List</h1>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        <ul>
          {users.map((user) => {
            console.log(user); //{id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
            return <UserList key={user.id} {...user} />;
          })}
        </ul>
      )}
    </>
  );
}
