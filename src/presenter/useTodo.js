// useTodos.js

import { useContext } from "react";
import TodoContext from "./TodoContext";

// Create a custom hook 'useTodos' to consume the TodoContext and access its context value.
export const useTodos = () => {
  return useContext(TodoContext);
};
