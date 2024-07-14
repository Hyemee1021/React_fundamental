import React, { useState } from "react";
import useTodos from "./presenter/useTodos";
import { Button } from "@mui/material";

const Todo = () => {
  const { list, addList, toggleTodo, delteTodo } = useTodos();
  console.log(list);
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  console.log(message);
  const thingTodo = (e) => {
    setMessage(e.target.value);
  };

  //function
  const handleAddClick = () => {
    addList(message);
    setMessage("");
    setFeedback("Todo added successfully!");
    setTimeout(() => setFeedback(""), 3000);
  };
  return (
    <div className=" m-3 p-4 mx-auto max-w-lg bg-slate-200">
      <div className=" flex items-center justify-center mx-auto gap-4">
        <input
          placeholder="Enter your todo..."
          value={message}
          onChange={thingTodo}
          type="text"
          className="rounded-md w-full p-1"
        />
        <button
          onclick={handleAddClick}
          className="px-3 py-2 rounded-md bg-blue-500 text-white text-sm"
        >
          {" "}
          Add
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Thing to do</h3>

        {feedback && (
          <p
            className={`mt-2 text-sm ${
              feedback.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        )}
        <ul>
          {list && list.map((item) => <li key={item.Id}>{item.message}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
