//TODO LIST PROJECT ADD,DELETE AND COMPLETE A TODO

//Component
export function TodoComponent({ name, id, completed, toggleTodo, deleteTodo }) {
  return (
    <div>
      <li className="list-item">
        <label className="list-item-label">
          <input
            type="checkbox"
            data-list-item-checkbox
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
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
    </div>
  );
}

//code on main file
export default function Home() {
  const [todo, setTodo] = useState([]);
  const [newTodoName, setNewTodoName] = useState("");

  function AddNewTodo() {
    if (newTodoName === "") return;

    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { name: newTodoName, id: crypto.randomUUID(), completed: false },
      ];
    });

    setNewTodoName("");
  }

  function deleteTodo(id) {
    setTodo((current) => {
      return current.filter((t) => t.id != id);
    });
  }

  function toggleTodo(todoId, completed) {
    setTodo((currentTodos) => {
      return currentTodos.map((todo) => {
        //checking which todo will be equal to the prop passed todoId, This is used to find the specific todo item that needs to be updated.
        // after finding will return the same object { ...todo, completed } but with its completed property updated to the value passed to the function.
        //This syntax creates a copy of the todo object with the completed property updated. It's a way of creating a new object based on an existing one with some modifications.
        if (todo.id === todoId) {
          return { ...todo, completed: completed };
        }
        //here need to return the rest of todos
        //If there were no return todo; statement at the end of the function, it would only return a new array containing the todo that matches the todoId
        return todo;
      });
    });
  }
  //object enhanced literals
  //  in the line return { ...todo, completed };, because the variable completed has the same name as the property you want to assign it to in the object,
  //   you can simply write completed once, if the key and variable are the same doesn't need to write it twice like firstName: firstName

  return (
    <>
      <ul id="list">
        {todo != null &&
          todo.map((task) => {
            return (
              <TodoComponent
                key={task.id}
                {...task}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </ul>
      <br></br>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          // common syntax to pass an id along with e.target, when you want only one thing to change inside a component
          onChange={(e) => {
            setNewTodoName(e.target.value);
          }}
        />
        <button onClick={AddNewTodo}>Add Todo</button>
      </div>
    </>
  );
}
