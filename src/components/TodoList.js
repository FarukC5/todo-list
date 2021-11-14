import "../index.css";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [inputRequired, setInputRequired] = useState({});

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    };
    if (todo !== "") {
      setTodos([...todos].concat(newTodo));
      setInputRequired({
        todoError: "",
      });
    } else {
      setInputRequired({
        todoError: "Enter a task",
      });
    }
    return setTodo("");
  }

  return (
    <div className="render-1">
     <header>
      <form id="input-1" onSubmit={handleSubmit}>
        <input 
          placeholder="Enter task"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
        <span>{inputRequired.todoError}</span> 
      <TodoItem todos={todos} setTodos={setTodos} /> 
    </header>   
    </div>

  );
}

export default TodoList;


