export function TodoComponent({ todo, deleteTodo }) {
  return (
    <div>
      <li class="list-item">
        <label className="list-item-label">
          <input type="checkbox" data-list-item-checkbox />
          <span data-list-item-text>{todo}</span>
        </label>
        <button
          data-button-delete
          onClick={() => {
            deleteTodo();
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}
