import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, getItem } = useContext(productContext);

  useEffect(() => {
    getItem();
  }, []);
  return (
    <div>
      {todos.map((elem) => (
        <TodoItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default TodoList;
