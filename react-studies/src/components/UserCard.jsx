export function UserCard({ name, year, phone, address }) {
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{year}</div>
        <div className="label">Phone:</div>
        <div>{phone}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  );
}

//main file when calling component
// return (
//   <UserCard
//     name={user.name}
//     year={user.year}
//     phone={user.phone}
//     address={user.address}
//   />
// );

//The reason to passing values as props into the component is just to practice passing props.
// Could also import the user.json here
//import user from "/src/assets/user.json";
//2. then declare the value as user.address directly in the component
//so the UserCard can be called in main file as-is.
