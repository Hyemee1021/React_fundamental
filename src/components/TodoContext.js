// TodoContext.js

import React, { useState } from "react";

// Step 1: Create a new context using React.createContext().
const TodoContext = React.createContext();

// Step 2: Create a provider component that will wrap your application and manage the state.
export const TodoProvider = ({ children }) => {
  // Step 3: Define state using useState. Here, 'todos' will hold the list of to-dos.
  const [todos, setTodos] = useState([]);

  // Step 4: Define a function 'addTodo' to add a new to-do item to the list.
  const addTodo = (todoText) => {
    // Create a new to-do object with a unique ID, provided text, and initial completion state.
    const newTodo = { id: todos.length + 1, text: todoText, completed: false };
    // Use setTodos to update the 'todos' state by appending the new to-do to the existing list.
    setTodos([...todos, newTodo]);
  };

  // Step 5: Define a function 'toggleTodo' to toggle the completion state of a to-do item.
  const toggleTodo = (todoId) => {
    // Use map to create a new array of todos where the completed status of the specific todoId is toggled.
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    // Update the 'todos' state with the new array that includes the toggled to-do item.
    setTodos(updatedTodos);
  };

  // Step 6: Define a function 'deleteTodo' to remove a to-do item from the list.
  const deleteTodo = (todoId) => {
    // Use filter to create a new array of todos excluding the one with the specified todoId.
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // Update the 'todos' state with the new array that excludes the deleted to-do item.
    setTodos(updatedTodos);
  };

  // Step 7: Render the TodoContext.Provider, providing 'todos', 'addTodo', 'toggleTodo', and 'deleteTodo' as the context value.
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {/* Render the child components that are wrapped by TodoProvider. */}
      {children}
    </TodoContext.Provider>
  );
};

// Step 8: Export TodoContext for use in other components.
export default TodoContext;
