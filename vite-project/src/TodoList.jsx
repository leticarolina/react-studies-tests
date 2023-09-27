export function TodoList({ children, isComplete }) {
  return (
    <div>
      <label>{children}</label>
      <input type="checkbox" checked={isComplete}></input>
    </div>
  );
}
