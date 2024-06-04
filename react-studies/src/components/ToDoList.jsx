export function ToDoList({ children, isComplate }) {
  return (
    <div>
      <label htmlFor="todo">{children}</label>
      <input type="checkbox" checked={isComplate} />
    </div>
  );
}
