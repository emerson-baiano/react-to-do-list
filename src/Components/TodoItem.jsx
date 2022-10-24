import React from "react";

export default function TodoItem({ item, handleEdit, handleDelete, edit, id }) {
  return (
    <li id={id} key={`todo-${id}`}>
      {item.todo}
      <div className="todo__list--btn">
        <span className="edit__btn" onClick={() => handleEdit(item)}>
          {edit.item === item.todo && edit.edit ? "Cancel" : "Edit"}
        </span>
        <span className="delete__btn" onClick={() => handleDelete(item)}>
          Delete
        </span>
      </div>
    </li>
  );
}
