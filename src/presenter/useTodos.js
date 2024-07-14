// useTodos.js

import { useContext } from "react";
import TodoContext from "../components/TodoContext";

// Create a custom hook 'useTodos' to consume the TodoContext and access its context value.
const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export default useTodos;
