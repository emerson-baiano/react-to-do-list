import { memo } from "react";

function List({ children }) {
  return <ul className="todo__list">{children}</ul>;
}

export default memo(List);
