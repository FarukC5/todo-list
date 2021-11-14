import "../index.css";

function TodoItem({ todos, setTodos }) {
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <div className="list">
      {todos.map((todo) => {
        return (
          <div className="items" key={todo.id}>
            <label className="item" 
                  onClick={() => deleteTodo(todo.id)}>
              <p>{todo.text}</p>
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default TodoItem;

