import React, { useState } from "react";
import useTodos from "./presenter/useTodos";

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

  const handleDelete = (Id) => {
    delteTodo(Id);
    setFeedback("Todo is deleted.");
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
          onClick={handleAddClick}
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

        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50  ">
            <tr className=" ">
              <th className=" text-center px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ">
                Todo
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Completion
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {list &&
              list.map((item) => (
                <tr key={item.Id} className=" text-center ">
                  <td className="  px-4 py-4 text-sm text-gray-900">
                    {item.message}
                  </td>
                  <td className="    px-4 py-4 text-sm text-gray-900">
                    {item.completed ? "o" : "x"}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    <button
                      onClick={() => handleDelete(item.Id)}
                      className="text-red-400 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Todo;
