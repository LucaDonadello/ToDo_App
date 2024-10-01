import { BrowserRouter } from "react-router-dom";
import { Header, Title } from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data.result));
  };

  const deleteTask = (id) => {
    fetch(`/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        getTasks();
      });
  };

  const editTask = (id, updatedTask) => {
    fetch(`/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        getTasks();
      });
  };

  const addTask = (task) => {
    fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        getTasks();
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <BrowserRouter>
      <div className="h-full flex flex-col">
        <div>
          <Title />
        </div>
        <div className="flex-grow">
          <Header
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            addTask={addTask}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
