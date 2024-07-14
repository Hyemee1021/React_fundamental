import React from "react";
import useTodos from "./presenter/useTodos";

const Todo = () => {
  const { list, addList, toggleTodo, delteTodo } = useTodos();
  return <div className=" m-3 p-4 mx-auto max-w-lg bg-slate-200">Todo</div>;
};
export default Todo;
