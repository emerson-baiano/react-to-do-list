import React from "react";

export default function TodoItem({ item, handleEdit, handleDelete, edit, id }) {
  return (
    <li id={id}>
      {item}
      <div className="todo__list--btn">
        <span className="edit__btn" onClick={handleEdit}>
          {edit ? "Cancel" : "Edit"}
        </span>
        <span className="delete__btn" onClick={handleDelete}>
          Delete
        </span>
      </div>
    </li>
  );
}
