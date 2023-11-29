export function IndividualTodo({ complete, name, id, deleteTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input type="checkbox" checked={complete} data-list-item-checkbox />
        <span data-list-item-text>{name}</span>
      </label>
      <button
        data-button-delete
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
