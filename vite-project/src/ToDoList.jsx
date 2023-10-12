export function ToDoList({ children, isComplete }) {
  return (
    <div>
      <label htmlFor="boo">{children}</label>
      <input id="boo" type="checkbox" checked={isComplete}></input>
    </div>
  );
}
