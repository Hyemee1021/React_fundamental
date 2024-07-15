// TodoContext.js

import React, { createContext, useState } from "react";

// Step 1: Create a new context using React.createContext().
//creates a context object. This object will be used to share the state and functions between components.
//i will use TodoContext- in useContext()
const TodoContext = createContext();

// Step 2: Create a provider component that will wrap your application and State Management:
export const TodoProvider = ({ children }) => {
  // Step 3: Define state using useState. Here, 'todos' will hold the list of to-dos.
  const [list, setList] = useState([]);

  // Step 4: Define a function 'addTodo' to add a new to-do item to the list.
  //creates a new to-do item with a unique Id, the message text, and an initial completed state set to false. It then updates the list.
  const addList = (message) => {
    const newList = {
      Id: list.length + 1,
      message,
      completed: false,
    };
    setList((prevList) => [...prevList, newList]);
  };

  //Function to Toggle To-Do Completion
  const toggleTodo = (Id) => {
    setList((prevList) =>
      prevList.map((todo) =>
        todo.Id === Id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //completed: !todo.completed: Updates the completed status to its opposite. ! is the logical NOT operator, which flips true to false and vice versa.

  // Function to Delete a To-Do:

  const delteTodo = (Id) => {
    setList((prevList) => prevList.filter((todo) => todo.Id !== Id));
  };

  //function to change
  // Provide Context Values:
  return (
    <TodoContext.Provider value={{ toggleTodo, addList, delteTodo, list }}>
      {children}
    </TodoContext.Provider>
  );
};

// Export Context: exports the TodoContext so it can be consumed by other components.
export default TodoContext;
