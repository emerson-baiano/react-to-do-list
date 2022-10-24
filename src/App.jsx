import { useState } from "react";
import TodoItem from "./Components/TodoItem";
import List from "./Components/List";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState({ todo: "", id: "" });
  const [todoList, setTodoList] = useState([]);
  const [actions, setActions] = useState({ edit: false, item: "" });

  const editTodoItem = () => {
    if (!inputTodo.todo) return alert("Please write something");
    const checkDuplicated = todoList.find((item) => {
      return inputTodo.todo === item.todo;
    });
    if (checkDuplicated) return alert("Item already exists!");

    setTodoList((prev) =>
      prev.map((item) => (item === actions.item ? (item = inputTodo) : item))
    );
    setInputTodo({ todo: "", id: "" });
    return setActions({ ...actions, ["edit"]: !actions["edit"], ["item"]: "" });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    return setInputTodo(
      actions.edit
        ? { todo: value, id: actions.item.id }
        : { todo: value, id: todoList.length + 1 }
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputTodo) return alert("Please write something!");
    const checkDuplicated = todoList.find((item) => {
      return inputTodo.todo === item.todo;
    });
    if (checkDuplicated) return alert("Item already exists!");
    setTodoList((prev) => [...prev, inputTodo]);
    return setInputTodo({ todo: "", id: "" });
  };

  const handleEdit = (item) => {
    console.log(item);
    setActions({ ...actions, ["edit"]: !actions["edit"], ["item"]: item });
    if (actions.edit) return setInputTodo({ todo: "", id: "" });
    return setInputTodo(item);
  };

  const handleDelete = (item) => {
    return setTodoList((prev) => prev.filter((items) => items !== item));
  };

  return (
    <div className="App">
      <h1>To do List</h1>
      <div className="">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          value={inputTodo.todo}
          onChange={handleChange}
        />
        <button onClick={actions.edit ? editTodoItem : handleClick}>
          {actions.edit ? "EDIT" : "ADD"}
        </button>
      </div>
      <List>
        {todoList &&
          todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                item={item}
                edit={actions}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
      </List>
    </div>
  );
}

export default App;
