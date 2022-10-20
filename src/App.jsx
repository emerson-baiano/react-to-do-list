import { useState } from "react";
import TodoItem from "./Components/TodoItem";
import "./App.css";

function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [actions, setActions] = useState({ edit: false, item: "" });

  const editTodoItem = () => {
    if (!inputTodo) return alert("Please write something");
    let localTodoList = [...todoList];
    let index = localTodoList.findIndex((item) => {
      return actions.item === item;
    });
    localTodoList[index] = inputTodo;
    setTodoList(localTodoList);
    setInputTodo("");
    return setActions({ ...actions, ["edit"]: !actions["edit"], ["item"]: "" });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    return setInputTodo(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputTodo) return alert("Please write something!");
    const checkDuplicated = todoList.find((item) => {
      return inputTodo === item;
    });
    if (checkDuplicated) return alert("Item already exists!");
    setTodoList([...todoList, inputTodo]);
    return setInputTodo("");
  };

  const handleEdit = (e) => {
    const text = e.target.parentElement.parentElement.childNodes[0].textContent;
    setActions({ ...actions, ["edit"]: !actions["edit"], ["item"]: text });
    console.log(text);
    if (actions.edit) return setInputTodo("");
    return setInputTodo(text);
  };

  const handleDelete = (e) => {
    const text = e.target.parentElement.parentElement.childNodes[0].textContent;
    console.log(text);
    let localTodoList = [...todoList];
    let index = localTodoList.findIndex((item) => {
      return text === item;
    });
    localTodoList.splice(index, 1);
    return setTodoList(localTodoList);
  };

  return (
    <div className="App">
      <h1>To do List</h1>
      <div className="">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          value={inputTodo}
          onChange={handleChange}
        />
        <button onClick={actions.edit ? editTodoItem : handleClick}>
          {actions.edit ? "EDIT" : "ADD"}
        </button>
      </div>
      <ul className="todo__list">
        {todoList &&
          todoList.map((item, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                item={item}
                edit={actions.edit}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default App;
