import React from "react";

const Header = ({ tasks, deleteTask, editTask, addTask }) => {
  const handleEdit = (task) => {
    const newTitle = prompt("Enter new title:", task.title);
    const newStatus = prompt(
      "Enter new status (Completed, In Progress, Not Started):",
      task.status
    );

    if (newTitle && newStatus) {
      editTask(task.id, { title: newTitle, status: newStatus });
    }
  };

  const HandleAdd = () => {
    const title = prompt("Enter title:");
    const status = prompt(
      "Enter status (Completed, In Progress, Not Started):"
    );

    if (title && status) {
      addTask({ title, status });
    }
  };

  return (
    <div className="p-4">
      <div className="p-4">
        <div className="flex justify-between">
          <p className="text-4xl font-bold mb-4">Todo List:</p>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={HandleAdd}
          >
            ADD TASK
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border rounded-lg shadow-md bg-white flex justify-between items-center"
          >
            <div className="text-lg">{task.title}</div>
            <div className="flex items-center gap-5">
              <div
                className={`text-sm font-semibold px-2 py-2 rounded ${
                  task.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : task.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {task.status}
              </div>
              <div className="flex gap-1">
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
